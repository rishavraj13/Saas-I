"use client";

import { Home, SidebarIcon, SidebarOpenIcon, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Logo from "../../../public/Logo.png";
import Sidebaritems from "./sidebaritems";

export default function Sidebar() {
  const [Open, setOpen] = useState(false);

  return (
    <>
      <div
        className={`fixed top-16 left-0 h-[calc(100vh-4rem)] w-60 bg-black border-r shadow transition-transform duration-300 z-40
  ${Open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-4 flex justify-between items-center">
          <div
            className="mx-auto cursor-pointer"
            onClick={() => (window.location.href = "/dashboard")}
          >
            <Image src={Logo} alt="Logo" width={80} height={50} />
          </div>

          <button
            onClick={() => setOpen(false)}
            className="transition hover:opacity-70 cursor-pointer"
          >
            <X />
          </button>
        </div>

        <div className="p-6">
          <Sidebaritems />
        </div>
      </div>

      {!Open && (
        <div className=" fixed top-16 left-0 z-40">
          <div className="p-2">
            <button
              onClick={() => setOpen(true)}
              className="p-2 rounded cursor-pointer transition"
            >
              <SidebarOpenIcon />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
