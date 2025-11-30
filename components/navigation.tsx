"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useState } from "react";
import { useTheme } from "@/components/theme-provider";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    if (navRef.current) {
      anime({
        targets: navRef.current,
        translateY: [-100, 0],
        opacity: [0, 1],
        duration: 1000,
        easing: "easeOutExpo",
      });
    }
  }, []);

  useEffect(() => {
    if (isMenuOpen && menuRef.current) {
      anime({
        targets: menuRef.current.children,
        translateX: [50, 0],
        opacity: [0, 1],
        duration: 500,
        delay: anime.stagger(100),
        easing: "easeOutExpo",
      });
    }
  }, [isMenuOpen]);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="text-2xl font-bold text-primary">
            Portfolio
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                asChild
                className="text-foreground hover:text-primary"
              >
                <a href={item.href}>{item.name}</a>
              </Button>
            ))}
            {/* Theme Toggle Button - Desktop */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="ml-2 text-foreground hover:text-primary"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </Button>
          </div>

          {/* Mobile Buttons */}
          <div className="md:hidden flex items-center gap-2">
            {/* Theme Toggle Button - Mobile */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </Button>
            {/* Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div
            ref={menuRef}
            className="md:hidden py-4 space-y-2 border-t border-border"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-2 text-foreground hover:text-primary hover:bg-accent rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
