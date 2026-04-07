"use client";

import DOMPurify from "dompurify";
import { useEffect, useState } from "react";

export default function SafeHtml({ html, className = "" }: { html: string; className?: string }) {
  const [sanitizedHtml, setSanitizedHtml] = useState("");

  useEffect(() => {
    // Only run DOMPurify on the client side
    setSanitizedHtml(DOMPurify.sanitize(html));
  }, [html]);

  if (!sanitizedHtml) {
    return <div dangerouslySetInnerHTML={{ __html: html }} className={className} />; // Fallback for initial server render (hydration mismatch avoided via layout) or basic html
  }

  return <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} className={className} />;
}
