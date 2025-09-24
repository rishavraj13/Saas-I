// app/dashboard/layout.tsx

import React from "react";
import Sidebar from "../../app/components/sidebar";
import Header from "../components/header";
import { SessionProvider } from "next-auth/react";


export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    // const session = await requireUser()
  return (
      <div>
        <Header/>
        <Sidebar/>
      <main>{children}</main>
    </div>
  );
}


