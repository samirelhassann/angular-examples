import { z } from "zod";

export const basicInfoSchema = z.object({
  name: z.string().min(1, "Name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
});

export const addressInfoSchema = z.object({
  address: z.string().min(1, "Address is required"),
  additionalAddress: z.string().optional(),
  city: z.string().min(1, "City is required"),
  state: z.string().min(2, "State must be at least 2 characters"),
  zipCode: z.string().min(5, "ZIP code must be at least 5 characters"),
  country: z.string().min(2, "Country must be at least 2 characters"),
});

export type BasicInfoSchema = z.infer<typeof basicInfoSchema>;
export type AddressInfoSchema = z.infer<typeof addressInfoSchema>;
