import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations/contact";
import { z } from "zod";

/**
 * POST /api/contact
 *
 * Accepts a JSON body matching ContactFormData, validates with Zod,
 * and sends an email via the configured email provider.
 *
 * ──────────────────────────────────────────────────────────────────
 * TO ADD AN EMAIL PROVIDER:
 *
 * Option A — Resend (recommended for Next.js):
 *   npm install resend
 *   Set RESEND_API_KEY in .env.local
 *   Uncomment the Resend block below.
 *
 * Option B — Nodemailer + SMTP:
 *   npm install nodemailer @types/nodemailer
 *   Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS in .env.local
 *   Uncomment the Nodemailer block below.
 *
 * Option C — SendGrid:
 *   npm install @sendgrid/mail
 *   Set SENDGRID_API_KEY in .env.local
 * ──────────────────────────────────────────────────────────────────
 */

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate with Zod
    const data = contactFormSchema.parse(body);

    // ── EMAIL SENDING ────────────────────────────────────────────
    // Uncomment ONE of the blocks below after installing the package
    // and setting the required environment variables.

    /* ── RESEND (Option A) ───────────────────────────────────────
    const { Resend } = await import("resend");
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "Axen Technology <noreply@axentechnology.in>",
      to: process.env.CONTACT_EMAIL ?? "hello@axentechnology.in",
      replyTo: data.email,
      subject: `New Project Brief from ${data.name}${data.company ? ` (${data.company})` : ""}`,
      html: buildEmailHtml(data),
    });
    */

    /* ── NODEMAILER (Option B) ───────────────────────────────────
    const nodemailer = await import("nodemailer");
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Axen Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL ?? "hello@axentechnology.in",
      replyTo: data.email,
      subject: `New Project Brief from ${data.name}`,
      html: buildEmailHtml(data),
    });
    */

    // Log the submission in development
    if (process.env.NODE_ENV === "development") {
      console.log("[Contact Form Submission]", {
        name: data.name,
        email: data.email,
        company: data.company,
        phone: data.phone,
        budget: data.budget,
        service: data.service,
        messageLength: data.message.length,
      });
    }

    return NextResponse.json(
      { success: true, message: "Your message has been received. We'll respond within 24 hours." },
      { status: 200 }
    );
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          error: "Validation failed. Please check your inputs.",
          details: (err as any).errors,
        },
        { status: 422 }
      );
    }

    console.error("[Contact API Error]", err);
    return NextResponse.json(
      {
        success: false,
        error: "We couldn't process your message. Please try emailing us directly at hello@axentechnology.in",
      },
      { status: 500 }
    );
  }
}

/** Build a styled HTML email body */
function buildEmailHtml(data: {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  budget?: string;
  service?: string;
  message: string;
}): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Project Brief — Axen Technology</title>
</head>
<body style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f5f5f5; color: #111;">
  <div style="background: #111; color: #fff; padding: 24px; border-radius: 12px; margin-bottom: 24px;">
    <h1 style="margin: 0; color: #CC0000; font-size: 20px;">New Project Brief</h1>
    <p style="margin: 4px 0 0; color: #888; font-size: 14px;">Axen Technology Contact Form</p>
  </div>

  <div style="background: #fff; border-radius: 12px; padding: 24px;">
    <table style="width: 100%; border-collapse: collapse;">
      <tr style="border-bottom: 1px solid #eee;">
        <td style="padding: 10px 0; font-weight: 600; color: #444; width: 140px;">Name</td>
        <td style="padding: 10px 0;">${data.name}</td>
      </tr>
      <tr style="border-bottom: 1px solid #eee;">
        <td style="padding: 10px 0; font-weight: 600; color: #444;">Email</td>
        <td style="padding: 10px 0;"><a href="mailto:${data.email}">${data.email}</a></td>
      </tr>
      ${data.company ? `<tr style="border-bottom: 1px solid #eee;">
        <td style="padding: 10px 0; font-weight: 600; color: #444;">Company</td>
        <td style="padding: 10px 0;">${data.company}</td>
      </tr>` : ""}
      ${data.phone ? `<tr style="border-bottom: 1px solid #eee;">
        <td style="padding: 10px 0; font-weight: 600; color: #444;">Phone</td>
        <td style="padding: 10px 0;">${data.phone}</td>
      </tr>` : ""}
      ${data.budget ? `<tr style="border-bottom: 1px solid #eee;">
        <td style="padding: 10px 0; font-weight: 600; color: #444;">Budget</td>
        <td style="padding: 10px 0;">${data.budget}</td>
      </tr>` : ""}
      ${data.service ? `<tr style="border-bottom: 1px solid #eee;">
        <td style="padding: 10px 0; font-weight: 600; color: #444;">Service</td>
        <td style="padding: 10px 0;">${data.service}</td>
      </tr>` : ""}
    </table>

    <div style="margin-top: 20px; padding: 16px; background: #f9f9f9; border-radius: 8px;">
      <p style="margin: 0 0 8px; font-weight: 600; color: #444;">Project Description</p>
      <p style="margin: 0; white-space: pre-wrap; color: #333;">${data.message}</p>
    </div>
  </div>

  <p style="text-align: center; font-size: 12px; color: #999; margin-top: 16px;">
    This email was sent from the Axen Technology website contact form.
  </p>
</body>
</html>
  `.trim();
}
