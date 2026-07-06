import { siteConfig } from "@/lib/site-config";
import { ChatIcon, ChevronIcon } from "@/components/ui/Icons";

export default function LineButton({
  href = siteConfig.lineUrl,
  label = "アンケートでクーポンを受け取る",
  variant = "primary",
  className = "",
}: {
  href?: string;
  label?: string;
  variant?: "primary" | "inverted";
  className?: string;
}) {
  const variantClass =
    variant === "primary"
      ? "bg-linear-to-r from-brand-pink to-brand-pink-deep text-white shadow-[0_12px_24px_-8px_rgba(255,77,141,0.55)]"
      : "bg-white text-brand-pink-deep shadow-[0_12px_24px_-8px_rgba(0,0,0,0.25)]";

  const badgeClass =
    variant === "primary" ? "bg-white text-line-green" : "bg-line-green text-white";

  return (
    <a
      href={href}
      className={`flex w-full animate-[pulse-cta_2.6s_ease-in-out_infinite] items-center justify-center gap-2.5 rounded-full px-5 py-4 text-base font-bold ${variantClass} ${className}`}
    >
      <span className={`flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full ${badgeClass}`}>
        <ChatIcon className="h-3.5 w-3.5" />
      </span>
      {label}
      <ChevronIcon className="h-[18px] w-[18px] shrink-0" />
    </a>
  );
}
