import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { AlertIcon } from "@/components/ui/Icons";

// IMPORTANT: this copy is a generic draft for a telemedicine LP. Have your
// medical and legal reviewers confirm it against actual operations before
// publishing (薬機法 / 医療広告ガイドライン compliance).
const notices = [
  "本サービスは医師の診察を必要とするオンライン診療です",
  "薬の処方は診察後に医師が判断します",
  "症状や既往歴によっては処方できない場合があります",
  "本ページはサービス内容のご案内を目的としており、医療効果や特定の結果を保証するものではありません",
  "料金や診療メニューの詳細はLINE登録後にご確認いただけます",
];

export default function Disclaimer() {
  return (
    <section className="bg-brand-pink-pale py-14 lg:py-20">
      <Container>
        <SectionHeading eyebrow="NOTICE" title="ご利用にあたっての注意事項" />

        <div className="mx-auto max-w-2xl rounded-2xl border border-[#ecdfe6] bg-[#faf7f9] px-4 py-1 lg:px-6">
          {notices.map((notice, index) => (
            <div
              key={notice}
              className={`flex items-start gap-2 py-3 text-xs leading-relaxed text-brand-ink-soft ${
                index < notices.length - 1 ? "border-b border-dashed border-[#ecdfe6]" : ""
              }`}
            >
              <AlertIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-pink-deep" />
              {notice}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
