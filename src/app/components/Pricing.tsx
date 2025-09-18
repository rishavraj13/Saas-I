"use client";

import { Building2, Check, Users, Zap } from "lucide-react";

export default function Pricing() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
      <div className="text-center">
        <h1 className="text-4xl font-bold sm:text-6xl">
          Simple Pricing for Everyone
        </h1>
        <p className="text-xl text-white max-w-2xl mx-auto m-4">
          Start free. Upgrade when you're ready — no hidden fees.
        </p>
      </div>

      <div className="mt-10">
        <PriceCard />
      </div>
    </div>
  );
}

const PriceCard = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 relative hover:shadow-xl transition-all duration-300">
        <div className="flex items-center mb-4">
          <Users className="h-8 w-8 text-gray-600 mr-3" />
          <h3 className="text-2xl font-bold text-gray-900">Free</h3>
        </div>

        <div className="mb-6">
          <div className="text-4xl font-bold text-gray-900 mb-2">$0</div>
          <p className="text-gray-600 font-medium">/month</p>
          <p className="text-gray-700 mt-2">
            Perfect for freelancers starting out.
          </p>
        </div>

        <ul className="space-y-4 mb-8">
          <li className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">Up to 5 invoices/month</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">Basic branding</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">Dashboard access</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">Email support</span>
          </li>
        </ul>

        <button className="w-full bg-gray-900 text-white py-3 px-6 rounded-xl font-semibold hover:bg-gray-800 transition-colors duration-200 cursor-pointer">
          Start Free
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-xl border-2 p-6 relative hover:shadow-2xl transition-all duration-300 scale-100">
        {/* Most Popular Badge */}
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
            Most Popular
          </span>
        </div>

        <div className="flex items-center mb-4 mt-2">
          <Zap className="h-8 w-8 text-blue-600 mr-3" />
          <h3 className="text-2xl font-bold text-gray-900">Pro</h3>
        </div>

        <div className="mb-6">
          <div className="text-4xl font-bold text-gray-900 mb-2">$12</div>
          <p className="text-gray-600 font-medium">/month</p>
          <p className="text-blue-600 font-medium mt-2">
            Get paid faster with unlimited invoices.
          </p>
        </div>

        <ul className="space-y-4 mb-8">
          <li className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">Unlimited invoices</span>
          </li>
          
          <li className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">Automated reminders</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">Online payments (Stripe/UPI)</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">Analytics dashboard</span>
          </li>
        </ul>

        <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg cursor-pointer">
          Upgrade to Pro
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-lg border border-gray-700 p-8 relative hover:shadow-xl transition-all duration-300 text-white">
        <div className="flex items-center mb-4">
          <Building2 className="h-8 w-8 text-purple-400 mr-3" />
          <h3 className="text-2xl font-bold text-black">Business</h3>
        </div>

        <div className="mb-6">
          <div className="text-4xl font-bold text-black mb-2">$39</div>
          <p className="text-gray-600 font-medium">/month</p>
          <p className="text-purple-400 font-medium mt-2">
            For small teams & growing businesses.
          </p>
        </div>

        <ul className="space-y-4 mb-8">
          <li className="flex items-start">
            <Check className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
            <span className="text-gray-600">Everything in Pro</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
            <span className="text-gray-600">Multi-user/team support</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
            <span className="text-gray-600">Advanced analytics & reports</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
            <span className="text-gray-600">Priority support</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
            <span className="text-gray-600">API access</span>
          </li>
        </ul>

        <button className="w-full bg-gray-900 text-white py-3 px-6 rounded-xl font-semibold hover:bg-gray-800 transition-colors duration-200 cursor-pointer">
          Get Business
        </button>
      </div>
    </div>
  );
};


