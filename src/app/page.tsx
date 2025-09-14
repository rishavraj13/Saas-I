"use client";

import Image from "next/image";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { Themetoggle } from "./components/ui/themeToggle";
import building from "../../public/building.jpg";
import { Button } from "@/components/ui/button";
import GlareHover from "@/components/ui/GlareHover";
import mine from "../../public/mine.jpg";
import { CardHoverEffectDemo } from "@/components/CardHover";
import ScrollFloat from "@/components/ui/ScrollFloat";
import LiquidEther from "@/components/ui/LiquidEther";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({});

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
      <Section3 />
    </main>
  );
}

const Section1 = () => {
  return (
    <section className="sticky top-0 h-screen z-0 overflow-hidden bg-black">
      <div className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-24 h-full space-y-10 lg:space-y-0">
        {/* Left Content */}
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

          <div className="flex items-center justify-center lg:justify-start">
            <Button variant="outline">Get Started</Button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 flex items-center justify-center ml-0 lg:ml-[50px]">
          <Image
            src={building}
            alt="Building"
            width={400}
            height={300}
            className="object-cover rounded-xl w-full max-w-[400px] h-auto"
          />
        </div>
      </div>
    </section>
  );
};

const Section2 = () => {
  return (
    <section className="relative min-h-[200vh] z-10  text-white py-10 bg-neutral-950">
      <div className="sticky top-0 h-screen flex items-center justify-center px-4">
        {/* GlareHover Card */}
        <div style={{ height: "auto" }}>
          <GlareHover
            glareColor="#ffffff"
            glareOpacity={0.3}
            glareAngle={-30}
            glareSize={300}
            transitionDuration={800}
            playOnce={false}
          >
            <div className="rounded-xl shadow-lg p-6 md:p-10 flex flex-col md:flex-row gap-8 items-center md:items-start max-w-4xl w-full">
              {/* Left: Image */}
              <div className="flex-shrink-0">
                <Image
                  src={mine}
                  alt="developer"
                  width={250}
                  height={250}
                  className="object-cover rounded-xl"
                />

                <div className="mt-5">
                  <h1 className=" text-center text-xl font-extrabold ">
                    RISHAV RAJ
                  </h1>
                </div>
              </div>

              {/* Right: Text Content */}
              <div className="flex flex-col space-y-4 text-center md:text-left">
                <h1 className="font-extrabold text-2xl md:text-3xl">
                  Developer
                </h1>
                <p className="text-sm md:text-base leading-relaxed text-gray-300 font-bold ">
                  I’m currently a computer science student, obsessed with
                  learning by building. This SaaS is my way of solving a problem
                  I’ve seen students, freelancers, and small businesses face
                  every day: the struggle to get paid on time. If this saves you
                  even a few hours every month, I’ve done my job.
                </p>
              </div>
            </div>
          </GlareHover>
        </div>
      </div>
    </section>
  );
};

const Section3 = () => {
  return (
    <section className="relative min-h-screen z-10 text-white  bg-neutral-950">
      <div className="font-extrabold ml-40">
        <ScrollFloat
          animationDuration={2}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.05}
        >
          Features
        </ScrollFloat>
      </div>
      <div>
        <CardHoverEffectDemo />
      </div>
    </section>
  );
};
