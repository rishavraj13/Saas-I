"use client"
import { Button } from "@/app/components/ui/button";
import {  MoreHorizontalIcon, Plus } from "lucide-react";
import { useRouter } from "next/navigation";

export default function InvoiceList() {
    const router = useRouter();
  
  return (
    <div className="p-30">
      <div className="bg-white rounded-xl pl-10 pr-10 p-2">
        <div className="justify-between flex items-center">
          <div>
            <h1 className="text-black font-bold text-2xl">Invoices</h1>
            <p className="text-neutral-700 text-sm">
              Manage your Invoices right here
            </p>
          </div>

          <div>
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg flex items-center gap-2 cursor-pointer"
              onClick={() => router.push("/dashboard/Invoice")}
            >
              <Plus className="w-4 h-4 " />
              Create Invoice
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-6 mt-10">
          <div>
            <h1 className="text-neutral-700">Invoices Id</h1>
          </div>

          <div>
            <h1 className="text-neutral-700">Customer</h1>
          </div>

          <div>
            <h1 className="text-neutral-700">Amount</h1>
          </div>

          <div>
            <h1 className="text-neutral-700">Status</h1>
          </div>

          <div>
            <h1 className="text-neutral-700">Date</h1>
          </div>

          <div>
            <h1 className="text-neutral-700">Actions</h1>
          </div>
        </div>

        <hr className="border-t w-full border-gray-300 my-4" />

        <div className="grid grid-cols-6 mt-10 mb-5 text-black">
          <div>#1</div>
          <div>Rishi</div>
          <div>$500</div>
          <div>Paid</div>
          <div>22/10/25</div>
          <div className="pl-5">
            <MoreHorizontalIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
