export const site = {
  name: "7Labz",
  url: "https://7labz.io",
  email: "hello@7labz.com",
  tagline: "A studio for serious product work.",
  description:
    "7Labz is a digital product studio. We design, build, and ship software, websites, and product systems for companies that need work done at a high level.",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/studio", label: "Studio" },
  { href: "/contact", label: "Contact" },
] as const;

export const projectTypes = [
  "Product",
  "Website",
  "Brand",
  "Platform",
  "Layout system",
  "Process",
  "Partnership",
  "Not sure",
] as const;

export type ProjectType = (typeof projectTypes)[number];

export function isNavActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}
