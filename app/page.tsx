import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CredentialsStrip from "@/components/CredentialsStrip";
import Manifesto from "@/components/Manifesto";
import PhotoBreak from "@/components/PhotoBreak";
import Founder from "@/components/Founder";
import OutcomesTabs from "@/components/OutcomesTabs";
import OfferCards from "@/components/OfferCards";
import Quiz from "@/components/Quiz";
import EmailCapture from "@/components/EmailCapture";
import PodcastGrid from "@/components/PodcastGrid";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <CredentialsStrip />
        <Manifesto />
        <PhotoBreak />
        <Founder />
        <OutcomesTabs />
        <OfferCards />
        <Quiz />
        <EmailCapture />
        <PodcastGrid />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
