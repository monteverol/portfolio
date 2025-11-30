"use client";

import { useEffect, useRef, useState } from "react";
import anime from "animejs";

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "TailwindCSS", level: 90 },
    ],
  },
  {
    category: "Backend & Database",
    skills: [
      { name: "Node.js/Express", level: 85 },
      { name: "MySQL", level: 80 },
      { name: "PostgreSQL", level: 80 },
      { name: "REST APIs", level: 85 },
    ],
  },
  {
    category: "Data Science & ML",
    skills: [
      { name: "Python", level: 85 },
      { name: "Deep Learning", level: 75 },
      { name: "NLP/NLTK", level: 70 },
      { name: "TensorFlow", level: 70 },
    ],
  },
  {
    category: "Tools & Automation",
    skills: [
      { name: "Git", level: 90 },
      { name: "n8n/Zapier", level: 75 },
      { name: "GCP", level: 70 },
      { name: "Docker", level: 75 },
    ],
  },
];

export function SkillsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const animateSection = () => {
    const timeline = anime.timeline({
      easing: "easeOutExpo",
    });

    timeline.add({
      targets: ".skills-title",
      translateY: [50, 0],
      opacity: [0, 1],
      duration: 1000,
    });

    timeline.add(
      {
        targets: ".skill-category",
        translateX: [-50, 0],
        opacity: [0, 1],
        duration: 800,
        delay: anime.stagger(150),
      },
      "-=600"
    );

    timeline.add(
      {
        targets: ".skill-bar-fill",
        width: (el: HTMLElement) => {
          const level = el.getAttribute("data-level");
          return level + "%";
        },
        duration: 1500,
        delay: anime.stagger(100),
        easing: "easeInOutQuad",
      },
      "-=400"
    );
  };

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

  return (
    <div
      id="skills"
      ref={sectionRef}
      className="py-12 md:py-16"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="skills-title text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 md:mb-16 opacity-0">
          Skills & Expertise
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category opacity-0">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-primary">
                {category.category}
              </h3>
              <div className="space-y-4 md:space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1.5 md:mb-2">
                      <span className="font-medium text-sm md:text-base">{skill.name}</span>
                      <span className="text-muted-foreground text-sm md:text-base">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 md:h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="skill-bar-fill h-full bg-primary rounded-full"
                        data-level={skill.level}
                        style={{ width: "0%" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
