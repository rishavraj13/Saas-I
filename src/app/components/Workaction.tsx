"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
          <Laptop />
        </div>

        <div>
          <Carousel />
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
            <div className=" flex items-center justify-between mb-8">
              <div>
                <h1 className="text-2xl font-bold text-black">Dashboard</h1>
                <p className="text-gray-900 items-center">Welcome Back!</p>
              </div>

              <div className="px-4 py-4">
                <Button variant={"secondary"}>Create Invoice</Button>
              </div>
            </div>

            <div>
              <Lapcard />
            </div>

            <div>
              <Customerlist />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Lapcard = () => {
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
};

const Customerlist = () => {
  return (
    <div className="bg-gray-100 rounded-lg p-6 mt-8">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Recent Invoices
      </h3>

      <div className="space-y-3">
        {[
          {
            client: "xyz comp",
            amount: "$2,500",
            status: "Paid",
            date: "Dec 15",
          },
          {
            client: "Tech Solutions",
            amount: "$1,800",
            status: "Pending",
            date: "Dec 12",
          },
          {
            client: "Creative Agency",
            amount: "$3,200",
            status: "Paid",
            date: "Dec 10",
          },
        ].map((invoice, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-white p-3 rounded-lg"
          >
            <div>
              <p className="font-medium text-gray-900">{invoice.client}</p>
              <p className="text-sm text-gray-600">{invoice.date}</p>
            </div>
            <div className="text-right">
              <p className="font-semibold text-gray-900">{invoice.amount}</p>
              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  invoice.status === "Paid"
                    ? "bg-green-100 text-green-700"
                    : "bg-amber-100 text-amber-700"
                }`}
              >
                {invoice.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Carousel = () => {
  const secondaryScreens = [
    {
      title: "Invoice PDF Preview",
      benefit: "Create invoices in 15 seconds",
      image: "invoice-pdf",
    },
    {
      title: "Send Invoice Modal",
      benefit: "Clients pay online — no friction",
      image: "send-modal",
    },
    {
      title: "Payment Flow",
      benefit: "Track revenue & overdue payments",
      image: "payment-flow",
    },
    {
      title: "Analytics Dashboard",
      benefit: "Automated reminders keep cash flowing",
      image: "analytics",
    },
  ];

  const [currslide, setcurrslide] = useState(0);
  const [isAutoplay, setAutoplay] = useState(true);

  const nextSlide = () => {
    setAutoplay(false);
    setcurrslide((prev) => (prev + 1) % secondaryScreens.length);
  };

  const prevSlide = () => {
    setAutoplay(false);
    setcurrslide(
      (prev) => (prev - 1 + secondaryScreens.length) % secondaryScreens.length
    );
  };

  useEffect(() => {
    if (!isAutoplay) return;

    const interval = setInterval(() => {
      setcurrslide((prev) => (prev + 1) % secondaryScreens.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoplay, secondaryScreens.length]);

  const currentSlideData = secondaryScreens[currslide];

  return (
    <div className=" mt-10">
      <div className="relative mx-auto min-w-2xl">
        <div className="rounded-2xl overflow-hidden">
          <div className="bg-gray-100 shadow-xl rounded-xl p-8 mx-2">
            <Carouselcard
              slide={currentSlideData}
              nextSlide={nextSlide}
              prevSlide={prevSlide}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

type CarouselCardProps = {
  slide: {
    title: string;
    benefit: string;
    image: string;
  };
  nextSlide: () => void;
  prevSlide: () => void;
};

const Carouselcard = ({ slide, nextSlide, prevSlide }: CarouselCardProps) => {
  return (
    <div className="text-black p-8">
      <div className=" font-semibold text-2xl">{slide?.title}</div>
      <p>{slide?.benefit}</p>

      <div className="border-black pb-4 mb-4 "></div>

      <div className="mb-6">
        <p className="font-medium">Bill To:</p>
        <p className="text-gray-700">Acme Corp</p>
        <p className="text-gray-600 text-sm">123 Business St</p>
      </div>

      <div className="bg-gray-50 p-4 rounded">
        <div className="flex justify-between">
          <span>Web Design Services</span>
          <span className="font-semibold">$2,500.00</span>
        </div>
      </div>

      <div className="flex justify-between mt-15">
        <div>
          <button
            onClick={prevSlide}
            className=" hover:cursor-pointer left-4  bg-white shadow-lg rounded-full hover:bg-gray-50 p-3"
          >
            <ChevronLeft size={25} className="text-black "></ChevronLeft>
          </button>
        </div>

        <div>
          <button
            onClick={nextSlide}
            className=" hover:cursor-pointer right-4  bg-white shadow-lg rounded-full hover:bg-gray-50 p-3  "
          >
            <ChevronRight className="text-black" size={25}></ChevronRight>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Workaction;
