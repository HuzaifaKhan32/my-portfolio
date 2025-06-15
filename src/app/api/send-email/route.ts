import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
    try {
      const { name, email, message } = await request.json();
  
      const { data, error } = await resend.emails.send({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: ["huzaifakhan0856551@gmail.com"], 
        subject: `New message from ${name}`,
        html: `
          <h1>New Contact Form Submission</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      });
  
      if (error) {
        return NextResponse.json({ error }, { status: 500 });
      }
  
      return NextResponse.json(data);
    } catch (error) {
      console.log(error)
      return NextResponse.json(
        { error: "Internal Server Error" },
        { status: 500 }
      );
    }
  }