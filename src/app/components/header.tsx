"use client";

import Image from "next/image";
import Logo from "../../../public/Logo.png";
import { Bell, ChevronDown, Search, User } from "lucide-react";
import { useState } from "react";
import { signOut } from "next-auth/react";

export default function Header() {
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <div className="bg-gray-800 h-15 border-b px-6 py-1 fixed top-0 left-0 w-full z-50 shadow ">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Image src={Logo} alt="Logo" width={50} height={50} />
          <p className="text-xl font-semibold">Invoice saas</p>
        </div>

        <div className="flex-1 max-w-lg mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search invoices, clients..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg   "
            />
          </div>
        </div>

        <div className="flex items-center space-x-4 cursor-pointer">
          <div>
            <Bell />
          </div>

          <div className="relative cursor-pointer">
            <button
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="flex items-center space-x-3 text-gray-700 hover:text-gray-900 transition-colors cursor-pointer"
            >
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
              <span className="font-medium text-white">username</span>
              <ChevronDown className="w-4 h-4 text-white" />
            </button>

            {showProfileMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
                >
                  Profile
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
                >
                  Settings
                </a>
                <button
                  onClick={() => signOut({ callbackUrl: "/login" })}
                  className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-50"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
