import Image from "next/image";
import Container from "@/components/ui/Container";
import { BoxIcon, DoctorIcon, HomeIcon, PhoneIcon } from "@/components/ui/Icons";

const items = [
  { icon: HomeIcon, label: "来院不要" },
  { icon: PhoneIcon, label: "スマホで完結" },
  { icon: DoctorIcon, label: "医師が診察" },
  { icon: BoxIcon, label: "お薬をご自宅へ配送" },
];

export default function Features() {
  return (
    <section className="bg-white py-10 lg:py-16">
      <Container>
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-16">

          {/* 画像 — PC: 左, SP: 上 */}
          <div className="w-full lg:order-1 lg:flex-1">
            <div className="relative mx-auto aspect-[4/3] w-full max-w-[480px] overflow-hidden rounded-3xl shadow-md lg:max-w-none">
              <Image
                src="/images/home.webp"
                alt="自宅でスマホを使って医師に相談する女性のイラスト"
                fill
                quality={90}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* テキスト＋特徴 — PC: 右, SP: 下 */}
          <div className="w-full lg:order-2 lg:flex-1">
            <p className="text-center text-xs font-bold tracking-[0.2em] text-brand-pink-deep uppercase lg:text-left">
              そんな方へ
            </p>
            <h2 className="mt-2 text-center font-heading text-[28px] leading-[1.35] font-black text-brand-ink sm:text-[32px] lg:text-left lg:text-[38px]">
              <span className="text-brand-pink-deep">シェアクリ</span>なら
              <br />
              自宅でスマホ診察
            </h2>

            <p className="mt-4 text-center text-[14.5px] leading-relaxed text-brand-ink/70 lg:text-left">
              自宅にいながらスマホで医師に相談できます。
              <br className="hidden sm:block" />
              忙しい方でも、通院の手間を抑えて診療を受けられます。
            </p>

            <ul className="mt-8 grid grid-cols-2 gap-3">
              {items.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-3 rounded-2xl border border-brand-purple-light bg-brand-purple-pale/40 px-4 py-4 shadow-sm"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                    <Icon className="h-5 w-5 text-brand-purple" />
                  </div>
                  <span className="text-[13.5px] font-bold text-brand-ink">{label}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </Container>
    </section>
  );
}
