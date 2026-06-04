import Link from "next/link";
import { CalendarCheck, MessageCircle } from "lucide-react";
import { contactLinks } from "@/lib/site-data";

export function WhatsAppButton() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2 sm:bottom-6 sm:right-6">
      <Link
        href="/contact"
        aria-label="Request a demo"
        className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-blue-700 text-white shadow-lg shadow-slate-950/20 transition hover:-translate-y-0.5 hover:bg-slate-950 focus-ring sm:w-auto sm:gap-2 sm:px-4"
      >
        <CalendarCheck className="h-5 w-5" aria-hidden="true" />
        <span className="hidden text-sm font-bold sm:inline">Demo</span>
      </Link>
      <a
        href={contactLinks.whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Message Viquantra Labs on WhatsApp"
        className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-slate-950/20 transition hover:-translate-y-0.5 hover:bg-[#1ebe5d] focus-ring sm:w-auto sm:gap-2 sm:px-4"
      >
        <MessageCircle className="h-5 w-5" aria-hidden="true" />
        <span className="hidden text-sm font-bold sm:inline">WhatsApp</span>
      </a>
    </div>
  );
}
