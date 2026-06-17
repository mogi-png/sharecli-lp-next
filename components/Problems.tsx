import Image from "next/image";
import Container from "@/components/ui/Container";

const worries = [
  "美容クリニックに行くのは少し緊張する",
  "待ち時間が面倒",
  "忙しくて通院する時間がない",
  "推し活をもっと楽しみたい",
  "自分磨きを始めたい",
];

export default function Problems() {
  return (
    <section className="bg-linear-to-br from-brand-pink-pale via-white to-brand-purple-pale py-10 lg:py-16">
      <Container>
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-16">

          {/* 悩みリスト — PC: 左, SP: 下 */}
          <div className="w-full lg:order-1 lg:flex-1">
            <p className="text-center text-xs font-bold tracking-[0.2em] text-brand-pink-deep uppercase lg:text-left">
              WORRY
            </p>
            <h2 className="mt-2 text-center font-heading text-[28px] leading-[1.35] font-black text-brand-ink sm:text-[32px] lg:text-left lg:text-[38px]">
              こんな悩み
              <br />
              ありませんか？
            </h2>

            <ul className="mt-8 flex flex-col gap-3">
              {worries.map((worry) => (
                <li
                  key={worry}
                  className="flex items-center gap-3 rounded-2xl bg-white/70 px-5 py-4 text-[15px] font-medium leading-relaxed text-brand-ink shadow-sm backdrop-blur-sm border border-brand-pink-pale"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-pink-pale text-brand-pink-deep text-sm font-bold">
                    ・
                  </span>
                  {worry}
                </li>
              ))}
            </ul>
          </div>

          {/* 画像 — PC: 右, SP: 上 */}
          <div className="w-full lg:order-2 lg:flex-1">
            <div className="relative mx-auto aspect-[4/3] w-full max-w-[480px] overflow-hidden rounded-3xl shadow-md lg:max-w-none">
              <Image
                src="/images/worry.webp"
                alt="美容クリニックの前で悩む女性のイラスト"
                fill
                quality={90}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
