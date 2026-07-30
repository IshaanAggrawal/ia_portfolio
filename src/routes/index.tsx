import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  Bot,
  Mic,
  Eye,
  Cpu,
  Layers,
  Code2,
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  Award,
  GraduationCap,
  Briefcase,
  Terminal,
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
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
      { title: "Ishaan Aggrawal — AI Agents Developer & Systems Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Ishaan Aggrawal, AI Agents Developer specializing in real-time voice & vision pipelines, distributed systems, and LLM orchestration.",
      },
      { property: "og:title", content: "Ishaan Aggrawal — AI Agents Developer & Systems Engineer" },
      {
        property: "og:description",
        content:
          "AI Agents, Real-Time Voice/Vision Pipelines, and Distributed Systems built by Ishaan Aggrawal.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const ROLES = ["AI Agents Developer", "Real-Time Voice & Vision", "Distributed Systems Engineer"];

const STATS = [
  { to: 330, suffix: "+", label: "LeetCode Solved" },
  { to: 96, suffix: "%", label: "Agent Eval Pass Rate" },
  { to: 6, suffix: "x", label: "Parser Speedup" },
];

const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: "https://github.com/IshaanAggrawal",
    icon: Github,
    handle: "@IshaanAggrawal",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/ishaan-aggrawal",
    icon: Linkedin,
    handle: "ishaan-aggrawal",
  },
  {
    name: "Email",
    url: "mailto:ishaanaggrawal101@gmail.com",
    icon: Mail,
    handle: "ishaanaggrawal101@gmail.com",
  },
  {
    name: "Phone",
    url: "tel:+919258895224",
    icon: Phone,
    handle: "+91 9258895224",
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/IshaanAggrawal",
    icon: Terminal,
    handle: "Max 1600+ Rating",
  },
];

const CAPABILITIES = [
  {
    icon: Bot,
    title: "AI Agents & LangGraph RAG",
    body: "Multi-node conversational agent workflows with LangChain, LangGraph, ChromaDB, and evaluation harnesses.",
  },
  {
    icon: Mic,
    title: "Real-Time Voice Pipelines",
    body: "Low-latency WebSockets & WebRTC token-pipelined voice agents using Whisper, Deepgram, and custom TTS.",
  },
  {
    icon: Eye,
    title: "AI Surveillance & Vision",
    body: "YOLOv11 & ByteTrack real-time multi-camera tracking integrated with Vision LLMs for threat detection.",
  },
  {
    icon: Cpu,
    title: "Distributed Backend & Queues",
    body: "High-throughput FastAPI, Express, BullMQ job queues, Redis caching, and microservices architecture.",
  },
  {
    icon: Layers,
    title: "LLM Orchestration & AWS",
    body: "AWS Bedrock, Groq Llama-3.3-70B sub-200ms inference, parallel parsing, and prompt engineering.",
  },
  {
    icon: Code2,
    title: "Full-Stack Web Development",
    body: "Next.js, React, TypeScript, Tailwind CSS, PostgreSQL, MongoDB, Prisma ORM, and Supabase.",
  },
];

