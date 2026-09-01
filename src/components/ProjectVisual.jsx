/**
 * Engineering drawings — one per system.
 * Every colour comes from a `.dg-*` role class, so the schematics follow the theme.
 */

const LARGE = '0 0 520 148';
const COMPACT = '0 0 320 150';

function Txt({ x, y, children, anchor = 'start', cls = 'dg-text', size = 8 }) {
  return (
    <text
      x={x}
      y={y}
      textAnchor={anchor}
      className={`font-mono ${cls}`}
      fontSize={size}
      letterSpacing="1.1"
    >
      {children}
    </text>
  );
}

/** Box with the accent spine that marks "a service I wrote". */
function Node({ x, y, w = 76, h = 30, label, sub, spine = true, strong = true }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="2" className="dg-surface dg-stroke" strokeWidth="1" />
      {spine && <rect x={x} y={y} width="2" height={h} className="dg-accent" />}
      <Txt
        x={x + w / 2 + 1}
        y={sub ? y + h / 2 - 1 : y + h / 2 + 3}
        anchor="middle"
        cls={strong ? 'dg-text-strong' : 'dg-text'}
        size="8.5"
      >
        {label}
      </Txt>
      {sub && (
        <Txt x={x + w / 2 + 1} y={y + h / 2 + 9} anchor="middle" size="6.5">
          {sub}
        </Txt>
      )}
    </g>
  );
}

function Arrow({ d, head }) {
  return (
    <g>
      <path d={d} className="dg-stroke" fill="none" />
      {head && <path d={head} className="dg-arrow" fill="none" strokeWidth="1.1" />}
    </g>
  );
}

function Store({ x, y, w = 64, h = 40, label, sub }) {
  return (
    <g>
      <path
        d={`M ${x} ${y} h ${w - 8} l 8 8 v ${h - 8} h ${-w} v ${-(h - 8)} z`}
        className="dg-surface dg-stroke"
        strokeWidth="1"
      />
      <Txt x={x + w / 2 - 2} y={sub ? y + h / 2 - 1 : y + h / 2 + 4} anchor="middle" cls="dg-text-strong">
        {label}
      </Txt>
      {sub && (
        <Txt x={x + w / 2 - 2} y={y + h / 2 + 9} anchor="middle">
          {sub}
        </Txt>
      )}
    </g>
  );
}

function Packet({ path, dur = 3.6, begin = 0 }) {
  return (
    <circle r="2.4" className="dg-accent">
      <animateMotion dur={`${dur}s`} begin={`${begin}s`} repeatCount="indefinite" path={path} />
    </circle>
  );
}

/* ------------------------------------------------------ Toolora: local */

function PrivacyVisual({ animate }) {
  return (
    <svg
      viewBox={LARGE}
      className="h-auto w-full"
      role="img"
      aria-label="Diagram: files are processed inside the browser on the visitor's own device; the upload path to a remote server is cut."
    >
      <rect x="24" y="30" width="300" height="96" rx="3" className="dg-surface dg-stroke" />
      <line x1="24" y1="46" x2="324" y2="46" className="dg-stroke" />
      {[35, 43, 51].map((cx) => (
        <circle key={cx} cx={cx} cy="38" r="2" className="dg-fill-line2" />
      ))}
      <Txt x="66" y="41">BROWSER · LOCAL RUNTIME</Txt>

      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x="44" y={60 + i * 20} width="34" height="14" rx="1.5" className="dg-surface-alt dg-stroke" />
          <line x1="49" y1={65 + i * 20} x2="66" y2={65 + i * 20} className="dg-stroke-faint" strokeWidth="2" />
          <line x1="49" y1={69 + i * 20} x2="72" y2={69 + i * 20} className="dg-stroke-faint" strokeWidth="2" />
        </g>
      ))}

      <Arrow d="M 84 87 H 118" />
      <Node x={126} y={66} w={76} h={42} label="PROCESS" sub="IN-MEMORY" />
      <Arrow d="M 208 87 H 240" />
      <Node x={248} y={72} w={56} h={30} label="OUTPUT" spine={false} />

      {animate && <Packet path="M 84 87 H 118 M 208 87 H 240" />}

      <path d="M 324 78 H 386" className="dg-stroke-faint" strokeDasharray="3 4" fill="none" />
      <path d="M 348 68 l 16 20 M 364 68 l -16 20" className="dg-arrow" strokeWidth="1.4" />
      <g opacity="0.6">
        <path
          d="M 400 88 a 12 12 0 0 1 1 -23 a 16 16 0 0 1 30 4 a 10 10 0 0 1 -2 19 h -29 z"
          className="dg-surface dg-stroke"
        />
        <Txt x="415" y="80" anchor="middle">SERVER</Txt>
      </g>
      <Txt x="415" y="106" anchor="middle">NO UPLOAD</Txt>
    </svg>
  );
}

