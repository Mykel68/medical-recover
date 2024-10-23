import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/StatsAndExpert";
import Service from "@/components/Service";
import Testimonial from "@/components/Testimonials"
import NewsletterSignup from "@/components/Newsletter";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Hero />
      <Stats />
      <Service />
      <Testimonial />
      <TeamSection />
      <NewsletterSignup />
      <Footer />
    </div>
  );
}
