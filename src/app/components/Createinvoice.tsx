"use client";
import React, { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Badge, Calendar1Icon } from "lucide-react";
import { Input } from "./ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Select, SelectTrigger } from "@radix-ui/react-select";
import { SelectContent, SelectItem, SelectValue } from "./ui/select";
import { Popover, PopoverContent } from "./ui/popover";
import { PopoverTrigger } from "@radix-ui/react-popover";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import { Textarea } from "./ui/textarea";

const Createinvoice = () => {
  const [selectDate, SetselectDate] = useState(new Date());
  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardContent className="p-6">
        <div className="flex flex-col gap-1 w-fit">
          <div className="flex items-center gap-4">
            <Badge>Draft</Badge>
            <Input placeholder="test123"></Input>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div className="pt-2">
            <Label>Invoice Number</Label>
            <div className="flex">
              <span className="px-3 border border-r-0 rounded-l-md bg-muted flex items-center ">
                #
              </span>
              <Input className="rounded-l-none" placeholder="5"></Input>
            </div>
          </div>

          <div>
            <Label>Currency</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Currency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="USD">United Satate Dollor</SelectItem>
                <SelectItem value="EUR">EUR</SelectItem>
                <SelectItem value="RUPEE">Indian Rupees</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <Label>Form</Label>
            <div className="space-y-2">
              <Input placeholder="your name" />
              <Input placeholder="your email" />
              <Input placeholder="your Address" />
            </div>
          </div>

          <div>
            <Label>To</Label>
            <div className="space-y-2">
              <Input placeholder="client Name" />
              <Input placeholder="client email" />
              <Input placeholder="client Address" />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <div>
              <Label>Date</Label>
            </div>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">
                  <Calendar1Icon />

                  {selectDate ? (
                    new Intl.DateTimeFormat("en-US", {
                      dateStyle: "long",
                    }).format(selectDate)
                  ) : (
                    <span>Pick a Date</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <Calendar
                  selected={selectDate}
                  onSelect={(date) => SetselectDate(date || new Date())}
                  mode="single"
                  fromDate={new Date()}
                />
              </PopoverContent>
            </Popover>
          </div>

          <div>
            <Label>Invoice Due:</Label>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Due Date" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0">Due on Reciept</SelectItem>
                <SelectItem value="15">Net 15</SelectItem>
                <SelectItem value="30">Net 30</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <div className="grid grid-cols-12 gap-4 mb-2 font-medium">
            <p className="col-span-6">Description</p>
            <p className="col-span-2">Quantity</p>
            <p className="col-span-2">Amount </p>
            <p className="col-span-2">Rate </p>
          </div>

          <div className="grid grid-cols-12 gap-4 mb-2">
            <div className="col-span-6">
              <Textarea placeholder="Item name and description" />
            </div>
            <div className="col-span-2">
              <Input placeholder="0" type="number" />
            </div>{" "}
            <div className="col-span-2">
              <Input placeholder="0" type="number" />
            </div>
            <div className="col-span-2">
              <Input placeholder="0" type="number" disabled />
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="w-1/3">
            <div className="flex justify-between py-2">
              <span>SubTotal</span>
              <span>$5.00</span>
            </div>

            <div className="flex justify-between py-2 border-t">
              <span>Total (USD)</span>
              <span className="font-medium underline underline-offset-2">
                $ 5.00
              </span>
            </div>
          </div>
        </div>

        <div>
          <Label>Note</Label>
          <Textarea placeholder="add your Note here..." />
        </div>

        <div className="flex items-center justify-end mt-6">
          <div>
            <Button variant={"default"}>Submit</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Createinvoice;
