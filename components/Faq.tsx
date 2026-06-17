import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { ChevronIcon } from "@/components/ui/Icons";

export type FaqItem = {
  question: string;
  answer: string;
};

const defaultItems: FaqItem[] = [
  {
    question: "本当に通院不要ですか？",
    answer:
      "はい。問診・診察・お薬の受け取りまで、すべてスマホひとつで完結します。来院いただく必要はありません。",
  },
  {
    question: "診察にはどれくらい時間がかかりますか？",
    answer:
      "問診入力は数分程度です。オンライン診察の所要時間は症状や混雑状況により異なりますので、目安はLINE登録後にご案内します。",
  },
  {
    question: "薬は自宅に届きますか？",
    answer:
      "医師が処方を判断した場合、お薬はご自宅へ配送されます。配送日数は地域や時間帯により異なります。",
  },
  {
    question: "相談だけでも可能ですか？",
    answer:
      "はい。処方を前提とせず、まずは相談だけしたいという方もご利用いただけます。詳細はLINE登録後にご確認ください。",
  },
];

export default function Faq({ items = defaultItems }: { items?: FaqItem[] }) {
  return (
    <section className="bg-white py-10 lg:py-16">
      <Container>
        <SectionHeading eyebrow="FAQ" title="よくある質問" />

        <div className="mx-auto flex max-w-2xl flex-col gap-3">
          {items.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-brand-pink-light bg-brand-pink-pale px-4 py-3 open:bg-white lg:px-5 lg:py-4"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-[13.5px] font-bold text-brand-ink">
                <span className="flex items-center gap-2">
                  <span className="text-brand-pink-deep">Q</span>
                  {item.question}
                </span>
                <ChevronIcon className="h-4 w-4 shrink-0 rotate-90 text-brand-purple transition-transform group-open:rotate-[270deg]" />
              </summary>
              <p className="mt-2.5 pl-5 text-[13px] leading-relaxed text-brand-ink-soft">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
