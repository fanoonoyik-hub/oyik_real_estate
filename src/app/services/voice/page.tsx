import { Metadata } from "next";

import VoiceServiceClient from "./VoiceServiceClient";

export const metadata: Metadata = {
  title: "AI Voice Assistant for Real Estate | oyik.realestate.ai",
  description:
    "Property moves fast — and so should you. Our ai voice assistant captures every enquiry, qualifies prospects, and books viewings 24/7 without adding headcount. Designed exclusively for real estate teams, this intelligent ai voice agent turns conversations into confirmed appointments.",
};

export default function VoiceServicePage() {
  return <VoiceServiceClient />;
}
