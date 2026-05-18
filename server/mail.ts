import nodemailer from "nodemailer";
import type { Inquiry } from "./types";

function getTransporter() {
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!user || !pass) {
    throw new Error("SMTP_USER and SMTP_PASS must be set in .env");
  }

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST ?? "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: { user, pass },
  });
}

function formatServices(services: string[]): string {
  if (!services.length) return "—";
  return services.join(", ");
}

function inquiryHtml(inquiry: Inquiry): string {
  const fullPhone = `${inquiry.countryCode} ${inquiry.phone}`;
  return `
    <h2>New portfolio inquiry</h2>
    <p><strong>Name:</strong> ${escapeHtml(inquiry.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(inquiry.email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(fullPhone)}</p>
    <p><strong>Company:</strong> ${escapeHtml(inquiry.company ?? "—")}</p>
    <p><strong>Services:</strong> ${escapeHtml(formatServices(inquiry.services))}</p>
    <p><strong>Budget:</strong> ${escapeHtml(inquiry.budget ?? "—")}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(inquiry.message ?? "—").replace(/\n/g, "<br>")}</p>
    <p style="color:#888;font-size:12px;">Submitted ${new Date(inquiry.createdAt).toLocaleString()}</p>
  `;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function sendInquiryEmails(inquiry: Inquiry): Promise<void> {
  const transporter = getTransporter();
  const from = process.env.SMTP_FROM ?? process.env.SMTP_USER!;
  const notifyTo = process.env.NOTIFY_EMAIL ?? process.env.SMTP_USER!;

  await transporter.sendMail({
    from: `"Content Viral Media" <${from}>`,
    to: notifyTo,
    replyTo: inquiry.email,
    subject: `New inquiry from ${inquiry.name}`,
    html: inquiryHtml(inquiry),
    text: [
      `New inquiry from ${inquiry.name}`,
      `Email: ${inquiry.email}`,
      `Phone: ${inquiry.countryCode} ${inquiry.phone}`,
      `Company: ${inquiry.company ?? "—"}`,
      `Services: ${formatServices(inquiry.services)}`,
      `Budget: ${inquiry.budget ?? "—"}`,
      `Message: ${inquiry.message ?? "—"}`,
    ].join("\n"),
  });

  await transporter.sendMail({
    from: `"Content Viral Media" <${from}>`,
    to: inquiry.email,
    subject: "We received your inquiry — Content Viral Media",
    html: `
      <p>Hi ${escapeHtml(inquiry.name)},</p>
      <p>Thanks for reaching out. We received your inquiry and will reply within 24 hours from <strong>Garvit@contentviralmedia.com</strong>.</p>
      <p>— Garvit &amp; the Content Viral Media team</p>
    `,
    text: `Hi ${inquiry.name},\n\nThanks for reaching out. We received your inquiry and will reply within 24 hours.\n\n— Content Viral Media`,
  });
}
