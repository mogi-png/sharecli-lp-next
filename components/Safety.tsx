import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { ClipboardIcon, HeadsetIcon, PhoneIcon, ShieldIcon } from "@/components/ui/Icons";

const points = [
  { icon: ShieldIcon, title: "プライバシーに配慮", description: "他の人に知られず相談できます" },
  { icon: ClipboardIcon, title: "処方は医師が判断", description: "一人ひとりに合わせて適切に判断します" },
  { icon: PhoneIcon, title: "スマホだけで完結", description: "通院不要で、すべてスマホで完了" },
  { icon: HeadsetIcon, title: "丁寧なサポート", description: "不安なことはいつでもサポートが受けられます" },
];

export default function Safety() {
  return (
    <section className="bg-brand-purple-pale py-10 lg:py-16">
      <Container wide>
        <SectionHeading eyebrow="SAFETY" title="安心ポイント" />

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:gap-6">
          {points.map((point) => (
            <div
              key={point.title}
              className="rounded-2xl border border-brand-purple-light bg-white px-3.5 py-6 text-center shadow-[0_10px_20px_-14px_rgba(120,60,160,0.35)]"
            >
              <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-brand-purple-pale">
                <point.icon className="h-7 w-7 text-brand-purple" />
              </div>
              <h3 className="mb-1.5 text-[13px] font-bold lg:text-sm">{point.title}</h3>
              <p className="text-[11px] leading-relaxed text-brand-ink-soft">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
