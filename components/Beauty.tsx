import Image from "next/image";
import Container from "@/components/ui/Container";
import { SparkleIcon } from "@/components/ui/Icons";

const items = ["美肌", "美白", "ニキビ", "肌荒れ"];

export default function Beauty() {
  return (
    <section className="bg-linear-to-br from-brand-pink-pale via-white to-brand-purple-pale py-10 lg:py-16">
      <Container>
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-16">

          {/* 画像 — PC: 右, SP: 上 */}
          <div className="w-full lg:order-2 lg:flex-1">
            <div className="relative mx-auto aspect-[4/3] w-full max-w-[480px] overflow-hidden rounded-3xl shadow-md lg:max-w-none">
              <Image
                src="/images/beauty.webp"
                alt="美容内服・スキンケアサプリのイラスト"
                fill
                quality={90}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* テキスト — PC: 左, SP: 下 */}
          <div className="w-full lg:order-1 lg:flex-1">
            <p className="text-center text-xs font-bold tracking-[0.2em] text-brand-pink-deep uppercase lg:text-left">
              BEAUTY
            </p>
            <h2 className="mt-2 text-center font-heading text-[28px] leading-[1.35] font-black text-brand-ink sm:text-[32px] lg:text-left lg:text-[38px]">
              美容内服・美肌ケア
            </h2>

            <p className="mt-4 text-center text-[14.5px] leading-relaxed text-brand-ink/70 lg:text-left">
              美容・美白などのお悩みを
              <br className="hidden sm:block" />
              医師に相談できます。
            </p>

            <ul className="mt-6 grid grid-cols-2 gap-3">
              {items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 rounded-2xl bg-white/80 px-4 py-3.5 shadow-sm border border-brand-pink-pale"
                >
                  <SparkleIcon className="h-4 w-4 shrink-0 text-brand-pink-deep" />
                  <span className="text-[14px] font-bold text-brand-ink">{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-5 text-center text-[11px] leading-relaxed text-brand-ink/40 lg:text-left">
              ※ 診療内容により処方可否は異なります。
            </p>
          </div>

        </div>
      </Container>
    </section>
  );
}
