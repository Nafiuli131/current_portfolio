import useReducedMotion from '../hooks/useReducedMotion.js';

/* An engineering drawing of the shape most of these systems take:
   edge -> gateway -> services -> persistence. */

const DEVICES = [
  { id: 'd1', x: 46, y: 62, label: 'sensors' },
  { id: 'd2', x: 46, y: 140, label: 'clients' },
  { id: 'd3', x: 46, y: 218, label: 'events' },
];

const BOXES = [
  { id: 'gw', x: 150, y: 140, label: 'gateway', w: 58 },
  { id: 's1', x: 268, y: 62, label: 'api', w: 58 },
  { id: 's2', x: 268, y: 140, label: 'stream', w: 58 },
  { id: 's3', x: 268, y: 218, label: 'ai', w: 58 },
];

const SINKS = [
  { id: 'st', x: 390, y: 101, label: 'store' },
  { id: 'cl', x: 390, y: 179, label: 'cloud' },
];

const EDGES = [
  { id: 'e1', d: 'M 54 62 H 100 V 140 H 121' },
  { id: 'e2', d: 'M 54 140 H 121' },
  { id: 'e3', d: 'M 54 218 H 100 V 140 H 121' },
  { id: 'e4', d: 'M 179 140 H 224 V 62 H 239' },
  { id: 'e5', d: 'M 179 140 H 239' },
  { id: 'e6', d: 'M 179 140 H 224 V 218 H 239' },
  { id: 'e7', d: 'M 297 62 H 340 V 101 H 372' },
  { id: 'e8', d: 'M 297 140 H 340 V 101 H 372' },
  { id: 'e9', d: 'M 297 140 H 340 V 179 H 372' },
  { id: 'e10', d: 'M 297 218 H 340 V 179 H 372' },
];

/* Packets ride only a few edges — a busy diagram reads as noise, not a system. */
const PACKETS = [
  { edge: 'e2', dur: 3.4, begin: 0 },
  { edge: 'e1', dur: 4.2, begin: 1.1 },
  { edge: 'e5', dur: 3.1, begin: 0.6 },
  { edge: 'e6', dur: 3.8, begin: 1.9 },
  { edge: 'e8', dur: 3.3, begin: 1.4 },
  { edge: 'e10', dur: 4.0, begin: 2.4 },
];

const COLUMNS = [
  { x: 46, label: 'ingest' },
  { x: 150, label: 'route' },
  { x: 268, label: 'process' },
  { x: 390, label: 'persist' },
];

/* Deterministic pseudo-telemetry for the footer trace. */
function waveform(points, width, height) {
  let seed = 7;
  const rand = () => {
    seed = (seed * 1103515245 + 12345) % 2147483648;
    return seed / 2147483648;
  };
  const step = width / (points - 1);
  return Array.from({ length: points }, (_, i) => {
    const base = Math.sin(i / 3.1) * 0.28 + Math.sin(i / 7.7) * 0.17;
    const jitter = (rand() - 0.5) * 0.34;
    const y = height / 2 - (base + jitter) * (height / 2.1);
    return `${(i * step).toFixed(1)},${y.toFixed(1)}`;
  }).join(' ');
}

const TRACE = waveform(72, 300, 36);