/* --------------------------------------------- Vault: live telemetry */

const SERIES = (() => {
  let seed = 19;
  const rand = () => {
    seed = (seed * 1103515245 + 12345) % 2147483648;
    return seed / 2147483648;
  };
  return Array.from({ length: 46 }, (_, i) => {
    const x = 150 + i * 8;
    const drift = Math.sin(i / 5.4) * 14 + Math.sin(i / 2.1) * 5;
    return `${x},${(84 - drift - (rand() - 0.5) * 7).toFixed(1)}`;
  }).join(' ');
})();

function IndustrialVisual({ animate }) {
  return (
    <svg
      viewBox={LARGE}
      className="h-auto w-full"
      role="img"
      aria-label="Diagram: refrigeration sensors stream readings over WebSocket into a live chart with an alert threshold, and into a time-series store for history."
    >
      <Txt x="24" y="30">SENSORS</Txt>
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <rect x="24" y={42 + i * 22} width="60" height="16" rx="1.5" className="dg-surface dg-stroke" />
          <circle cx="33" cy={50 + i * 22} r="2.2" className={i === 2 ? 'dg-accent' : 'dg-fill-line2'}>
            {animate && i === 2 && (
              <animate attributeName="opacity" values="0.3;1;0.3" dur="2.4s" repeatCount="indefinite" />
            )}
          </circle>
          <line x1="42" y1={50 + i * 22} x2="76" y2={50 + i * 22} className="dg-stroke-faint" strokeWidth="2" />
          <path d={`M 84 ${50 + i * 22} H 110 V 84 H 132`} className="dg-stroke" fill="none" />
        </g>
      ))}

      <rect x="140" y="30" width="252" height="96" rx="2" className="dg-surface dg-stroke" />
      {[0, 1, 2, 3].map((i) => (
        <line key={i} x1="140" y1={54 + i * 24} x2="392" y2={54 + i * 24} className="dg-stroke-faint" />
      ))}
      <line x1="140" y1="62" x2="392" y2="62" className="dg-accent-stroke" strokeOpacity="0.5" strokeDasharray="4 4" />
      <Txt x="386" y="58" anchor="end" cls="dg-text-accent">THRESHOLD</Txt>
      <polyline points={SERIES} fill="none" className="dg-accent-stroke" strokeWidth="1.4" />
      <Txt x="150" y="120">LIVE + HISTORY · WEBSOCKET</Txt>

      <Arrow d="M 392 78 H 418" />
      <Store x={426} y={52} w={64} h={54} label="TIME" sub="SERIES" />
      {animate && <Packet path="M 392 78 H 418" dur={2.8} />}
    </svg>
  );
}

/* ------------------------------------------ CloudlyCare: grounded AI */

