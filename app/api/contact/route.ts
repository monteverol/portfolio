import { NextRequest, NextResponse } from "next/server";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Log the message (in production, you would send this to an email service)
    console.log("Contact form submission:", {
      name: body.name,
      email: body.email,
      message: body.message,
      timestamp: new Date().toISOString(),
    });

    // In production, you would integrate with an email service like:
    // - SendGrid
    // - Resend
    // - Nodemailer
    // - AWS SES
    // Example:
    // await sendEmail({
    //   to: "your.email@example.com",
    //   from: body.email,
    //   subject: `Portfolio Contact from ${body.name}`,
    //   text: body.message,
    // });

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
