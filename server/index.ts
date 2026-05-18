import "dotenv/config";
import cors from "cors";
import express from "express";
import { sendInquiryEmails } from "./mail";
import { createInquiry, deleteInquiry, listInquiries } from "./store";
import type { InquiryInput } from "./types";

const app = express();
const PORT = Number(process.env.API_PORT ?? 4001);

app.use(
  cors({
    origin: process.env.CORS_ORIGIN?.split(",").map((o) => o.trim()) ?? [
      "http://localhost:3000",
    ],
    credentials: true,
  }),
);
app.use(express.json({ limit: "32kb" }));

function isAdmin(req: express.Request): boolean {
  const key = process.env.ADMIN_PASSWORD;
  if (!key) return false;
  const header = req.headers.authorization;
  if (header?.startsWith("Bearer ")) {
    return header.slice(7) === key;
  }
  return req.headers["x-admin-key"] === key;
}

function parseInquiryBody(body: unknown): InquiryInput | null {
  if (!body || typeof body !== "object") return null;
  const data = body as Record<string, unknown>;
  const name = typeof data.name === "string" ? data.name.trim() : "";
  const email = typeof data.email === "string" ? data.email.trim() : "";
  const phone = typeof data.phone === "string" ? data.phone.trim() : "";
  const countryCode =
    typeof data.countryCode === "string" ? data.countryCode.trim() : "+91";

  if (!name || !email || !phone) return null;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return null;

  const services = Array.isArray(data.services)
    ? data.services.filter((s): s is string => typeof s === "string")
    : typeof data.services === "string"
      ? [data.services]
      : [];

  return {
    name,
    email,
    phone,
    countryCode,
    company: typeof data.company === "string" ? data.company : undefined,
    services,
    budget: typeof data.budget === "string" ? data.budget : undefined,
    message: typeof data.message === "string" ? data.message : undefined,
  };
}

app.get("/api/health", (_req, res) => {
  res.json({ ok: true });
});

app.post("/api/inquiries", async (req, res) => {
  const input = parseInquiryBody(req.body);
  if (!input) {
    res.status(400).json({ error: "Name, email, and phone are required." });
    return;
  }

  try {
    const inquiry = await createInquiry(input);
    try {
      await sendInquiryEmails(inquiry);
    } catch (mailError) {
      console.error("SMTP error (inquiry saved):", mailError);
    }
    res.status(201).json({ inquiry });
  } catch (error) {
    console.error("Create inquiry error:", error);
    res.status(500).json({ error: "Failed to save inquiry." });
  }
});

app.get("/api/inquiries", async (req, res) => {
  if (!isAdmin(req)) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }
  try {
    const inquiries = await listInquiries();
    res.json({ inquiries });
  } catch (error) {
    console.error("List inquiries error:", error);
    res.status(500).json({ error: "Failed to load inquiries." });
  }
});

app.delete("/api/inquiries/:id", async (req, res) => {
  if (!isAdmin(req)) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }
  try {
    const removed = await deleteInquiry(req.params.id);
    if (!removed) {
      res.status(404).json({ error: "Inquiry not found." });
      return;
    }
    res.json({ ok: true });
  } catch (error) {
    console.error("Delete inquiry error:", error);
    res.status(500).json({ error: "Failed to delete inquiry." });
  }
});

app.listen(PORT, () => {
  console.log(`API server listening on http://localhost:${PORT}`);
});
