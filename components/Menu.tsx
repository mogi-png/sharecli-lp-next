import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { ClockIcon, HeartIcon, PillIcon } from "@/components/ui/Icons";

export type MenuItem = {
  icon: typeof HeartIcon;
  title: string;
  description: string;
  tags: string[];
};

const defaultItems: MenuItem[] = [
  {
    icon: PillIcon,
    title: "美容内服・美肌ケア",
    description: "美容・美白などのお悩みを相談できます",
    tags: ["美肌", "美白", "ニキビ・肌荒れ"],
  },
  {
    icon: ClockIcon,
    title: "ダイエットサポート",
    description: "体重管理に関する医師への相談が可能です",
    tags: ["体重管理", "食欲抑制", "生活習慣"],
  },
  {
    icon: HeartIcon,
    title: "AGA・薄毛治療",
    description: "薄毛・抜け毛のお悩みを医師に相談できます",
    tags: ["抜け毛", "薄毛", "ヘアケア"],
  },
];

export default function Menu({ items = defaultItems }: { items?: MenuItem[] }) {
  return (
    <section className="bg-white py-10 lg:py-16">
      <Container wide>
        <SectionHeading eyebrow="MENU" title="診療メニュー" />

        <div className="grid gap-5 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-brand-pink-light bg-brand-pink-pale p-6 shadow-[0_10px_22px_-16px_rgba(255,111,160,0.45)]"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-sm">
                <item.icon className="h-7 w-7 text-brand-pink-deep" />
              </div>
              <h3 className="mb-2 text-base font-bold lg:text-lg">{item.title}</h3>
              <p className="mb-4 text-[13px] leading-relaxed text-brand-ink-soft lg:text-sm">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white px-2.5 py-1 text-[11.5px] font-bold text-brand-purple"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-5 text-center text-[11.5px] text-brand-ink-soft">
          ※診療内容により処方可否は異なります
        </p>
      </Container>
    </section>
  );
}
