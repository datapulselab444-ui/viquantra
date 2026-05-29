import Link from "next/link";
import { Linkedin, Mail, MapPin } from "lucide-react";
import { BrandMark } from "@/components/BrandMark";
import { navigation, services } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-6 lg:grid-cols-[1.15fr_2fr] lg:px-8">
        <div>
          <Link href="/" className="flex items-center gap-3 rounded-md focus-ring">
            <BrandMark tone="light" />
            <span>
              <span className="block text-lg font-bold">Viquantra</span>
              <span className="block text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                Software Engineering Labs
              </span>
            </span>
          </Link>
          <p className="mt-6 max-w-md text-sm leading-7 text-slate-300">
            Viquantra builds intelligent analytics platforms, realtime data
            systems, Django-based products, API integrations, and scalable web and
            mobile applications for data-driven organizations.
          </p>
          <p className="mt-5 max-w-md text-xs leading-6 text-slate-500">
            Viquantra is a software engineering and data analytics company.
            Financial technology projects are delivered as client-owned software
            infrastructure and research systems, not advisory services.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <FooterGroup title="Company">
            {navigation.map((item) => (
              <FooterLink key={item.href} href={item.href}>
                {item.label}
              </FooterLink>
            ))}
            <FooterLink href="/contact">Contact</FooterLink>
          </FooterGroup>

          <FooterGroup title="Services">
            {services.slice(0, 5).map((service) => (
              <FooterLink key={service.slug} href={`/services/${service.slug}`}>
                {service.shortTitle}
              </FooterLink>
            ))}
          </FooterGroup>

          <FooterGroup title="Technology">
            {["Django", "Python", "PostgreSQL", "React", "Redis", "Android"].map((item) => (
              <span key={item} className="block text-sm text-slate-400">
                {item}
              </span>
            ))}
          </FooterGroup>

          <FooterGroup title="Contact">
            <span className="flex items-start gap-2 text-sm text-slate-400">
              <Mail className="mt-0.5 h-4 w-4" aria-hidden="true" />
              hello@viquantra.com
            </span>
            <span className="flex items-start gap-2 text-sm text-slate-400">
              <MapPin className="mt-0.5 h-4 w-4" aria-hidden="true" />
              India, remote-first
            </span>
            <span className="flex items-start gap-2 text-sm text-slate-400">
              <Linkedin className="mt-0.5 h-4 w-4" aria-hidden="true" />
              LinkedIn / GitHub / X
            </span>
          </FooterGroup>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>&copy; 2026 Viquantra. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-white focus-ring rounded-sm">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white focus-ring rounded-sm">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-sm font-bold text-white">{title}</h3>
      <div className="mt-4 grid gap-3">{children}</div>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="block text-sm text-slate-400 transition hover:text-white focus-ring rounded-sm">
      {children}
    </Link>
  );
}