const PROJECTS = [
  {
    img: p1,
    title: "Real-Time Voice Calling Agent",
    tag: "Voice AI & WebRTC",
    stack: ["WebRTC", "VAD", "Whisper", "LangChain", "TTS Architecture"],
    description:
      "Replaced naive HTTP pipeline (~2-4s) with a WebSocket token-pipelining architecture streaming LLM tokens directly to TTS, cutting latency to 1.3–1.9s avg. Built stateful session management with VAD turn-taking & RMS echo suppression.",
    github: "https://github.com/IshaanAggrawal",
    demo: "https://github.com/IshaanAggrawal",
  },
  {
    img: p2,
    title: "Real-Time AI Surveillance System",
    tag: "Computer Vision & Vision LLM",
    stack: ["Next.js", "YOLOv11", "OpenCV", "FastAPI", "Groq Vision"],
    description:
      "Multi-object tracking pipeline (YOLOv11 + ByteTrack) with cross-camera identity persistence & Vision LLMs for behavioral threat detection. Thread-safe FastAPI backend with 24-hour auto-purge privacy enforcement.",
    github: "https://github.com/IshaanAggrawal",
    demo: "https://github.com/IshaanAggrawal",
  },
  {
    img: p3,
    title: "AI Interviewer Platform",
    tag: "Full-Stack & Audio Streaming",
    stack: ["Next.js", "Express", "PostgreSQL", "Socket.IO", "BullMQ", "Groq", "AWS S3"],
    description:
      "Enterprise-grade mock interview platform streaming STT → LLM → TTS via bidirectional Socket.IO using Groq Llama-3.3-70B (~200ms inference). Offloaded evaluation to async BullMQ workers with Redis caching.",
    github: "https://github.com/IshaanAggrawal",
    demo: "https://github.com/IshaanAggrawal",
  },
  {
    img: p4,
    title: "AstroAgent",
    tag: "LangGraph Agent & RAG",
    stack: ["LangGraph", "FastAPI", "React+TS", "ChromaDB RAG"],
    description:
      "Conversational AI agent featuring a 5-node LangGraph pipeline (router → reasoner → tools → editor) with ChromaDB domain lookup and a 25-case golden-set eval harness achieving a 96% pass rate.",
    github: "https://github.com/IshaanAggrawal",
    demo: "https://github.com/IshaanAggrawal",
  },
];

const SKILL_GROUPS = [
  {
    category: "AI / GenAI & Voice",
    items: [
      "LangChain",
      "LangGraph",
      "RAG",
      "AWS Bedrock",
      "Groq Inference",
      "Whisper & Deepgram STT",
      "WebRTC Voice Pipelines",
      "Prompt Engineering",
    ],
  },
  {
    category: "Backend & Systems",
    items: [
      "FastAPI",
      "Express.js",
      "Django REST Framework",
      "Node.js",
      "Socket.IO",
      "BullMQ & Redis",
      "WebSockets",
      "Microservices",
    ],
  },
  {
    category: "Databases & Cloud",
    items: ["PostgreSQL", "MongoDB", "Redis", "AWS S3", "Prisma ORM", "Supabase (pgvector)"],
  },
  {
    category: "Languages & Core",
    items: [
      "Python",
      "TypeScript",
      "JavaScript",
      "C++",
      "Data Structures & Algorithms",
      "System Design",
    ],
  },
  {
    category: "ML, Data & Problem Solving",
    items: [
      "PyTorch",
      "Scikit-learn",
      "XGBoost",
      "Pandas & NumPy",
      "LeetCode (330+ solved, Rating ~1600)",
    ],
  },
];

