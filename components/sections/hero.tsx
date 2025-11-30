"use client";

import { useEffect, useRef, useState } from "react";
import anime from "animejs";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Award, GraduationCap, Code2, Sparkles } from "lucide-react";

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const highlightsRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    "Full Stack Developer",
    "Data Science Specialist",
    "Backend Engineer",
    "Machine Learning Enthusiast"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  useEffect(() => {
    const timeline = anime.timeline({
      easing: "easeOutExpo",
    });

    if (badgeRef.current) {
      timeline.add({
        targets: badgeRef.current,
        translateY: [-30, 0],
        opacity: [0, 1],
        duration: 800,
      });
    }

    if (titleRef.current) {
      timeline.add({
        targets: titleRef.current.querySelectorAll("span"),
        translateY: [100, 0],
        opacity: [0, 1],
        duration: 1200,
        delay: anime.stagger(50),
      }, "-=400");
    }

    if (subtitleRef.current) {
      timeline.add(
        {
          targets: subtitleRef.current,
          translateY: [50, 0],
          opacity: [0, 1],
          duration: 1000,
        },
        "-=800"
      );
    }

    if (highlightsRef.current) {
      timeline.add(
        {
          targets: highlightsRef.current.children,
          translateY: [30, 0],
          opacity: [0, 1],
          duration: 800,
          delay: anime.stagger(100),
        },
        "-=600"
      );
    }

    if (buttonsRef.current) {
      timeline.add(
        {
          targets: buttonsRef.current.children,
          scale: [0, 1],
          opacity: [0, 1],
          duration: 800,
          delay: anime.stagger(100),
        },
        "-=600"
      );
    }
  }, []);

  const splitText = (text: string) => {
    return text.split("").map((char, index) => (
      <span key={index} className="inline-block">
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-b from-background to-secondary/20 snap-start snap-always relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-32 left-24 w-48 h-48 bg-accent/15 rounded-full blur-2xl animate-pulse delay-700"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-24 w-64 h-64 bg-primary/15 rounded-full blur-2xl animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Status Badge */}
          <div ref={badgeRef} className="mb-8 opacity-0 inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary">
            <Sparkles className="h-4 w-4" />
            Open to Opportunities
          </div>

          <h1
            ref={titleRef}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 overflow-hidden px-4"
          >
            {splitText("Hi, I'm Ayan Batulan")}
          </h1>

          <div className="h-auto sm:h-16 mb-6 sm:mb-8 px-4">
            <p
              ref={subtitleRef}
              className="text-base sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground opacity-0"
            >
              <span className="text-foreground font-semibold">Computer Science Graduate</span> | {" "}
              <span
                key={currentRole}
                className="text-primary font-semibold inline-block transition-all duration-500 animate-in fade-in slide-in-from-bottom-4"
              >
                {roles[currentRole]}
              </span>
            </p>
          </div>

          {/* Quick Highlights */}
          <div ref={highlightsRef} className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-3xl mx-auto mb-8 md:mb-10 px-4">
            <div className="opacity-0 bg-card/50 backdrop-blur border border-border rounded-lg p-3 md:p-4 hover:border-primary/50 transition-colors">
              <Award className="h-5 w-5 md:h-6 md:w-6 text-primary mx-auto mb-2" />
              <p className="text-xs md:text-sm font-semibold text-foreground">DOST Scholar</p>
              <p className="text-[10px] md:text-xs text-muted-foreground">Cum Laude</p>
            </div>
            <div className="opacity-0 bg-card/50 backdrop-blur border border-border rounded-lg p-3 md:p-4 hover:border-primary/50 transition-colors">
              <Code2 className="h-5 w-5 md:h-6 md:w-6 text-primary mx-auto mb-2" />
              <p className="text-xs md:text-sm font-semibold text-foreground">6+ Projects</p>
              <p className="text-[10px] md:text-xs text-muted-foreground">Research & Dev</p>
            </div>
            <div className="opacity-0 bg-card/50 backdrop-blur border border-border rounded-lg p-3 md:p-4 hover:border-primary/50 transition-colors">
              <GraduationCap className="h-5 w-5 md:h-6 md:w-6 text-primary mx-auto mb-2" />
              <p className="text-xs md:text-sm font-semibold text-foreground">Data Science</p>
              <p className="text-[10px] md:text-xs text-muted-foreground">Specialized</p>
            </div>
            <div className="opacity-0 bg-card/50 backdrop-blur border border-border rounded-lg p-3 md:p-4 hover:border-primary/50 transition-colors">
              <Sparkles className="h-5 w-5 md:h-6 md:w-6 text-primary mx-auto mb-2" />
              <p className="text-xs md:text-sm font-semibold text-foreground">Full Stack</p>
              <p className="text-[10px] md:text-xs text-muted-foreground">MERN & More</p>
            </div>
          </div>

          <div
            ref={buttonsRef}
            className="flex flex-wrap gap-3 md:gap-4 justify-center items-center px-4"
          >
            <Button size="lg" asChild className="opacity-0 text-sm md:text-base px-4 md:px-6">
              <a href="#contact">Get In Touch</a>
            </Button>
            <Button size="lg" variant="outline" asChild className="opacity-0 text-sm md:text-base px-4 md:px-6">
              <a href="#projects">View Projects</a>
            </Button>
            <div className="flex gap-3 md:gap-4 opacity-0">
              <a
                href="https://github.com/ayanbatulan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors p-2"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 md:h-6 md:w-6" />
              </a>
              <a
                href="https://linkedin.com/in/ayanbatulan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors p-2"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 md:h-6 md:w-6" />
              </a>
              <a
                href="mailto:ayanbatulan2132@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors p-2"
                aria-label="Email"
              >
                <Mail className="h-5 w-5 md:h-6 md:w-6" />
              </a>
            </div>
          </div>

          <div className="mt-12 md:mt-16 animate-bounce">
            <a href="#about" aria-label="Scroll to About section">
              <ArrowDown className="h-6 w-6 md:h-8 md:w-8 mx-auto text-primary" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
