import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problems from "@/components/Problems";
import Features from "@/components/Features";
import Beauty from "@/components/Beauty";
import Recommend from "@/components/Recommend";
import Menu from "@/components/Menu";
import Oshikatsu from "@/components/Oshikatsu";
import Flow from "@/components/Flow";
import Faq from "@/components/Faq";
import Safety from "@/components/Safety";
import Disclaimer from "@/components/Disclaimer";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const metadata = {
  title: "シェアクリ｜自宅からスマホで相談できるオンライン診療（女性向け）",
  description:
    "美容内服・美肌ケア・ダイエットなど気になる悩みを、自宅からスマホで医師に相談。来院不要・お薬は自宅へ配送。OFF-KAi!!提携クリニック「シェアクリ」のオンライン診療。",
};

export default function WomenPage() {
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
