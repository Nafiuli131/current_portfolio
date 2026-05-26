import { motion } from 'framer-motion';
import { FiCpu, FiDatabase, FiLayers, FiZap } from 'react-icons/fi';
import Section from './Section.jsx';

const strengths = [
  {
    icon: FiLayers,
    title: 'Backend Architecture',
    body: 'Designing maintainable microservices and clean domain boundaries with Spring Boot, Javalin, and FastAPI.',
  },
  {
    icon: FiZap,
    title: 'Real-Time Systems',
    body: 'WebSocket pipelines, streaming dashboards, and high-throughput data flows — like Pulse — tuned for millisecond latency.',
  },
  {
    icon: FiCpu,
    title: 'AI-Native Features',
    body: 'LangGraph multi-agent workflows, RAG with pgvector + ONNX embeddings, and Spring AI integrations.',
  },
  {
    icon: FiDatabase,
    title: 'Data at Scale',
    body: 'Polyglot persistence across PostgreSQL, MySQL, MS SQL, SQLite, and InfluxDB — with Redis where it earns its keep.',
  },
];

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="A Senior Software Engineer who likes the boring parts of reliability."
      description="I lead Pulse — Cloudly Infotech's industrial IoT monitoring platform — and have spent six years shipping systems that have to actually work in production. Across IoT, healthcare, travel, aviation, and real-time comms, I care most about clean APIs, observable systems, and the small decisions that compound into uptime."
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {strengths.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
            className="group relative overflow-hidden rounded-2xl border border-ink-200 bg-white p-5 transition hover:-translate-y-1 hover:border-brand-300 hover:shadow-md dark:border-white/10 dark:bg-ink-900/60 dark:hover:border-brand-400/40"
          >
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/10 text-brand-600 dark:bg-brand-500/15 dark:text-brand-300">
              <s.icon size={18} />
            </div>
            <h3 className="font-display text-base font-semibold text-ink-900 dark:text-white">
              {s.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed muted">{s.body}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
