import Link from "next/link";

const BIG_NUMS = [
  ["18M", true, "Views on a single account"],
  ["1.6M", false, "Likes generated"],
  ["24.1M", true, "Views in 30 days"],
  ["5.2M", false, "Reach (single brand)"],
  ["10x", true, "Follower growth"],
  ["3,189", false, "Follows from one reel"],
] as const;

const COMPARE_ROWS = [
  ["Strategy + Positioning", "✓ Built-in", "Maybe", "Rarely", "Add-on"],
  ["Cinematic Video Edits", "✓ World-class", "Depends on hire", "Inconsistent", "Often template-based"],
  ["Multi-Platform Posting", "✓ LinkedIn · IG · YT", "Usually 1–2 platforms", "No", "Limited"],
  ["Founder Time Required", "~2 hrs / week", "10+ hrs / week", "5+ hrs / week", "5+ hrs / week"],
  ["Lock-In Contracts", "Month-to-month", "Permanent", "Variable", "3–12 months"],
  ["Speed to First Asset", "4–5 days", "30+ days", "Variable", "2–3 weeks"],
  ["All-In Monthly Cost", "Single retainer", "$8K+ / mo", "Per-project", "High retainer"],
] as const;

const FAQ = [
  [
    "How much time do I actually need to put in?",
    "About two hours a week. Typically that's one recording session (podcast or sit-down) plus a quick approval pass on the content we ship. Everything else — strategy, scripting, editing, posting, repurposing — is on us.",
  ],
  [
    "Do you work with founders outside India?",
    "Yes. We work with founders globally — North America, Europe, India, the Middle East, and SE Asia. Everything's remote, async-friendly, and we adapt timezones for live calls.",
  ],
  [
    "How fast do you start producing content?",
    "Strategy and the first scripts are ready in 4–5 days. First batch of content typically ships in week 2. Full system is humming by week 4.",
  ],
  [
    "What platforms do you cover?",
    "LinkedIn, Instagram, and YouTube as the core three. We also support TikTok, X (Twitter), and email newsletters depending on your level.",
  ],
  [
    "Can I cancel anytime?",
    "Yes. Everything is month-to-month. No lock-ins. If we're not moving the needle, you can fire us with 30 days notice. Most clients stay longer than 12 months because the system compounds.",
  ],
  [
    "Do you guarantee follower growth?",
    "We don't guarantee specific follower numbers — anyone who does is lying. What we do guarantee: a complete content system, world-class production, and a strategy that's compounding by month three.",
  ],
  [
    "What if I'm starting from zero?",
    "That's actually our sweet spot. Multiple clients started under 1,000 followers and crossed 10K within 60–90 days. Zero followers means we get to position you cleanly from day one.",
  ],
  [
    "Who owns the content?",
    "You do. Every script, every edit, every asset. We deliver everything in your Drive / Notion. If we ever part ways, you keep the entire system.",
  ],
] as const;

const TESTS = [
  [
    "t1 bg-gradient-to-br from-[#7c5cff] to-[#ec4899]",
    '"The video edits stop the scroll. Period. ',
    "My retention rate doubled within a month.",
    ` Whatever they're doing, it works."`,
    "Kritika Sharma",
    "@sharmajiinvests · 80K+ followers",
  ],
  [
    "t2 bg-gradient-to-br from-[#6366f1] to-[#06b6d4]",
    '"They turned my podcast into ',
    "my biggest acquisition channel.",
    ` Inbound leads tripled within 90 days. Best money I've spent on content."`,
    "Himanshu Rajpurohit",
    "Founder · Nexera.Health",
  ],
  [
    "t3 bg-gradient-to-br from-[#a78bfa] to-[#f472b6]",
    '"Honestly thought all agencies were the same — these guys are different. ',
    "Strategy actually drives the work.",
    ` Finally."`,
    "Komal Agarwal",
    "Founder · Snackee",
  ],
  [
    "t4 bg-gradient-to-br from-[var(--accent)] to-[#c084fc]",
    '"Two hours a week from me. ',
    "A full month of content from them.",
    ` If you're a founder still trying to do content yourself, you're losing."`,
    "Deepak Keewlani",
    "Founder · CoreFlex",
  ],
  [
    "t5 bg-gradient-to-br from-[#f72585] to-[#7c5cff]",
    '"Before them my brand was invisible. Now ',
    "people DM me about the brand before I open my mouth.",
    ` That's positioning."`,
    "Gabe Einhorn",
    "Founder · Prays + Vryfyid",
  ],
  [
    "t6 bg-gradient-to-br from-[#06b6d4] to-[#4338ca]",
    '"I went from posting once a week to ',
    "15 pieces a week without lifting a finger.",
    ` The team understands my voice better than I do."`,
    "Pankaj Shivnani",
    "Marketing Strategist",
  ],
] as const;

