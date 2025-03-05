import { z } from "zod";

export const basicInfoSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
});

export const addressInfoSchema = z.object({
  address: z.string().min(1, "Address is required"),
  city: z.string().min(1, "City is required"),
});

export const contactInfoSchema = z.object({
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
});

export type BasicInfoSchema = z.infer<typeof basicInfoSchema>;
export type AddressInfoSchema = z.infer<typeof addressInfoSchema>;
export type ContactInfoSchema = z.infer<typeof contactInfoSchema>;
