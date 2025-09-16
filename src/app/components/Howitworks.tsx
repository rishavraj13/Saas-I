"use client";

import { Bell, Edit3, Send, TrendingUp } from "lucide-react";
import { findValueType } from "motion/react";

interface StepProps {
  stepNumber: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  isLast?: boolean;
}

const Step: React.FC<StepProps> = ({
  stepNumber,
  icon,
  title,
  description,
  imageSrc,
  imageAlt,
  isLast = false,
}) => {
  return (
    <div className="flex flex-col items-center relative">
      <div className="group bg-neutral-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-10 w-80 max-w-sm transform hover:-translate-y-1 mt-10 mb-4 ml-2 mr-2">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full text-xl font-bold mb-6 group-hover:scale-110 transition-transform duration-300">
          {stepNumber}
        </div>
        <div className="flex items-center justify-center w-12 h-12 bg-blue-50 rounded-lg mb-4 text-blue-600 group-hover:bg-blue-100 transition-colors duration-300">
          {icon}
        </div>
        <div className="text-xl font-bold text-white mb-3">{title}</div>

        <div className="text-white leading-relaxed mb-6">{description}</div>

        <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 aspect-[4/3] group-hover:scale-105 transition-transform duration-300">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};
export const HowItWorks: React.FC = () => {
  const steps = [
    {
      stepNumber: "01",
      icon: <Edit3 size={24} />,
      title: "Create Your Invoice",
      description:
        "Fill in client details, add line items, and upload your logo in seconds.",
      imageSrc:
        "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800",
      imageAlt: "Invoice creation interface",
    },

    ,
    {
      stepNumber: "02",
      icon: <Send size={24} />,
      title: "Send Instantly",
      description:
        "Email invoices directly or share a secure payment link — no attachments needed.",
      imageSrc:
        "https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=800",
      imageAlt: "Send invoice interface",
    },
    {
      stepNumber: "03",
      icon: <TrendingUp size={24} />,
      title: "Get Paid Faster",
      description:
        "Clients pay via UPI, cards, or bank transfer — you see live status in your dashboard.",
      imageSrc:
        "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      imageAlt: "Payment dashboard with status",
    },
    {
      stepNumber: "04",
      icon: <Bell size={24} />,
      title: "No More Chasing",
      description:
        "Smart reminders follow up automatically, so you don't have to.",
      imageSrc:
        "https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg?auto=compress&cs=tinysrgb&w=800",
      imageAlt: "Automated reminder system",
    },
  ];
  return (
    <section>
      <div className="justify-center items-center mx-auto flex w-full flex-col text-center ">
        <h2 className="font-semibold text-7xl mt-15">How it works ?</h2>
        <p className="mt-2 text-xl">
          Get from invoice creation to payment in four simple steps. No
          complexity, no chasing clients — just professional invoicing that
          works.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-2 relative">
        {steps.map((step, index) => (
          <Step
            key={index}
            stepNumber={step.stepNumber}
            icon={step.icon}
            title={step.title}
            description={step.description}
            imageSrc={step.imageSrc}
            imageAlt={step.imageAlt}
            isLast={index === steps.length - 1}
          />
        ))}
      </div>
    </section>
  );
};


export default HowItWorks;