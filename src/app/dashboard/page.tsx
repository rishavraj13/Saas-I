import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation";
import KPICard from "../components/ui/Kpicards";
import { AlertCircle, CheckCircle,   FileText } from "lucide-react";
import RevenueChart from "../components/Revenuechats";
import PaymentStatusChart from "../components/Paymentstatus";
import ActivityFeed from "../components/ActivityFeed";
import QuickActions from "../components/QucikAction";

export default async function dashboard() {
  const session = await getServerSession(authOptions);

  return (
    <div className="bg-black min-h-screen w-full">
      <div className=" max-w-7xl mx-auto pt-20 px-6">
        {" "}
        {/* added pt-20 */}
        <div className="p-6 space-y-6">
          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <KPICard 
              title="Total Revenue"
              value="$67,340"
              change="+12%"
              changeType="positive"
              iconColor="text-green-600"
            />
            <KPICard
              title="Pending Payments"
              value="$12,450"
              change="-8%"
              changeType="positive"
              icon={FileText}
              iconColor="text-yellow-600"
            />
            <KPICard
              title="Overdue Invoices"
              value="3"
              change="+2"
              changeType="negative"
              icon={AlertCircle}
              iconColor="text-red-600"
            />
            <KPICard
              title="Paid Invoices"
              value="24"
              change="+6"
              changeType="positive"
              icon={CheckCircle}
              iconColor="text-blue-600"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <RevenueChart />
            <PaymentStatusChart />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ActivityFeed />
            <QuickActions />
          </div>
        </div>
      </div>
    </div>
  );
}
