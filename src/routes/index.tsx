import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

// Edit these values to update links and status across the site.
const SITE = {
  name: "Raghuram Butti",
  email: "raghurambutti169@gmail.com",
  phone: "+1 630-742-0988",
  linkedin: "https://www.linkedin.com/in/raghuram321",
  github: "https://github.com/raghurambutti",
  resumeUrl: "",
  available: true,
  availability: "Open to Data Engineering & AI roles",
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Raghuram Butti — Data Engineer & AI Agent Builder" },
      { name: "description", content: "Data Engineer with 4+ years building ETL/ELT pipelines on AWS, Azure and Snowflake, plus multi-agent LLM systems with LangGraph and Claude." },
      { property: "og:title", content: "Raghuram Butti — Data Engineer & AI Agent Builder" },
      { property: "og:description", content: "Scalable data pipelines at Elevance Health, Visa and Target, and agentic AI prototypes with LangGraph and Claude." },
    ],
  }),
  component: Index,
});

const NAV = [
  ["About", "about"],
  ["Experience", "experience"],
  ["Projects", "projects"],
  ["Skills", "expertise"],
  ["Contact", "contact"],
] as const;

const SKILLS: { title: string; tag: string; items: string[] }[] = [
  { title: "Languages & Querying", tag: "01", items: ["Python", "SQL", "PySpark", "JavaScript", "TypeScript"] },
  { title: "Cloud Platforms", tag: "02", items: ["AWS S3", "Glue", "Athena", "Lambda", "Redshift", "EMR", "IAM", "Azure ADLS", "Synapse", "Snowflake", "GCP"] },
  { title: "Data Engineering", tag: "03", items: ["ETL/ELT Pipelines", "API Integrations", "Data Modeling", "Data Warehousing", "Data Quality", "Data Governance"] },
  { title: "Big Data & Streaming", tag: "04", items: ["Apache Spark", "Kafka", "Hadoop", "Apache Flink", "Databricks", "Airflow"] },
  { title: "AI & Agents", tag: "05", items: ["LangGraph", "LangChain", "Claude", "Pydantic", "Streamlit", "SageMaker"] },
  { title: "DevOps & CI/CD", tag: "06", items: ["Git", "Docker", "Kubernetes", "Jenkins", "Terraform", "Azure DevOps", "GitHub Actions"] },
  { title: "Monitoring & Visualization", tag: "07", items: ["Dynatrace", "Splunk", "KMS", "Power BI", "Tableau", "QuickSight"] },
];

const EXPERIENCE = [
  { company: "Elevance Health", place: "GA · Remote", role: "Data Engineer", when: "Apr 2025 – Present", points: [
    "Design and maintain ETL/ELT pipelines in Python, PySpark and SQL with AWS Glue, loading large datasets into Redshift and Snowflake.",
    "Integrate S3, Glue, Athena and Lambda with Palantir Foundry through reusable data connections.",
    "Automated recurring workflows with Python, Control-M and Airflow — 40% better processing efficiency.",
    "End-to-end monitoring with Dynatrace and Splunk; dashboards in Power BI, QuickSight and Foundry Workshop.",
  ]},
  { company: "Visa", place: "MO · Remote", role: "Data Engineer", when: "Aug 2023 – Mar 2025", points: [
    "Built ETL workflows in Python, PySpark, Java and Scala loading curated data into Snowflake and Redshift.",
    "Real-time and batch pipelines with Kafka, Hadoop and Apache Flink for retail analytics.",
    "ReactJS/TypeScript front-ends delivering Power BI and QuickSight analytics to business users.",
    "Automated CI/CD with Jenkins, Terraform and Azure DevOps into Azure Data Lake and Snowflake.",
  ]},
  { company: "Target", place: "Bengaluru · Onsite", role: "Data Engineer", when: "Sep 2021 – Jun 2023", points: [
    "High-performance pipelines with Kafka, Azure Synapse and Databricks.",
    "Led migration from on-prem SQL Server to Azure Data Lake and Snowflake with minimal downtime.",
    "CI/CD pipelines with Git, Terraform, Jenkins and Azure DevOps; Tableau and Power BI reporting.",
  ]},
  { company: "Target", place: "Bengaluru · Onsite", role: "Data Engineer — Internship", when: "Mar 2021 – Aug 2021", points: [
    "Supported pipeline builds, SQL Server to Azure/Snowflake migration and CI/CD automation.",
  ]},
];

const FOCUS = [
  { title: "Prior Authorization Review Copilot", body: "Three-agent LangGraph prototype that reads prior-auth packets, extracts clinical facts with citation-checked quotes from Claude, checks them against policy and gives nurses a one-page brief. The AI never approves or denies; PHI masking, prompt-injection filtering and a SHA-256 hash-chained audit log built in.", stack: ["LangGraph", "Claude", "Streamlit", "pytest"], repo: "https://github.com/raghurambutti/Insurancecase" },
  { title: "Ola AI Data Agent", body: "Multi-agent assistant that routes plain-English questions to a SQL Analyst or ETL Analyst. Generated SQL passes an LLM judge, then runs read-only with a 15s timeout. 61,073 sample rows, 28 pytest tests in GitHub Actions.", stack: ["LangGraph", "PostgreSQL", "Pydantic", "GitHub Actions"], repo: "https://github.com/raghurambutti/Ola_Data_Agent" },
  { title: "FACTS Transmission Protection", body: "Real-time fault detection for power-grid infrastructure, deploying predictive models via SageMaker and IoT Core for autonomous grid protection.", stack: ["MATLAB", "AWS Lambda", "SageMaker", "IoT Core"], repo: "" },
];

