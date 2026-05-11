import Link from "next/link";

const MARQUEE = [
  "100M+ Organic Views",
  "Personal Branding",
  "Podcast Repurposing",
  "Cinematic Edits",
  "YouTube Management",
  "LinkedIn Authority",
] as const;

const SERVICES = [
  ["01", "Personal Branding for Founders", "Positioning, scripting, and authority-building content."],
  ["02", "Instagram & LinkedIn Management", "End-to-end posting, captions, engagement, growth."],
  ["03", "Video Editing Services", "Cinematic, storytelling, meta ads, UGC, AI voiceover."],
  ["04", "Podcast Repurposing", "Full edits, viral clips, carousels, newsletters from one episode."],
  ["05", "UGC Creation", "Employee-led, native, conversion-focused content."],
  ["06", "YouTube Channel Management", "Scripts, edits, thumbnails, SEO — full channel ownership."],
] as const;

const WHY = [
  ["01 / 04", "Strategy first, content second.", "We start by mapping your ICP, positioning, and content pillars. Without strategy, posting is just noise."],
  ["02 / 04", "One recording, full month of content.", "A single 2-hour podcast or sit-down becomes 60+ pieces — clips, carousels, threads, newsletters, posts."],
  ["03 / 04", "Built for retention, not vanity.", "Hooks tested for the first 3 seconds. Cuts paced for max watch-through. Every frame earns its place."],
  ["04 / 04", "Month-to-month. No lock-ins.", "If we're not moving the needle, fire us. We earn renewal every month — and most clients stay 12+."],
] as const;

const STEPS = [
  {
    b: "01",
    n: "Foundation",
    t: "Strategy before output. We map who you are before we ship anything.",
    f: [
      "Content direction, ICP identification, brand positioning",
      "Full Notion content system with pipelines and checklists",
      "Initial scripts and content ideas in 4–5 days",
    ],
  },
  {
    b: "02",
    n: "Execution",
    t: "The system starts producing — at world-class quality.",
    f: [
      "End-to-end video editing & cross-platform posting",
      "Full podcast production — edits, thumbnails, viral clips",
      "20–25 content pieces per month",
    ],
  },
  {
    b: "03",
    n: "Full System",
    t: "A category-defining brand. Compounding every week.",
    f: [
      "Complete project management & account ownership",
      "60+ content pieces per month across every platform",
      "Multi-platform repurposing engine + organic lead gen",
    ],
  },
] as const;

const DELIV = [
  {
    icon: "◆",
    title: "Strategy",
    sub: "Direction · Positioning",
    items: [
      "Brand positioning document",
      "ICP identification & audience mapping",
      "Content pillars & voice guide",
      "30-day content calendar in Notion",
      "Monthly review & strategy call",
    ],
  },
  {
    icon: "▶",
    title: "Production",
    sub: "Scripting · Editing · Posting",
    items: [
      "Full podcast / long-form edits",
      "Viral clips in cinematic, motivational & fast-paced styles",
      "Carousels for LinkedIn & Instagram",
      "Custom thumbnails & cover art",
      "Captions, hooks, and platform-native posting",
      "Newsletter ghostwriting from key takeaways",
    ],
  },
  {
    icon: "↗",
    title: "Growth",
    sub: "Reporting · Optimization",
    items: [
      "Weekly performance dashboards",
      "Monthly analytics report (numbers + next steps)",
      "Hook + cut iteration based on data",
      "Multi-platform repurposing engine",
      "Organic lead generation playbook",
    ],
  },
] as const;

const WORK = [
  ["g1", "CINEMATIC · REEL", "2.4M", "bg-gradient-to-br from-[#ff006e] to-[#8338ec]"],
  ["g2", "PODCAST · LONG-FORM", "890K", "bg-gradient-to-br from-[#f72585] to-[#7c5cff]"],
  ["g3", "STORYTELLING · REEL", "1.5M", "bg-gradient-to-br from-[#4338ca] to-[#06b6d4]"],
  ["g4", "STREET STYLE · INTERVIEW", "1.8M", "bg-gradient-to-br from-[#f72585] to-[#560bad]"],
] as const;

