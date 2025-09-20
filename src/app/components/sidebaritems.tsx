import { Home, Notebook, Settings } from "lucide-react";

export default function(){
    return (
      <div className=" space-y-4 cursor-pointer">
        <div className="flex gap-6 pl-3 rounded-full p-2 hover:bg-gray-950 transition-all duration-300 ease-in-out">
          <Home />
          <p className="font-bold text-xl ">Dashboard</p>
        </div>

        <div className="flex gap-6  pl-3 rounded-full p-2 hover:bg-gray-950 transition-all duration-300 ease-in-out">
          <Notebook />
          <p className="font-bold text-xl">Invoices</p>
        </div>

        <div className="flex gap-6 pl-3 rounded-full p-2 hover:bg-gray-950 transition-all duration-300 ease-in-out">
            <Settings/>
          <p className="font-bold text-xl">Setting</p>
        </div>
      </div>
    );
}