import { siteConfig } from "@/lib/site-config";
import Container from "@/components/ui/Container";

export default function MenHeader() {
  return (
    <header className="bg-white shadow-[0_1px_0_0_#E2E8F0]">
      <Container wide className="flex items-center justify-between py-4">
        <div className="flex flex-col leading-tight">
          <span
            className="text-[19px] font-black text-[#0F172A]"
            style={{
              fontFamily: "var(--font-men-heading, var(--font-noto-sans-jp)), 'Noto Sans JP', 'Hiragino Sans', sans-serif",
              letterSpacing: "-0.02em",
            }}
          >
            {siteConfig.name}
          </span>
          <span
            className="text-[10px] tracking-wider text-[#64748B]"
            style={{
              fontFamily: "var(--font-men-label), 'Inter', system-ui, sans-serif",
            }}
          >
            {siteConfig.nameEn}
          </span>
        </div>
        <a
          href={siteConfig.lineUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-[#1E3A5F] px-4 py-2 text-[12px] font-bold whitespace-nowrap text-white shadow-sm"
          style={{
            fontFamily: "var(--font-men-label), 'Inter', system-ui, sans-serif",
            letterSpacing: "0.01em",
          }}
        >
          LINEで相談する
        </a>
      </Container>
    </header>
  );
}
