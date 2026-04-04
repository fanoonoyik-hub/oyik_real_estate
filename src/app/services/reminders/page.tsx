import { Metadata } from "next";

import ReminderServiceClient from "./ReminderServiceClient";

export const metadata: Metadata = {
  title: "Smart AI Reminder Assistant | oyik.realestate.ai",
  description:
    "Automated reminders for viewings, rent, deposits, and documents-sent through SMS, email, WhatsApp, or voice calls.",
};

export default function RemindersServicePage() {
  return <ReminderServiceClient />;
}
