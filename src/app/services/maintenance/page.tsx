import { Metadata } from "next";

import MaintenanceServiceClient from "./MaintenanceServiceClient";

export const metadata: Metadata = {
  title: "Maintenance Intake Automation for Estate & Letting Agents | oyik.realestate.ai",
  description:
    "Maintenance intake automation for estate and letting agents that captures tenant repair requests, routes urgent cases, and keeps CRM records organised.",
};

export default function MaintenanceServicePage() {
  return <MaintenanceServiceClient />;
}
