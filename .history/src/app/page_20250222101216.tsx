'use client';
import Bunner from "@/app/components/banner";
import AboutUs from "@/app/about/page";
import Services from "@/app/services_/page";
import Team from "@/app/team/page";
import Testimonials from "@/app/testimonials/page";
import Contact from "@/app/contacts/page";


export default function Home() {
  return (
    <main className="relative">
     
      <section id="home">
        <Banner />
      </section>

      <section id="about">
        <AboutUs />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="team">
        <Team />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="contact">
        <Contact />
      </section>

  
    </main>
  );
}
