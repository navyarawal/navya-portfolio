import { Nav } from "@/components/nav/Nav";
import { Hero } from "@/components/hero/Hero";
import { SelectedWork } from "@/components/work/SelectedWork";
import { Experience } from "@/components/experience/Experience";
import { Leadership } from "@/components/leadership/Leadership";
import { Capabilities } from "@/components/capabilities/Capabilities";
import { Contact } from "@/components/contact/Contact";
import { BackgroundLines } from "@/components/ui/BackgroundLines";
import { HashScroll } from "@/components/HashScroll";

export default function Home() {
  return (
    <div className="relative isolate">
      <HashScroll />
      <BackgroundLines />
      {/* BackgroundLines measures this wrapper's own height, not the
          document's — its absolutely-positioned SVG must never be part of
          what it measures itself against (see BackgroundLines.tsx). */}
      <div id="page-content">
        <Nav />
        <main id="main">
          <Hero />
          <SelectedWork />
          <Leadership />
          <Experience />
          <Capabilities />
        </main>
        <Contact />
      </div>
    </div>
  );
}
