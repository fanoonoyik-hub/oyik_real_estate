import { Metadata } from "next";

import WorkflowAutomationClient from "./WorkflowAutomationClient";

export const metadata: Metadata = {
  title: "Real Estate Workflow Automation | oyik.realestate.ai",
  description:
    "We build a complete automated workflow solution for estate agents in the UK - connecting your CRM, calendar, messaging platforms, and lead sources into intelligent systems that run 24/7.",
};

export default function WorkflowAutomationPage() {
  return <WorkflowAutomationClient />;
}
