import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import LineButton from "@/components/ui/LineButton";
import { CheckIcon } from "@/components/ui/Icons";

export default function Price() {
  return (
    <section className="bg-linear-to-br from-brand-pink-pale via-white to-brand-purple-pale py-10 lg:py-16">
      <Container>
        <SectionHeading
          eyebrow="PRICE"
          title={
            <>
              今の購入価格から
              <span className="text-brand-pink-deep">5%OFF</span>で
              <br />
              ご案内できる可能性があります
            </>
          }
        />

        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-stretch lg:gap-12">
          {/* カード — SP上・PC左 */}
          <div className="w-full lg:flex-1 lg:flex lg:flex-col lg:justify-center">
            <div className="rounded-3xl border border-brand-pink-light bg-white p-6 shadow-md lg:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-pink-pale">
                  <CheckIcon className="h-5 w-5 text-brand-pink-deep" />
                </div>
                <div>
                  <div className="mb-2 flex flex-wrap gap-1.5">
                    <span className="inline-block rounded-full bg-brand-pink-deep px-3 py-0.5 text-[11px] font-bold text-white">
                      診察料0円
                    </span>
                    <span className="inline-block rounded-full border border-brand-pink-light bg-brand-pink-pale px-3 py-0.5 text-[11px] font-bold text-brand-pink-deep">
                      お薬代・送料は別途
                    </span>
                  </div>
                  <p className="text-[15px] font-bold text-brand-ink">
                    他院・他サービスをご利用中の方へ
                  </p>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-brand-ink-soft">
                    現在、他のクリニックやオンライン診療サービスをご利用中の方は、シェアクリでも同等の内容を
                    <strong className="text-brand-ink">
                      今より5%OFFでご案内できる可能性
                    </strong>
                    があります。
                  </p>
                  <p className="mt-3 text-[13.5px] leading-relaxed text-brand-ink-soft">
                    まずはアンケートから対象かどうかをご確認ください。ご相談だけでも歓迎です。
                  </p>
                </div>
              </div>

              <div className="mt-5 rounded-xl bg-brand-pink-pale/60 px-4 py-3 text-[11px] leading-relaxed text-brand-ink-soft">
                ※ 5%OFFは対象者のみ適用されます。診療内容・処方内容により価格が異なる場合があります。必ずしも5%OFFになることを保証するものではありません。詳細はLINE登録後にご案内します。
              </div>

              <div className="mt-4 rounded-xl border border-brand-purple-light bg-brand-purple-pale/40 px-4 py-3 text-[12.5px] leading-relaxed text-brand-ink-soft">
                現在の購入価格に関する簡単なアンケートにお答えいただくと、対象の方へLINEでクーポンをご案内します。
              </div>

              <div className="mt-4">
                <LineButton label="30秒アンケートでクーポンを受け取る" />
              </div>
            </div>
          </div>

          {/* イラスト — SP下・PC右 */}
          <div className="w-full lg:w-[42%] lg:shrink-0">
            <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-brand-pink-pale via-white to-brand-purple-pale shadow-md aspect-square lg:aspect-auto lg:h-full lg:min-h-[360px]">
              <Image
                src="/images/price-coupon.png"
                alt="スマホでクーポンを確認する女性のイラスト"
                fill
                quality={90}
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover object-top text-transparent"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
