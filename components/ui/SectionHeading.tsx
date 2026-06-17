import { ReactNode } from "react";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "center" | "left";
}) {
  const alignClass =
    align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl text-left";
  return (
    <div className={`mb-9 lg:mb-12 ${alignClass}`}>
      <span className="mb-3 inline-block rounded-full border border-brand-pink-light bg-brand-pink-pale px-3.5 py-1 text-xs font-bold tracking-wider text-brand-pink-deep">
        {eyebrow}
      </span>
      <h2 className="font-heading text-[22px] leading-snug font-bold text-brand-ink sm:text-[26px] lg:text-[32px]">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-sm leading-relaxed text-brand-ink-soft lg:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
