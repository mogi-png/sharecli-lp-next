import { ReactNode } from "react";

export default function Container({
  children,
  className = "",
  wide = false,
}: {
  children: ReactNode;
  className?: string;
  /** Use a wider max-width for sections with multi-column desktop layouts. */
  wide?: boolean;
}) {
  const maxWidth = wide ? "max-w-7xl" : "max-w-3xl";
  return (
    <div className={`mx-auto w-full ${maxWidth} px-5 sm:px-8 lg:px-10 ${className}`}>
      {children}
    </div>
  );
}
