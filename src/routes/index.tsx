import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

// Edit these values to update links and status across the site.
const SITE = {
  name: "Raghuram Butti",
  email: "hello@example.com",
  linkedin: "https://www.linkedin.com/",
  github: "https://github.com/",
  resumeUrl: "", // e.g. "/resume.pdf" — when empty, the button requests it by email
  available: true,
  availability: "Open to senior AI engineering roles",
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Raghuram Butti — Senior AI Engineer | Generative & Agentic AI" },
      { name: "description", content: "Senior AI Engineer and LLM Architect with 12+ years building production-grade Generative AI, Agentic AI, RAG and ML systems." },
      { property: "og:title", content: "Raghuram Butti — Senior AI Engineer" },
      { property: "og:description", content: "Engineering intelligent systems. Generative AI, Agentic AI, LLM architecture and enterprise ML." },
    ],
  }),
  component: Index,
});

const NAV = [
  ["About", "about"],
  ["Expertise", "expertise"],
  ["Focus", "focus"],
  ["Contact", "contact"],
] as const;

const SKILLS: { title: string; tag: string; items: string[] }[] = [
  { title: "Generative AI", tag: "01", items: ["GPT", "Transformers", "LLMs", "Claude", "RAG", "GraphRAG", "LangChain", "LangGraph", "Agentic AI", "Multi-Agent Systems"] },
  { title: "Machine Learning", tag: "02", items: ["Python", "TensorFlow", "PyTorch", "Keras", "Scikit-learn", "NLP", "Computer Vision", "CNNs"] },
  { title: "Cloud Platforms", tag: "03", items: ["AWS", "Azure", "Google Cloud Platform"] },
  { title: "AI & ML Platforms", tag: "04", items: ["AWS Bedrock", "SageMaker", "Azure ML", "Vertex AI", "Databricks", "MLflow"] },
  { title: "Backend & Development", tag: "05", items: ["FastAPI", "REST APIs", "Microservices", "SQL", "Docker", "Kubernetes"] },
  { title: "Data Engineering", tag: "06", items: ["Spark", "PySpark", "Kafka", "Airflow", "Delta Lake", "Data Pipelines"] },
  { title: "MLOps & Deployment", tag: "07", items: ["CI/CD", "Model Optimization", "Quantization", "Model Serving", "Monitoring", "Responsible AI"] },
];

const FOCUS = [
  { title: "Agentic & Multi-Agent Systems", body: "Orchestrating tool-using agents with LangGraph — planning, memory, guardrails and human-in-the-loop checkpoints designed for enterprise workflows.", stack: ["LangGraph", "LangChain", "FastAPI"] },
  { title: "Advanced RAG & GraphRAG", body: "Retrieval pipelines that go beyond naive vector search: hybrid retrieval, re-ranking, knowledge graphs and evaluation built into the loop.", stack: ["Vector DBs", "GraphRAG", "Bedrock"] },
  { title: "LLM Fine-Tuning & Optimization", body: "Adapting transformer models to domain data, then making them practical to run through quantization and efficient serving.", stack: ["PyTorch", "Transformers", "SageMaker"] },
  { title: "Production MLOps", body: "Taking models from notebook to dependable service — versioning, CI/CD, containerised deployment and monitoring at scale.", stack: ["MLflow", "Databricks", "Kubernetes"] },
];

const INDUSTRIES = ["Healthcare", "Financial Services", "Retail", "Telecommunications", "Transportation"];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("revealed")),
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Index() {
  useReveal();
  return (
    <div className="relative overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Expertise />
      <Focus />
      <Contact />
      <footer className="border-t py-10 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} {SITE.name}. Built with care.
      </footer>
    </div>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "glass" : "border-transparent"}`}>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="font-display text-lg font-semibold">
          RB<span className="text-accent">.</span>
        </a>
        <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
          {NAV.map(([label, id]) => (
            <a key={id} href={`#${id}`} className="transition-colors hover:text-foreground">{label}</a>
          ))}
        </nav>
        <a href="#contact" className="rounded-full border px-4 py-1.5 text-sm transition-colors hover:border-accent hover:text-accent">
          Let's talk
        </a>
      </div>
    </header>
  );
}

