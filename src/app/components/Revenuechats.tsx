import React from "react";

const RevenueChart: React.FC = () => {
  // Mock data for the chart
  const data = [
    { month: "Jan", revenue: 45000 },
    { month: "Feb", revenue: 52000 },
    { month: "Mar", revenue: 48000 },
    { month: "Apr", revenue: 61000 },
    { month: "May", revenue: 58000 },
    { month: "Jun", revenue: 67000 },
  ];

  const maxRevenue = Math.max(...data.map((d) => d.revenue));

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">
        Revenue Trend
      </h3>

      <div className="h-64">
        <div className="flex items-end justify-between h-full space-x-2">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-2 flex-1"
            >
              <div className="w-full flex flex-col justify-end h-48">
                <div
                  className="bg-gradient-to-t from-blue-600 to-blue-400 rounded-t hover:from-blue-700 hover:to-blue-500 transition-colors cursor-pointer relative group"
                  style={{ height: `${(item.revenue / maxRevenue) * 100}%` }}
                >
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    ${item.revenue.toLocaleString()}
                  </div>
                </div>
              </div>
              <span className="text-sm text-gray-600">{item.month}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RevenueChart;
