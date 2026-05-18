export interface Inquiry {
  id: string;
  createdAt: string;
  name: string;
  email: string;
  countryCode: string;
  phone: string;
  company?: string;
  services: string[];
  budget?: string;
  message?: string;
}

export interface InquiryInput {
  name: string;
  email: string;
  countryCode: string;
  phone: string;
  company?: string;
  services?: string[];
  budget?: string;
  message?: string;
}
