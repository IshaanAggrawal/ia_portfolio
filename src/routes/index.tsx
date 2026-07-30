import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Box, Code2, MonitorSmartphone, Shapes, PenTool, Star } from "lucide-react";
import { Reveal, CountUp } from "@/components/Reveal";
import heroImg from "@/assets/hero-bag.jpg";
import aboutImg from "@/assets/about-bag.jpg";
import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ishaan Aggrawal — Product & UI/UX Designer" },
      {
        name: "description",
        content:
          "Portfolio of Ishaan Aggrawal, a product designer crafting bold digital interfaces, brand systems and interactive experiences.",
      },
      { property: "og:title", content: "Ishaan Aggrawal — Product & UI/UX Designer" },
      {
        property: "og:description",
        content:
          "Bold digital interfaces, brand systems and interactive experiences by Ishaan Aggrawal.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV = [
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const ROLES = ["Product Designer", "UI/UX Designer", "Framer Dev"];

const STATS = [
  { to: 5, suffix: "+", label: "Years Of Experience" },
  { to: 20, suffix: "+", label: "Happy Clients" },
  { to: 40, suffix: "+", label: "Completed Projects" },
];

const SERVICES = [
  {
    icon: Box,
    title: "Product Design",
    body: "I design simple, user-friendly digital products that look clean and feel good to use.",
  },
  {
    icon: Code2,
    title: "Web Development",
    body: "I build fast, smooth websites with clean motion and custom interactions.",
  },
  {
    icon: MonitorSmartphone,
    title: "UI/UX Design",
    body: "I create simple, beautiful experiences that feel natural and easy to use.",
  },
  {
    icon: Shapes,
    title: "Design Conversion",
    body: "I turn designs into responsive websites in React or Framer with smooth animation.",
  },
  {
    icon: PenTool,
    title: "Creative Direction",
    body: "I help brands shape their visual style through clear layout, design, and direction.",
  },
  {
    icon: Star,
    title: "Branding & Identity",
    body: "I design logos and visual identities that look consistent across all platforms.",
  },
];

const PROJECTS = [
  { img: p1, title: "Silent Grid", tag: "Brand System" },
  { img: p2, title: "Neon Drift", tag: "Product Design" },
  { img: p3, title: "Paper Echo", tag: "Web Experience" },
  { img: p4, title: "Chroma Field", tag: "Art Direction" },
];

function Brackets({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative px-8 py-14 sm:px-16">
      <span className="pointer-events-none absolute left-6 top-6 h-8 w-8 border-l border-t border-foreground/40" />
      <span className="pointer-events-none absolute right-6 top-6 h-8 w-8 border-r border-t border-foreground/40" />
      <span className="pointer-events-none absolute bottom-6 left-6 h-8 w-8 border-b border-l border-foreground/40" />
      <span className="pointer-events-none absolute bottom-6 right-6 h-8 w-8 border-b border-r border-foreground/40" />
      {children}
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-b border-border py-5 text-center">
      <Reveal>
        <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">{children}</h2>
      </Reveal>
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <div className="mx-auto w-full max-w-4xl border-x border-border">
        {/* NAV */}
        <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
          <nav className="flex items-center justify-between px-5 py-3">
            <a href="#top" className="text-base font-semibold tracking-tight">
              Ishaan Aggrawal
            </a>
            <ul className="hidden gap-7 md:flex">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="rounded-full bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition-transform hover:scale-[1.04]"
            >
              Let's Talk
            </a>
          </nav>
        </header>

        {/* HERO */}
        <section id="top" className="border-b border-border">
          <div className="relative pt-6">
            <motion.img
              src={heroImg}
              alt="Ishaan Aggrawal wearing a paper bag mask with X eyes"
              className="mx-auto block w-full max-w-md object-contain"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.h1
              className="-mt-10 pb-6 text-center text-4xl font-semibold tracking-tight sm:-mt-14 sm:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              Hi, I'm Ishaan Aggrawal
            </motion.h1>
          </div>
        </section>

        <div className="grid grid-cols-1 divide-y divide-border border-b border-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {ROLES.map((r, i) => (
            <Reveal key={r} delay={i * 0.08}>
              <div className="py-4 text-center text-sm font-medium sm:text-base">{r}</div>
            </Reveal>
          ))}
        </div>

        <div className="border-b border-border px-6 py-8">
          <Reveal>
            <p className="mx-auto max-w-md text-center text-muted-foreground">
              UI/UX Designer & Web Developer passionate about crafting clean, modern experiences
              using Figma & React.
            </p>
          </Reveal>
        </div>

        <div className="h-16 border-b border-border" />

        {/* ABOUT */}
        <section id="about">
          <SectionTitle>About Me</SectionTitle>
          <div className="grid gap-8 border-b border-border px-6 py-14 md:grid-cols-2 md:items-center">
            <Reveal>
              <img
                src={aboutImg}
                alt="Side profile of Ishaan Aggrawal wearing a paper bag mask"
                className="w-full object-cover"
                loading="lazy"
              />
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg leading-relaxed">
                Hi, I'm <strong className="font-semibold">Ishaan Aggrawal</strong> — a creative
                designer and developer based in India. I build beautiful things for the web, with
                tools like Figma, React and Framer. I share ideas on design, product, and creative
                business.
              </p>
              <a
                href="#contact"
                className="mt-8 inline-block bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.04]"
              >
                Get IN Touch
              </a>
            </Reveal>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-1 divide-y divide-border border-b border-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.1}>
                <div className="py-10 text-center">
                  <div className="text-4xl font-semibold tracking-tight">
                    <CountUp to={s.to} suffix={s.suffix} />
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* MARQUEE WORDS */}
        <section className="border-b border-border">
          <Brackets>
            <div className="space-y-2 text-center text-2xl font-semibold tracking-tight sm:text-4xl">
              <Reveal>
                <span className="inline-flex flex-wrap items-center justify-center gap-3">
                  <span>Bold Vision</span>
                  <Tile src={p1} rotate={-12} />
                  <span className="text-muted-foreground">Visual Balance</span>
                </span>
              </Reveal>
              <Reveal delay={0.1}>
                <span className="inline-flex flex-wrap items-center justify-center gap-3">
                  <Tile src={p2} rotate={9} />
                  <span>Detail in Every Line</span>
                </span>
              </Reveal>
              <Reveal delay={0.2}>
                <span className="inline-flex flex-wrap items-center justify-center gap-3">
                  <span className="text-muted-foreground">Create Without</span>
                  <Tile src={p3} rotate={-6} />
                  <span>Boundaries</span>
                </span>
              </Reveal>
            </div>
          </Brackets>
        </section>

        {/* SERVICES */}
        <section id="services">
          <SectionTitle>Services</SectionTitle>
          <div className="grid grid-cols-1 divide-y divide-border border-b border-border sm:grid-cols-2 sm:divide-x">
            {SERVICES.map((s, i) => (
              <motion.div
                key={s.title}
                className="group p-8 transition-colors hover:bg-secondary"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: (i % 2) * 0.08 }}
              >
                <s.icon
                  className="h-8 w-8 transition-transform duration-300 group-hover:-translate-y-1"
                  strokeWidth={1.25}
                />
                <h3 className="mt-6 text-xl font-medium tracking-tight">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{s.body}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PORTFOLIO */}
        <section id="portfolio">
          <SectionTitle>Portfolio</SectionTitle>
          <div className="grid grid-cols-1 divide-y divide-border border-b border-border sm:grid-cols-2 sm:divide-x">
            {PROJECTS.map((p, i) => (
              <motion.article
                key={p.title}
                className="group p-6"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: (i % 2) * 0.08 }}
              >
                <div className="overflow-hidden bg-secondary">
                  <img
                    src={p.img}
                    alt={`${p.title} project cover`}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 flex items-baseline justify-between">
                  <h3 className="text-lg font-medium tracking-tight">{p.title}</h3>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">
                    {p.tag}
                  </span>
                </div>
              </motion.article>
            ))}
          </div>

          {/* FEATURED */}
          <div className="border-b border-border">
            <Brackets>
              <Reveal>
                <img
                  src={p4}
                  alt="Featured project artwork"
                  loading="lazy"
                  className="w-full object-cover"
                />
              </Reveal>
            </Brackets>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact">
          <SectionTitle>Contact</SectionTitle>
          <div className="border-b border-border px-6 py-14">
            <Reveal>
              <p className="mx-auto max-w-md text-center text-muted-foreground">
                Have a project, a role or just an idea? Drop a note and I'll get back within a day.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <form
                className="mx-auto mt-8 max-w-lg space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  e.currentTarget.reset();
                }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    required
                    name="name"
                    placeholder="Your name"
                    className="w-full border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-foreground"
                  />
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="Email address"
                    className="w-full border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-foreground"
                  />
                </div>
                <input
                  name="subject"
                  placeholder="Subject"
                  className="w-full border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-foreground"
                />
                <textarea
                  required
                  name="message"
                  rows={5}
                  placeholder="Tell me about the project"
                  className="w-full border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-foreground"
                />
                <button
                  type="submit"
                  className="w-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
                >
                  Send Message
                </button>
              </form>
            </Reveal>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="flex flex-wrap items-center justify-between gap-4 px-6 py-8">
          <span className="text-sm font-medium">Ishaan Aggrawal</span>
          <div className="flex flex-wrap gap-5">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
          </div>
          <span className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} — All rights reserved
          </span>
        </footer>
      </div>
    </div>
  );
}

function Tile({ src, rotate }: { src: string; rotate: number }) {
  return (
    <motion.img
      src={src}
      alt=""
      aria-hidden
      loading="lazy"
      className="h-12 w-16 rounded-md object-cover shadow-lg sm:h-16 sm:w-24"
      style={{ rotate }}
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}
