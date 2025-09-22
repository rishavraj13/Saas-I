import { buttonVariants } from "@/app/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/Logo.png";


export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex justify-center items-center flex-col min-h-svh relative">
      <div className="flex w-full h-full max-w-sm flex-col gap-6">
        <Link
          href="/"
          className={buttonVariants({
            variant: "outline",
            className: "top-6 left-6 absolute ",
          })}
        >
          <ArrowLeft className="size-4" />
          Back
        </Link>
        <div className="flex w-full max-w-sm flex-col gap-3">
          <Link href="/" className="flex items-center justify-center">
            <Image src={Logo} alt="Logo" width={100} height={100} />
            Invoice
            <br /> Payement Tracker
          </Link>
          {children}
        </div>
      </div>
    </div>
  );
}
