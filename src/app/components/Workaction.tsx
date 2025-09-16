"use client";

import { Button } from "./ui/button";

const Workaction = () => {
  return (
    <section className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold sm:text-6xl ">
            See How It Works in Action
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Here's a peek at your new invoicing superpower — clean, simple, and
            fast.
          </p>
        </div>

        <div className="mt-6">
            <Laptop/>
        </div>
      </div>
    </section>
  );
};


const Laptop = () => {
    return (
      <div className="relative max-w-5xl mx-auto">
        <div className="relative bg-gray-900 rounded-t-3xl p-3 shadow-2xl">
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>

          <div className="bg-white rounded-lg overflow-hidden">
            <div className="p-6">
                <div className = " flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-2xl font-bold text-black">
                            Dashboard
                        </h1>
                        <p className="text-gray-900 items-center">
                            Welcome Back!
                        </p>
                    </div>

                    <div className="px-4 py-4">
                        <Button variant={"secondary"}>Create Invoice</Button>
                    </div>
                </div>

                <div>
                   <Lapcard/>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
}


const Lapcard = () =>{
    return (
      <div className=" grid md:grid-cols-4 gap-6 ">
        <div className="border border-green-200 bg-green-50 text-green-600 font-bold p-4 rounded-2xl">
          <p>Total Revenue</p>
          <p className="text-2xl font-bold text-green-700">₹24,580</p>
          <p className="text-green-600 text-xs">+12% from last month</p>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <p className="text-blue-600 text-sm font-medium">Paid Invoices</p>
          <p className="text-2xl font-bold text-blue-700">47</p>
          <p className="text-blue-600 text-xs">+3 this week</p>
        </div>
        <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
          <p className="text-amber-600 text-sm font-medium">Pending</p>
          <p className="text-2xl font-bold text-amber-700">₹3,240</p>
          <p className="text-amber-600 text-xs">5 invoices</p>
        </div>
        <div className="bg-red-50 p-4 rounded-lg border border-red-200">
          <p className="text-red-600 text-sm font-medium">Overdue</p>
          <p className="text-2xl font-bold text-red-700">₹890</p>
          <p className="text-red-600 text-xs">2 invoices</p>
        </div>
      </div>
    );
}


export default Workaction;
