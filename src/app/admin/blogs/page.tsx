import { createAdminClient } from "@/lib/supabase/server";
import Link from "next/link";
import { Plus, Edit2, Trash2 } from "lucide-react";

export default async function AdminBlogsPage() {
  const supabase = await createAdminClient();
  const { data: blogs, error } = await supabase
    .from("blogs")
    .select("id, title, category, created_at")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching blogs:", error);
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-display font-bold text-slate-900">Blogs</h1>
          <p className="text-slate-500 mt-1">Manage your journal articles.</p>
        </div>
        <Link
          href="/admin/blogs/new"
          className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors shadow-sm"
        >
          <Plus className="w-4 h-4" />
          Create Blog
        </Link>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Title</th>
              <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider hidden md:table-cell">Category</th>
              <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider hidden sm:table-cell">Date</th>
              <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {blogs && blogs.length > 0 ? (
              blogs.map((blog) => (
                <tr key={blog.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <p className="text-sm font-medium text-slate-900 line-clamp-1">{blog.title}</p>
                  </td>
                  <td className="px-6 py-4 hidden md:table-cell">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                      {blog.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500 hidden sm:table-cell">{blog.date || new Date(blog.created_at).toLocaleDateString()}</td>
                  <td className="px-6 py-4 text-right space-x-2 whitespace-nowrap">
                    <Link
                      href={`/admin/blogs/${blog.id}/edit`}
                      className="inline-flex items-center justify-center p-2 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors"
                    >
                      <Edit2 className="w-4 h-4" />
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="px-6 py-12 text-center text-slate-500">
                  No blogs found. Get started by creating your first post.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
