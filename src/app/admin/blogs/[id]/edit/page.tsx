import BlogForm from "@/components/admin/BlogForm";
import { createAdminClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";

export default async function EditBlogPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const supabase = await createAdminClient();
  
  const { data: blog, error } = await supabase
    .from("blogs")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !blog) {
    notFound();
  }

  return <BlogForm initialData={blog} isEdit={true} />;
}