function ClinicalVisual({ animate }) {
  const agents = [
    { x: 126, label: 'PLAN' },
    { x: 208, label: 'RETRIEVE' },
    { x: 290, label: 'RESPOND' },
  ];
  return (
    <svg
      viewBox={LARGE}
      className="h-auto w-full"
      role="img"
      aria-label="Diagram: a FastAPI service drives a LangGraph plan-retrieve-respond agent chain over PostgreSQL, pgvector and Redis, gated by a CI test suite."
    >
      <Txt x="20" y="20">CLINICAL DECISION SUPPORT</Txt>

      <Node x={20} y={52} w={74} h={30} label="FASTAPI" />
      <Arrow d="M 94 67 H 116" head="M 110 63.5 l 5 3.5 l -5 3.5" />

      <rect
        x="118"
        y="32"
        width="250"
        height="70"
        rx="2"
        className="dg-stroke"
        fill="none"
        strokeDasharray="3 4"
      />
      <Txt x="243" y="27" anchor="middle" cls="dg-text-accent">LANGGRAPH · MULTI-AGENT</Txt>

      {agents.map((a, i) => (
        <g key={a.label}>
          <Node x={a.x} y={52} w={70} h={30} label={a.label} />
          {i < 2 && (
            <Arrow
              d={`M ${a.x + 70} 67 H ${a.x + 82}`}
              head={`M ${a.x + 77} 63.5 l 4 3.5 l -4 3.5`}
            />
          )}
          <path d={`M ${a.x + 35} 82 V 106`} className="dg-stroke-faint" strokeDasharray="3 3" fill="none" />
        </g>
      ))}

      <Arrow d="M 368 67 H 390" head="M 384 63.5 l 5 3.5 l -5 3.5" />
      <rect x="396" y="46" width="100" height="42" rx="2" className="dg-surface dg-stroke" />
      <rect x="396" y="46" width="2" height="42" className="dg-signal" />
      <Txt x="447" y="62" anchor="middle" cls="dg-text-strong" size="8.5">553 TESTS</Txt>
      <Txt x="447" y="76" anchor="middle">95% COVERAGE · CI</Txt>

      <rect x="20" y="106" width="348" height="24" rx="2" className="dg-surface-alt dg-stroke" />
      <line x1="136" y1="106" x2="136" y2="130" className="dg-stroke" />
      <line x1="252" y1="106" x2="252" y2="130" className="dg-stroke" />
      <Txt x="78" y="121" anchor="middle" cls="dg-text-strong">POSTGRESQL 16</Txt>
      <Txt x="194" y="121" anchor="middle" cls="dg-text-strong">PGVECTOR</Txt>
      <Txt x="310" y="121" anchor="middle" cls="dg-text-strong">REDIS 7</Txt>
      <Txt x="396" y="121">PERSISTENCE</Txt>

      {animate && <Packet path="M 94 67 H 116 M 196 67 H 208 M 278 67 H 290 M 368 67 H 390" dur={4.4} />}
    </svg>
  );
}

/* --------------------------------------- Travel: cached booking path */

