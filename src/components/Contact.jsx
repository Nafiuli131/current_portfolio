import { motion } from 'framer-motion';
import { FiArrowRight, FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';
import Section from './Section.jsx';
import { profile } from '../data/portfolio.js';

const channels = [
  { icon: FiMail,     label: 'Email',    value: profile.email,                          href: `mailto:${profile.email}` },
  { icon: FiLinkedin, label: 'LinkedIn', value: 'linkedin.com/in/nafiul-islam-849265129', href: profile.linkedin },
  { icon: FiGithub,   label: 'GitHub',   value: 'github.com/Nafiuli131',                  href: profile.github },
  { icon: FiPhone,    label: 'Phone',    value: profile.phone,                           href: `tel:${profile.phone.replace(/\s/g, '')}` },
];

export default function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Hire a Senior Software Engineer who's shipped."
      description="I'm open to senior backend, full-stack, and AI engineering roles — remote-friendly. Currently leading Pulse at Cloudly Infotech. The fastest way to reach me is email."
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {channels.map((c, i) => (
          <motion.a
            key={c.label}
            href={c.href}
            target={c.href.startsWith('http') ? '_blank' : undefined}
            rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            className="group flex items-start gap-4 rounded-2xl border border-ink-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-md dark:border-white/10 dark:bg-ink-900/60 dark:hover:border-brand-400/40"
          >
            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-500/10 text-brand-600 dark:bg-brand-500/15 dark:text-brand-300">
              <c.icon size={18} />
            </span>
            <div className="min-w-0 flex-1">
              <div className="text-xs font-semibold uppercase tracking-wider muted">
                {c.label}
              </div>
              <div className="mt-0.5 break-all text-[12.5px] font-medium leading-snug text-ink-900 dark:text-white">
                {c.value}
              </div>
            </div>
            <FiArrowRight
              className="mt-1 shrink-0 text-ink-400 transition group-hover:translate-x-0.5 group-hover:text-brand-500"
              size={16}
            />
          </motion.a>
        ))}
      </div>
    </Section>
  );
}
