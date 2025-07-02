import Hero from "@/components/sections/homepage/hero";
import Services from "@/components/sections/homepage/services";
import TrustedBy from "@/components/sections/homepage/trustedBy";

export default function Home() {
  return (
    <main className="min-h-screen section-container">
      <Hero />
      <TrustedBy />
      <Services />
    </main>
  );
}