function TravelVisual({ animate }) {
  return (
    <svg
      viewBox={LARGE}
      className="h-auto w-full"
      role="img"
      aria-label="Diagram: a booking request passes OAuth 2.0 authentication, a Redis-cached localization module, and on-demand supplier APIs before reaching PostgreSQL."
    >
      <circle cx="30" cy="75" r="9" className="dg-surface dg-stroke" />
      <circle cx="30" cy="75" r="3" className="dg-accent" />
      <Txt x="30" y="98" anchor="middle">REQUEST</Txt>

      <Arrow d="M 40 75 H 62" head="M 57 71.5 l 4 3.5 l -4 3.5" />
      <Node x={64} y={58} w={84} h={34} label="AUTH" sub="OAUTH 2.0 / JWT" />
      <Arrow d="M 148 75 H 170" head="M 165 71.5 l 4 3.5 l -4 3.5" />
      <Node x={172} y={58} w={104} h={34} label="LOCALIZATION" sub="MULTILINGUAL + FX" />
      <Arrow d="M 276 75 H 298" head="M 293 71.5 l 4 3.5 l -4 3.5" />
      <Node x={300} y={58} w={104} h={34} label="BOOKING" sub="HOTEL INVENTORY" />
      <Arrow d="M 404 75 H 426" head="M 421 71.5 l 4 3.5 l -4 3.5" />
      <Store x={434} y={54} w={62} h={42} label="POSTGRES" />

      {/* cache sits above the localisation path */}
      <rect x="186" y="14" width="78" height="24" rx="2" className="dg-surface dg-stroke" />
      <rect x="186" y="14" width="2" height="24" className="dg-accent" />
      <Txt x="226" y="29" anchor="middle" cls="dg-text-strong">REDIS CACHE</Txt>
      <path d="M 225 38 V 58" className="dg-accent-stroke" strokeDasharray="3 3" fill="none" strokeOpacity="0.6" />
      <Txt x="272" y="50" cls="dg-text-accent">40% ↓ COST</Txt>

      {/* suppliers called on demand */}
      {['AGODA', 'EXPEDIA', 'RAKUTEN'].map((s, i) => (
        <g key={s}>
          <rect x={296 + i * 46} y="112" width="42" height="18" rx="9" className="dg-surface dg-stroke" />
          <Txt x={317 + i * 46} y="124" anchor="middle" size="6">{s}</Txt>
          <path d={`M ${317 + i * 46} 112 V 92`} className="dg-stroke-faint" strokeDasharray="3 3" fill="none" />
        </g>
      ))}
      <Txt x="440" y="124">ON DEMAND</Txt>

      {animate && <Packet path="M 40 75 H 62 M 148 75 H 170 M 276 75 H 298 M 404 75 H 426" dur={4.6} />}
    </svg>
  );
}

/* -------------------------------------- Aircraft: modules on one core */

function AviationVisual({ animate }) {
  const modules = [
    { x: 34, y: 20, label: 'FLIGHT TRACKING', sub: 'REAL-TIME STATUS', d: 'M 168 33 H 200 V 72 H 228' },
    { x: 352, y: 20, label: 'FUEL MANAGEMENT', sub: 'COST ANALYTICS', d: 'M 352 33 H 320 V 72 H 292' },
    { x: 34, y: 104, label: 'FLEET MONITORING', sub: 'INVENTORY', d: 'M 168 117 H 200 V 86 H 228' },
    { x: 352, y: 104, label: 'TOOL MAINTENANCE', sub: 'SERVICE ALERTS', d: 'M 352 117 H 320 V 86 H 292' },
  ];
  return (
    <svg
      viewBox={LARGE}
      className="h-auto w-full"
      role="img"
      aria-label="Diagram: flight tracking, fuel management, fleet monitoring and tool maintenance modules all reading from one MS SQL core."
    >
      {modules.map((m) => (
        <g key={m.label}>
          <rect x={m.x} y={m.y} width="134" height="28" rx="2" className="dg-surface dg-stroke" />
          <rect x={m.x} y={m.y} width="2" height="28" className="dg-accent" />
          <Txt x={m.x + 68} y={m.y + 13} anchor="middle" cls="dg-text-strong" size="8">{m.label}</Txt>
          <Txt x={m.x + 68} y={m.y + 23} anchor="middle" size="6.5">{m.sub}</Txt>
          <path d={m.d} className="dg-stroke" fill="none" />
        </g>
      ))}

      <Store x={228} y={50} w={64} h={48} label="MS SQL" sub="CORE" />

      {animate &&
        modules.map((m, i) => (
          <circle key={m.label} r="2.2" className="dg-accent">
            <animateMotion dur="4s" begin={`${i * 1}s`} repeatCount="indefinite" path={m.d} />
          </circle>
        ))}
    </svg>
  );
}

/* ------------------------------------ Convay: real-time microservices */

