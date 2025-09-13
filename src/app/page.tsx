"use client";

import Image from "next/image";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { Themetoggle } from "./components/ui/themeToggle";
import building from "../../public/building.jpg";
import { Button } from "@/components/ui/button";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="relative">
      <Section1 />
      <Section2 />
    </main>
  );
}

const Section1 = () => {
  return (
    <section className="sticky top-0 h-screen z-0 overflow-hidden">
      <div className="flex flex-row items-start justify-between px-6 lg:px-24 h-full">
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <Themetoggle />

          <h1 className="text-4xl lg:text-7xl font-extrabold mb-6 opacity-50">
            The end of ‘I forgot to pay you’
          </h1>

          <p className="text-2xl lg:text-4xl font-extrabold mb-6">
            Simple, instantly connects to the frustration of unpaid invoices
          </p>

          <p className="text-base lg:text-lg text-gray-700 mb-10">
            No more awkward reminders or overdue chaos. Just simple invoicing,
            smart tracking, and faster payments in one clean dashboard.
          </p>

          <div className="flex items-center justify-center">
            <Button variant="outline">Get Started</Button>
          </div>
        </div>

        {/* Right Image */}
        <div className=" lg:block lg:w-1/2 ml-[50px] flex items-center justify-center">
          <Image
            src={building}
            alt="Building"
            width={400}
            height={300}
            className="object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

const Section2 = () => {
  return (
    <section className="relative min-h-[200vh] z-10 bg-gray-100">
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="text-center px-6">
          <h2 className="text-4xl font-bold mb-10">Developer Photo</h2>

          <div className="mx-auto max-w-3xl">
            <Image
              src={building}
              alt="Developer"
              width={100}
              height={100}
              className="object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
