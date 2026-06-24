import { Link } from "@tanstack/react-router";

const services = [
  {
    type: "Aerial",
    title: "Aerial & Drone",
    desc: "Cinematic drone footage and stills for townships, launches, and progress documentation.",
  },
  {
    type: "Architecture",
    title: "Architecture & Interior",
    desc: "Designed-space photography for completed buildings, show units, and sales galleries.",
  },
  {
    type: "Property",
    title: "Property & Landscape",
    desc: "Twilight shoots, lifestyle angles, and township-wide aerials for marketing collateral.",
  },
  {
    type: "Commercial",
    title: "Commercial & Still Life",
    desc: "Food, product, and brand imagery for hospitality and F&B clients.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative bg-black py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="mint-divider" />
        <div className="grid grid-cols-12 gap-8 pt-16 md:pt-20">
          <div className="col-span-12 md:col-span-5">
            <span className="text-[11px] uppercase tracking-[0.3em] text-primary">
              Disciplines
            </span>
            <h2 className="mt-4 font-display text-4xl font-light text-white md:text-5xl">
              What we <span className="italic text-primary">shoot</span>.
            </h2>
          </div>
          <p className="col-span-12 self-end text-sm leading-relaxed text-white/60 md:col-span-6 md:col-start-7">
            From rooftop to tabletop — four focused practices, one studio.
            Pick the closest fit and start a brief; we'll shape the rest with
            you.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-px bg-white/5 pt-12 md:grid-cols-2 md:pt-16 lg:grid-cols-4">
          {services.map((s, i) => (
            <article
              key={s.type}
              className="fade-up group relative flex flex-col gap-6 bg-black p-8 md:p-10"
              style={{ animationDelay: `${i * 80}ms` }}
              ref={useInView}
            >
              <span className="font-display text-xs text-primary">
                0{i + 1}
              </span>
              <h3 className="font-display text-2xl font-light leading-tight text-white transition-colors group-hover:text-primary md:text-3xl">
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed text-white/60">{s.desc}</p>
              <div className="mt-auto pt-2">
                <Link
                  to="/brief"
                  search={{ type: s.type }}
                  className="inline-flex items-center gap-2 border-b border-primary/40 pb-1 text-xs uppercase tracking-[0.25em] text-primary transition-all hover:border-primary hover:gap-3"
                >
                  Start a brief
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="mint-divider mt-20" />
      </div>
    </section>
  );
}

// Lightweight intersection observer ref-callback
function useInView(node: HTMLElement | null) {
  if (!node) return;
  const obs = new IntersectionObserver(
    ([e]) => {
      if (e.isIntersecting) {
        node.classList.add("in-view");
        obs.disconnect();
      }
    },
    { threshold: 0.3 },
  );
  obs.observe(node);
}