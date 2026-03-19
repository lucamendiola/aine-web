import Image from "next/image";

export function AineLogo({
  className = "",
  variant = "salmon",
}: {
  className?: string;
  variant?: "salmon" | "gray" | "white";
}) {
  const src =
    variant === "gray"
      ? "/images/Ainelogogray.png"
      : "/images/LogoAineSalmon.png";

  return (
    <Image
      src={src}
      alt="AINE — inclusión · neurodesarrollo · empatía"
      width={200}
      height={60}
      className={`${className} ${variant === "white" ? "brightness-0 invert" : ""}`}
      priority
    />
  );
}

export function AineIcon({
  className = "",
  color = "#ff856c",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 80 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M40 5 L48 25 L68 15 L55 35 L75 40 L55 50 L68 70 L48 58 L40 80 L32 58 L12 70 L25 50 L5 40 L25 35 L12 15 L32 25 Z"
        fill={color}
      />
    </svg>
  );
}
