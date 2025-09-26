"use server";

import { redirect } from "next/navigation";
import { invoiceSchema } from "./(Schemas)/createinvoiceschema";
import { db } from "@/lib/db";

export async function createInvoiceAction(prevState: any, formData: FormData) {
  try {
    const rawData = {
      invoiceNumber: formData.get("invoiceNumber"),
      currency: formData.get("currency"),
      fromName: formData.get("fromName"),
      fromEmail: formData.get("fromEmail"),
      fromAddress: formData.get("fromAddress"),
      toName: formData.get("toName"),
      toEmail: formData.get("toEmail"),
      toAddress: formData.get("toAddress"),
      date: formData.get("date"),
      due: formData.get("due"),
      note: formData.get("note"),
      items: [
        {
          description: formData.get("description"),
          quantity: Number(formData.get("quantity")),
          amount: Number(formData.get("amount")),
          rate: Number(formData.get("rate")),
        },
      ],
    };

    const validated = invoiceSchema.parse(rawData);

    const invoice = await db.invoice.create({
      data: {
        invoiceNumber: validated.invoiceNumber,
        currency: validated.currency,
        fromName: validated.fromName,
        fromEmail: validated.fromEmail,
        fromAddress: validated.fromAddress,
        toName: validated.toName,
        toEmail: validated.toEmail,
        toAddress: validated.toAddress,
        date: validated.date,
        due: validated.due,
        note: validated.note,
        items: {
          create: validated.items,
        },
      },
    });

    return { success: true, invoice };
  } catch (err) {
    console.error("❌ Invoice creation failed:", err);
    return { success: false, error: "Invalid data or DB error" };
  }

  return redirect("/dashboard")
}
