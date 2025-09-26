"use client";

import React, { useEffect, useState } from "react";
import { useActionState } from "react";
import { Card, CardContent } from "./ui/card";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "./ui/select";
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import { Textarea } from "./ui/textarea";
import { Badge, Calendar1Icon } from "lucide-react";
import { Input } from "./ui/input";
import { createInvoiceAction } from "../action";
import { Label } from "@radix-ui/react-dropdown-menu";
import { useRouter } from "next/navigation";

const currencySymbols: Record<string, string> = {
  USD: "$",
  EUR: "€",
  INR: "₹",
};

const CreateInvoice = () => {
  const router = useRouter();

  const [state, formAction] = useActionState(createInvoiceAction, {
    success: false,
    error: "",
  });

  const [selectDate, setSelectDate] = useState<Date>(new Date());
  const [due, setDue] = useState("");

  // 🔹 Local states
  const [quantity, setQuantity] = useState(0);
  const [amount, setAmount] = useState(0);
  const [currency, setCurrency] = useState("USD"); // default USD

  // 🔹 Calculations
  const rate = quantity * amount;
  const currencySymbol = currencySymbols[currency] || "$";


  useEffect(() => {
    if (state.success) {
      alert("Invoice created successfully")
      router.push("/dashboard"); // replace with your dashboard route
    }
  }, [state.success, router]);

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardContent className="p-6">
        <form action={formAction}>
          {/* Header */}
          <div className="flex items-center gap-4 mb-6">
            <Badge>Draft</Badge>
            <Input placeholder="Invoice title" name="title" />
          </div>

          {/* Invoice Number + Currency */}
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div>
              <Label>Invoice Number</Label>
              <div className="flex">
                <span className="px-3 border border-r-0 rounded-l-md bg-muted flex items-center">
                  #
                </span>
                <Input
                  className="rounded-l-none"
                  placeholder="5"
                  name="invoiceNumber"
                />
              </div>
            </div>

            <div>
              <Label>Currency</Label>
              <Select
                name="currency"
                onValueChange={(value) => setCurrency(value)}
                defaultValue={currency}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Currency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="USD">USD</SelectItem>
                  <SelectItem value="EUR">EUR</SelectItem>
                  <SelectItem value="INR">INR</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* From / To */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <Label>From</Label>
              <div className="space-y-2">
                <Input placeholder="Your name" name="fromName" />
                <Input placeholder="Your email" name="fromEmail" />
                <Input placeholder="Your address" name="fromAddress" />
              </div>
            </div>

            <div>
              <Label>To</Label>
              <div className="space-y-2">
                <Input placeholder="Client name" name="toName" />
                <Input placeholder="Client email" name="toEmail" />
                <Input placeholder="Client address" name="toAddress" />
              </div>
            </div>
          </div>

          {/* Date + Due */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <Label>Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline">
                    <Calendar1Icon className="mr-2" />
                    {new Intl.DateTimeFormat("en-US", {
                      dateStyle: "long",
                    }).format(selectDate)}
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <Calendar
                    selected={selectDate}
                    onSelect={(date) => setSelectDate(date || new Date())}
                    mode="single"
                  />
                </PopoverContent>
              </Popover>
              <input
                type="hidden"
                name="date"
                value={selectDate.toISOString()}
              />
            </div>

            <div>
              <Label>Invoice Due</Label>
              <Select onValueChange={setDue}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Due Date" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">Due on Receipt</SelectItem>
                  <SelectItem value="15">Net 15</SelectItem>
                  <SelectItem value="30">Net 30</SelectItem>
                </SelectContent>
              </Select>
              <input type="hidden" name="due" value={due} />
            </div>
          </div>

          {/* Items */}
          <div>
            <div className="grid grid-cols-12 gap-4 mb-2 font-medium">
              <p className="col-span-6">Description</p>
              <p className="col-span-2">Quantity</p>
              <p className="col-span-2">Amount</p>
              <p className="col-span-2">Rate</p>
            </div>

            <div className="grid grid-cols-12 gap-4 mb-2">
              <div className="col-span-6">
                <Textarea placeholder="Item description" name="description" />
              </div>
              <div className="col-span-2">
                <Input
                  placeholder="0"
                  type="number"
                  name="quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                />
              </div>
              <div className="col-span-2">
                <Input
                  placeholder="0"
                  type="number"
                  name="amount"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                />
              </div>
              <div className="col-span-2">
                <Input
                  placeholder="0"
                  type="number"
                  name="rate"
                  value={rate}
                  readOnly
                />
              </div>
            </div>
          </div>

          {/* Note */}
          <div className="mt-6">
            <Label>Note</Label>
            <Textarea placeholder="Add a note..." name="note" />
          </div>

          {/* Total Amount */}
          <div className="flex justify-end mt-6">
            <div className="w-1/3">
              <div className="flex justify-between py-2 border-t">
                <span className="font-medium">Total</span>
                <span className="font-medium">
                  {currencySymbol} {rate.toFixed(2)}
                </span>
              </div>
            </div>
          </div>

          {/* Submit */}
          <div className="flex items-center justify-end mt-6">
            <Button type="submit" >Submit</Button>
          </div>

          {/* Show errors */}
          {!state.success && state.error && (
            <p className="text-red-500 mt-4">{state.error}</p>
          )}
        </form>
      </CardContent>
    </Card>
  );
};

export default CreateInvoice;
