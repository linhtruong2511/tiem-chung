import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { VaccineInfoSection } from "@/components/vaccine-info-section";
import { AppointmentSection } from "@/components/appointment-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container">
        <HeroSection />
        <ServicesSection />
        <VaccineInfoSection />
        <AppointmentSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
