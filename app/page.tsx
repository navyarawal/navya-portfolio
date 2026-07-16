import { Nav } from "@/components/nav/Nav";
import { Hero } from "@/components/hero/Hero";
import { SelectedWork } from "@/components/work/SelectedWork";
import { Experience } from "@/components/experience/Experience";
import { Leadership } from "@/components/leadership/Leadership";
import { Capabilities } from "@/components/capabilities/Capabilities";
import { Contact } from "@/components/contact/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <SelectedWork />
        <Leadership />
        <Experience />
        <Capabilities />
      </main>
      <Contact />
    </>
  );
}
