import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

export function GlassButton({
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={clsx(
        "rounded-xl border border-white/25 bg-white/15 px-4 py-2 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/25 active:scale-[0.98]",
        className
      )}
    />
  );
}
