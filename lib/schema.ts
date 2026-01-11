import { z } from "zod";

export const ContactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  propertyType: z.enum(
    [
      "Apartment Building",
      "Condominium",
      "Single-Family Home",
      "Multi-Family Home",
    ],
    {
      message: "Please select a property type",
    }
  ),
  location: z.string().min(1, "Location is required"),
  details: z.string().optional(),
});

export type ContactFormValues = z.infer<typeof ContactSchema>;
