import { createAdminClient } from "@/lib/supabase/server";
import { FileText, Users, HelpCircle } from "lucide-react";
import Link from "next/link";

export default async function AdminDashboard() {
  const supabase = await createAdminClient();

  // Fetch quick stats
  const [blogsCount, contactsCount, faqsCount] = await Promise.all([
    supabase.from("blogs").select("id", { count: "exact", head: true }),
    supabase.from("contacts").select("id", { count: "exact", head: true }),
    supabase.from("faqs").select("id", { count: "exact", head: true }),
  ]);

  const stats = [
    { name: "Total Blogs", value: blogsCount.count || 0, icon: FileText, color: "text-blue-600", bg: "bg-blue-100", href: "/admin/blogs" },
    { name: "Total Contacts", value: contactsCount.count || 0, icon: Users, color: "text-emerald-600", bg: "bg-emerald-100", href: "/admin/contacts" },
    { name: "Total FAQs", value: faqsCount.count || 0, icon: HelpCircle, color: "text-purple-600", bg: "bg-purple-100", href: "/admin/faq" },
  ];

  return (
    <div>
      <h1 className="text-3xl font-display font-bold text-slate-900 mb-8">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {stats.map((stat) => (
          <Link href={stat.href} key={stat.name} className="block group">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm transition-all hover:shadow-md hover:border-primary/30">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-full ${stat.bg} ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="w-6 h-6" />
                </div>
              </div>
              <p className="text-sm font-medium text-slate-500">{stat.name}</p>
              <p className="text-3xl font-display font-bold text-slate-900 mt-1">{stat.value}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
        <h2 className="text-lg font-semibold text-slate-900 mb-4">Quick Actions</h2>
        <div className="flex gap-4">
          <Link
            href="/admin/blogs/new"
            className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors"
          >
            Create New Blog Post
          </Link>
        </div>
      </div>
    </div>
  );
}
