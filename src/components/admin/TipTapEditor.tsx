"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Heading from "@tiptap/extension-heading";
import { Bold, Italic, List, ListOrdered, Link as LinkIcon, Heading1, Heading2, Heading3, Heading4, Heading5, RemoveFormatting } from "lucide-react";

interface TipTapEditorProps {
  content: string;
  onChange: (content: string) => void;
}

const MenuBar = ({ editor }: { editor: any }) => {
  if (!editor) return null;

  return (
    <div className="flex flex-wrap items-center gap-1 border-b border-border p-2 bg-slate-50 rounded-t-xl">
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={`p-2 rounded hover:bg-slate-200 transition-colors ${editor.isActive('heading', { level: 1 }) ? 'bg-slate-200 text-primary' : 'text-slate-600'}`}
        title="Heading 1"
      >
        <Heading1 size={18} />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`p-2 rounded hover:bg-slate-200 transition-colors ${editor.isActive('heading', { level: 2 }) ? 'bg-slate-200 text-primary' : 'text-slate-600'}`}
        title="Heading 2"
      >
        <Heading2 size={18} />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={`p-2 rounded hover:bg-slate-200 transition-colors ${editor.isActive('heading', { level: 3 }) ? 'bg-slate-200 text-primary' : 'text-slate-600'}`}
        title="Heading 3"
      >
        <Heading3 size={18} />
      </button>
      <div className="w-px h-6 bg-slate-300 mx-1"></div>
      
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`p-2 rounded hover:bg-slate-200 transition-colors ${editor.isActive('bold') ? 'bg-slate-200 text-primary' : 'text-slate-600'}`}
        title="Bold"
      >
        <Bold size={18} />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`p-2 rounded hover:bg-slate-200 transition-colors ${editor.isActive('italic') ? 'bg-slate-200 text-primary' : 'text-slate-600'}`}
        title="Italic"
      >
        <Italic size={18} />
      </button>
      <div className="w-px h-6 bg-slate-300 mx-1"></div>

      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`p-2 rounded hover:bg-slate-200 transition-colors ${editor.isActive('bulletList') ? 'bg-slate-200 text-primary' : 'text-slate-600'}`}
        title="Bullet List"
      >
        <List size={18} />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`p-2 rounded hover:bg-slate-200 transition-colors ${editor.isActive('orderedList') ? 'bg-slate-200 text-primary' : 'text-slate-600'}`}
        title="Numbered List"
      >
        <ListOrdered size={18} />
      </button>
      <div className="w-px h-6 bg-slate-300 mx-1"></div>

      <button
        type="button"
        onClick={() => {
          const url = window.prompt('Enter link URL:');
          if (url === null) return;
          if (url === '') {
            editor.chain().focus().extendMarkRange('link').unsetLink().run();
            return;
          }
          editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
        }}
        className={`p-2 rounded hover:bg-slate-200 transition-colors ${editor.isActive('link') ? 'bg-slate-200 text-primary' : 'text-slate-600'}`}
        title="Link"
      >
        <LinkIcon size={18} />
      </button>

      <div className="w-px h-6 bg-slate-300 mx-1"></div>
      <button
        type="button"
        onClick={() => editor.chain().focus().clearNodes().unsetAllMarks().run()}
        className="p-2 rounded hover:bg-slate-200 transition-colors text-slate-600"
        title="Clear Formatting"
      >
        <RemoveFormatting size={18} />
      </button>
    </div>
  );
};

export default function TipTapEditor({ content, onChange }: TipTapEditorProps) {
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({
        heading: false, // We customize heading below
      }),
      Heading.configure({
        levels: [1, 2, 3, 4, 5],
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: "text-primary underline",
        },
      }),
    ],
    content: content,
    editorProps: {
      attributes: {
        class: "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl max-w-none focus:outline-none p-4 min-h-[300px] text-slate-800",
      },
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  return (
    <div className="border border-border rounded-xl bg-white overflow-hidden shadow-sm focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
}
