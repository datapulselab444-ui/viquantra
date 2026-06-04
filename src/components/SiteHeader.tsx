"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { BrandMark } from "@/components/BrandMark";
import { brand, navigation } from "@/lib/site-data";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/92 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 rounded-md focus-ring" onClick={() => setOpen(false)}>
          <BrandMark className="!h-10 !w-10 sm:!h-11 sm:!w-11" />
          <span>
            <span className="block text-base font-bold tracking-tight text-slate-950 sm:text-lg">{brand.name}</span>
            <span className="block max-w-[150px] text-[9px] font-semibold uppercase leading-3 tracking-[0.1em] text-slate-500 min-[380px]:max-w-[190px] min-[380px]:text-[10px] min-[380px]:leading-4 min-[380px]:tracking-[0.14em]">
              {brand.descriptor}
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-md text-sm font-semibold transition focus-ring ${
                  active ? "text-blue-700" : "text-slate-700 hover:text-slate-950"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <Link
          href="/contact"
          className="hidden rounded-sm bg-blue-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-950 focus-ring lg:inline-flex"
        >
          Request Demo
        </Link>

        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="grid h-10 w-10 place-items-center rounded-sm border border-slate-200 bg-white text-slate-950 focus-ring sm:h-11 sm:w-11 lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-slate-200 bg-white px-5 py-5 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-sm px-3 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50 focus-ring"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-sm bg-blue-700 px-4 py-3 text-center text-sm font-bold text-white focus-ring"
            >
              Request Demo
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
