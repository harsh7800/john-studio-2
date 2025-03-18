// app/api/send/route.js
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, service, budget, message } = await request.json();

    const data = await resend.emails.send({
      from: email, // Replace with your email
      to: "harshshinde.dev@gmail.com", // Replace with the recipient's email
      subject: `New Contact Form Submission from ${name}`,
      html: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Service:</strong> ${service}</p>
          <p><strong>Budget:</strong> ${budget}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
    });

    return NextResponse.json({ success: true, data });
  } catch {
    return NextResponse.json(
      { success: false, error: "Failed to send message" },
      { status: 500 }
    );
  }
}
