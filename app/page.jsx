"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  BadgeCheck,
  Building2,
  Check,
  ChevronRight,
  Gem,
  Hammer,
  Layers3,
  Phone,
  Ruler,
  ShieldCheck,
  Sparkles,
  SquareStack
} from "lucide-react";

const navItems = [
  ["Tile Work", "#tile-work"],
  ["Services", "#services"],
  ["Process", "#process"],
  ["Contact", "#contact"]
];

const services = [
  {
    icon: Layers3,
    title: "Large Format Tile",
    copy: "Premium porcelain slabs, floor-to-wall alignment, leveling systems, and controlled surface transitions."
  },
  {
    icon: ShieldCheck,
    title: "Wet Rooms",
    copy: "Waterproof preparation, shower niches, drains, mitred corners, and tile layouts built for daily use."
  },
  {
    icon: SquareStack,
    title: "Feature Walls",
    copy: "Fireplaces, media walls, commercial accents, stone-effect surfaces, and dramatic architectural finishes."
  },
  {
    icon: Hammer,
    title: "Renovation Finish",
    copy: "Bathroom, kitchen, flooring, drywall, prep, trims, and final details handled around the tile finish."
  }
];

const galleryTiles = [
  "Bookmatched porcelain",
  "Matte black stone",
  "Red geometric floor",
  "Metal trim detail",
  "Wet-room wall tile",
  "Commercial surface"
];

const process = [
  "Site review and measurement",
  "Substrate preparation",
  "Layout and joint planning",
  "Precision installation",
  "Protection and final clean"
];

const metrics = [
  ["Premium", "tile-first identity"],
  ["Sharp", "cuts and grout lines"],
  ["Durable", "prep-led installation"],
  ["Clean", "professional work zones"]
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MetricBar />
        <TileIdentity />
        <Services />
        <Showcase />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="JSR Eagle Construction LTD home">
        <Image src="/jsr-eagle-logo.png" alt="" width={54} height={54} priority />
        <span>JSR Eagle</span>
      </a>

      <nav aria-label="Primary navigation">
        {navItems.map(([label, href]) => (
          <a key={href} href={href}>
            {label}
          </a>
        ))}
      </nav>

      <a className="quote-link" href="#contact">
        <Phone size={16} aria-hidden="true" />
        <span>Book Quote</span>
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="tile-matrix" aria-hidden="true">
        {Array.from({ length: 18 }).map((_, index) => (
          <span key={index} />
        ))}
      </div>

      <div className="hero-copy">
        <p className="eyebrow">Premium tile installation and renovation finishing</p>
        <h1>JSR Eagle Construction LTD</h1>
        <p>
          High-end tiling for bathrooms, wet rooms, floors, kitchens, feature walls,
          fireplaces, commercial interiors, and renovation projects that need a sharper finish.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#contact">
            Start a Project <ArrowUpRight size={18} aria-hidden="true" />
          </a>
          <a className="button button-secondary" href="#tile-work">
            Explore Tile Work <ChevronRight size={18} aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="hero-card" aria-label="JSR Eagle Construction LTD brand mark">
        <div className="hero-card-top">
          <span>Tile • Renovation • Finish</span>
          <BadgeCheck size={18} aria-hidden="true" />
        </div>
        <Image src="/jsr-eagle-logo.png" alt="JSR Eagle Construction LTD logo" width={500} height={500} priority />
        <div className="hero-card-bottom">
          <span>Precision surfaces</span>
          <strong>Premium execution</strong>
        </div>
      </div>
    </section>
  );
}

function MetricBar() {
  return (
    <section className="metric-bar" aria-label="Company strengths">
      {metrics.map(([title, copy]) => (
        <div key={title}>
          <strong>{title}</strong>
          <span>{copy}</span>
        </div>
      ))}
    </section>
  );
}

