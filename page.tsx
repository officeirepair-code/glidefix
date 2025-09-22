
  "use client";

  import React, { useRef } from "react";
  import { motion, useScroll, useTransform } from "framer-motion";
  import { Button } from "@/components/ui/Button";
  import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
  import { Input } from "@/components/ui/Input";
  import { Textarea } from "@/components/ui/Textarea";
  import { Accordion } from "@/components/ui/Accordion";
  import { Badge } from "@/components/ui/Badge";
  import { Check, Hammer, Wrench, Sparkles, Mail, Phone, MapPin, Shield, Timer, Leaf, Building2, Home, ArrowRight } from "lucide-react";

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#process", label: "How it Works" },
    { href: "#pricing", label: "Pricing" },
    { href: "#testimonials", label: "Love" },
    { href: "#contact", label: "Contact" },
  ];

  const features = [
    { icon: <Timer className="size-5" />, title: "Same‑Day Slots", text: "Urgent? We’ll try to be there today." },
    { icon: <Shield className="size-5" />, title: "Insured & Vetted", text: "Pros you can trust in your space." },
    { icon: <Leaf className="size-5" />, title: "Eco‑Friendly", text: "Low‑VOC paints & mindful materials." },
  ];

  const services = [
    { icon: <Wrench className="size-6" />, title: "General Repairs", text: "Doors, drywall, fixtures, odd jobs." },
    { icon: <Hammer className="size-6" />, title: "Installations", text: "TV mounts, shelves, faucets, lighting." },
    { icon: <Home className="size-6" />, title: "Home Refresh", text: "Caulking, paint touch‑ups, staging help." },
    { icon: <Building2 className="size-6" />, title: "Commercial", text: "Offices, retail, turnovers, punch lists." },
  ];

  const plans = [
    { name: "On‑Demand", tagline: "Book as needed", price: "$0/mo", cta: "Book a visit", bullets: ["Pay per job", "Online estimates", "No commitments"], highlight: false },
    { name: "Care Plan", tagline: "Best value", price: "$39/mo", cta: "Start care", bullets: ["Seasonal checkups", "Priority scheduling", "Member discounts"], highlight: true },
    { name: "Business", tagline: "Multi‑site support", price: "Custom", cta: "Talk to sales", bullets: ["SLAs available", "Portfolio reporting", "Dedicated rep"], highlight: false },
  ];

  const faqs = [
    { q: "Do you offer free estimates?", a: "Yes—virtual estimates are free. For complex scopes we can schedule a quick walkthrough." },
    { q: "What areas do you serve?", a: "We cover the metro area within ~25 miles. For larger commercial work, we travel further." },
    { q: "Are materials included?", a: "Small consumables are included. Specialty items are billed at cost with receipts." },
  ];

  function useParallax(ref: React.RefObject<HTMLElement>, distance = 120) {
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], [0, distance]);
    return y;
  }

  function Section({ id, className = "", children }: { id?: string; className?: string; children: React.ReactNode }) {
    return <section id={id} className={`snap-start scroll-mt-24 ${className}`}>{children}</section>;
  }

  export default function Page() {
    const heroRef = useRef<HTMLDivElement>(null);
    const y = useParallax(heroRef, 120);

    return (
      <div className="relative min-h-screen">
        {/* Navbar */}
        <nav className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/30 border-b border-white/5">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
            <a href="#top" className="group inline-flex items-center gap-2">
              <Sparkles className="size-5 text-emerald-400" />
              <span className="text-lg font-semibold tracking-tight">Glide<span className="text-emerald-400">Fix</span></span>
            </a>
            <div className="hidden gap-1 md:flex">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="rounded-xl px-3 py-2 text-sm text-neutral-300 transition hover:bg-white/5 hover:text-white">
                  {link.label}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <Badge className="hidden md:inline-flex bg-emerald-600">Free estimate</Badge>
              <Button> <a href="#contact" className="inline-flex items-center gap-2">Book now</a> </Button>
            </div>
          </div>
        </nav>

        {/* Hero */}
        <Section id="top">
          <div ref={heroRef} className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-4 py-20 md:grid-cols-2">
            <div>
              <motion.h1 style={{ y }} className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
                Maintenance made <span className="bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent">effortless</span>
              </motion.h1>
              <p className="mt-4 max-w-prose text-neutral-300">
                Reliable, friendly, and fast. From leaky faucets to full office punch lists—our pros keep your spaces in top shape.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Button className="rounded-2xl">
                  <a href="#contact" className="inline-flex items-center gap-2">Get a free estimate <ArrowRight className="size-4" /></a>
                </Button>
                <Button variant="secondary" className="rounded-2xl"><a href="#services">Explore services</a></Button>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-4 text-center text-sm">
                {["2k+ jobs", "4.9★ avg", "Same‑day"].map((kpi, i) => (
                  <Card key={i}><CardContent className="p-3 font-semibold">{kpi}</CardContent></Card>
                ))}
              </div>
            </div>

            <div className="relative">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
                className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-4 shadow-2xl">
                <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl">
                  <div className="h-full w-full bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.35),transparent_40%),radial-gradient(circle_at_80%_50%,rgba(56,189,248,0.35),transparent_35%),linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0))]" />
                </div>
                <div className="mt-4 grid grid-cols-3 gap-3 text-xs">
                  {features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                      <div className="text-emerald-400">{f.icon}</div>
                      <div>
                        <div className="font-medium">{f.title}</div>
                        <div className="text-neutral-400">{f.text}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </Section>

        {/* Partner strip */}
        <div className="relative border-y border-white/5 bg-white/[0.02]">
          <div className="mx-auto max-w-6xl overflow-hidden px-4 py-6">
            <div className="animate-[marquee_28s_linear_infinite] whitespace-nowrap text-neutral-400 [--gap:3rem] [word-spacing:var(--gap)]">
              {["Brookstone Realty","NestPoint","Atlas Offices","GreenLeaf HOA","UrbanStay"].concat(["Brookstone Realty","NestPoint","Atlas Offices","GreenLeaf HOA","UrbanStay"]).map((name, i) => (
                <span key={i} className="inline-flex items-center gap-2 text-sm">
                  <Shield className="size-4" /> {name}
                </span>
              ))}
            </div>
          </div>
          <style>{`@keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}`}</style>
        </div>

        {/* Services */}
        <Section id="services" className="py-20">
          <div className="mx-auto max-w-6xl px-4">
            <div className="mb-10 flex items-end justify-between gap-6">
              <div>
                <h2 className="text-3xl font-bold md:text-4xl">Popular services</h2>
                <p className="mt-2 text-neutral-400">Pick a service or tell us what you need—simple.</p>
              </div>
              <Badge className="bg-white/10 text-white">Licensed • Insured</Badge>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
              {services.map((s, i) => (
                <Card key={i} className="group transition hover:shadow-emerald-500/10 hover:shadow-xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <span className="rounded-xl bg-emerald-500/15 p-2 text-emerald-400">{s.icon}</span> {s.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-neutral-400">{s.text}</CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Section>

        {/* Process */}
        <Section id="process" className="bg-white/[0.02] py-20">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-3xl font-bold md:text-4xl">How it works</h2>
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
              {["Tell us what you need","Get options & quote","We show up & fix it"].map((step, idx) => (
                <Card key={idx}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <span className="inline-flex size-9 items-center justify-center rounded-full bg-emerald-500/20 font-semibold text-emerald-400">{idx+1}</span>
                      {step}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-neutral-400">
                    {idx===0 && "Snap a photo or list the tasks. We'll confirm details and timing."}
                    {idx===1 && "Transparent pricing. Choose materials and time windows that suit you."}
                    {idx===2 && "Pros arrive ready to work. We tidy up and follow up for quality."}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Section>

        {/* Pricing */}
        <Section id="pricing" className="py-20">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-3xl font-bold md:text-4xl">Simple pricing</h2>
            <p className="mt-2 text-neutral-400">Start free, upgrade when it makes sense.</p>
            <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
              {plans.map((p, i) => (
                <Card key={i} className={p.highlight ? "ring-2 ring-emerald-400" : ""}>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <div>
                        <div className="text-xl font-semibold">{p.name}</div>
                        <div className="text-sm text-neutral-400">{p.tagline}</div>
                      </div>
                      {p.highlight && <Badge className="bg-emerald-600">Popular</Badge>}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-bold">{p.price}</div>
                    <ul className="mt-4 space-y-2 text-sm text-neutral-300">
                      {p.bullets.map((b, j) => (
                        <li key={j} className="flex items-start gap-2"><Check className="mt-0.5 size-4 text-emerald-400" /> {b}</li>
                      ))}
                    </ul>
                    <Button className="mt-6 w-full rounded-xl"><a href="#contact">{p.cta}</a></Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Section>

        {/* Testimonials */}
        <Section id="testimonials" className="bg-white/[0.02] py-20">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-3xl font-bold md:text-4xl">Customers love us</h2>
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
              {[
                { name: "Ava L.", text: "Booked in minutes, repaired the same afternoon. Polite and spotless work." },
                { name: "Marcus D.", text: "They handled our office punch list ahead of schedule—zero disruption." },
                { name: "Sofia R.", text: "Membership paid for itself with priority scheduling during our move." },
              ].map((t, i) => (
                <Card key={i}>
                  <CardContent className="p-6">
                    <div className="mb-3 flex gap-1">
                      {Array.from({ length: 5 }).map((_, s) => (<Sparkles key={s} className="size-4 text-emerald-400" />))}
                    </div>
                    <p className="text-neutral-200">“{t.text}”</p>
                    <div className="mt-4 text-sm text-neutral-400">— {t.name}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Section>

        {/* FAQ */}
        <Section id="faq" className="py-20">
          <div className="mx-auto max-w-3xl px-4">
            <h2 className="text-3xl font-bold md:text-4xl">Questions, answered</h2>
            <Accordion items={faqs} />
          </div>
        </Section>

        {/* Contact */}
        <Section id="contact" className="bg-white/[0.02] py-20">
          <div className="mx-auto max-w-5xl px-4">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold md:text-4xl">Tell us what you need</h2>
              <p className="mt-2 text-neutral-400">Free estimates. No pressure. We usually reply within an hour during the day.</p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
              <Card className="md:col-span-3">
                <CardContent className="p-6">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      const form = e.currentTarget as HTMLFormElement;
                      const data = new FormData(form);
                      const subject = encodeURIComponent("New estimate request — GlideFix");
                      const body = encodeURIComponent(
                        `Name: ${data.get("name")}
Email: ${data.get("email")}
Phone: ${data.get("phone")}
Address: ${data.get("address")}

Need help with:
${data.get("message")}`
                      );
                      window.location.href = `mailto:hello@glidefix.example?subject=${subject}&body=${body}`;
                    }}
                    className="grid grid-cols-1 gap-4"
                  >
                    <Input name="name" placeholder="Your name" required />
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <Input type="email" name="email" placeholder="Email" required />
                      <Input type="tel" name="phone" placeholder="Phone" />
                    </div>
                    <Input name="address" placeholder="Address (optional)" />
                    <Textarea name="message" placeholder="Briefly describe the work" required />
                    <Button type="submit" className="rounded-2xl">Send estimate request</Button>
                  </form>
                </CardContent>
              </Card>

              <div className="md:col-span-2 space-y-4">
                <Card>
                  <CardContent className="flex items-start gap-3 p-6 text-neutral-300">
                    <Mail className="mt-1 size-5 text-emerald-400" />
                    <div>
                      <div className="text-sm uppercase tracking-wider text-neutral-400">Email</div>
                      <a href="mailto:hello@glidefix.example" className="font-medium hover:underline">hello@glidefix.example</a>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex items-start gap-3 p-6 text-neutral-300">
                    <Phone className="mt-1 size-5 text-emerald-400" />
                    <div>
                      <div className="text-sm uppercase tracking-wider text-neutral-400">Phone</div>
                      <a href="tel:+1234567890" className="font-medium hover:underline">+1 (234) 567‑890</a>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex items-start gap-3 p-6 text-neutral-300">
                    <MapPin className="mt-1 size-5 text-emerald-400" />
                    <div>
                      <div className="text-sm uppercase tracking-wider text-neutral-400">Service Area</div>
                      <div className="font-medium">Metro & surrounding 25 miles</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </Section>

        {/* Footer */}
        <footer className="border-t border-white/5 py-10 text-sm text-neutral-400">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 md:flex-row">
            <div className="flex items-center gap-2">
              <Sparkles className="size-4 text-emerald-400" />
              <span>© {new Date().getFullYear()} GlideFix LLC</span>
            </div>
            <div className="flex gap-4">
              {navLinks.map((l) => (<a key={l.href} href={l.href} className="hover:text-white">{l.label}</a>))}
            </div>
          </div>
        </footer>
      </div>
    );
  }
