"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type SidebarLink = { href: string; label: string };

export function ExamplesSidebar({ links }: { links: SidebarLink[] }) {
  const pathname = usePathname();
  return (
    <nav className="bg-card border border-border rounded-xl p-4">
      <h2 className="text-sm font-semibold text-muted-foreground mb-3">
        Examples
      </h2>
      <ul className="space-y-1">
        {links.map((l) => {
          const isActive = pathname === l.href;
          return (
            <li key={l.href}>
              <Link
                href={l.href}
                className={
                  "block px-3 py-2 rounded-md text-sm " +
                  (isActive
                    ? "bg-accent text-accent-foreground"
                    : "hover:bg-accent hover:text-accent-foreground")
                }
              >
                {l.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
