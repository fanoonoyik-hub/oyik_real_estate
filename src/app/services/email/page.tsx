import { Metadata } from "next";

import EmailServiceClient from "./EmailServiceClient";

export const metadata: Metadata = {
  title: "Email Automation for Estate Agents | oyik.realestate.ai",
  description:
    "AI powered email automation for estate agents that detects intent, drafts replies, routes complex cases, and keeps enquiries moving.",
};

export default function EmailServicePage() {
  return <EmailServiceClient />;
}
