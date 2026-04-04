import { Metadata } from "next";

import AiMarketingServiceClient from "./AiMarketingServiceClient";

export const metadata: Metadata = {
  title: "AI Marketing Automation for Real Estate | oyik.realestate.ai",
  description:
    "Automate property videos, social media content, and listing promotion with AI marketing automation for estate agents. Stay visible every week without manual effort.",
};

export default function MarketingServicePage() {
  return <AiMarketingServiceClient />;
}
