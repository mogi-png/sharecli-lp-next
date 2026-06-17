import Image from "next/image";
import Container from "@/components/ui/Container";
import LineButton from "@/components/ui/LineButton";

export default function CTA() {
  return (
    <section className="bg-linear-to-br from-brand-pink-pale via-white to-brand-purple-pale py-10 lg:py-16">
      <Container>
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-stretch lg:gap-10">

          {/* 画像 — PC: 右60%, SP: 上 */}
          <div className="w-full lg:order-2 lg:w-[60%] lg:shrink-0">
            <div className="relative mx-auto aspect-[4/3] w-full max-w-[520px] overflow-hidden rounded-3xl shadow-md lg:aspect-auto lg:h-full lg:min-h-[420px] lg:max-w-none">
              <Image
                src="/images/cta.webp"
                alt="スマホでシェアクリを使う女性のイラスト"
                fill
                quality={90}
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* テキスト — PC: 左40%, SP: 下 */}
          <div className="w-full lg:order-1 lg:w-[40%] lg:shrink-0 lg:flex lg:flex-col lg:justify-center">
            <h2 className="text-center font-heading text-[26px] leading-[1.4] font-black text-brand-ink sm:text-[30px] lg:text-left lg:text-[36px]">
              まずはLINEから
              <br />
              <span className="text-brand-pink-deep">お気軽に</span>ご確認ください
            </h2>

            <p className="mt-5 text-center text-[14.5px] leading-relaxed text-brand-ink/70 lg:text-left">
              自宅からスマホで医師に相談できる
              <br />
              オンライン診療サービスです。
            </p>
            <p className="mt-3 text-center text-[14.5px] leading-relaxed text-brand-ink/70 lg:text-left">
              AGA・美容内服・ダイエットなど、
              <br />
              気になるお悩みをオンラインで相談できます。
            </p>

            <div className="mt-8">
              <LineButton variant="primary" />
              <p className="mt-2.5 text-center text-[11.5px] text-brand-ink/50 lg:text-left">
                登録は30秒程度で完了します。
              </p>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
