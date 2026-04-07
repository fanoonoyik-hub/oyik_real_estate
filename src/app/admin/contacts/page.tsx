import { createAdminClient } from "@/lib/supabase/server";
import { Trash2 } from "lucide-react";
import { revalidatePath } from "next/cache";

export default async function AdminContactsPage() {
  const supabase = await createAdminClient();
  const { data: contacts } = await supabase
    .from("contacts")
    .select("*")
    .order("created_at", { ascending: false });

  const deleteContact = async (formData: FormData) => {
    "use server";
    const id = formData.get("id") as string;
    if (!id) return;
    
    const supabase = await createAdminClient();
    await supabase.from("contacts").delete().eq("id", id);
    revalidatePath("/admin/contacts");
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-display font-bold text-slate-900">Contacts</h1>
          <p className="text-slate-500 mt-1">View form submissions from the website.</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Name & Company</th>
              <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider hidden sm:table-cell">Email</th>
              <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider hidden md:table-cell w-1/2">Message</th>
              <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {contacts && contacts.length > 0 ? (
              contacts.map((contact) => (
                <tr key={contact.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <p className="text-sm font-medium text-slate-900">{contact.first_name} {contact.last_name}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{contact.company}</p>
                    <p className="text-xs text-slate-500 sm:hidden mt-1">{contact.email}</p>
                  </td>
                  <td className="px-6 py-4 hidden sm:table-cell">
                    <a href={`mailto:${contact.email}`} className="text-sm text-primary hover:underline">
                      {contact.email}
                    </a>
                  </td>
                  <td className="px-6 py-4 hidden md:table-cell">
                    <p className="text-sm text-slate-600 line-clamp-2">{contact.message}</p>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500">
                    <span className="whitespace-nowrap">{new Date(contact.created_at).toLocaleDateString()}</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <form action={deleteContact}>
                      <input type="hidden" name="id" value={contact.id} />
                      <button
                        type="submit"
                        className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        title="Delete Entry"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </form>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="px-6 py-12 text-center text-slate-500">
                  No contact form submissions yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
