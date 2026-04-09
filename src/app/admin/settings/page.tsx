"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";
import { Save, Loader2, Link as LinkIcon, Link2 } from "lucide-react";

interface Setting {
  key: string;
  value: string;
}

const SOCIAL_KEYS = [
  { key: "social_instagram", label: "Instagram", placeholder: "https://instagram.com/..." },
  { key: "social_facebook", label: "Facebook", placeholder: "https://facebook.com/..." },
  { key: "social_linkedin", label: "LinkedIn", placeholder: "https://linkedin.com/in/..." },
  { key: "social_x", label: "X (Twitter)", placeholder: "https://x.com/..." },
  { key: "social_youtube", label: "YouTube", placeholder: "https://youtube.com/..." },
  { key: "social_snapchat", label: "Snapchat", placeholder: "https://snapchat.com/add/..." },
];

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const supabase = createClient();

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    setLoading(true);
    const { data } = await supabase.from("site_settings").select("*");
    if (data) {
      const settingsMap = data.reduce((acc: Record<string, string>, item: Setting) => {
        acc[item.key] = item.value;
        return acc;
      }, {});
      setSettings(settingsMap);
    }
    setLoading(false);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setMessage(null);

    try {
      const updates = SOCIAL_KEYS.map((item) => ({
        key: item.key,
        value: settings[item.key] || "",
      }));

      const { error } = await supabase.from("site_settings").upsert(updates);

      if (error) throw error;
      setMessage({ type: "success", text: "Settings saved successfully!" });
    } catch (error: any) {
      setMessage({ type: "error", text: error.message || "Failed to save settings" });
    } finally {
      setIsSaving(false);
    }
  };

  const handleChange = (key: string, value: string) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="pb-12">
      <div className="mb-8">
        <h1 className="text-3xl font-display font-bold text-slate-900">Settings</h1>
        <p className="text-slate-500 mt-1">Configure your website's social media links and global settings.</p>
      </div>

      <div className="max-w-4xl">
        <form onSubmit={handleSave} className="space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="bg-slate-50 border-b border-slate-200 px-6 py-4 flex items-center gap-2">
              <LinkIcon className="w-5 h-5 text-slate-400" />
              <h2 className="text-sm font-bold text-slate-700 uppercase tracking-wider">Social Media Links</h2>
            </div>
            
            <div className="p-6 space-y-6">
              {SOCIAL_KEYS.map((item) => (
                <div key={item.key} className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Link2 className="w-4 h-4 text-slate-400" />
                    <label className="text-sm font-medium text-slate-700">{item.label}</label>
                  </div>
                  <input
                    type="url"
                    value={settings[item.key] || ""}
                    onChange={(e) => handleChange(item.key, e.target.value)}
                    placeholder={item.placeholder}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-primary text-slate-900 transition-colors"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between">
            {message && (
              <p className={`text-sm font-medium ${message.type === "success" ? "text-green-600" : "text-red-600"}`}>
                {message.text}
              </p>
            )}
            <div className="flex-1" />
            <button
              type="submit"
              disabled={isSaving}
              className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-primary/90 transition-all shadow-sm hover:shadow-md disabled:opacity-50"
            >
              {isSaving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
              Save Settings
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
