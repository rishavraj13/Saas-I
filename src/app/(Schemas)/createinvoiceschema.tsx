import { z } from "zod";

export const itemSchema = z.object({
  description: z.string().min(1, "Description is required"),
  quantity: z.number().int().min(1, "Quantity must be at least 1"),
  amount: z.number().min(0, "Amount must be non-negative"),
  rate: z.number().min(0, "Rate must be non-negative"),
});

export const invoiceSchema = z.object({
  invoiceNumber: z.string().min(1, "Invoice number is required"),
  currency: z.string().min(1, "Currency is required"),

  fromName: z.string().min(1, "Sender name is required"),
  fromEmail: z.string().email("Invalid sender email"),
  fromAddress: z.string().min(1, "Sender address is required"),

  toName: z.string().min(1, "Recipient name is required"),
  toEmail: z.string().email("Invalid recipient email"),
  toAddress: z.string().min(1, "Recipient address is required"),

  date: z.string().transform((val) => new Date(val)), // ISO string → Date
  due: z.string().min(1, "Due is required"),

  note: z.string().optional(),

  items: z.array(itemSchema).min(1, "At least one item is required"),
});

export type InvoiceInput = z.infer<typeof invoiceSchema>;
