import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload, FiGithub, FiLinkedin, FiMail, FiMapPin } from 'react-icons/fi';
import { profile } from '../data/portfolio.js';

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 sm:pt-40">
      <div className="container-x">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.2fr_1fr]"
        >
          <div>
            {/* Senior Software Engineer */}
            <motion.div variants={item} className="mb-6 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 text-xs font-semibold text-brand-700 dark:border-brand-400/30 dark:bg-brand-400/10 dark:text-brand-200">
                Senior Software Engineer
                <span className="text-brand-400/70 dark:text-brand-300/70">·</span>
                <span className="font-medium opacity-80">6+ yrs</span>
              </span>
            </motion.div>

            <motion.h1 variants={item} className="heading-1">
              <span className="block text-ink-900 dark:text-white">Hi, I'm Nafiul.</span>
              <span className="gradient-text mt-2 block">
                I build resilient backend systems<br className="hidden sm:block" /> and AI-native platforms.
              </span>
            </motion.h1>

            <motion.p variants={item} className="muted mt-6 max-w-2xl text-base sm:text-lg">
              Senior Software Engineer at <span className="font-semibold text-ink-800 dark:text-ink-100">Cloudly Infotech</span>, currently leading <span className="font-semibold text-ink-800 dark:text-ink-100">Pulse</span> — an industrial IoT monitoring platform running thousands of refrigeration sensors at <span className="font-semibold text-brand-600 dark:text-brand-300">99.9% uptime</span>. Six years shipping production systems in Java, Spring Boot, and microservices across IoT, healthcare, travel, and aviation.
            </motion.p>

            <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#projects" className="btn-primary">
                View Projects <FiArrowRight size={16} />
              </a>
              <a href="#contact" className="btn-ghost">
                Get in touch
              </a>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="btn-ghost"
              >
                <FiDownload size={16} /> Resume
              </a>
            </motion.div>

            <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-4 text-sm text-ink-500 dark:text-ink-400">
              <span className="inline-flex items-center gap-2">
                <FiMapPin size={14} /> {profile.location}
              </span>
              <span className="hidden sm:inline">·</span>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-ink-900 dark:hover:text-white"
              >
                <FiGithub size={14} /> GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-ink-900 dark:hover:text-white"
              >
                <FiLinkedin size={14} /> LinkedIn
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 hover:text-ink-900 dark:hover:text-white"
              >
                <FiMail size={14} /> {profile.email}
              </a>
            </motion.div>
          </div>

          <motion.div variants={item} className="relative mx-auto w-full max-w-sm lg:mx-0">
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-6 -z-10 rounded-[2.2rem] bg-gradient-to-br from-brand-500/30 via-brand-400/10 to-transparent blur-2xl"
              />
              <div className="group relative aspect-[4/5] overflow-hidden rounded-3xl border border-ink-200 bg-white shadow-card dark:border-white/10 dark:bg-ink-900">
                <img
                  src={profile.profileImage}
                  alt={`${profile.name} portrait`}
                  loading="eager"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>

            </div>
          </motion.div>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 grid grid-cols-2 gap-4 rounded-2xl border border-ink-200 bg-white/70 p-6 backdrop-blur sm:grid-cols-4 dark:border-white/10 dark:bg-white/[0.03]"
        >
          {profile.highlights.map((h) => (
            <div key={h.label} className="text-center">
              <div className="font-display text-2xl font-bold text-ink-900 sm:text-3xl dark:text-white">
                {h.value}
              </div>
              <div className="mt-1 text-xs text-ink-500 sm:text-sm dark:text-ink-400">{h.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
