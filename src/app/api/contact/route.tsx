import { NextResponse } from "next/server";
import { Resend } from "resend";

import { siteConfig } from "@/config/site";
import { env } from "@/env.mjs";
import type { ContactFormData } from "@/lib/validations/contact-form";
import { contactFormSchema } from "@/lib/validations/contact-form";

const resend = new Resend(env.RESEND_API_KEY);

function generateEmailHtml(formData: ContactFormData): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333333; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff;">
  <div style="background-color: #ffffff; border: 1px solid #e5e7eb; border-radius: 8px; padding: 30px; margin-bottom: 20px;">
    <!-- Header -->
    <div style="border-bottom: 2px solid #f97316; padding-bottom: 20px; margin-bottom: 30px;">
      <h1 style="color: #f97316; font-size: 24px; font-weight: bold; margin: 0 0 10px 0; font-family: Urbanist, sans-serif;">
        🚴‍♂️ New Contact Form Submission
      </h1>
      <p style="color: #6b7280; margin: 0; font-size: 14px;">
        You have received a new message from your website
      </p>
    </div>

    <!-- Contact Information -->
    <div style="margin-bottom: 30px;">
      <h2 style="color: #1f2937; font-size: 18px; font-weight: 600; margin-bottom: 15px; padding-bottom: 10px; border-bottom: 1px solid #e5e7eb;">
        Contact Information
      </h2>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
        <tbody>
          <tr>
            <td style="padding: 8px 0; color: #6b7280; font-weight: 500; width: 100px;">Name:</td>
            <td style="padding: 8px 0; color: #1f2937; font-weight: 600;">${escapeHtml(formData.name)}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #6b7280; font-weight: 500;">Email:</td>
            <td style="padding: 8px 0; color: #1f2937;">
              <a href="mailto:${escapeHtml(formData.email)}" style="color: #f97316; text-decoration: none;">
                ${escapeHtml(formData.email)}
              </a>
            </td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #6b7280; font-weight: 500;">Subject:</td>
            <td style="padding: 8px 0; color: #1f2937; font-weight: 600;">${escapeHtml(formData.subject)}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Message -->
    <div style="margin-bottom: 30px;">
      <h2 style="color: #1f2937; font-size: 18px; font-weight: 600; margin-bottom: 15px; padding-bottom: 10px; border-bottom: 1px solid #e5e7eb;">
        Message
      </h2>
      <div style="background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 6px; padding: 20px; color: #374151; white-space: pre-wrap; line-height: 1.8;">
        ${escapeHtml(formData.message)}
      </div>
    </div>

    <!-- Footer -->
    <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; margin-top: 30px; text-align: center;">
      <p style="color: #6b7280; font-size: 12px; margin: 0;">
        This email was sent from the contact form on
        <a href="${siteConfig.url}" style="color: #f97316; text-decoration: none;">
          ${siteConfig.name}
        </a>
      </p>
      <p style="color: #9ca3af; font-size: 11px; margin: 10px 0 0 0;">
        ${siteConfig.company.email} • ${siteConfig.company.phone}
      </p>
    </div>
  </div>
</body>
</html>
  `.trim();
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate the request body
    const validationResult = contactFormSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          error: "Validation failed",
          details: validationResult.error.errors,
        },
        { status: 400 }
      );
    }

    const formData = validationResult.data;

    // Generate HTML email
    const emailHtml = generateEmailHtml(formData);

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: `RentaBikeParis Contact Form <contact@rentabikeparis.fr>`, // TODO:Replace with your verified domain
      to: [siteConfig.company.email],
      replyTo: formData.email,
      subject: `New Contact Form: ${formData.subject}`,
      html: emailHtml,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        {
          error: "Failed to send email",
          details: error.message || "Unknown error",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Email sent successfully",
        id: data?.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form API error:", error);
    return NextResponse.json(
      {
        error: "Internal server error",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

