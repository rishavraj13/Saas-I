"use client";

import React from "react";
import Link from "next/link"; // ✅ correct import
import { Plus, UserPlus, Send, Download } from "lucide-react";

const QuickActions: React.FC = () => {
  const actions = [
    {
      id: "create-invoice",
      label: "Create Invoice",
      icon: Plus,
      color: "bg-blue-600 hover:bg-blue-700",
      href: "/dashboard/Invoice",
    },
    {
      id: "add-client",
      label: "Add Client",
      icon: UserPlus,
      color: "bg-green-600 hover:bg-green-700",
    },
    {
      id: "send-reminder",
      label: "Send Reminder",
      icon: Send,
      color: "bg-yellow-600 hover:bg-yellow-700",
    },
    {
      id: "export-report",
      label: "Export Report",
      icon: Download,
      color: "bg-purple-600 hover:bg-purple-700",
    },
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">
        Quick Actions
      </h3>

      <div className="grid grid-cols-2 gap-4">
        {actions.map((action) => {
          const Icon = action.icon;

          return action.href ? (
            <Link
              key={action.id}
              href={action.href}
              className={`flex items-center justify-center space-x-2 px-4 py-3 rounded-lg text-white font-medium transition-colors cursor-pointer ${action.color}`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-sm">{action.label}</span>
            </Link>
          ) : (
            <button
              key={action.id}
              className={`flex items-center justify-center space-x-2 px-4 py-3 rounded-lg text-white font-medium transition-colors ${action.color}`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-sm">{action.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuickActions;
