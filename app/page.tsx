import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problems from "@/components/Problems";
import Features from "@/components/Features";
import Beauty from "@/components/Beauty";
import Recommend from "@/components/Recommend";
import Menu from "@/components/Menu";
import MedicineMenu from "@/components/MedicineMenu";
import Oshikatsu from "@/components/Oshikatsu";
import Flow from "@/components/Flow";
import Faq from "@/components/Faq";
import Safety from "@/components/Safety";
import Disclaimer from "@/components/Disclaimer";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative w-full overflow-x-hidden bg-white">
      <Header />
      <main>
        <Hero />
        <Problems />
        <Features />
        <Beauty />
        <Recommend />
        <Menu />
        <MedicineMenu />
        <Oshikatsu />
        <Flow />
        <Faq />
        <Safety />
        <Disclaimer />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
