import { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About Us | oyik.realestate.ai",
  description:
    "Meet Oyik Real Estate.AI, the AI automation division of Oyik.ai designed for estate agencies to automate enquiries, qualify leads, and book viewings.",
};

export default function AboutPage() {
  return <AboutPageClient />;
}
