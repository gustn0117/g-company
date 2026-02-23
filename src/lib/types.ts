export interface Inquiry {
  id: number;
  name: string;
  phone: string;
  organization: string | null;
  show: string | null;
  preferred_date: string | null;
  message: string | null;
  status: "new" | "confirmed" | "completed";
  created_at: string;
  updated_at: string;
}

export interface InquiryInsert {
  name: string;
  phone: string;
  organization?: string;
  show?: string;
  preferred_date?: string;
  message?: string;
}