export default function HomePartA() {
  return (
    <>
      <nav
        id="nav"
        className="home-top-nav fixed left-0 right-0 top-0 z-[100] flex items-center justify-between border-b border-transparent bg-[rgba(10,10,10,0.6)] px-5 py-3.5 backdrop-blur-[14px] transition-all duration-300 ease-out md:px-8 md:py-[18px]"
      >
        <Link
          href="/"
          className="logo flex items-center gap-2.5 text-base font-bold tracking-[-0.02em] text-[var(--text)] no-underline"
        >
          <span className="logo-mark flex h-[30px] w-[30px] items-center justify-center rounded-[7px] bg-[var(--accent)] text-[13px] font-extrabold text-white">
            CV
          </span>
          Content Viral Media
        </Link>
        <ul className="nav-links hidden list-none items-center gap-8 text-sm font-medium min-[901px]:flex">
          {(
            [
              ["About", "#about"],
              ["Services", "#services"],
              ["Process", "#process"],
              ["Portfolio", "/portfolio"],
              ["Results", "#results"],
              ["FAQ", "#faq"],
            ] as const
          ).map(([label, href]) => (
            <li key={label}>
              <Link
                href={href}
                className="text-[var(--text-dim)] no-underline transition-colors hover:text-[var(--text)]"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="#inquire"
          className="nav-cta rounded-full bg-[var(--accent)] px-[18px] py-2.5 text-[13px] font-semibold text-white no-underline transition-[transform,box-shadow] hover:-translate-y-px hover:shadow-[0_6px_20px_var(--accent-glow)]"
        >
          Book a Call →
        </Link>
      </nav>

      <section className="hero relative flex min-h-screen flex-col justify-center overflow-hidden px-5 pb-20 pt-[140px] md:px-8">
        <div
          className="hero-grid pointer-events-none absolute inset-0 z-0 bg-[length:60px_60px] [background-image:linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
          aria-hidden
        />
        <div
          className="hero-aurora pointer-events-none absolute left-1/2 top-1/2 z-0 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(124,92,255,0.08),transparent_60%)] blur-[80px]"
          aria-hidden
        />
        <div className="hero-inner relative z-[2] mx-auto w-full max-w-[var(--max-w)]">
          <div className="hero-tag mb-9 inline-flex items-center gap-2.5 rounded-full border border-[var(--border)] bg-[rgba(255,255,255,0.03)] py-2 pl-2.5 pr-3.5 text-[13px] font-medium text-[var(--text-dim)]">
            <span className="hero-tag-dot hero-tag-dot-animate h-2 w-2 rounded-full bg-[var(--accent)] shadow-[0_0_10px_var(--accent)]" />
            <span className="mono">A content agency for founders</span>
          </div>
          <h1 className="mb-9 max-w-[1200px] text-[clamp(48px,7.4vw,116px)] font-extrabold leading-[0.94] tracking-[-0.045em]">
            <span className="strike relative inline-block text-[var(--text-muted)] after:absolute after:left-[-2%] after:right-[-2%] after:top-[52%] after:h-[5px] after:rounded-sm after:bg-[var(--accent)] after:content-[''] after:[transform:rotate(-1.5deg)]">
              Stop posting content.
            </span>
            <br />
            Build a <span className="serif accent-text">system</span> that
            <br />
            makes you impossible to ignore.
          </h1>
          <p className="hero-sub mb-3.5 max-w-[680px] text-[clamp(17px,1.25vw,20px)] leading-[1.55] text-[var(--text-dim)]">
            We turn one recording session into a full month of content — across{" "}
            <strong className="font-semibold text-[var(--text)]">LinkedIn</strong>,{" "}
            <strong className="font-semibold text-[var(--text)]">Instagram</strong> &{" "}
            <strong className="font-semibold text-[var(--text)]">YouTube</strong>. Strategy,
            scripting, editing, posting. We do all of it.
          </p>
          <p className="hero-meta mb-11 text-[15px] text-[var(--text-muted)]">
            You give <strong className="font-semibold text-[var(--accent)]">~2 hours a week.</strong>{" "}
            We handle the rest.
          </p>
          <div className="hero-ctas flex flex-wrap items-center gap-3">
            <Link
              href="#inquire"
              className="btn btn-primary group inline-flex items-center gap-3 rounded-full border-none bg-[var(--accent)] px-7 py-4 text-[15px] font-semibold text-white no-underline transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_var(--accent-glow)]"
            >
              Book a Free 1:1 Call{" "}
              <span className="arrow flex h-[22px] w-[22px] items-center justify-center rounded-full bg-black text-[11px] text-[var(--accent)] transition-transform group-hover:-rotate-45">
                →
              </span>
            </Link>
            <Link
              href="/portfolio"
              className="btn btn-secondary group inline-flex items-center gap-3 rounded-full border border-[var(--border-strong)] bg-transparent px-7 py-4 text-[15px] font-semibold text-[var(--text)] no-underline transition-[transform,background,border-color] hover:border-[rgba(255,255,255,0.3)] hover:bg-[var(--surface)]"
            >
              View Portfolio{" "}
              <span className="arrow flex h-[22px] w-[22px] items-center justify-center rounded-full bg-[var(--text)] text-[11px] text-black transition-transform group-hover:-rotate-45">
                →
              </span>
            </Link>
          </div>
          <div className="hero-trust mt-14 flex flex-wrap items-center gap-4 text-[13px] text-[var(--text-muted)]">
            <div className="avatar-stack flex">
              <div className="ml-0 h-8 w-8 rounded-full border-2 border-[var(--bg)] bg-gradient-to-br from-[#7c5cff] to-[#ec4899] first:ml-0" />
              <div className="-ml-2 h-8 w-8 rounded-full border-2 border-[var(--bg)] bg-gradient-to-br from-[#6366f1] to-[#06b6d4]" />
              <div className="-ml-2 h-8 w-8 rounded-full border-2 border-[var(--bg)] bg-gradient-to-br from-[#a78bfa] to-[#f472b6]" />
              <div className="-ml-2 h-8 w-8 rounded-full border-2 border-[var(--bg)] bg-gradient-to-br from-[var(--accent)] to-[#c084fc]" />
              <div className="-ml-2 flex h-8 w-8 items-center justify-center rounded-full border-2 border-[var(--bg)] bg-[var(--surface)] text-[10px] font-bold text-[var(--accent)]">
                +96
              </div>
            </div>
            <span className="stars tracking-wide text-[var(--accent)]">★★★★★</span>
            <span>
              <strong className="text-[var(--text)]">100+ founders</strong> trust our content engine
            </span>
          </div>
        </div>
      </section>

      <div className="marquee overflow-hidden border-y border-[var(--border)] bg-[var(--bg-2)] py-[22px]">
        <div className="home-marquee-track">
          {[0, 1].map((dup) =>
            MARQUEE.map((t) => (
              <div
                key={`${dup}-${t}`}
                className="marquee-item flex shrink-0 items-center gap-[60px] text-lg font-medium tracking-[-0.01em] text-[var(--text-dim)] after:text-base after:font-medium after:text-[var(--accent)] after:content-['✦']"
              >
                {t}
              </div>
            )),
          )}
        </div>
      </div>

      <section className="stats border-b border-[var(--border)] px-5 py-16 md:px-8 md:py-24">
        <div className="stats-grid mx-auto grid max-w-[var(--max-w)] grid-cols-2 divide-x-0 divide-y divide-[var(--border)] border-b border-[var(--border)] md:grid-cols-4 md:divide-x md:divide-y-0 md:border md:border-[var(--border)]">
          {(
            [
              ["100", "M+", "0M+", "Organic Views Generated"],
              ["100", "+", "0+", "Founders & Creators"],
              ["1000", "+", "0+", "Content Pieces Produced"],
            ] as const
          ).map(([target, suf, initial, label]) => (
            <div key={label} className="stat reveal px-5 py-6 md:px-8 md:py-6">
              <div
                className="stat-number bg-gradient-to-b from-white to-[#777] bg-clip-text text-[clamp(48px,5.5vw,84px)] font-extrabold leading-none tracking-[-0.04em] text-transparent"
                data-target={target}
                data-suffix={suf}
              >
                {initial}
              </div>
              <div className="stat-label mt-3.5 text-xs font-medium uppercase tracking-[0.12em] text-[var(--text-dim)]">
                {label}
              </div>
            </div>
          ))}
          <div className="stat reveal px-5 py-6 md:px-8 md:py-6">
            <div className="flex items-baseline gap-1.5">
              <span className="bg-gradient-to-b from-white to-[#777] bg-clip-text text-[clamp(48px,5.5vw,84px)] font-extrabold leading-none tracking-[-0.04em] text-transparent">
                2+
              </span>
              <span className="text-sm font-medium text-[var(--text-dim)]">years</span>
            </div>
            <div className="stat-label mt-3.5 text-xs font-medium uppercase tracking-[0.12em] text-[var(--text-dim)]">
              Building Brands
            </div>
          </div>
        </div>
      </section>

      <section className="manifesto border-y border-[var(--border)] bg-[var(--bg-2)] px-5 py-24 text-center md:px-8 md:py-40">
        <div className="manifesto-inner mx-auto max-w-[980px]">
          <div className="section-eyebrow mb-7 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-[var(--text-dim)] before:h-px before:w-7 before:bg-[var(--accent)] before:content-['']">
            Manifesto
          </div>
          <h2 className="mb-12 text-[clamp(40px,5.5vw,80px)] font-extrabold leading-none tracking-[-0.04em]">
            Posting isn&apos;t the problem.
            <br />
            <span className="serif accent-text">Strategy is.</span>
          </h2>
          <div className="manifesto-paras mx-auto flex max-w-[720px] flex-col gap-7 text-[clamp(17px,1.4vw,22px)] leading-[1.6] text-[var(--text-dim)]">
            <p>
              Most founders post and pray. They publish into the void, hope something hits, and call it a
              content strategy.
            </p>
            <p>
              It isn&apos;t one.{" "}
              <strong className="font-semibold text-[var(--text)]">A content engine is a system</strong> — it
              knows your audience, your message, and your cadence before a single asset gets shipped.
            </p>
            <p>We build that system. You show up to record. The compounding takes care of itself.</p>
          </div>
        </div>
      </section>

      <section className="section relative px-5 py-20 md:px-8 md:py-[130px]" id="about">
        <div className="section-inner mx-auto max-w-[var(--max-w)]">
          <div className="about-grid grid items-center gap-12 md:grid-cols-[1.3fr_1fr] md:gap-20">
            <div className="about-content">
              <div className="section-eyebrow mb-7 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-[var(--text-dim)] before:h-px before:w-7 before:bg-[var(--accent)] before:content-['']">
                Founder
              </div>
              <h2 className="about-h2 mb-7 text-[clamp(32px,4vw,60px)] font-extrabold leading-[1.05] tracking-[-0.035em]">
                Built by <span className="serif">Garvit Vijay.</span>
              </h2>
              <p className="mb-4 text-[17px] leading-[1.7] text-[var(--text-dim)]">
                Content Viral Media is a full-stack content agency for founders and creators who are done
                posting and praying.
              </p>
              <p className="mb-4 text-[17px] leading-[1.7] text-[var(--text-dim)]">
                We do it all — ideation, scripting, editing, posting, weekly strategy, and end-to-end podcast
                production. We edit your podcast, design thumbnails, cut viral clips in every style, and
                repurpose episodes into carousels, newsletters, and posts across LinkedIn, YouTube, and
                Instagram.
              </p>
              <div className="about-quote mt-8 rounded-r-[var(--radius)] border border-[var(--border)] border-l-[3px] border-l-[var(--accent)] bg-[var(--bg)] px-7 py-6 text-[22px] italic leading-snug [font-family:var(--font-instrument-serif),serif]">
                One recording session.
                <br />
                Dozens of content pieces.
                <br />
                <span className="accent-text">Zero guesswork.</span>
              </div>
            </div>
            <div className="about-photo relative mx-auto aspect-[4/5] w-full max-w-[460px] overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border)] bg-gradient-to-br from-[#1f1f1f] to-[#0a0a0a] md:mx-0">
              <div
                className="pointer-events-none absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[rgba(124,92,255,0.05)] to-transparent text-[clamp(60px,8vw,120px)] italic text-[rgba(255,255,255,0.06)] [font-family:var(--font-instrument-serif),serif]"
                aria-hidden
              >
                GARVIT
              </div>
              <div className="badge absolute bottom-6 left-6 right-6 rounded-[var(--radius)] border border-[var(--border-strong)] bg-[rgba(0,0,0,0.7)] px-[18px] py-3.5 text-[13px] text-[var(--text)] backdrop-blur-[12px]">
                7M+ views generated · Personal Branding Specialist · Jaipur, India
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section border-y border-[var(--border)] bg-[var(--bg-2)] px-5 py-20 md:px-8 md:py-[130px]"
        id="services"
      >
        <div className="section-inner mx-auto max-w-[var(--max-w)]">
          <div className="section-eyebrow mb-7 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-[var(--text-dim)] before:h-px before:w-7 before:bg-[var(--accent)] before:content-['']">
            Services
          </div>
          <h2 className="section-title mb-6 max-w-[940px] text-[clamp(36px,5vw,76px)] font-extrabold leading-none tracking-[-0.035em]">
            Let your brand&apos;s <span className="serif accent-text">vision</span>
            <br />
            become reality.
          </h2>
          <p className="section-subtitle mb-16 max-w-[680px] text-[clamp(17px,1.2vw,20px)] leading-[1.55] text-[var(--text-dim)]">
            Six services. One unified content engine.
          </p>
          <div className="services-list border-t border-[var(--border)]">
            {SERVICES.map(([num, name, desc]) => (
              <Link
                key={num}
                href="#inquire"
                className="service-row group relative grid grid-cols-[60px_1fr_44px] items-center gap-4 border-b border-[var(--border)] py-6 text-[var(--text)] no-underline transition-[padding,background] duration-300 after:absolute after:bottom-[-1px] after:left-0 after:right-0 after:h-px after:origin-left after:scale-x-0 after:bg-[var(--accent)] after:transition-transform after:duration-500 after:[transition-timing-function:cubic-bezier(0.2,0.8,0.2,1)] after:content-[''] hover:bg-[var(--bg-2)] hover:px-4 hover:after:scale-x-100 min-[969px]:grid-cols-[80px_1fr_1.5fr_auto] min-[969px]:gap-8 min-[969px]:px-2 min-[969px]:py-8 min-[969px]:hover:px-6"
              >
                <div className="service-num mono text-sm text-[var(--text-muted)]">{num}</div>
                <div className="service-name text-[clamp(22px,2.4vw,36px)] font-bold leading-tight tracking-[-0.025em]">
                  {name}
                </div>
                <div className="service-desc hidden text-[15px] leading-normal text-[var(--text-dim)] min-[969px]:block">
                  {desc}
                </div>
                <div className="service-arrow flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--border-strong)] text-base text-[var(--text-dim)] transition-all group-hover:rotate-[-45deg] group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-white">
                  →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section why border-y border-[var(--border)] bg-[var(--bg-2)] px-5 py-20 md:px-8 md:py-[130px]"
        id="why"
      >
        <div className="section-inner mx-auto max-w-[var(--max-w)]">
          <div className="section-eyebrow mb-7 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-[var(--text-dim)] before:h-px before:w-7 before:bg-[var(--accent)] before:content-['']">
            Why Founders Pick Us
          </div>
          <h2 className="section-title mb-6 max-w-[940px] text-[clamp(36px,5vw,76px)] font-extrabold leading-none tracking-[-0.035em]">
            Most agencies post.
            <br />
            We <span className="serif accent-text">build systems.</span>
          </h2>
          <p className="section-subtitle mb-2 max-w-[680px] text-[clamp(17px,1.2vw,20px)] leading-[1.55] text-[var(--text-dim)]">
            Anyone can edit a video. Few can engineer a content engine that compounds month after month.
          </p>
          <div className="why-grid mt-2 grid grid-cols-1 gap-4 md:grid-cols-2">
            {WHY.map(([num, title, body]) => (
              <div
                key={num}
                className="why-card reveal relative overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--bg)] p-8 transition-[transform,border-color] hover:-translate-y-1 hover:border-[var(--border-strong)] md:p-9 md:px-9 md:py-10"
              >
                <div className="why-num mono mb-6 text-xs tracking-[0.1em] text-[var(--accent)]">{num}</div>
                <h3 className="mb-4 text-[clamp(22px,2.4vw,32px)] font-bold leading-tight tracking-[-0.025em]">
                  {title}
                </h3>
                <p className="text-base leading-relaxed text-[var(--text-dim)]">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section relative px-5 py-20 md:px-8 md:py-[130px]" id="process">
        <div className="section-inner mx-auto max-w-[var(--max-w)]">
          <div className="section-eyebrow mb-7 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-[var(--text-dim)] before:h-px before:w-7 before:bg-[var(--accent)] before:content-['']">
            How We Work
          </div>
          <h2 className="section-title mb-6 max-w-[940px] text-[clamp(36px,5vw,76px)] font-extrabold leading-none tracking-[-0.035em]">
            We become your remote
            <br />
            content team in <span className="serif accent-text">three steps.</span>
          </h2>
          <p className="section-subtitle mb-14 max-w-[680px] text-[clamp(17px,1.2vw,20px)] leading-[1.55] text-[var(--text-dim)]">
            Foundation → Execution → Full System. Each step builds on the last. We move you through them
            sequentially.
          </p>
          <div className="steps relative mt-14 grid grid-cols-1 gap-4 before:pointer-events-none before:absolute before:left-[5%] before:right-[5%] before:top-[60px] before:z-0 before:h-px before:bg-[linear-gradient(90deg,transparent,var(--accent)_20%,var(--accent)_80%,transparent)] before:opacity-40 before:content-[''] md:grid-cols-3 md:gap-6">
            {STEPS.map((s) => (
              <div
                key={s.b}
                className="step reveal relative z-[1] flex flex-col rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--bg)] p-8 transition-[transform,border-color] hover:-translate-y-1.5 hover:border-[var(--border-strong)] md:px-8 md:pb-10 md:pt-10"
              >
                <div className="step-badge -ml-2 -mt-14 mb-7 flex h-14 w-14 items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--bg)] text-sm font-semibold text-[var(--accent)] mono md:-mt-14">
                  {s.b}
                </div>
                <h3 className="step-name mb-2 text-[clamp(28px,2.8vw,40px)] font-extrabold leading-tight tracking-[-0.03em]">
                  {s.n}
                </h3>
                <p className="step-tagline mb-7 border-b border-[var(--border)] pb-6 text-[15px] leading-normal text-[var(--text-dim)]">
                  {s.t}
                </p>
                <ul className="step-features flex flex-grow list-none flex-col gap-3.5">
                  {s.f.map((li) => (
                    <li key={li} className="flex gap-3 text-[15px] leading-normal text-[var(--text)] before:mt-px before:shrink-0 before:font-semibold before:text-[var(--accent)] before:content-['→']">
                      {li}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="process-note mt-14 text-center text-[17px] text-[var(--text-dim)]">
            <span className="accent-text font-semibold">Month-to-month.</span> No lock-ins. Cancel anytime.
          </div>
        </div>
      </section>

      <section className="section border-y border-[var(--border)] bg-[var(--bg-2)] px-5 py-20 md:px-8 md:py-[130px]">
        <div className="section-inner mx-auto max-w-[var(--max-w)]">
          <div className="section-eyebrow mb-7 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-[var(--text-dim)] before:h-px before:w-7 before:bg-[var(--accent)] before:content-['']">
            What You Get
          </div>
          <h2 className="section-title mb-6 max-w-[940px] text-[clamp(36px,5vw,76px)] font-extrabold leading-none tracking-[-0.035em]">
            Every piece <span className="serif accent-text">delivered.</span>
            <br />
            Nothing in your way.
          </h2>
          <p className="section-subtitle mb-16 max-w-[680px] text-[clamp(17px,1.2vw,20px)] leading-[1.55] text-[var(--text-dim)]">
            A full breakdown of what we ship every month — strategy, production, and growth.
          </p>
          <div className="deliv-grid grid grid-cols-1 gap-4 md:grid-cols-3">
            {DELIV.map((d) => (
              <div
                key={d.title}
                className="deliv-card reveal rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--bg)] p-8 transition-[transform,border-color] hover:-translate-y-1 hover:border-[rgba(124,92,255,0.25)]"
              >
                <div className="deliv-icon mb-5 text-2xl text-[var(--accent)]">{d.icon}</div>
                <h4 className="mb-1 text-xl font-bold tracking-tight">{d.title}</h4>
                <div className="deliv-sub mb-6 text-sm text-[var(--text-muted)]">{d.sub}</div>
                <ul className="deliv-list flex list-none flex-col gap-3 text-[15px] text-[var(--text-dim)]">
                  {d.items.map((li) => (
                    <li key={li} className="relative pl-4 before:absolute before:left-0 before:text-[var(--accent)] before:content-['·']">
                      {li}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section relative px-5 py-20 md:px-8 md:py-[130px]" id="work">
        <div className="section-inner mx-auto max-w-[var(--max-w)]">
          <div className="work-header mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="section-eyebrow mb-7 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-[var(--text-dim)] before:h-px before:w-7 before:bg-[var(--accent)] before:content-['']">
                Selected Work
              </div>
              <h2 className="section-title max-w-[940px] text-[clamp(36px,5vw,76px)] font-extrabold leading-none tracking-[-0.035em]">
                A glimpse of what we <span className="serif accent-text">ship.</span>
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="btn btn-secondary group inline-flex w-fit shrink-0 items-center gap-3 rounded-full border border-[var(--border-strong)] px-7 py-4 text-[15px] font-semibold text-[var(--text)] no-underline hover:bg-[var(--surface)]"
            >
              View Full Portfolio{" "}
              <span className="arrow flex h-[22px] w-[22px] items-center justify-center rounded-full bg-[var(--text)] text-[11px] text-black transition-transform group-hover:-rotate-45">
                →
              </span>
            </Link>
          </div>
          <div className="work-preview reveal grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
            {WORK.map(([_, cat, views, grad]) => (
              <Link key={cat} href="/portfolio" className="work-tile group block no-underline">
                <div
                  className={`work-thumb relative aspect-[9/16] overflow-hidden rounded-[18px] border-[3px] border-[#181818] ${grad} after:pointer-events-none after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.18),transparent_60%)]`}
                >
                  <div className="play absolute left-1/2 top-1/2 z-[2] flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[rgba(255,255,255,0.4)] bg-[rgba(0,0,0,0.65)] text-xs text-white backdrop-blur-sm transition-all group-hover:scale-110 group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)]">
                    ▶
                  </div>
                </div>
                <div className="work-tile-info mt-3 flex items-center justify-between text-[11px] font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                  <span className="work-tile-cat">{cat}</span>
                  <span className="work-tile-views text-[var(--accent)]">{views}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