const ACHIEVEMENTS = [
  {
    title: "JEE Mains 2024",
    detail: "97.81 percentile — Top 2% nationally among 1.1M+ candidates",
  },
  {
    title: "Kharagpur Data Science Hackathon 2026",
    detail: "Top 10 of 1000+ teams (Top 1%), BDH Implementation Problem",
  },
  {
    title: "IITM Gwalior Hackathon",
    detail: "Finalist — Blockchain-based complaint management system from 1000+ applicants",
  },
  {
    title: "CodeVeda 2025 Hackathon",
    detail: "3rd Runner-Up in national-level competitive development",
  },
  {
    title: "LeetCode Solver",
    detail: "330+ problems solved, Max Rating ~1600",
  },
  {
    title: "Open Source & GSoC 2026",
    detail: "FOSSology contributor (SQL logic & unit test suites) & GSoC 2026 applicant",
  },
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
            <ul className="hidden gap-6 md:flex">
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
              className="-mt-10 pb-4 text-center text-4xl font-semibold tracking-tight sm:-mt-14 sm:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              Hi, I'm Ishaan Aggrawal
            </motion.h1>
          </div>
        </section>

        {/* ROLES BANNER */}
        <div className="grid grid-cols-1 divide-y divide-border border-b border-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {ROLES.map((r, i) => (
            <Reveal key={r} delay={i * 0.08}>
              <div className="py-4 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground sm:text-sm">
                {r}
              </div>
            </Reveal>
          ))}
        </div>

        {/* TAGLINE & SOCIAL TAGS */}
        <div className="border-b border-border px-6 py-8">
          <Reveal>
            <p className="mx-auto max-w-xl text-center text-base text-muted-foreground sm:text-lg">
              AI & Software Engineer specializing in real-time voice & vision agents,
              high-concurrency backend pipelines, and intelligent multi-modal systems.
            </p>
          </Reveal>

          {/* SOCIAL TAGS PILLS */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3.5 py-1.5 text-xs font-medium transition-all hover:border-foreground hover:bg-secondary"
              >
                <s.icon className="h-3.5 w-3.5 text-muted-foreground transition-colors group-hover:text-foreground" />
                <span>{s.name}</span>
                <span className="text-muted-foreground group-hover:text-foreground/80">
                  ({s.handle})
                </span>
                <ArrowUpRight className="h-3 w-3 text-muted-foreground group-hover:text-foreground" />
              </a>
            ))}
          </div>
        </div>

        {/* ABOUT SECTION */}
        <section id="about">
          <SectionTitle>About Me</SectionTitle>
          <div className="grid gap-8 border-b border-border px-6 py-14 md:grid-cols-2 md:items-center">
            <Reveal>
              <img
                src={aboutImg}
                alt="Ishaan Aggrawal profile"
                className="w-full object-cover rounded-sm border border-border"
                loading="lazy"
              />
            </Reveal>
            <Reveal delay={0.1}>
              <div className="space-y-4">
                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  I'm <strong className="font-semibold text-foreground">Ishaan Aggrawal</strong>, an
                  AI Engineer based in India. I build production-grade AI agents, low-latency voice
                  pipelines, and scalable backend architectures.
                </p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <GraduationCap className="mt-1 h-4 w-4 shrink-0 text-foreground" />
                    <span>
                      <strong className="text-foreground">IIIT Sonepat (2024–2028):</strong> B.Tech
                      in Computer Science & Engineering (GPA 8.3/10)
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <GraduationCap className="mt-1 h-4 w-4 shrink-0 text-foreground" />
                    <span>
                      <strong className="text-foreground">IIT Madras:</strong> B.Sc in Data Science
                      & Applications (GPA 7.25/10, Online)
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Briefcase className="mt-1 h-4 w-4 shrink-0 text-foreground" />
                    <span>
                      <strong className="text-foreground">Artizence Systems LLP:</strong> AI Agents
                      Developer Intern (LangChain, LangGraph, AWS Bedrock, Voice Agents)
                    </span>
                  </div>
                </div>
                <div className="pt-2">
                  <a
                    href="#contact"
                    className="inline-block bg-primary px-5 py-3 text-xs font-semibold uppercase tracking-wider text-primary-foreground transition-transform hover:scale-[1.04]"
                  >
                    Get In Touch
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-1 divide-y divide-border border-b border-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.1}>
                <div className="py-8 text-center">
                  <div className="text-4xl font-semibold tracking-tight">
                    <CountUp to={s.to} suffix={s.suffix} />
                  </div>
                  <div className="mt-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {s.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience">
          <SectionTitle>Work Experience</SectionTitle>
          <div className="border-b border-border px-6 py-10">
            <Reveal>
              <div className="border border-border bg-secondary/20 p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border pb-4">
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight">
                      AI Agents Developer Intern
                    </h3>
                    <p className="text-sm font-medium text-muted-foreground">
                      Artizence Systems LLP • Remote
                    </p>
                  </div>
                  <span className="rounded-full bg-secondary px-3 py-1 text-xs font-mono text-muted-foreground">
                    Feb 2026 – May 2026
                  </span>
                </div>
                <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-foreground" />
                    <span>
                      Designed and deployed production AI agents using{" "}
                      <strong className="text-foreground">LangChain</strong> and{" "}
                      <strong className="text-foreground">LangGraph</strong>, integrating AWS
                      Bedrock-hosted LLMs into scalable backend pipelines.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-foreground" />
                    <span>
                      Optimized a bank-statement parser via page-wise parallelism & hybrid regex+LLM
                      extraction — cutting processing time for a 15-page document from{" "}
                      <strong className="text-foreground">~1 min to ~10 sec (6x speedup)</strong>{" "}
                      across 20+ bank formats with near-zero hallucinations.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-foreground" />
                    <span>
                      Built a real-time voice agent exposed through REST APIs using{" "}
                      <strong className="text-foreground">FastAPI</strong> and{" "}
                      <strong className="text-foreground">Django REST Framework</strong>; owned
                      end-to-end testing & deployment in agile sprints.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-foreground" />
                    <span>
                      Contributed to core NLP and computer vision modules supporting the broader AI
                      agent platform.
                    </span>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        {/* MARQUEE WORDS */}
        <section className="border-b border-border">
          <Brackets>
            <div className="space-y-2 text-center text-2xl font-semibold tracking-tight sm:text-4xl">
              <Reveal>
                <span className="inline-flex flex-wrap items-center justify-center gap-3">
                  <span>AI Agents</span>
                  <Tile src={p1} rotate={-12} />
                  <span className="text-muted-foreground">Low Latency</span>
                </span>
              </Reveal>
              <Reveal delay={0.1}>
                <span className="inline-flex flex-wrap items-center justify-center gap-3">
                  <Tile src={p2} rotate={9} />
                  <span>Real-Time Voice & Vision</span>
                </span>
              </Reveal>
              <Reveal delay={0.2}>
                <span className="inline-flex flex-wrap items-center justify-center gap-3">
                  <span className="text-muted-foreground">LangGraph & RAG</span>
                  <Tile src={p3} rotate={-6} />
                  <span>Distributed Queues</span>
                </span>
              </Reveal>
            </div>
          </Brackets>
        </section>

        {/* WHAT I DO / CAPABILITIES */}
        <section id="services">
          <SectionTitle>What I Do</SectionTitle>
          <div className="grid grid-cols-1 divide-y divide-border border-b border-border sm:grid-cols-2 sm:divide-x">
            {CAPABILITIES.map((c, i) => (
              <motion.div
                key={c.title}
                className="group p-8 transition-colors hover:bg-secondary/40"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: (i % 2) * 0.08 }}
              >
                <c.icon
                  className="h-7 w-7 text-foreground transition-transform duration-300 group-hover:-translate-y-1"
                  strokeWidth={1.5}
                />
                <h3 className="mt-5 text-lg font-medium tracking-tight">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PROJECTS BASE */}
        <section id="projects">
          <SectionTitle>Featured Projects</SectionTitle>
          <div className="grid grid-cols-1 divide-y divide-border border-b border-border sm:grid-cols-2 sm:divide-x">
            {PROJECTS.map((p, i) => (
              <motion.article
                key={p.title}
                className="group flex flex-col justify-between p-6"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: (i % 2) * 0.08 }}
              >
                <div>
                  <div className="overflow-hidden rounded-sm border border-border bg-secondary">
                    <img
                      src={p.img}
                      alt={`${p.title} project cover`}
                      loading="lazy"
                      className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-4 flex items-baseline justify-between">
                    <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                      {p.tag}
                    </span>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded border border-border/80 bg-secondary/50 px-2 py-0.5 text-[10px] font-mono text-muted-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5 flex items-center gap-3 border-t border-border/60 pt-4">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground transition-colors hover:text-muted-foreground"
                  >
                    <Github className="h-3.5 w-3.5" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground transition-colors hover:text-muted-foreground"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    <span>Demo</span>
                  </a>
                </div>
              </motion.article>
            ))}
          </div>

          {/* FEATURED BANNER */}
          <div className="border-b border-border">
            <Brackets>
              <Reveal>
                <div className="relative overflow-hidden rounded-sm border border-border bg-secondary/30">
                  <img
                    src={p4}
                    alt="Featured project preview"
                    loading="lazy"
                    className="h-64 w-full object-cover opacity-80 transition-opacity hover:opacity-100 sm:h-80"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-background via-background/40 to-transparent p-6">
                    <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                      Featured Architecture
                    </span>
                    <h3 className="mt-1 text-xl font-semibold sm:text-2xl">
                      AstroAgent & Real-Time Voice Pipeline
                    </h3>
                    <p className="mt-1 max-w-lg text-xs text-muted-foreground sm:text-sm">
                      Combining 5-node LangGraph logic, WebSocket STT-LLM-TTS streaming, and
                      ChromaDB vector search.
                    </p>
                  </div>
                </div>
              </Reveal>
            </Brackets>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills">
          <SectionTitle>Technical Skills</SectionTitle>
          <div className="divide-y divide-border border-b border-border">
            {SKILL_GROUPS.map((sg, i) => (
              <Reveal key={sg.category} delay={i * 0.05}>
                <div className="grid gap-2 px-6 py-6 sm:grid-cols-3 sm:items-center">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-muted-foreground sm:text-sm">
                    {sg.category}
                  </h3>
                  <div className="flex flex-wrap gap-2 sm:col-span-2">
                    {sg.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-md border border-border bg-secondary/40 px-2.5 py-1 text-xs font-medium text-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* EDUCATION & ACHIEVEMENTS */}
        <section id="education">
          <SectionTitle>Education & Achievements</SectionTitle>

          {/* EDUCATION */}
          <div className="grid grid-cols-1 divide-y divide-border border-b border-border sm:grid-cols-2 sm:divide-x sm:divide-y-0">
            <div className="p-6">
              <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                <GraduationCap className="h-4 w-4 text-foreground" />
                <span>2024 – 2028</span>
              </div>
              <h3 className="mt-2 text-lg font-semibold">
                Indian Institute of Information Technology (IIIT), Sonepat
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">
                B.Tech in Computer Science & Engineering — GPA: 8.3 / 10
              </p>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                Coursework: Data Structures & Algorithms, Operating Systems, Computer Networks,
                DBMS, System Design, OOP.
              </p>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                <GraduationCap className="h-4 w-4 text-foreground" />
                <span>Ongoing (Online)</span>
              </div>
              <h3 className="mt-2 text-lg font-semibold">
                Indian Institute of Technology (IIT), Madras
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">
                B.Sc in Data Science & Applications — GPA: 7.25 / 10
              </p>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                Coursework: Machine Learning, Statistical Inference, Python Data Science Stack, App
                Development.
              </p>
            </div>
          </div>

          {/* ACHIEVEMENTS GRID */}
          <div className="grid grid-cols-1 divide-y divide-border border-b border-border sm:grid-cols-2 sm:divide-x">
            {ACHIEVEMENTS.map((a, i) => (
              <motion.div
                key={a.title}
                className="p-6"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-foreground" />
                  <h4 className="text-sm font-semibold">{a.title}</h4>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">{a.detail}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact">
          <SectionTitle>Contact & Links</SectionTitle>
          <div className="border-b border-border px-6 py-12">
            <Reveal>
              <p className="mx-auto max-w-md text-center text-sm text-muted-foreground">
                Have a project, role, or collaboration idea? Reach out directly via form or through
                my social profiles.
              </p>
            </Reveal>

            {/* DIRECT SOCIAL CONTACT BUTTONS */}
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-secondary/50 px-4 py-2 text-xs font-medium transition-colors hover:border-foreground hover:bg-secondary"
                >
                  <s.icon className="h-3.5 w-3.5" />
                  <span>{s.name}</span>
                </a>
              ))}
            </div>

            <Reveal delay={0.1}>
              <form
                className="mx-auto mt-10 max-w-lg space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  e.currentTarget.reset();
                  alert("Thank you! Your message has been noted.");
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
                  placeholder="Subject (e.g. AI Internship / Project)"
                  className="w-full border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-foreground"
                />
                <textarea
                  required
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-foreground"
                />
                <button
                  type="submit"
                  className="w-full bg-primary px-6 py-3 text-xs font-semibold uppercase tracking-wider text-primary-foreground transition-transform hover:scale-[1.02]"
                >
                  Send Message
                </button>
              </form>
            </Reveal>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="flex flex-wrap items-center justify-between gap-4 px-6 py-8">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Ishaan Aggrawal</span>
            <span className="text-xs text-muted-foreground">• AI Agents & Systems</span>
          </div>
          <div className="flex flex-wrap gap-4">
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                {s.name}
              </a>
            ))}
          </div>
          <span className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Ishaan Aggrawal
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
