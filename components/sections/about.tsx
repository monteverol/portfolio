"use client";

import { useEffect, useRef, useState } from "react";
import anime from "animejs";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Database, Globe, Server } from "lucide-react";
import { TechMarquee } from "@/components/tech-marquee";

const highlights = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description: "React.js, Next.js, Node.js/Express with modern frameworks",
  },
  {
    icon: Server,
    title: "Backend & APIs",
    description: "REST APIs, MySQL, PostgreSQL, and automation workflows",
  },
  {
    icon: Database,
    title: "Data Science",
    description: "Deep Learning, Wi-Fi Sensing, NLP, and Sentiment Analysis",
  },
  {
    icon: Globe,
    title: "Academic Excellence",
    description: "Cum Laude, DOST Scholar, 3x VPAA's & Dean's Lister",
  },
];

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateSection();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateSection = () => {
    const timeline = anime.timeline({
      easing: "easeOutExpo",
    });

    timeline.add({
      targets: ".about-title",
      translateY: [50, 0],
      opacity: [0, 1],
      duration: 1000,
    });

    timeline.add(
      {
        targets: ".about-text",
        translateY: [30, 0],
        opacity: [0, 1],
        duration: 800,
      },
      "-=600"
    );

    timeline.add(
      {
        targets: ".about-card",
        scale: [0.8, 1],
        opacity: [0, 1],
        duration: 800,
        delay: anime.stagger(150),
      },
      "-=400"
    );
  };

  return (
    <section id="about" ref={sectionRef} className="min-h-screen py-16 md:py-20 bg-background snap-start snap-always flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="about-title text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12 opacity-0">
          About Me
        </h2>

        <div className="max-w-3xl mx-auto mb-12 md:mb-16">
          <p className="about-text text-base md:text-lg text-muted-foreground text-center leading-relaxed opacity-0 px-2">
            Computer Science graduate with a concentration in Data Science and hands-on
            experience in programming, data analysis, and software development. As a DOST
            Scholar (Cum Laude, GWA: 1.52), I bring both academic excellence and practical
            expertise. Eager to contribute technical and analytical skills to a team that
            values scalable systems, clean code, and impactful solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {highlights.map((highlight, index) => (
            <Card key={index} className="about-card opacity-0">
              <CardContent className="p-6 text-center">
                <highlight.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">{highlight.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {highlight.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tech Stack Marquee */}
        <div className="mb-16">
          <TechMarquee />
        </div>
      </div>
    </section>
  );
}