export default function SystemTopology() {
  const reduced = useReducedMotion();

  return (
    <div className="panel ticks ticks-on relative overflow-hidden shadow-soft">
      <div className="flex items-center justify-between border-b border-line bg-canvas px-4 py-2.5">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-signal anim-blip" />
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-signal">
            live
          </span>
        </div>
        <span className="font-mono text-[10px] tracking-[0.16em] text-muted">
          system.topology
        </span>
      </div>

      <div className="px-2 pb-1 pt-3 sm:px-4">
        <svg
          viewBox="0 0 440 268"
          className="h-auto w-full"
          role="img"
          aria-label="Architecture diagram: sensors, clients and events flow through a gateway into API, stream and AI services, then into storage and cloud infrastructure."
        >
          {COLUMNS.map((c) => (
            <text
              key={c.label}
              x={c.x}
              y="16"
              textAnchor="middle"
              className="font-mono"
              fontSize="8"
              letterSpacing="1.4"
              className="dg-text"
            >
              {c.label.toUpperCase()}
            </text>
          ))}
          <line x1="16" y1="26" x2="424" y2="26" className="dg-stroke-faint" strokeWidth="1" />

          <g fill="none">
            {EDGES.map((e) => (
              <path key={e.id} id={e.id} d={e.d} className="dg-stroke" strokeWidth="1" />
            ))}
          </g>

          {!reduced &&
            PACKETS.map((p, i) => (
              <circle key={`${p.edge}-${i}`} r="2.6" className="dg-accent">
                <animateMotion
                  dur={`${p.dur}s`}
                  begin={`${p.begin}s`}
                  repeatCount="indefinite"
                  rotate="auto"
                >
                  <mpath href={`#${p.edge}`} />
                </animateMotion>
                <animate
                  attributeName="opacity"
                  values="0;1;1;0"
                  keyTimes="0;0.12;0.85;1"
                  dur={`${p.dur}s`}
                  begin={`${p.begin}s`}
                  repeatCount="indefinite"
                />
              </circle>
            ))}

          {DEVICES.map((d, i) => (
            <g key={d.id}>
              <circle cx={d.x} cy={d.y} r="7" className="dg-surface dg-stroke" strokeWidth="1" />
              <circle cx={d.x} cy={d.y} r="2.4" className="dg-accent">
                {!reduced && (
                  <animate
                    attributeName="opacity"
                    values="0.3;1;0.3"
                    dur="2.8s"
                    begin={`${i * 0.5}s`}
                    repeatCount="indefinite"
                  />
                )}
              </circle>
              <text
                x={d.x}
                y={d.y + 21}
                textAnchor="middle"
                className="font-mono"
                fontSize="8"
                letterSpacing="0.7"
                className="dg-text"
              >
                {d.label}
              </text>
            </g>
          ))}

          {BOXES.map((b) => (
            <g key={b.id}>
              <rect
                x={b.x - b.w / 2}
                y={b.y - 13}
                width={b.w}
                height="26"
                rx="2"
                className="dg-surface dg-stroke"
                strokeWidth="1"
              />
              <rect x={b.x - b.w / 2} y={b.y - 13} width="2" height="26" className="dg-accent" />
              <text
                x={b.x + 3}
                y={b.y + 3}
                textAnchor="middle"
                className="font-mono"
                fontSize="9"
                letterSpacing="0.9"
                className="dg-text-strong"
              >
                {b.label}
              </text>
            </g>
          ))}

          {SINKS.map((s, i) => (
            <g key={s.id}>
              <path
                d={`M ${s.x - 18} ${s.y - 13} h 36 l 6 6 v 20 h -42 v -20 z`}
                className="dg-surface dg-stroke"
                strokeWidth="1"
              />
              <circle cx={s.x + 12} cy={s.y - 4} r="1.8" className="dg-signal">
                {!reduced && (
                  <animate
                    attributeName="opacity"
                    values="0.3;1;0.3"
                    dur="3.4s"
                    begin={`${i * 1.2}s`}
                    repeatCount="indefinite"
                  />
                )}
              </circle>
              <text
                x={s.x - 4}
                y={s.y + 8}
                textAnchor="middle"
                className="font-mono"
                fontSize="8.5"
                letterSpacing="0.8"
                className="dg-text-strong"
              >
                {s.label}
              </text>
            </g>
          ))}
        </svg>
      </div>

      <div className="relative h-[46px] overflow-hidden border-t border-line bg-canvas">
        <div
          className={`absolute inset-y-0 left-0 flex w-[200%] ${reduced ? '' : 'anim-marquee'}`}
          style={{ animationDuration: '34s' }}
          aria-hidden="true"
        >
          {[0, 1].map((k) => (
            <svg
              key={k}
              viewBox="0 0 300 36"
              preserveAspectRatio="none"
              className="h-full w-1/2 shrink-0"
            >
              <polyline
                points={TRACE}
                fill="none"
                className="dg-accent-stroke"
                strokeWidth="1"
                strokeOpacity="0.55"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-4">
          <span className="bg-canvas px-1.5 font-mono text-[9.5px] uppercase tracking-[0.18em] text-muted">
            telemetry
          </span>
          <span className="bg-canvas px-1.5 font-mono text-[9.5px] uppercase tracking-[0.18em] text-muted">
            99.9% uptime
          </span>
        </div>
      </div>
    </div>
  );
}