function RealtimeVisual({ animate }) {
  const services = [
    { y: 24, label: 'MEETING', sub: 'SCHEDULING' },
    { y: 60, label: 'PARTICIPANT', sub: 'REST API' },
    { y: 96, label: 'SESSION', sub: 'HISTORY' },
  ];
  return (
    <svg
      viewBox={LARGE}
      className="h-auto w-full"
      role="img"
      aria-label="Diagram: browser clients connect through a gateway to meeting, participant and session microservices backed by MySQL, with a live session channel."
    >
      <Txt x="20" y="20">CLIENTS</Txt>
      {[52, 96].map((cy, i) => (
        <g key={cy}>
          <rect x="20" y={cy} width="44" height="30" rx="2" className="dg-surface dg-stroke" />
          <line x1="20" y1={cy + 8} x2="64" y2={cy + 8} className="dg-stroke-faint" />
          <circle cx="42" cy={cy + 19} r="4.5" className="dg-accent" opacity={i === 0 ? 1 : 0.45} />
          <path d={`M 64 ${cy + 15} H 88 V 75 H 104`} className="dg-stroke" fill="none" />
        </g>
      ))}

      <Node x={104} y={58} w={72} h={34} label="GATEWAY" />

      {services.map((s, i) => (
        <g key={s.label}>
          <path d={`M 176 75 H 196 V ${s.y + 14} H 214`} className="dg-stroke" fill="none" />
          <Node x={214} y={s.y} w={98} h={28} label={s.label} sub={s.sub} />
          <path d={`M 312 ${s.y + 14} H 336 V 75 H 356`} className="dg-stroke" fill="none" />
          {animate && (
            <circle r="2.2" className="dg-accent">
              <animateMotion
                dur="4.2s"
                begin={`${i * 1.3}s`}
                repeatCount="indefinite"
                path={`M 176 75 H 196 V ${s.y + 14} H 214`}
              />
            </circle>
          )}
        </g>
      ))}

      <Store x={356} y={54} w={62} h={44} label="MYSQL" />

      <rect x="434" y="58" width="66" height="34" rx="2" className="dg-surface dg-stroke" />
      <circle cx="446" cy="70" r="2.4" className="dg-signal">
        {animate && (
          <animate attributeName="opacity" values="0.3;1;0.3" dur="2.2s" repeatCount="indefinite" />
        )}
      </circle>
      <Txt x="456" y="73" size="7">LIVE</Txt>
      <Txt x="467" y="86" anchor="middle" size="6.5">SESSION FLOW</Txt>
    </svg>
  );
}

/* --------------------------------------------- RAG chatbot: grounding */

function AIVisual({ animate }) {
  const boxes = [
    { x: 24, label: 'QUERY' },
    { x: 148, label: 'RETRIEVE' },
    { x: 272, label: 'GROUND' },
    { x: 396, label: 'ANSWER' },
  ];
  return (
    <svg
      viewBox={LARGE}
      className="h-auto w-full"
      role="img"
      aria-label="Diagram: a query retrieves passages from a pgvector store, grounds the model, and returns a sourced answer; PDFs are ingested as ONNX embeddings."
    >
      {boxes.map((b, i) => (
        <g key={b.label}>
          <Node x={b.x} y={58} w={100} h={34} label={b.label} />
          {i < 3 && (
            <Arrow
              d={`M ${b.x + 100} 75 H ${b.x + 124}`}
              head={`M ${b.x + 118} 71.5 l 5 3.5 l -5 3.5`}
            />
          )}
        </g>
      ))}

      <Txt x="198" y="28" anchor="middle">VECTOR STORE · PGVECTOR</Txt>
      {[0, 1, 2].map((i) => (
        <rect key={i} x={162 + i * 26} y="34" width="18" height="10" rx="1" className="dg-surface dg-stroke">
          {animate && (
            <animate
              attributeName="opacity"
              values="0.35;1;0.35"
              dur="4s"
              begin={`${i * 0.6}s`}
              repeatCount="indefinite"
            />
          )}
        </rect>
      ))}
      <path d="M 198 46 V 58" className="dg-stroke-faint" strokeDasharray="3 3" fill="none" />

      <path d="M 446 92 V 116 H 74 V 92" className="dg-stroke-faint" strokeDasharray="3 4" fill="none" />
      <Txt x="260" y="130" anchor="middle">PDF INGESTION · ONNX EMBEDDINGS · GROQ LLAMA 3.3</Txt>

      {animate &&
        [0, 1, 2].map((i) => (
          <Packet key={i} path="M 124 75 H 148 M 248 75 H 272 M 372 75 H 396" dur={4.2} begin={i * 1.4} />
        ))}
    </svg>
  );
}

