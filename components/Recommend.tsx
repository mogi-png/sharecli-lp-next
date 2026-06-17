import Container from "@/components/ui/Container";
import { CheckIcon } from "@/components/ui/Icons";

const cards = [
  "推し活前に整えたい",
  "忙しくて通院する時間がない",
  "美容クリニックは少し緊張する",
  "自宅で気軽に相談したい",
];

export default function Recommend() {
  return (
    <section className="bg-brand-pink-pale py-10 lg:py-16">
      <Container>
        <p className="text-center text-xs font-bold tracking-[0.2em] text-brand-pink-deep uppercase">
          FOR YOU
        </p>
        <h2 className="mt-2 text-center font-heading text-[26px] leading-[1.35] font-black text-brand-ink sm:text-[30px] lg:text-[34px]">
          こんな方におすすめ
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:gap-4">
          {cards.map((text) => (
            <div
              key={text}
              className="flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-sm"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-pink-pale">
                <CheckIcon className="h-4 w-4 text-brand-pink-deep" />
              </span>
              <span className="text-[15px] font-bold text-brand-ink">{text}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
