"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", link: "/" },
  { label: "Products", link: "/products" },
  { label: "About", link: "/about" },
  { label: "User Client", link: "/user-client" },
  { label: "User Server", link: "/user-server" },
];

export default function Navigation() {
  const pathname = usePathname();
  return (
    <div>
      <h1>P-Commerce</h1>
      <div className="flex gap-4 justify-start text-sm">
        {navLinks.map(({ label, link }) => (
          <Link
            className={`${pathname === link ? "underline text-amber-600" : ""}`}
            key={link}
            href={link}
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