export default function HomePartB() {
  return (
    <>
      <section className="big-numbers overflow-hidden border-y border-[var(--border)] bg-[var(--bg-2)] py-24">
        <div className="animate-scroll-slow flex w-max gap-20 whitespace-nowrap">
          {[0, 1].map((dup) =>
            BIG_NUMS.map(([num, acc, label], i) => (
              <div key={`${dup}-${i}`} className="big-num-item flex items-baseline gap-4">
                <span
                  className={
                    acc
                      ? "big-num-gradient-acc text-[clamp(72px,9vw,140px)] font-black leading-none tracking-[-0.05em]"
                      : "big-num-gradient text-[clamp(72px,9vw,140px)] font-black leading-none tracking-[-0.05em]"
                  }
                >
                  {num}
                </span>
                <span className="text-[clamp(15px,1.2vw,20px)] font-medium text-[var(--text-dim)]">
                  {label}
                </span>
              </div>
            )),
          )}
        </div>
      </section>

      <section className="section relative px-5 py-20 md:px-8 md:py-[130px]" id="results">
        <div className="section-inner mx-auto max-w-[var(--max-w)]">
          <div className="section-eyebrow mb-7 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-[var(--text-dim)] before:h-px before:w-7 before:bg-[var(--accent)] before:content-['']">
            Real Results
          </div>
          <h2 className="section-title mb-6 max-w-[940px] text-[clamp(36px,5vw,76px)] font-extrabold leading-none tracking-[-0.035em]">
            Real founders.
            <br />
            Real numbers. <span className="serif accent-text">No mockups.</span>
          </h2>
          <p className="section-subtitle mb-14 max-w-[680px] text-[clamp(17px,1.2vw,20px)] leading-[1.55] text-[var(--text-dim)]">
            The only metric that matters: did the audience actually grow?
          </p>
          <div className="results-row reveal grid grid-cols-1 gap-4 lg:grid-cols-3">
            {(
              [
                ["@sharmajiinvests", "Kritika Sharma · Finance · Instagram", "7,005", "80.6K", "18M views · 1.6M likes generated"],
                ["@shri_dhanlaxmi_rajputi", "Boutique · 60 days · Instagram", "319", "10K", "1.2M reach in 30 days · UGC-led"],
                ["@gabe_einhorn · @praysstudios", "Faith-based brand · 90 days", "1.2K", "15K", "5.2M reach (Prays) · 4.2M (personal)"],
              ] as const
            ).map(([h, m, b, a, d]) => (
              <div
                key={h}
                className="result-card rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-6 transition-[transform,border-color] hover:-translate-y-1 hover:border-[var(--border-strong)]"
              >
                <div className="result-handle mono text-[13px] font-medium text-[var(--accent)]">{h}</div>
                <div className="result-meta mb-5 text-sm text-[var(--text-dim)]">{m}</div>
                <div className="result-flow mb-4 flex items-center gap-3">
                  <div className="result-stat flex-1 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--bg)] px-4 py-3">
                    <span className="result-num block text-2xl font-extrabold tracking-tight">{b}</span>
                    <span className="result-label text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
                      Before
                    </span>
                  </div>
                  <span className="result-arrow text-xl font-bold text-[var(--accent)]">→</span>
                  <div className="result-stat acc flex-1 rounded-[var(--radius)] border border-[rgba(124,92,255,0.3)] bg-[var(--accent-dim)] px-4 py-3">
                    <span className="result-num block text-2xl font-extrabold tracking-tight text-[var(--accent)]">
                      {a}
                    </span>
                    <span className="result-label text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
                      After
                    </span>
                  </div>
                </div>
                <div className="result-detail text-sm text-[var(--text-dim)]">{d}</div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/portfolio"
              className="btn btn-secondary group inline-flex items-center gap-3 rounded-full border border-[var(--border-strong)] px-7 py-4 text-[15px] font-semibold text-[var(--text)] no-underline hover:bg-[var(--surface)]"
            >
              See All Success Stories{" "}
              <span className="arrow flex h-[22px] w-[22px] items-center justify-center rounded-full bg-[var(--text)] text-[11px] text-black transition-transform group-hover:-rotate-45">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section case relative px-5 py-20 md:px-8 md:py-[130px]">
        <div className="section-inner mx-auto max-w-[var(--max-w)]">
          <div className="section-eyebrow mb-7 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-[var(--text-dim)] before:h-px before:w-7 before:bg-[var(--accent)] before:content-['']">
            Case Study Spotlight
          </div>
          <h2 className="section-title mb-6 max-w-[940px] text-[clamp(36px,5vw,76px)] font-extrabold leading-none tracking-[-0.035em]">
            From{" "}
            <span className="strike relative inline-block text-[var(--text-muted)] after:absolute after:left-[-2%] after:right-[-2%] after:top-[52%] after:h-1 after:rounded-sm after:bg-[var(--accent)] after:content-[''] after:[transform:rotate(-1.5deg)]">
              7,005
            </span>{" "}
            to <span className="serif accent-text">80,600</span> followers.
          </h2>
          <p className="section-subtitle mb-14 max-w-[680px] text-[clamp(17px,1.2vw,20px)] leading-[1.55] text-[var(--text-dim)]">
            How we turned an investor&apos;s Instagram into one of India&apos;s fastest-growing finance brands — in
            eight months.
          </p>
          <div className="case-grid reveal grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div>
              <div className="case-meta mb-4 text-sm text-[var(--text-dim)]">@sharmajiinvests · Instagram · 8 months</div>
              <h3 className="case-h2 mb-6 text-[clamp(24px,3vw,36px)] font-extrabold leading-tight tracking-tight">
                A complete content system. <span className="serif accent-text">10x</span> audience.
              </h3>
              <div className="case-quote rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--bg-2)] p-6 text-lg leading-relaxed text-[var(--text-dim)]">
                &quot;They don&apos;t just edit videos. They built me a brand. Every piece feels intentional, every
                metric improved month over month.&quot;
                <div className="case-quote-author mt-4 text-base font-semibold text-[var(--text)]">
                  Kritika Sharma
                  <span className="mt-1 block text-sm font-normal text-[var(--text-muted)]">
                    Founder · @sharmajiinvests · Private Markets Analyst
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div className="case-results mb-8 grid grid-cols-2 gap-3">
                {(
                  [
                    ["10x", "Follower Growth"],
                    ["18M", "Total Views"],
                    ["1.6M", "Likes Generated"],
                    ["8mo", "Time to Scale"],
                  ] as const
                ).map(([n, l]) => (
                  <div
                    key={l}
                    className="case-result-tile rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4 text-center"
                  >
                    <div className="case-result-num text-2xl font-extrabold text-[var(--accent)]">{n}</div>
                    <div className="case-result-label text-[11px] uppercase tracking-wider text-[var(--text-muted)]">
                      {l}
                    </div>
                  </div>
                ))}
              </div>
              <div className="case-tactics-title mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--text-dim)]">
                What we did
              </div>
              <ul className="case-tactics flex list-none flex-col gap-3 text-[15px] text-[var(--text-dim)]">
                <li className="flex gap-2 before:shrink-0 before:text-[var(--accent)] before:content-['→']">
                  <span>
                    Repositioned her as <em className="text-[var(--text)]">India&apos;s go-to private markets explainer</em>
                  </span>
                </li>
                {(
                  [
                    "Built a hook-first content engine — 4 reels per week",
                    "Custom editing language with finance-native typography",
                    "Repurposed every reel into LinkedIn carousels and threads",
                    "Monthly analytics review → next month's content slate",
                  ] as const
                ).map((li) => (
                  <li key={li} className="flex gap-2 before:shrink-0 before:text-[var(--accent)] before:content-['→']">
                    <span>{li}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section relative px-5 py-20 md:px-8 md:py-[130px]">
        <div className="section-inner mx-auto max-w-[var(--max-w)]">
          <div className="section-eyebrow mb-7 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-[var(--text-dim)] before:h-px before:w-7 before:bg-[var(--accent)] before:content-['']">
            Founders Talk
          </div>
          <h2 className="section-title mb-6 max-w-[940px] text-[clamp(36px,5vw,76px)] font-extrabold leading-none tracking-[-0.035em]">
            Words from the <span className="serif accent-text">people</span>
            <br />
            we&apos;ve built brands with.
          </h2>
          <p className="section-subtitle mb-14 max-w-[680px] text-[clamp(17px,1.2vw,20px)] leading-[1.55] text-[var(--text-dim)]">
            Real partners we ship with weekly. No anonymous &quot;CEO of company X.&quot;
          </p>
          <div className="test-grid reveal grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {TESTS.map(([pic, q1, hl, q2, name, role]) => (
              <div
                key={name}
                className="test-card flex flex-col rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-6 transition-[transform,border-color] hover:-translate-y-1 hover:border-[var(--border-strong)]"
              >
                <div className="test-stars mb-4 text-[var(--accent)]">★★★★★</div>
                <p className="test-quote mb-7 flex-grow text-base leading-relaxed text-[var(--text)]">
                  {q1}
                  <span className="h bg-[linear-gradient(180deg,transparent_60%,rgba(124,92,255,0.25)_60%)]">
                    {hl}
                  </span>
                  {q2}
                </p>
                <div className="test-author flex items-center gap-3 border-t border-[var(--border)] pt-5">
                  <div className={`test-pic h-11 w-11 shrink-0 rounded-full ${pic}`} />
                  <div className="test-author-info">
                    <div className="n text-sm font-semibold">{name}</div>
                    <div className="r text-xs text-[var(--text-muted)]">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section border-y border-[var(--border)] bg-[var(--bg-2)] px-5 py-20 md:px-8 md:py-[130px]"
        id="founders"
      >
        <div className="section-inner mx-auto max-w-[var(--max-w)]">
          <div className="section-eyebrow mb-7 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-[var(--text-dim)] before:h-px before:w-7 before:bg-[var(--accent)] before:content-['']">
            Founders We Work With
          </div>
          <h2 className="section-title mb-6 max-w-[940px] text-[clamp(36px,5vw,76px)] font-extrabold leading-none tracking-[-0.035em]">
            Real <span className="serif accent-text">founders.</span>
            <br />
            Real businesses.
          </h2>
          <p className="section-subtitle mb-14 max-w-[680px] text-[clamp(17px,1.2vw,20px)] leading-[1.55] text-[var(--text-dim)]">
            A few of the brands and people we ship with every week.
          </p>
          <div className="founders-grid reveal grid grid-cols-1 gap-4 md:grid-cols-2">
            {(
              [
                ["f1 bg-gradient-to-br from-[#7c5cff] to-[#ec4899]", "Nikhil Gupta", "portfolio management · finance", "Founder of a stock research firm. We turn deep finance insights into viral content — building trust, authority, and audience across Instagram & LinkedIn."],
                ["f2 bg-gradient-to-br from-[#6366f1] to-[#06b6d4]", "Himanshu Rajpurohit", "nexera.health · shark tank india", "We manage LinkedIn & Instagram for a Shark Tank India founder — keeping post-Tank visibility alive and positioning him as an authority in his niche."],
                ["f3 bg-gradient-to-br from-[#a78bfa] to-[#f472b6]", "Komal Agarwal", "founder · snackee", `21-day "becoming a CEO" journey turned into binge-worthy content — custom scripts, humorous storytelling, and a unique editing style for Snackee.`],
                ["f4 bg-gradient-to-br from-[var(--accent)] to-[#c084fc]", "Deepak Keewlani", "founder · corelex", "Documented his 24-day brand launch — high-converting scripts, custom storytelling voice, and full Instagram management with brand fonts and palette."],
              ] as const
            ).map(([pic, name, role, body]) => (
              <div
                key={name}
                className="founder-card grid grid-cols-[auto_1fr] items-start gap-6 rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-7 transition-[transform,border-color] hover:-translate-y-1 hover:border-[var(--border-strong)] md:gap-7 md:p-9"
              >
                <div className={`founder-pic h-20 w-20 shrink-0 rounded-full border-[3px] border-[var(--accent)] md:h-24 md:w-24 ${pic}`} />
                <div>
                  <h4 className="mb-1 text-2xl font-extrabold tracking-tight">{name}</h4>
                  <div className="founder-role mono mb-3 text-xs uppercase tracking-wide text-[var(--text-muted)]">
                    {role}
                  </div>
                  <p className="text-[14.5px] leading-relaxed text-[var(--text-dim)]">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section compare border-y border-[var(--border)] bg-[var(--bg-2)] px-5 py-20 md:px-8 md:py-[130px]">
        <div className="section-inner mx-auto max-w-[var(--max-w)]">
          <div className="section-eyebrow mb-7 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-[var(--text-dim)] before:h-px before:w-7 before:bg-[var(--accent)] before:content-['']">
            Why Not The Alternatives
          </div>
          <h2 className="section-title mb-6 max-w-[940px] text-[clamp(36px,5vw,76px)] font-extrabold leading-none tracking-[-0.035em]">
            Other options exist.
            <br />
            None of them <span className="serif accent-text">do this.</span>
          </h2>
          <p className="section-subtitle mb-14 max-w-[680px] text-[clamp(17px,1.2vw,20px)] leading-[1.55] text-[var(--text-dim)]">
            Here&apos;s how we stack up against in-house, freelancers, and traditional agencies.
          </p>
          <div className="compare-table-wrap reveal overflow-x-auto rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--bg)]">
            <table className="compare-table w-full min-w-[800px] border-collapse">
              <thead>
                <tr>
                  <th className="border-b border-[var(--border)] bg-[var(--bg-2)] p-5 text-left text-xs font-semibold uppercase tracking-wider text-[var(--text-dim)]" />
                  <th className="us border-b border-[var(--border)] bg-[var(--accent)] p-5 text-left text-xs font-bold uppercase tracking-wider text-white">
                    Content Viral Media
                  </th>
                  <th className="border-b border-[var(--border)] bg-[var(--bg-2)] p-5 text-left text-xs font-semibold uppercase tracking-wider text-[var(--text-dim)]">
                    In-House Hire
                  </th>
                  <th className="border-b border-[var(--border)] bg-[var(--bg-2)] p-5 text-left text-xs font-semibold uppercase tracking-wider text-[var(--text-dim)]">
                    Freelancer
                  </th>
                  <th className="border-b border-[var(--border)] bg-[var(--bg-2)] p-5 text-left text-xs font-semibold uppercase tracking-wider text-[var(--text-dim)]">
                    Other Agencies
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARE_ROWS.map(([feat, us, a, b, c]) => (
                  <tr key={feat}>
                    <td className="compare-feature border-b border-[var(--border)] p-5 text-[15px] font-semibold text-[var(--text)]">
                      {feat}
                    </td>
                    <td className="us border-b border-[var(--border)] bg-[rgba(124,92,255,0.04)] p-5 text-[15px] font-semibold text-[var(--accent)]">
                      {us}
                    </td>
                    <td className="x border-b border-[var(--border)] p-5 text-[15px] text-[var(--text-muted)]">{a}</td>
                    <td className="x border-b border-[var(--border)] p-5 text-[15px] text-[var(--text-muted)]">{b}</td>
                    <td className="x border-b border-[var(--border)] p-5 text-[15px] text-[var(--text-muted)]">{c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section relative px-5 py-20 md:px-8 md:py-[130px]" id="faq">
        <div className="section-inner mx-auto max-w-[var(--max-w)]">
          <div className="section-eyebrow mb-7 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-[var(--text-dim)] before:h-px before:w-7 before:bg-[var(--accent)] before:content-['']">
            Common Questions
          </div>
          <h2 className="section-title mb-6 max-w-[940px] text-[clamp(36px,5vw,76px)] font-extrabold leading-none tracking-[-0.035em]">
            Everything you wanted
            <br />
            to ask, <span className="serif accent-text">answered.</span>
          </h2>
          <p className="section-subtitle mb-14 max-w-[680px] text-[clamp(17px,1.2vw,20px)] leading-[1.55] text-[var(--text-dim)]">
            Still have questions? Book a discovery call and we&apos;ll go deep on your specific use case.
          </p>
          <div className="faq-wrap mx-auto max-w-[880px]">
            {FAQ.map(([q, a]) => (
              <div key={q} className="faq-item cursor-pointer border-b border-[var(--border)] py-7">
                <div className="faq-q flex items-center justify-between gap-6 text-[clamp(18px,1.5vw,22px)] font-semibold tracking-tight text-[var(--text)]">
                  <span>{q}</span>
                  <span className="faq-icon flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--border-strong)] text-lg text-[var(--text-dim)] transition-all">
                    +
                  </span>
                </div>
                <div className="faq-a pr-14 text-base leading-relaxed text-[var(--text-dim)]">{a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="inquire-section relative overflow-hidden px-5 py-20 md:px-8 md:py-[130px]" id="inquire">
        <div
          className="inquire-glow pointer-events-none absolute left-1/2 top-1/2 z-0 h-[1100px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(124,92,255,0.1),transparent_60%)] blur-[60px]"
          aria-hidden
        />
        <div className="inquire-inner relative z-[2] mx-auto grid max-w-[var(--max-w)] grid-cols-1 items-start gap-14 md:grid-cols-[1fr_1.1fr] md:gap-20">
          <div className="inquire-left pt-1">
            <div className="section-eyebrow mb-7 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-[var(--text-dim)] before:h-px before:w-7 before:bg-[var(--accent)] before:content-['']">
              Let&apos;s Work Together
            </div>
            <h2 className="inquire-h2 mb-7 text-[clamp(40px,5vw,80px)] font-extrabold leading-[0.95] tracking-[-0.04em]">
              Book a <span className="serif accent-text">free 1:1</span>
              <br />
              discovery call.
            </h2>
            <p className="inquire-sub mb-9 max-w-[480px] text-[17px] leading-relaxed text-[var(--text-dim)]">
              Limited spots. We only work with brands we can actually move. If we&apos;re not the right fit,
              we&apos;ll tell you on the call.
            </p>
            <ul className="inquire-perks mb-10 flex list-none flex-col gap-3.5">
              {["30-minute discovery call", "Custom plan delivered after", "No pressure, no pitch"].map((t) => (
                <li key={t} className="flex items-center gap-3 text-[15px] text-[var(--text)]">
                  <span className="perk-tick flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-[var(--accent-dim)] text-xs font-bold text-[var(--accent)]">
                    ✓
                  </span>
                  {t}
                </li>
              ))}
            </ul>
            <div className="inquire-contact flex flex-col gap-4 border-t border-[var(--border)] pt-8">
              <a href="mailto:Garvit@contentviralmedia.com" className="contact-line flex flex-col gap-1 no-underline text-[var(--text)] transition-colors hover:text-[var(--accent)]">
                <span className="contact-line-label mono text-[11px] tracking-wider text-[var(--text-muted)]">
                  EMAIL
                </span>
                Garvit@contentviralmedia.com
              </a>
              <a href="tel:+918890603113" className="contact-line flex flex-col gap-1 no-underline text-[var(--text)] transition-colors hover:text-[var(--accent)]">
                <span className="contact-line-label mono text-[11px] tracking-wider text-[var(--text-muted)]">
                  PHONE
                </span>
                +91 8890 603 113
              </a>
              <a
                href="https://instagram.com/growithgarvit"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-line flex flex-col gap-1 no-underline text-[var(--text)] transition-colors hover:text-[var(--accent)]"
              >
                <span className="contact-line-label mono text-[11px] tracking-wider text-[var(--text-muted)]">
                  INSTAGRAM
                </span>
                @growithgarvit
              </a>
            </div>
          </div>
          <div className="inquire-form-wrap relative overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface)] p-7 before:absolute before:left-0 before:right-0 before:top-0 before:h-px before:bg-[linear-gradient(90deg,transparent,var(--accent),transparent)] before:content-[''] md:p-10">
            <form id="inquireForm" className="inquire-form" noValidate>
              <h3 className="form-h3 mb-1 text-2xl font-bold tracking-tight">Tell us about your brand</h3>
              <p className="form-sub mb-7 text-sm text-[var(--text-dim)]">
                We&apos;ll respond from Garvit@contentviralmedia.com within 24 hours.
              </p>
              <div className="form-row grid grid-cols-1 gap-3.5 md:grid-cols-2">
                <div className="form-field mb-4">
                  <label htmlFor="f-name" className="mb-2 block text-xs font-medium uppercase tracking-wider text-[var(--text-dim)]">
                    Full Name
                  </label>
                  <input
                    id="f-name"
                    name="name"
                    type="text"
                    placeholder="Garvit Vijay"
                    required
                    className="w-full rounded-[var(--radius)] border border-[var(--border)] bg-[var(--bg)] px-4 py-3.5 text-[15px] text-[var(--text)] outline-none transition-[border,background] placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] focus:bg-[var(--bg-3)]"
                  />
                </div>
                <div className="form-field mb-4">
                  <label htmlFor="f-email" className="mb-2 block text-xs font-medium uppercase tracking-wider text-[var(--text-dim)]">
                    Email
                  </label>
                  <input
                    id="f-email"
                    name="email"
                    type="email"
                    placeholder="you@brand.com"
                    required
                    className="w-full rounded-[var(--radius)] border border-[var(--border)] bg-[var(--bg)] px-4 py-3.5 text-[15px] text-[var(--text)] outline-none transition-[border,background] placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] focus:bg-[var(--bg-3)]"
                  />
                </div>
              </div>
              <div className="form-field mb-4">
                <label htmlFor="f-phone" className="mb-2 block text-xs font-medium uppercase tracking-wider text-[var(--text-dim)]">
                  Phone Number
                </label>
                <div className="phone-group grid grid-cols-[110px_1fr] gap-2 md:grid-cols-[130px_1fr]">
                  <select
                    id="f-code"
                    name="country-code"
                    className="phone-code w-full cursor-pointer appearance-none rounded-[var(--radius)] border border-[var(--border)] bg-[var(--bg)] px-3 py-3.5 pr-8 text-[15px] text-[var(--text)] outline-none [-webkit-appearance:none] focus:border-[var(--accent)] focus:bg-[var(--bg-3)]"
                  />
                  <input
                    id="f-phone"
                    name="phone"
                    type="tel"
                    placeholder="98765 43210"
                    required
                    className="w-full rounded-[var(--radius)] border border-[var(--border)] bg-[var(--bg)] px-4 py-3.5 text-[15px] text-[var(--text)] outline-none placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] focus:bg-[var(--bg-3)]"
                  />
                </div>
              </div>
              <div className="form-field mb-4">
                <label htmlFor="f-company" className="mb-2 block text-xs font-medium uppercase tracking-wider text-[var(--text-dim)]">
                  Company / Brand
                </label>
                <input
                  id="f-company"
                  name="company"
                  type="text"
                  placeholder="e.g. Nexera.Health"
                  className="w-full rounded-[var(--radius)] border border-[var(--border)] bg-[var(--bg)] px-4 py-3.5 text-[15px] text-[var(--text)] outline-none placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] focus:bg-[var(--bg-3)]"
                />
              </div>
              <div className="form-field mb-4">
                <span className="mb-2 block text-xs font-medium uppercase tracking-wider text-[var(--text-dim)]">
                  I&apos;m interested in
                </span>
                <div className="chip-group flex flex-wrap gap-2">
                  {(
                    [
                      ["personal-branding", "Personal Branding"],
                      ["video-editing", "Video Editing"],
                      ["podcast", "Podcast Repurposing"],
                      ["ig-linkedin", "IG & LinkedIn"],
                      ["youtube", "YouTube"],
                      ["ugc", "UGC"],
                    ] as const
                  ).map(([v, lab]) => (
                    <label
                      key={v}
                      className="chip cursor-pointer rounded-full border border-[var(--border)] bg-[var(--bg)] has-[:checked]:border-[var(--accent)] has-[:checked]:bg-[var(--accent-dim)]"
                    >
                      <input type="checkbox" name="services" value={v} className="peer sr-only" />
                      <span className="block px-4 py-2 text-[13px] font-medium text-[var(--text-dim)] transition-colors peer-checked:text-[var(--text)]">
                        {lab}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="form-field mb-4">
                <label htmlFor="f-budget" className="mb-2 block text-xs font-medium uppercase tracking-wider text-[var(--text-dim)]">
                  Monthly Budget
                </label>
                <select
                  id="f-budget"
                  name="budget"
                  className="w-full rounded-[var(--radius)] border border-[var(--border)] bg-[var(--bg)] px-4 py-3.5 text-[15px] text-[var(--text)] outline-none focus:border-[var(--accent)] focus:bg-[var(--bg-3)]"
                >
                  <option value="">Select a range</option>
                  <option value="under-1k">Under $1,000</option>
                  <option value="1-3k">$1,000 — $3,000</option>
                  <option value="3-7k">$3,000 — $7,000</option>
                  <option value="7k+">$7,000+</option>
                  <option value="discuss">Let&apos;s discuss</option>
                </select>
              </div>
              <div className="form-field mb-4">
                <label htmlFor="f-message" className="mb-2 block text-xs font-medium uppercase tracking-wider text-[var(--text-dim)]">
                  Tell us more
                </label>
                <textarea
                  id="f-message"
                  name="message"
                  rows={4}
                  placeholder="What are you trying to build? What's the audience? What's worked or not worked so far?"
                  className="min-h-[100px] w-full resize-y rounded-[var(--radius)] border border-[var(--border)] bg-[var(--bg)] px-4 py-3.5 text-[15px] leading-normal text-[var(--text)] outline-none placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] focus:bg-[var(--bg-3)]"
                />
              </div>
              <button
                type="submit"
                className="form-submit group mt-2 flex w-full items-center justify-center gap-3 rounded-full border-none bg-[var(--accent)] px-7 py-4 text-[15px] font-semibold text-white transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_var(--accent-glow)]"
              >
                <span>Submit Inquiry</span>
                <span className="arrow flex h-[22px] w-[22px] items-center justify-center rounded-full bg-black text-[11px] transition-transform group-hover:-rotate-45">
                  →
                </span>
              </button>
              <div className="form-success">
                <div className="success-tick mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--accent)] text-[28px] font-bold text-white">
                  ✓
                </div>
                <h4 className="mb-3 text-2xl font-bold tracking-tight">Thanks — your inquiry is in.</h4>
                <p className="text-[15px] leading-relaxed text-[var(--text-dim)]">
                  We&apos;ll review your details and reply within 24 hours from{" "}
                  <strong className="text-[var(--text)]">Garvit@contentviralmedia.com</strong>. Keep an eye on your
                  inbox.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className="home-site-footer overflow-hidden border-t border-[var(--border)] bg-[var(--bg-2)] px-5 pb-10 pt-16 md:px-8 md:pb-10 md:pt-20">
        <div className="footer-inner mx-auto max-w-[var(--max-w)]">
          <div className="footer-mega footer-mega-text mb-14 select-none text-center text-[clamp(48px,12vw,200px)] font-extrabold leading-[0.85] tracking-[-0.04em]">
            Content Viral Media
          </div>
          <div className="footer-top grid grid-cols-2 gap-8 border-b border-[var(--border)] pb-14 md:grid-cols-[2fr_1fr_1fr_1fr] md:gap-12">
            <div className="col-span-2 md:col-span-1">
              <h3 className="mb-4 flex items-center gap-2.5 text-xl font-bold tracking-tight">
                <span className="logo-mark flex h-[30px] w-[30px] items-center justify-center rounded-[7px] bg-[var(--accent)] text-[13px] font-extrabold text-white">
                  CV
                </span>{" "}
                Content Viral Media
              </h3>
              <p className="mb-6 max-w-[360px] text-sm leading-relaxed text-[var(--text-dim)]">
                The remote content team for founders &amp; creators who refuse to stay unknown. Systems, not posts.
                Built by Garvit Vijay.
              </p>
              <div className="footer-socials flex gap-2.5">
                {(
                  [
                    ["https://instagram.com/growithgarvit", "IG", true],
                    ["#", "in", false],
                    ["#", "YT", false],
                    ["#", "𝕏", false],
                  ] as const
                ).map(([href, lab, ext]) => (
                  <a
                    key={lab}
                    href={href}
                    {...(ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="footer-social flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[13px] font-bold text-[var(--text-dim)] no-underline transition-all hover:-translate-y-0.5 hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white"
                  >
                    {lab}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="mb-5 text-xs font-semibold uppercase tracking-wider text-[var(--text-dim)]">Services</h4>
              <ul className="flex list-none flex-col gap-3">
                {["Personal Branding", "IG & LinkedIn Mgmt", "Video Editing", "Podcast Repurposing", "UGC Creation", "YouTube Management"].map(
                  (t) => (
                    <li key={t}>
                      <Link href="#services" className="text-sm text-[var(--text)] no-underline hover:text-[var(--accent)]">
                        {t}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </div>
            <div>
              <h4 className="mb-5 text-xs font-semibold uppercase tracking-wider text-[var(--text-dim)]">Company</h4>
              <ul className="flex list-none flex-col gap-3">
                <li>
                  <Link href="#about" className="text-sm text-[var(--text)] no-underline hover:text-[var(--accent)]">
                    About Garvit
                  </Link>
                </li>
                <li>
                  <Link href="#process" className="text-sm text-[var(--text)] no-underline hover:text-[var(--accent)]">
                    Process
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="text-sm text-[var(--text)] no-underline hover:text-[var(--accent)]">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="#results" className="text-sm text-[var(--text)] no-underline hover:text-[var(--accent)]">
                    Results
                  </Link>
                </li>
                <li>
                  <Link href="#faq" className="text-sm text-[var(--text)] no-underline hover:text-[var(--accent)]">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#inquire" className="text-sm text-[var(--text)] no-underline hover:text-[var(--accent)]">
                    Book a Call
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-5 text-xs font-semibold uppercase tracking-wider text-[var(--text-dim)]">Contact</h4>
              <ul className="flex list-none flex-col gap-3 text-sm">
                <li>
                  <a href="mailto:Garvit@contentviralmedia.com" className="text-[var(--text)] no-underline hover:text-[var(--accent)]">
                    Garvit@contentviralmedia.com
                  </a>
                </li>
                <li>
                  <a href="tel:+918890603113" className="text-[var(--text)] no-underline hover:text-[var(--accent)]">
                    +91 8890 603 113
                  </a>
                </li>
                <li className="text-[var(--text)]">Jaipur, India</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom mt-8 flex flex-wrap items-center justify-between gap-4 text-[13px] text-[var(--text-muted)]">
            <div>© 2026 Content Viral Media · Built by Garvit Vijay</div>
            <div className="footer-bottom-right flex gap-6">
              <a href="#" className="no-underline hover:text-[var(--text)]">
                Privacy
              </a>
              <a href="#" className="no-underline hover:text-[var(--text)]">
                Terms
              </a>
              <Link href="#inquire" className="no-underline hover:text-[var(--text)]">
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
