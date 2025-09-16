import React from "react";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/app/components/ui/button";

export const GetCard: React.FC = () => {
  const benefits = [
    "Reduces client payment delays by 65%",
    "Saves 4+ hours per week on admin work",
    "Increases cash flow predictability",
  ];

  return (
    <div className="bg-gradient-to-br bg-neutral-900 rounded-2xl p-8 md:p-12 ml-10 mr-10">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Content */}
        <div>
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            Most Popular Feature
          </div>

          <h3 className="text-3xl font-bold text-white mb-4">
            Auto Reminders That Actually Get Paid
          </h3>

          <p className="text-white mb-6 text-lg font-bold">
            Stop chasing clients manually. Our intelligent reminder system sends
            perfectly timed follow-ups that convert 3x better than generic
            emails.
          </p>

          <div className="space-y-3 mb-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-black " />
                </div>
                <span className="text-white ">{benefit}</span>
              </div>
            ))}
          </div>

            <Button variant={"default"}>

            See it in action
            <ArrowRight className="w-4 h-4" />
            </Button>
        </div>

        <div className="relative">
          <div className="aspect-video rounded-xl  overflow-hidden ">
            <img
              src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Auto reminders dashboard showing scheduled follow-ups and payment success rates"
              className=" object-cover"
              width={"500"}
              height={"100"}
            />
          </div>

          {/* Floating Success Indicator */}
          <div className="absolute -bottom-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 animate-pulse">
            <Check className="w-4 h-4" />
            <span className="font-medium">Payment Received!</span>
          </div>
        </div>
      </div>
    </div>
  );
};
