import Image from "next/image";
import Container from "@/components/ui/Container";

const moments = ["ライブ前", "イベント前", "写真撮影前", "遠征前"];

export default function Oshikatsu() {
  return (
    <section className="bg-linear-to-br from-brand-purple-pale to-brand-pink-pale py-10 lg:py-16">
      <Container>
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:gap-14">

          {/* 画像 — PC: 左, SP: 上 */}
          <div className="w-full lg:order-1 lg:flex-1">
            <div className="relative mx-auto aspect-[4/3] w-full max-w-[480px] overflow-hidden rounded-3xl shadow-md lg:max-w-none">
              <Image
                src="/images/oshikatsu.webp"
                alt="推し活グッズに囲まれた部屋で自分磨きをする女性のイラスト"
                fill
                quality={90}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* テキスト — PC: 右, SP: 下 */}
          <div className="w-full lg:order-2 lg:flex-1">
            <p className="text-center text-xs font-bold tracking-[0.2em] text-brand-pink-deep uppercase lg:text-left">
              FOR YOUR OSHI
            </p>
            <h2 className="mt-2 text-center font-heading text-[28px] leading-[1.35] font-black text-brand-ink sm:text-[32px] lg:text-left lg:text-[36px]">
              推し活も、
              <br />
              <span className="text-brand-pink-deep">自分磨きも。</span>
            </h2>

            <p className="mt-4 text-center text-[14.5px] leading-relaxed text-brand-ink/70 lg:text-left">
              ライブ前、イベント前、写真撮影前、遠征前。
              <br />
              大切な日のために、自分を整えるきっかけに。
            </p>

            <ul className="mt-6 flex flex-wrap justify-center gap-2.5 lg:justify-start">
              {moments.map((label) => (
                <li
                  key={label}
                  className="rounded-full border border-brand-pink-light bg-white px-5 py-2 text-[13.5px] font-bold text-brand-ink shadow-sm"
                >
                  {label}
                </li>
              ))}
            </ul>

            <p className="mt-5 text-center text-[15px] font-black text-brand-pink-deep lg:text-left">
              そんな大切な日のために。
            </p>
          </div>

        </div>
      </Container>
    </section>
  );
}
