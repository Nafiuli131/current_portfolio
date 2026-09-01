import { footer, profile } from '../data/site.js';
import { ArrowUpRight, Github, Linkedin, Scholar } from './Icons.jsx';

const LINKS = [
  { label: 'LinkedIn', href: profile.linkedin, icon: Linkedin },
  { label: 'GitHub', href: profile.github, icon: Github },
  { label: 'Google Scholar', href: profile.scholar, icon: Scholar },
  { label: 'Toolora', href: profile.toolora, icon: null },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-paper">
      <div className="shell py-14 sm:py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <a
              href="#home"
              className="inline-flex items-baseline font-display text-[19px] font-bold tracking-tight text-ink"
            >
              {profile.name}
              <span className="ml-[2px] text-accent">.</span>
            </a>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
              {profile.role}
            </p>
            <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-body">
              {footer.tagline}
            </p>
            <p className="mt-5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-signal">
              <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden="true" />
              {profile.availabilityNote}
            </p>
          </div>

          <nav aria-label="Footer" className="md:text-right">
            <ul className="flex flex-col gap-3 md:items-end">
              {LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-[14px] text-body transition-colors duration-300 hover:text-accent"
                  >
                    {l.icon && (
                      <l.icon
                        width={15}
                        height={15}
                        className="text-muted transition-colors duration-300 group-hover:text-accent"
                      />
                    )}
                    {l.label}
                    <ArrowUpRight
                      width={12}
                      height={12}
                      className="text-muted transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-[14px] text-body transition-colors duration-300 hover:text-accent"
                >
                  {profile.email}
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
            © {year} {profile.name}. All rights reserved.
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
            Designed &amp; built in {profile.location.split(',')[0]}
          </p>
        </div>
      </div>
    </footer>
  );
}
