"use client"
import React from "react";
import { ArrowRight } from "lucide-react";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export function NavLink({ href, children }: NavLinkProps) {
  return (
    <a
      href={href}
      className="text-red-200/80 hover:text-red-300 transition-colors"
    >
      {children}
    </a>
  );
}

interface MobileNavLinkProps {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}

export function MobileNavLink({ href, onClick, children }: MobileNavLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="flex items-center py-2 px-3 text-red-200/80 hover:text-red-300 transition-colors"
    >
      {children}
      <ArrowRight className="ml-auto h-4 w-4" />
    </a>
  );
}