/* ------------------------------------- LangGraph: agents over a state */

function AgentsVisual({ animate }) {
  const nodes = [
    { x: 108, label: 'PLAN' },
    { x: 234, label: 'RETRIEVE' },
    { x: 360, label: 'GENERATE' },
  ];
  return (
    <svg
      viewBox={LARGE}
      className="h-auto w-full"
      role="img"
      aria-label="Diagram: a LangGraph workflow where plan, retrieve and generate agents read and write one shared state, with a follow-up loop back to planning."
    >
      <circle cx="34" cy="58" r="9" className="dg-surface dg-stroke" />
      <circle cx="34" cy="58" r="3" className="dg-accent" />
      <Txt x="34" y="82" anchor="middle">INPUT</Txt>
      <Arrow d="M 44 58 H 68" />

      {nodes.map((n, i) => (
        <g key={n.label}>
          <Node x={n.x - 40} y={42} w={80} h={32} label={n.label} />
          <Txt x={n.x + 1} y="34" anchor="middle">{`AGENT 0${i + 1}`}</Txt>
          {i < nodes.length - 1 && (
            <Arrow
              d={`M ${n.x + 40} 58 H ${n.x + 82}`}
              head={`M ${n.x + 76} 54.5 l 5 3.5 l -5 3.5`}
            />
          )}
          <path d={`M ${n.x} 74 V 100`} className="dg-stroke-faint" strokeDasharray="3 3" fill="none" />
        </g>
      ))}

      <Arrow d="M 400 58 H 452" />
      <circle cx="466" cy="58" r="9" className="dg-surface dg-stroke" />
      <circle cx="466" cy="58" r="3" className="dg-accent" />
      <Txt x="466" y="82" anchor="middle">OUTPUT</Txt>

      <rect x="68" y="100" width="332" height="22" rx="2" className="dg-surface-alt dg-stroke" />
      <Txt x="234" y="114" anchor="middle" cls="dg-text-strong">SHARED GRAPH STATE</Txt>

      <path d="M 360 26 V 16 H 108 V 32" className="dg-stroke-faint" strokeDasharray="3 4" fill="none" />
      <path d="M 104 27 l 4 5 l 4 -5" className="dg-arrow" fill="none" strokeWidth="1.1" />
      <Txt x="234" y="13" anchor="middle">FOLLOW-UP LOOP</Txt>

      {animate &&
        [0, 1].map((i) => (
          <Packet key={i} path="M 148 58 H 194 M 274 58 H 320 M 400 58 H 452" dur={4.4} begin={i * 2.2} />
        ))}
    </svg>
  );
}

/* ---------------------------------- compact: ML model comparison ----- */

