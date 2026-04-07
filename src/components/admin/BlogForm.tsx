"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import TipTapEditor from "./TipTapEditor";
import { ArrowLeft, Save, Loader2, Trash2 } from "lucide-react";
import Link from "next/link";

interface BlogFormProps {
  initialData?: any;
  isEdit?: boolean;
}

export default function BlogForm({ initialData, isEdit }: BlogFormProps) {
  const router = useRouter();
  const supabase = createClient();
  const [loading, setLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    title: initialData?.title || "",
    slug: initialData?.slug || "",
    description: initialData?.description || "",
    category: initialData?.category || "AI Strategy",
    image: initialData?.image || "/media/blog/featured.png",
    author: initialData?.author || "Oyik AI Lab",
    read_time: initialData?.read_time || "5 min read",
    content: initialData?.content || "",
    is_featured: initialData?.is_featured || false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Auto-generate slug from title if it's new and user hasn't manually edited slug
    if (name === "title" && !isEdit) {
      setFormData((prev) => ({
        ...prev,
        slug: value
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)+/g, ""),
      }));
    }
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, is_featured: e.target.checked }));
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    setError(null);

    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random().toString(36).substring(2, 15)}-${Date.now()}.${fileExt}`;
    const filePath = `${fileName}`;

    const { error: uploadError, data } = await supabase.storage
      .from('blog-images')
      .upload(filePath, file);

    if (uploadError) {
      setError(`Upload failed: ${uploadError.message}. Make sure you have a public 'blog-images' bucket created.`);
      setIsUploading(false);
      return;
    }

    const { data: publicUrlData } = supabase.storage
      .from('blog-images')
      .getPublicUrl(filePath);

    setFormData((prev) => ({ ...prev, image: publicUrlData.publicUrl }));
    setIsUploading(false);
  };

  const handleEditorChange = (html: string) => {
    setFormData((prev) => ({ ...prev, content: html }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // If a blog is featured, we need to un-feature others in Supabase (simplified logic for now)
    
    let res;
    if (isEdit) {
      res = await supabase.from("blogs").update({
        ...formData,
        updated_at: new Date().toISOString()
      }).eq("id", initialData.id);
    } else {
      res = await supabase.from("blogs").insert([formData]);
    }

    if (res.error) {
      setError(res.error.message);
      setLoading(false);
    } else {
      router.push("/admin/blogs");
      router.refresh();
    }
  };

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this blog post? This action cannot be undone.")) return;
    setIsDeleting(true);
    const { error } = await supabase.from("blogs").delete().eq("id", initialData.id);
    if (error) {
      setError(error.message);
      setIsDeleting(false);
    } else {
      router.push("/admin/blogs");
      router.refresh();
    }
  };

  return (
    <div className="max-w-4xl mx-auto pb-12">
      <div className="flex items-center justify-between mb-8">
        <Link
          href="/admin/blogs"
          className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blogs
        </Link>
        <div className="flex items-center gap-3">
          {isEdit && (
            <button
              type="button"
              onClick={handleDelete}
              disabled={isDeleting}
              className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-lg text-sm font-semibold hover:bg-red-100 transition-colors"
            >
              <Trash2 className="w-4 h-4" />
              {isDeleting ? "Deleting..." : "Delete"}
            </button>
          )}
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="flex items-center gap-2 px-6 py-2 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors shadow-sm"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
            {isEdit ? "Update Blog" : "Publish Blog"}
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
        <h1 className="text-2xl font-display font-bold text-slate-900 mb-6">
          {isEdit ? "Edit Blog Post" : "Create New Blog Post"}
        </h1>

        {error && (
          <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium text-slate-700">Post Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-primary transition-colors text-slate-900"
                placeholder="The Future of Real Estate AI..."
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">URL Slug</label>
              <input
                type="text"
                name="slug"
                value={formData.slug}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-primary transition-colors text-slate-900 font-mono text-sm"
                placeholder="the-future-of-real-estate-ai"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-primary transition-colors text-slate-900 appearance-none"
              >
                <option value="AI Strategy">AI Strategy</option>
                <option value="Automation">Automation</option>
                <option value="Case Studies">Case Studies</option>
                <option value="Product Updates">Product Updates</option>
              </select>
            </div>

            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium text-slate-700">Short Description (for cards and SEO)</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={2}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-primary transition-colors text-slate-900 resize-none"
                placeholder="A brief summary of what this article covers..."
                required
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium text-slate-700">Full Content (with TipTap)</label>
              <TipTapEditor content={formData.content} onChange={handleEditorChange} />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Author Name</label>
              <input
                type="text"
                name="author"
                value={formData.author}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-primary transition-colors text-slate-900"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Read Time</label>
              <input
                type="text"
                name="read_time"
                value={formData.read_time}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-primary transition-colors text-slate-900"
                placeholder="5 min read"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Cover Image Upload / URL</label>
              <div className="flex flex-col gap-2">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={isUploading}
                  className="w-full file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20 bg-slate-50 border border-slate-200 rounded-xl p-2"
                />
                <input
                  type="text"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-primary transition-colors text-slate-900"
                  placeholder="Or paste an image URL..."
                />
                {isUploading && <span className="text-sm text-slate-500 animate-pulse">Uploading...</span>}
              </div>
            </div>
            
            <div className="space-y-2 md:col-span-2 p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-3">
              <input
                type="checkbox"
                id="is_featured"
                checked={formData.is_featured}
                onChange={handleCheckbox}
                className="w-5 h-5 rounded border-slate-300 text-primary focus:ring-primary"
              />
              <label htmlFor="is_featured" className="text-sm font-medium text-slate-700 cursor-pointer">
                Mark as Featured Post (shows large at the top of the blog index)
              </label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
