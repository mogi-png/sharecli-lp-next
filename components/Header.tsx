import { siteConfig } from "@/lib/site-config";
import Container from "@/components/ui/Container";

export default function Header() {
  return (
    <header className="bg-white">
      <Container wide className="flex items-center justify-between py-4">
        <div className="flex flex-col leading-tight">
          <span className="font-heading text-[19px] font-black text-brand-pink-deep">
            {siteConfig.name}
          </span>
          <span className="text-[10px] tracking-wider text-brand-ink-soft">
            {siteConfig.nameEn}
          </span>
        </div>
        <a
          href={siteConfig.lineUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-brand-pink-deep px-4 py-2 text-[12px] font-bold whitespace-nowrap text-white shadow-sm"
        >
          LINEで相談する
        </a>
      </Container>
    </header>
  );
}
