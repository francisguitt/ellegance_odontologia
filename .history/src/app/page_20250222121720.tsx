

'use client';

import Bunner from "@/app/components/buner";
import AboutUs from "@/app/about/page";
import Services from "@/app/services_/page";
import Team from "@/app/team/page";
import Testimonials from "@/app/testimonials/page";
import Contact from "@/app/contacts/page";

export default function Home() {
  return (
    <main className="relative">
      <section id="home" className="min-h-screen ">
        <Bunner />
      </section>

      <section id="about" className="min-h-screen pt-20 md:pt-24">
        <AboutUs />
      </section>

      <section id="services" className="min-h-screen pt-20 md:pt-24">
        <Services />
      </section>

      <section id="team" className="min-h-screen pt-20 md:pt-24">
        <Team />
      </section>

      <section id="testimonials" className="min-h-screen pt-20 md:pt-24">
        <Testimonials />
      </section>

      <section id="contact" className="min-h-screen pt-20 md:pt-24">
        <Contact />
      </section>
    </main>
  );
}
