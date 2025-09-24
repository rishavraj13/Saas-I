import React from "react";

const PaymentStatusChart: React.FC = () => {
  const data = [
    { label: "Paid", value: 65, color: "bg-green-500" },
    { label: "Pending", value: 25, color: "bg-yellow-500" },
    { label: "Overdue", value: 10, color: "bg-red-500" },
  ];

  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">
        Payment Status
      </h3>

      <div className="flex items-center justify-center mb-6">
        <div className="relative w-32 h-32">
          <svg
            className="w-full h-full transform -rotate-90"
            viewBox="0 0 120 120"
          >
            <circle
              cx="60"
              cy="60"
              r="50"
              fill="none"
              stroke="#f3f4f6"
              strokeWidth="10"
            />

            {data.map((item, index) => {
              const previousTotal = data
                .slice(0, index)
                .reduce((sum, prev) => sum + prev.value, 0);
              const offset = (previousTotal / total) * 314;
              const strokeDasharray = `${(item.value / total) * 314} 314`;

              return (
                <circle
                  key={index}
                  cx="60"
                  cy="60"
                  r="50"
                  fill="none"
                  stroke={
                    item.color === "bg-green-500"
                      ? "#10b981"
                      : item.color === "bg-yellow-500"
                      ? "#f59e0b"
                      : "#ef4444"
                  }
                  strokeWidth="10"
                  strokeDasharray={strokeDasharray}
                  strokeDashoffset={-offset}
                  className="transition-all duration-300"
                />
              );
            })}
          </svg>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{total}%</div>
              <div className="text-xs text-gray-500">Total</div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {data.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
              <span className="text-sm text-gray-700">{item.label}</span>
            </div>
            <span className="text-sm font-medium text-gray-900">
              {item.value}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentStatusChart;
