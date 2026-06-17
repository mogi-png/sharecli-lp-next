import Image from "next/image";
import Container from "@/components/ui/Container";

export default function Flow() {
  return (
    <section className="bg-white py-10 lg:py-16">
      <Container>
        <p className="text-center text-xs font-bold tracking-[0.2em] text-brand-pink-deep uppercase">
          FLOW
        </p>
        <h2 className="mt-2 text-center font-heading text-[28px] leading-[1.35] font-black text-brand-ink sm:text-[32px] lg:text-[38px]">
          ご利用の流れ
        </h2>

        <div className="mx-auto mt-8 w-full max-w-[560px] overflow-hidden rounded-3xl shadow-md">
          <Image
            src="/images/flow.webp"
            alt="シェアクリのご利用の流れ：ご予約→問診票の入力→医師の診察→お薬の処方・決済→お薬をお届け"
            width={800}
            height={1600}
            quality={90}
            sizes="(min-width: 1024px) 560px, 100vw"
            className="h-auto w-full"
          />
        </div>

        <p className="mt-6 text-center text-[15px] leading-relaxed text-brand-ink/80">
          LINE登録から診察、お薬のお届けまで、
          <br className="hidden sm:block" />
          スマホでかんたんに進められます。
        </p>
        <p className="mt-3 text-center text-[11px] text-brand-ink/40">
          ※ 診療内容や決済時間、配送地域により異なります。
        </p>
      </Container>
    </section>
  );
}
