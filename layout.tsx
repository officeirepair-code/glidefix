
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GlideFix — Maintenance made effortless",
  description: "Fast, friendly maintenance services for homes and businesses.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 text-neutral-100 selection:bg-emerald-300 selection:text-neutral-900">
        {/* Decorative glows */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute -top-24 -left-24 size-96 rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="absolute -bottom-16 -right-24 size-[28rem] rounded-full bg-sky-500/10 blur-3xl" />
        </div>
        {children}
      </body>
    </html>
  );
}
