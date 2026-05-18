import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";
import { randomUUID } from "crypto";
import type { Inquiry, InquiryInput } from "./types";

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "inquiries.json");

async function ensureStore(): Promise<Inquiry[]> {
  await mkdir(DATA_DIR, { recursive: true });
  try {
    const raw = await readFile(DATA_FILE, "utf-8");
    const parsed = JSON.parse(raw) as Inquiry[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    await writeFile(DATA_FILE, "[]", "utf-8");
    return [];
  }
}

async function saveAll(inquiries: Inquiry[]): Promise<void> {
  await mkdir(DATA_DIR, { recursive: true });
  await writeFile(DATA_FILE, JSON.stringify(inquiries, null, 2), "utf-8");
}

export async function listInquiries(): Promise<Inquiry[]> {
  const inquiries = await ensureStore();
  return inquiries.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );
}

export async function createInquiry(input: InquiryInput): Promise<Inquiry> {
  const inquiries = await ensureStore();
  const inquiry: Inquiry = {
    id: randomUUID(),
    createdAt: new Date().toISOString(),
    name: input.name.trim(),
    email: input.email.trim().toLowerCase(),
    countryCode: input.countryCode.trim(),
    phone: input.phone.trim(),
    company: input.company?.trim() || undefined,
    services: input.services ?? [],
    budget: input.budget?.trim() || undefined,
    message: input.message?.trim() || undefined,
  };
  inquiries.unshift(inquiry);
  await saveAll(inquiries);
  return inquiry;
}

export async function deleteInquiry(id: string): Promise<boolean> {
  const inquiries = await ensureStore();
  const next = inquiries.filter((item) => item.id !== id);
  if (next.length === inquiries.length) return false;
  await saveAll(next);
  return true;
}