const EDUCATION = [
  ["Master of Science, Information Systems and Management", "Saint Louis, USA · Mar 2023"],
  ["Bachelor of Engineering", "Kakatiya Institute of Technology and Science, India · Jun 2022"],
];
const CERTS = [
  "Google Cloud Professional Machine Learning Engineer · Jan 2026",
  "Google Cloud Professional Cloud Developer · Oct 2026",
  "AWS Certified Cloud Practitioner",
  "Generative AI — Coursera",
];

const INDUSTRIES = ["Healthcare", "Payments", "Retail"];

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
      <Experience />
      <Focus />
      <Expertise />
      <Education />
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
        <line key={i} x1={nodes[a]![0]} y1={nodes[a]![1]} x2={nodes[b]![0]} y2={nodes[b]![1]}
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
          <p className="mt-3 text-sm text-muted-foreground">Data Engineer · AWS & GCP Certified · Agentic AI Builder</p>
          <h1 className="mt-6 text-4xl font-bold leading-[1.08] sm:text-6xl">
            Reliable data pipelines. <span className="text-gradient">Grounded AI agents on top.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            4+ years building ETL/ELT pipelines on AWS, Azure and Snowflake at Elevance Health, Visa and Target — and multi-agent LLM systems with LangGraph and Claude that stay safe, cited and auditable.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a href="#projects" className="rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5">View My Projects</a>
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
  const stats = [["4+", "Years in data engineering"], ["40%", "Efficiency gain via workflow automation"], ["4", "AWS & Google Cloud certifications"]];
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-32">
      <SectionHead k="// ABOUT" title="Data that's clean, governed and ready for AI." />
      <div className="grid gap-16 lg:grid-cols-[1.4fr_1fr]">
        <div className="reveal space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>I'm a Data Engineer with 4+ years of experience and a Master's in Information Systems and Management. I design scalable ETL/ELT pipelines in Python, PySpark and SQL across AWS, Azure and Snowflake, with monitoring and security built in.</p>
          <p>Lately I've been building agentic AI on top of that foundation: a three-agent LangGraph copilot for healthcare prior authorization with citation-checked extraction using Claude, and a multi-agent data assistant that answers plain-English questions with safety-checked SQL on PostgreSQL.</p>
          <div className="flex flex-wrap gap-2 pt-2">
            {INDUSTRIES.map((i) => (<span key={i} className="rounded-full border px-3 py-1 text-sm text-foreground">{i}</span>))}
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

function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-32">
      <SectionHead k="// EXPERIENCE" title="Where I've shipped." />
      <ol className="relative space-y-10 border-l pl-8">
        {EXPERIENCE.map((e) => (
          <li key={e.company + e.when} className="reveal relative">
            <span className="absolute -left-[37px] top-2 h-3 w-3 rounded-full bg-accent shadow-glow" />
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-2xl font-semibold">{e.company} <span className="text-base font-normal text-muted-foreground">· {e.role}</span></h3>
              <span className="font-mono text-xs text-accent">{e.when}</span>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">{e.place}</p>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              {e.points.map((p) => (<li key={p} className="leading-relaxed">— {p}</li>))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-6 py-32">
      <SectionHead k="// EDUCATION & CERTIFICATIONS" title="Credentials." />
      <div className="grid gap-5 md:grid-cols-2">
        <div className="reveal space-y-4 rounded-2xl glass p-7">
          {EDUCATION.map(([d, w]) => (<div key={d}><h3 className="font-semibold">{d}</h3><p className="text-sm text-muted-foreground">{w}</p></div>))}
        </div>
        <ul className="reveal space-y-3 rounded-2xl glass p-7">
          {CERTS.map((c) => (<li key={c} className="text-sm"><span className="text-accent">✓</span> {c}</li>))}
        </ul>
      </div>
    </section>
  );
}

function Expertise() {
  return (
    <section id="expertise" className="relative py-32">
      <div className="pointer-events-none absolute inset-0 bg-glow opacity-60" />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHead k="// CORE SKILLS" title="The stack behind the systems." />
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
    <section id="projects" className="mx-auto max-w-6xl px-6 py-32">
      <SectionHead k="// PROJECTS" title="Agentic AI, built carefully." />
      <div className="grid gap-px overflow-hidden rounded-2xl border bg-border md:grid-cols-2">
        {FOCUS.map((f, i) => (
          <article key={f.title} className="reveal bg-background p-8 transition-colors hover:bg-card sm:p-10">
            <span className="font-mono text-xs text-accent">0{i + 1}</span>
            <h3 className="mt-4 text-2xl font-semibold">{f.title}</h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">{f.body}</p>
            <div className="mt-6 flex gap-3 font-mono text-xs text-muted-foreground">
              {f.stack.map((s) => <span key={s}>#{s}</span>)}
            </div>
            {f.repo && (
              <a
                href={f.repo}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-6 inline-flex items-center gap-2 font-mono text-xs text-accent underline-offset-4 transition-colors hover:underline"
              >
                View the code <span aria-hidden="true">→</span>
              </a>
            )}
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
          <p className="mt-6 max-w-md text-lg text-muted-foreground">Hiring for a data engineering or AI role? Reach me at {SITE.email} or {SITE.phone}.</p>
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
