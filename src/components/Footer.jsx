import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { profile } from '../data/portfolio.js';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-ink-200 dark:border-white/10">
      <div className="container-x flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
        <div className="flex items-center gap-3 text-sm muted">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 font-display text-[10px] font-bold text-white">
            {profile.initials}
          </span>
          <span>
            © {profile.name} · Senior Software Engineer · Lead Developer, Pulse IoT Platform.
          </span>
        </div>
        <div className="flex items-center gap-2">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="btn-icon h-9 w-9"
          >
            <FiGithub size={16} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="btn-icon h-9 w-9"
          >
            <FiLinkedin size={16} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="btn-icon h-9 w-9"
          >
            <FiMail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
