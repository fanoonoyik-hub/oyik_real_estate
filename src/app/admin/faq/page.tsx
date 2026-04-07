"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";
import { Plus, Trash2, Edit2, Check, X, Loader2 } from "lucide-react";

export default function AdminFaqPage() {
  const [faqs, setFaqs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  
  // Form state for creating/editing
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [sortOrder, setSortOrder] = useState("0");
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const supabase = createClient();

  const fetchFaqs = async () => {
    setLoading(true);
    const { data } = await supabase.from("faqs").select("*").order("sort_order", { ascending: true });
    if (data) setFaqs(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchFaqs();
  }, []);

  const resetForm = () => {
    setEditingId(null);
    setQuestion("");
    setAnswer("");
    setSortOrder("0");
  };

  const handleEdit = (faq: any) => {
    setEditingId(faq.id);
    setQuestion(faq.question);
    setAnswer(faq.answer);
    setSortOrder(faq.sort_order.toString());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      question,
      answer,
      sort_order: parseInt(sortOrder) || 0,
    };

    if (editingId) {
      await supabase.from("faqs").update(payload).eq("id", editingId);
    } else {
      await supabase.from("faqs").insert([payload]);
    }

    setIsSubmitting(false);
    resetForm();
    fetchFaqs();
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this FAQ?")) return;
    await supabase.from("faqs").delete().eq("id", id);
    fetchFaqs();
  };

  return (
    <div className="pb-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-display font-bold text-slate-900">FAQs</h1>
          <p className="text-slate-500 mt-1">Manage frequently asked questions.</p>
        </div>
        {!editingId && (
          <button
            onClick={() => setEditingId("new")}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors shadow-sm"
          >
            <Plus className="w-4 h-4" />
            Add FAQ
          </button>
        )}
      </div>

      {editingId && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-slate-900">
              {editingId === "new" ? "Add New FAQ" : "Edit FAQ"}
            </h2>
            <button onClick={resetForm} className="text-slate-400 hover:text-slate-600">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Question</label>
              <input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-primary text-slate-900"
                required
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Answer</label>
              <textarea
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                rows={4}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-primary text-slate-900 resize-none"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Sort Order (lower numbers show first)</label>
              <input
                type="number"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="w-full md:w-32 px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-primary text-slate-900"
              />
            </div>

            <div className="flex justify-end gap-3 pt-4">
              <button
                type="button"
                onClick={resetForm}
                className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-semibold hover:bg-slate-200"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center gap-2 px-6 py-2 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary/90"
              >
                {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Check className="w-4 h-4" />}
                Save FAQ
              </button>
            </div>
          </form>
        </div>
      )}

      {loading ? (
        <div className="flex justify-center py-12">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <ul className="divide-y divide-slate-100">
            {faqs.length > 0 ? (
              faqs.map((faq) => (
                <li key={faq.id} className="p-6 hover:bg-slate-50/50 transition-colors flex gap-6">
                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-slate-900 mb-2">{faq.question}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{faq.answer}</p>
                    <div className="mt-4 text-xs font-mono text-slate-400 uppercase tracking-widest">
                      Order: {faq.sort_order}
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 shrink-0">
                    <button
                      onClick={() => handleEdit(faq)}
                      className="p-2 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors"
                      title="Edit FAQ"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(faq.id)}
                      className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      title="Delete FAQ"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </li>
              ))
            ) : (
              <li className="p-12 text-center text-slate-500">
                No FAQs found. Create one to get started.
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