function MLVisual({ animate }) {
  const bars = [
    { x: 226, h: 30 },
    { x: 250, h: 46 },
    { x: 274, h: 38 },
  ];
  return (
    <svg
      viewBox={COMPACT}
      className="h-auto w-full"
      role="img"
      aria-label="Diagram: a weather dataset is preprocessed, fed into three regression models, and compared on an evaluation chart."
    >
      <rect x="14" y="26" width="76" height="24" rx="2" className="dg-surface dg-stroke" />
      <Txt x="52" y="41" anchor="middle" cls="dg-text-strong">DATASET</Txt>
      <path d="M 52 50 V 64" className="dg-stroke" fill="none" />
      <path d="M 48 59 l 4 5 l 4 -5" className="dg-arrow" fill="none" strokeWidth="1.1" />
      <rect x="14" y="64" width="76" height="24" rx="2" className="dg-surface dg-stroke" />
      <rect x="14" y="64" width="2" height="24" className="dg-accent" />
      <Txt x="52" y="79" anchor="middle" cls="dg-text-strong">PREPROCESS</Txt>

      {[0, 1, 2].map((i) => (
        <g key={i}>
          <path d={`M 90 76 H 100 V ${33 + i * 34} H 112`} className="dg-stroke" fill="none" />
          <rect x="112" y={22 + i * 34} width="84" height="22" rx="2" className="dg-surface dg-stroke" />
          <Txt x="154" y={36 + i * 34} anchor="middle" cls="dg-text-strong" size="7.5">
            {`REGRESSION 0${i + 1}`}
          </Txt>
          <path d={`M 196 ${33 + i * 34} H 208 V 100`} className="dg-stroke-faint" strokeDasharray="3 3" fill="none" />
          {animate && (
            <circle r="2" className="dg-accent">
              <animateMotion
                dur="3.6s"
                begin={`${i * 1.1}s`}
                repeatCount="indefinite"
                path={`M 90 76 H 100 V ${33 + i * 34} H 112`}
              />
            </circle>
          )}
        </g>
      ))}

      <line x1="216" y1="100" x2="306" y2="100" className="dg-stroke" />
      {bars.map((b, i) => (
        <rect
          key={b.x}
          x={b.x}
          y={100 - b.h}
          width="14"
          height={b.h}
          className={i === 1 ? 'dg-accent' : 'dg-fill-line2'}
        />
      ))}
      <Txt x="261" y="114" anchor="middle">EVALUATION</Txt>
      <Txt x="14" y="134">PYTHON · SCIKIT-LEARN · WEKA</Txt>
    </svg>
  );
}

/* ------------------------------------- compact: social UI wireframe -- */

function SocialVisual() {
  return (
    <svg
      viewBox={COMPACT}
      className="h-auto w-full"
      role="img"
      aria-label="Interface sketch: a group page with a cover, feed posts, an events list and a chat panel."
    >
      <rect x="10" y="14" width="300" height="122" rx="3" className="dg-surface dg-stroke" />
      <line x1="10" y1="30" x2="310" y2="30" className="dg-stroke" />
      {[19, 27, 35].map((cx) => (
        <circle key={cx} cx={cx} cy="22" r="2" className="dg-fill-line2" />
      ))}
      <rect x="48" y="18" width="84" height="8" rx="4" className="dg-fill-line" />

      {/* nav rail */}
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x="18" y={40 + i * 14} width="44" height="7" rx="3.5" className="dg-fill-line" />
      ))}

      {/* group cover + feed */}
      <rect x="72" y="38" width="140" height="22" rx="2" className="dg-accent" opacity="0.14" />
      <rect x="78" y="44" width="10" height="10" rx="5" className="dg-accent" />
      <rect x="94" y="45" width="52" height="8" rx="4" className="dg-fill-line2" />
      {[0, 1].map((i) => (
        <g key={i}>
          <rect x="72" y={66 + i * 32} width="140" height="26" rx="2" className="dg-surface dg-stroke" />
          <circle cx="83" cy={75 + i * 32} r="4.5" className="dg-fill-line2" />
          <rect x="93" y={71 + i * 32} width="48" height="6" rx="3" className="dg-fill-line2" />
          <rect x="93" y={81 + i * 32} width="108" height="5" rx="2.5" className="dg-fill-line" />
        </g>
      ))}

      {/* events + chat */}
      <rect x="222" y="38" width="76" height="44" rx="2" className="dg-surface dg-stroke" />
      <Txt x="228" y="49" size="6.5">EVENTS</Txt>
      {[0, 1].map((i) => (
        <rect key={i} x="228" y={56 + i * 11} width="60" height="6" rx="3" className="dg-fill-line" />
      ))}
      <rect x="222" y="88" width="76" height="40" rx="2" className="dg-surface dg-stroke" />
      <Txt x="228" y="99" size="6.5">CHAT</Txt>
      <rect x="228" y="104" width="40" height="8" rx="4" className="dg-fill-line" />
      <rect x="248" y="116" width="44" height="8" rx="4" className="dg-accent" opacity="0.35" />
    </svg>
  );
}

