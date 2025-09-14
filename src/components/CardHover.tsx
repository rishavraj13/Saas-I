import { HoverEffect } from "./ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-6xl my-auto px-15 mx-auto">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Auto Reminders & Follow-ups Demo",
    description: "Automated follow-ups that actually work and get paid",
    link: "https://stripe.com",
  },
  {
    title: "Instant Payments Demo",
    description:
      "Accept UPI, cards, and online payments so clients pay faster.",
    link: "https://netflix.com",
  },
  {
    title: "Auto Reminders & Follow-ups Demo",
    description: "Automated follow-ups that actually work and get paid",
    link: "https://google.com",
  },
  {
    title: "Analytics & Reports Demo",
    description: "Monthly revenue, overdue alerts, and actionable insights",
    link: "https://meta.com",
  },
  {
    title: "Client Directory Demo",
    description:"All client info and billing history organized in one place.",
    link: "https://amazon.com",
  },
  {
    title: "Recurring Billing Demo",
    description:"Set & forget recurring invoices and save admin time.",
    link: "https://microsoft.com",
  },
];