function NeuralField() {
  const nodes: [number, number][] = [
    [80, 120], [180, 60], [180, 200], [300, 110], [300, 250], [420, 60], [420, 180], [540, 130], [540, 260], [640, 190], [300, 340], [420, 310],
  ];
  const links: [number, number][] = [[0,1],[0,2],[1,3],[2,3],[2,4],[3,5],[3,6],[4,6],[5,7],[6,7],[6,8],[7,9],[8,9],[4,10],[10,11],[11,8],[4,11]];
  return (
    <svg viewBox="0 0 720 400" className="h-full w-full" aria-hidden>
      <defs>
        <linearGradient id="lg" x1="0" x2="1">
          <stop offset="0" stopColor="var(--primary)" />
          <stop offset=".6" stopColor="var(--accent)" />
          <stop offset="1" stopColor="var(--violet)" />
        </linearGradient>
      </defs>
      {links.map(([a, b], i) => (
        <line key={i} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]}
          stroke="url(#lg)" strokeWidth="1.2" strokeOpacity=".55" className="animate-flow"
          style={{ animationDelay: `${i * 0.15}s` }} />
      ))}
      {nodes.map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="10" fill="var(--accent)" opacity=".08" />
          <circle cx={x} cy={y} r="4" fill={i % 3 === 0 ? "var(--violet)" : "var(--accent)"} className="animate-node" style={{ animationDelay: `${i * 0.25}s` }} />
        </g>
      ))}
    </svg>
  );
}

function Hero() {
  const resumeHref = SITE.resumeUrl || `mailto:${SITE.email}?subject=Resume%20request`;
  return (
    <section id="top" className="relative flex min-h-screen items-center pt-24">
      <div className="pointer-events-none absolute inset-0 bg-glow" />
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-60" />
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[60%] opacity-70 lg:block">
        <NeuralField />
      </div>
      <div className="relative mx-auto w-full max-w-6xl px-6">
        <div className="max-w-2xl animate-rise">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground">
            <span className={`h-2 w-2 rounded-full ${SITE.available ? "bg-success animate-pulse" : "bg-muted-foreground"}`} />
            {SITE.availability}
          </div>
          <p className="font-mono text-sm tracking-[0.3em] text-accent">RAGHURAM BUTTI</p>
          <p className="mt-3 text-sm text-muted-foreground">Senior AI Engineer · Generative AI · Agentic AI · LLM Architect</p>
          <h1 className="mt-6 text-4xl font-bold leading-[1.08] sm:text-6xl">
            Engineering Intelligent Systems. <span className="text-gradient">Transforming Ideas into Production-Ready AI.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            I design and build enterprise-grade AI solutions that combine Generative AI, Agentic Systems, Machine Learning, and scalable cloud architecture to solve real-world business challenges.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a href="#focus" className="rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5">View My Projects</a>
            <a href={resumeHref} className="rounded-full glass px-6 py-3 text-sm font-semibold transition-colors hover:border-accent">Download Resume</a>
            <a href="#contact" className="rounded-full px-6 py-3 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground">Let's Connect →</a>
          </div>
          <div className="mt-10 flex gap-3">
            <Social href={SITE.linkedin} label="LinkedIn"><LinkedInIcon /></Social>
            <Social href={SITE.github} label="GitHub"><GitHubIcon /></Social>
          </div>
        </div>
      </div>
    </section>
  );
}

function Social({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" aria-label={label}
      className="grid h-11 w-11 place-items-center rounded-full glass text-muted-foreground transition-all hover:-translate-y-0.5 hover:text-accent">
      {children}
    </a>
  );
}

function SectionHead({ k, title }: { k: string; title: string }) {
  return (
    <div className="reveal mb-14">
      <p className="font-mono text-xs tracking-[0.3em] text-accent">{k}</p>
      <h2 className="mt-3 text-3xl font-semibold sm:text-5xl">{title}</h2>
    </div>
  );
}

