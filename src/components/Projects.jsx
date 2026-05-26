import Section from './Section.jsx';
import ProjectCard from './ProjectCard.jsx';
import { projects } from '../data/portfolio.js';

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  return (
    <Section
      id="projects"
      eyebrow="Selected Work"
      title="Projects that shipped — and what they actually changed."
      description="The currently-active project is Pulse, where I'm Senior Software Engineer and Lead Developer. Each project is framed by the problem it solved, the design choices behind it, and the measurable outcome it produced."
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {featured.map((p, i) => (
          <ProjectCard key={p.name} project={p} index={i} />
        ))}
      </div>

      {other.length > 0 && (
        <>
          <div className="my-12 flex items-center gap-4">
            <span className="h-px flex-1 bg-ink-200 dark:bg-white/10" />
            <span className="eyebrow">More Work</span>
            <span className="h-px flex-1 bg-ink-200 dark:bg-white/10" />
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {other.map((p, i) => (
              <ProjectCard key={p.name} project={p} index={i} />
            ))}
          </div>
        </>
      )}
    </Section>
  );
}
