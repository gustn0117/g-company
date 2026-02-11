import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Shows from "@/components/Shows";
import Stats from "@/components/Stats";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Shows />
      <Stats />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  );
}
