import { siteConfig } from "@/lib/site-config";
import Container from "@/components/ui/Container";

const links = [
  { label: "利用規約", href: "#" },
  { label: "プライバシーポリシー", href: "#" },
  { label: "運営会社", href: "#" },
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
              className="border-b border-[#e3d6de] text-[11.5px] text-brand-ink-soft"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <p className="mb-1 text-[11px] text-[#bba9b3]">
          協力：オタク向け美容室 OFF-KAi!!
        </p>
        <p className="text-[11px] text-[#bba9b3]">
          © {siteConfig.name}
        </p>
      </Container>
    </footer>
  );
}
