import { siteConfig } from "@/lib/site-config";
import Container from "@/components/ui/Container";

const links = [
  { label: "プライバシーポリシー", href: "https://sharecli.co.jp/privacy-policy/" },
  { label: "運営会社", href: "https://sharecli.co.jp/company/" },
];

export default function Footer() {
  return (
    <footer className="bg-white py-8">
      <Container wide className="text-center">
        <nav className="mb-3 flex flex-wrap justify-center gap-3.5">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-[#e3d6de] text-[11.5px] text-brand-ink-soft"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <p className="text-[11px] text-[#bba9b3]">
          協力：オタク向け美容室 OFF-KAi!!
        </p>
      </Container>
    </footer>
  );
}