function About() {
  const stats = [["12+", "Years in AI, ML & Data Science"], ["5", "Industries served"], ["E2E", "Full AI lifecycle ownership"]];
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-32">
      <SectionHead k="// ABOUT" title="Building AI that holds up in production." />
      <div className="grid gap-16 lg:grid-cols-[1.4fr_1fr]">
        <div className="reveal space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>
            For more than twelve years I've worked across artificial intelligence, machine learning and data science — from classical modelling and computer vision to today's large language models and agentic systems.
          </p>
          <p>
            My focus is the full lifecycle: framing the business problem, shaping the data, designing the architecture, and shipping models that stay reliable once real users depend on them. I work closely with cross-functional teams and enterprise stakeholders to turn ambitious ideas into scalable, maintainable intelligent applications.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {INDUSTRIES.map((i) => (
              <span key={i} className="rounded-full border px-3 py-1 text-sm text-foreground">{i}</span>
            ))}
          </div>
        </div>
        <div className="reveal grid gap-4">
          {stats.map(([n, l]) => (
            <div key={l} className="rounded-2xl glass p-6">
              <div className="font-display text-4xl font-bold text-gradient">{n}</div>
              <div className="mt-1 text-sm text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Expertise() {
  return (
    <section id="expertise" className="relative py-32">
      <div className="pointer-events-none absolute inset-0 bg-glow opacity-60" />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHead k="// TECHNICAL EXPERTISE" title="The stack behind the systems." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((s, idx) => (
            <div key={s.title} style={{ transitionDelay: `${idx * 60}ms` }}
              className={`reveal group rounded-2xl glass p-7 transition-shadow hover:shadow-glow ${idx === 0 ? "lg:col-span-2" : ""}`}>
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <span className="font-mono text-xs text-muted-foreground">{s.tag}</span>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {s.items.map((t) => (
                  <span key={t} className="rounded-md bg-secondary px-2.5 py-1 font-mono text-xs text-secondary-foreground transition-colors group-hover:text-accent">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Focus() {
  return (
    <section id="focus" className="mx-auto max-w-6xl px-6 py-32">
      <SectionHead k="// WHAT I BUILD" title="Areas of focus." />
      <div className="grid gap-px overflow-hidden rounded-2xl border bg-border md:grid-cols-2">
        {FOCUS.map((f, i) => (
          <article key={f.title} className="reveal bg-background p-8 transition-colors hover:bg-card sm:p-10">
            <span className="font-mono text-xs text-accent">0{i + 1}</span>
            <h3 className="mt-4 text-2xl font-semibold">{f.title}</h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">{f.body}</p>
            <div className="mt-6 flex gap-3 font-mono text-xs text-muted-foreground">
              {f.stack.map((s) => <span key={s}>#{s}</span>)}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent("Portfolio enquiry from " + form.name)}&body=${body}`;
  };
  const input = "w-full rounded-xl border bg-input/30 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-ring";
  return (
    <section id="contact" className="relative py-32">
      <div className="pointer-events-none absolute inset-0 bg-glow" />
      <div className="relative mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-2">
        <div className="reveal">
          <p className="font-mono text-xs tracking-[0.3em] text-accent">// CONTACT</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-5xl">Let's build something <span className="text-gradient">intelligent.</span></h2>
          <p className="mt-6 max-w-md text-lg text-muted-foreground">Hiring for a senior AI role, or exploring a Generative AI initiative? I'd be glad to hear about it.</p>
          <div className="mt-8 flex gap-3">
            <Social href={SITE.linkedin} label="LinkedIn"><LinkedInIcon /></Social>
            <Social href={SITE.github} label="GitHub"><GitHubIcon /></Social>
          </div>
        </div>
        <form onSubmit={submit} className="reveal space-y-4 rounded-2xl glass p-8">
          <input required placeholder="Your name" className={input} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          <input required type="email" placeholder="Email address" className={input} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          <textarea required rows={5} placeholder="How can I help?" className={input} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
          <button className="w-full rounded-full bg-gradient-brand py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5">Send message</button>
        </form>
      </div>
    </section>
  );
}

function LinkedInIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C21.6 8.65 22 11.2 22 14.5V21h-4v-5.8c0-1.4-.03-3.2-1.95-3.2-1.95 0-2.25 1.52-2.25 3.1V21h-4V9Z"/></svg>;
}
function GitHubIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.26 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z"/></svg>;
}
