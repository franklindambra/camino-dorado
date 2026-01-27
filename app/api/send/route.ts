import { Resend } from "resend";
import { ContactSchema } from "@/lib/schema";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();
  const result = ContactSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json({ error: "Invalid data" }, { status: 400 });
  }

  const { firstName, lastName, email, phone, propertyType, location, details } =
    result.data;

  try {
    const data = await resend.emails.send({
      from: "info@camino-dorado.com", // Use your verified domain
      to: ["hostcesar@gmail.com"],
      subject: `New Lead: ${firstName} ${lastName}`,
      text: `
        Name: ${firstName} ${lastName}
        Email: ${email}
        Phone: ${phone}
        Property: ${propertyType}
        Location: ${location}
        Details: ${details}
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