function TileIdentity() {
  return (
    <section className="tile-identity section" id="tile-work">
      <div className="section-copy">
        <p className="eyebrow">Tile is the signature</p>
        <h2>Built around the lines you notice first.</h2>
        <p>
          JSR Eagle Construction LTD leads with premium tiling: accurate layouts, reliable substrate prep,
          tight grout spacing, clean trims, and strong surface design. The result feels sharp because every
          visible edge is planned before installation starts.
        </p>
        <div className="feature-list">
          {["Large-format porcelain", "Waterproof preparation", "Mitred details", "Commercial-grade finishes"].map(
            (item) => (
              <span key={item}>
                <Check size={16} aria-hidden="true" />
                {item}
              </span>
            )
          )}
        </div>
      </div>
      <div className="tile-board" aria-label="Tile material palette">
        <div className="material material-red">Porcelain</div>
        <div className="material material-silver">Stone Effect</div>
        <div className="material material-black">Matte Black</div>
        <div className="material material-metal">Metal Trim</div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="section services" id="services">
      <div className="section-heading">
        <p className="eyebrow">Core services</p>
        <h2>Premium finish work for serious spaces.</h2>
      </div>
      <div className="service-grid">
        {services.map(({ icon: Icon, title, copy }) => (
          <article className="service-card" key={title}>
            <Icon size={28} aria-hidden="true" />
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Showcase() {
  return (
    <section className="showcase" aria-labelledby="showcase-title">
      <div className="showcase-copy">
        <p className="eyebrow">Surface language</p>
        <h2 id="showcase-title">Red, black, stone, metal. Set with control.</h2>
      </div>
      <div className="showcase-grid">
        {galleryTiles.map((item, index) => (
          <article className={`showcase-tile tile-${index + 1}`} key={item}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{item}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="section process" id="process">
      <div className="process-panel">
        <p className="eyebrow">Execution standard</p>
        <h2>Professional from first measure to final clean.</h2>
        <p>
          Premium tile work depends on the invisible work underneath. JSR Eagle keeps the workflow controlled,
          clean, and accountable so the final finish has the weight of proper preparation behind it.
        </p>
      </div>
      <div className="process-steps">
        {process.map((step, index) => (
          <div key={step}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{step}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="contact-copy">
        <p className="eyebrow">Request a quote</p>
        <h2>Bring the eagle finish to your next tile project.</h2>
        <p>
          Send the room type, tile size, location, and timeline. JSR Eagle Construction LTD can shape the next
          step around tile installation, renovation work, or a full finish package.
        </p>
        <div className="contact-badges">
          <span>
            <Gem size={16} aria-hidden="true" />
            Premium tile
          </span>
          <span>
            <Ruler size={16} aria-hidden="true" />
            Precision layout
          </span>
          <span>
            <Building2 size={16} aria-hidden="true" />
            Residential and commercial
          </span>
        </div>
      </div>
      <form
        className="quote-form"
        onSubmit={(event) => {
          event.preventDefault();
          event.currentTarget.reset();
        }}
      >
        <label>
          Name
          <input name="name" type="text" placeholder="Your name" autoComplete="name" />
        </label>
        <label>
          Phone or email
          <input name="contact" type="text" placeholder="How should we reach you?" autoComplete="email" />
        </label>
        <label>
          Project type
          <select name="project" defaultValue="Premium tile installation">
            <option>Premium tile installation</option>
            <option>Bathroom or wet room</option>
            <option>Floor tiling</option>
            <option>Kitchen or backsplash</option>
            <option>Renovation finish</option>
          </select>
        </label>
        <label>
          Project details
          <textarea name="details" rows={5} placeholder="Location, tile type, room size, timeline..." />
        </label>
        <button className="button button-primary" type="submit">
          Send Request <Sparkles size={18} aria-hidden="true" />
        </button>
      </form>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <span>JSR Eagle Construction LTD</span>
      <span>Premium tile installation and renovation finishes</span>
    </footer>
  );
}