/* ------------------------------------- compact: CRUD UI wireframe ---- */

function CrudVisual() {
  return (
    <svg
      viewBox={COMPACT}
      className="h-auto w-full"
      role="img"
      aria-label="Interface sketch: a restaurant menu table with create, edit and delete actions beside a live order panel."
    >
      <rect x="10" y="14" width="300" height="122" rx="3" className="dg-surface dg-stroke" />
      <line x1="10" y1="34" x2="310" y2="34" className="dg-stroke" />
      <Txt x="20" y="27" cls="dg-text-strong" size="7.5">MENU</Txt>
      <rect x="248" y="19" width="52" height="12" rx="6" className="dg-accent" />
      <text x="274" y="27.5" textAnchor="middle" className="font-mono" fontSize="6" fill="#fff" letterSpacing="0.8">
        + NEW ITEM
      </text>

      {/* table */}
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <rect x="20" y={44 + i * 22} width="176" height="18" rx="2" className={i === 1 ? 'dg-surface-alt' : 'dg-surface'} />
          <rect x="26" y={50 + i * 22} width={62 - i * 6} height="6" rx="3" className="dg-fill-line2" />
          <rect x="118" y={50 + i * 22} width="24" height="6" rx="3" className="dg-fill-line" />
          <rect x="156" y={48 + i * 22} width="10" height="10" rx="2" className="dg-fill-line" />
          <rect x="170" y={48 + i * 22} width="10" height="10" rx="2" className="dg-fill-line" />
          <line x1="20" y1={62 + i * 22} x2="196" y2={62 + i * 22} className="dg-stroke-faint" />
        </g>
      ))}

      {/* order panel */}
      <rect x="208" y="44" width="92" height="84" rx="2" className="dg-surface dg-stroke" />
      <Txt x="216" y="56" size="6.5">ORDER</Txt>
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x="216" y={62 + i * 14} width="50" height="6" rx="3" className="dg-fill-line" />
          <rect x="274" y={62 + i * 14} width="18" height="6" rx="3" className="dg-fill-line2" />
        </g>
      ))}
      <line x1="216" y1="108" x2="292" y2="108" className="dg-stroke" />
      <rect x="216" y="114" width="34" height="8" rx="4" className="dg-fill-line2" />
      <rect x="266" y="114" width="26" height="8" rx="4" className="dg-accent" />
    </svg>
  );
}

const VISUALS = {
  privacy: { C: PrivacyVisual, min: 440 },
  industrial: { C: IndustrialVisual, min: 440 },
  clinical: { C: ClinicalVisual, min: 460 },
  travel: { C: TravelVisual, min: 470 },
  aviation: { C: AviationVisual, min: 450 },
  realtime: { C: RealtimeVisual, min: 450 },
  ai: { C: AIVisual, min: 440 },
  agents: { C: AgentsVisual, min: 440 },
  ml: { C: MLVisual, min: 300 },
  social: { C: SocialVisual, min: 300 },
  crud: { C: CrudVisual, min: 300 },
};

export default function ProjectVisual({ accent, animate = true, className = '' }) {
  const entry = VISUALS[accent];
  if (!entry) return null;
  const { C: Visual, min } = entry;
  return (
    <div
      className={`mask-fade-x overflow-x-auto border border-line bg-canvas sm:mask-none ${className}`}
    >
      <div
        className="min-w-[var(--dg-min)] px-3 py-4 sm:min-w-0 sm:px-5"
        style={{ '--dg-min': `${min}px` }}
      >
        <Visual animate={animate} />
      </div>
    </div>
  );
}
