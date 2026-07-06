import Image from "next/image";
import Container from "@/components/ui/Container";
import LineButton from "@/components/ui/LineButton";
import { BoxIcon, DoctorIcon, HomeIcon, PhoneIcon } from "@/components/ui/Icons";

export type HeroImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

// Swap the hero artwork by replacing public/images/hero.webp,
// or by passing a different `image` prop from app/page.tsx.
const defaultImage: HeroImage = {
  src: "/images/hero.webp",
  alt: "推し活グッズに囲まれた部屋でスマホを見つめる女性のイラスト",
  width: 1536,
  height: 1024,
};

const features = [
  { icon: HomeIcon, label: "来院不要" },
  { icon: PhoneIcon, label: "スマホで完結" },
  { icon: DoctorIcon, label: "医師が診察" },
  { icon: BoxIcon, label: "お薬をご自宅へ" },
];

export default function Hero({ image = defaultImage }: { image?: HeroImage }) {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-brand-pink-pale via-white to-brand-purple-pale">
      <div className="grid lg:grid-cols-2 lg:items-stretch lg:min-h-[640px]">
        {/* Image: top on mobile (fixed height), right column on desktop */}
        <div className="relative h-[340px] w-full lg:order-2 lg:h-full lg:min-h-[640px]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            quality={90}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover lg:rounded-l-[56px]"
          />
        </div>

        <div className="relative z-10 flex items-center py-8 lg:order-1 lg:py-0">
          <Container wide className="lg:mx-0 lg:max-w-none lg:pr-0 lg:pl-10 xl:pl-16">
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:max-w-lg lg:text-left">
              <h1 className="font-heading text-[28px] leading-[1.35] font-black text-brand-ink sm:text-[34px] lg:text-[44px]">
                推し活も、
                <br />
                <span className="text-brand-pink-deep">自分磨きも。</span>
              </h1>
              <p className="mt-3 text-base leading-relaxed font-bold text-brand-ink lg:text-lg">
                自宅からスマホで相談できる
                <br />
                オンライン診療サービス
              </p>
              <p className="mt-2 text-sm leading-relaxed text-brand-ink-soft lg:text-[15px]">
                AGA・美容内服・ダイエットなど
                <br />
                気になる悩みを医師に相談できます
              </p>

              {/* CTA — SP: ファーストビュー内, PC: 特徴の下 */}
              <div className="mt-5 lg:order-last lg:mt-6 lg:max-w-sm">
                <LineButton />
                <p className="mt-2 text-[11.5px] text-brand-ink-soft">
                  まずは30秒アンケートにご回答ください
                </p>
                <p className="mt-1 text-[11.5px] text-brand-ink-soft">
                  アンケート回答後、対象の方にクーポンをご案内します
                </p>
              </div>

              <div className="mt-5 grid grid-cols-4 gap-2 lg:mt-6 lg:max-w-md">
                {features.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="rounded-[10px] border border-brand-pink-light bg-white px-1 py-3 text-center shadow-[0_6px_14px_-8px_rgba(255,111,160,0.35)]"
                  >
                    <Icon className="mx-auto mb-1.5 h-[22px] w-[22px] text-brand-pink-deep" />
                    <span className="block text-[11px] leading-tight font-bold text-brand-ink">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
}
