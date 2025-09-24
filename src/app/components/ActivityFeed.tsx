import React from "react";
import { CheckCircle, Send, Plus, AlertCircle } from "lucide-react";

const ActivityFeed: React.FC = () => {
  const activities = [
    {
      id: 1,
      type: "payment",
      message: "Invoice #103 paid by Acme Corp.",
      amount: "$2,400",
      time: "2 hours ago",
      icon: CheckCircle,
      iconColor: "text-green-600",
    },
    {
      id: 2,
      type: "reminder",
      message: "Reminder sent to Tech Solutions Ltd.",
      amount: "$1,850",
      time: "4 hours ago",
      icon: Send,
      iconColor: "text-blue-600",
    },
    {
      id: 3,
      type: "invoice",
      message: "New invoice created for StartupXYZ",
      amount: "$3,200",
      time: "6 hours ago",
      icon: Plus,
      iconColor: "text-purple-600",
    },
    {
      id: 4,
      type: "overdue",
      message: "Invoice #098 is now overdue",
      amount: "$950",
      time: "1 day ago",
      icon: AlertCircle,
      iconColor: "text-red-600",
    },
    {
      id: 5,
      type: "payment",
      message: "Invoice #102 paid by Digital Agency",
      amount: "$5,500",
      time: "2 days ago",
      icon: CheckCircle,
      iconColor: "text-green-600",
    },
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
        <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {activities.map((activity) => {
          const Icon = activity.icon;
          return (
            <div
              key={activity.id}
              className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className={`flex-shrink-0 ${activity.iconColor}`}>
                <Icon className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-900">{activity.message}</p>
                <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
              </div>
              <div className="flex-shrink-0">
                <span className="text-sm font-medium text-gray-900">
                  {activity.amount}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ActivityFeed;
