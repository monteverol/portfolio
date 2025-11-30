"use client";

import { useEffect, useRef, useState } from "react";
import anime from "animejs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp, TrendingUp, Users, Code } from "lucide-react";
import { SiReact, SiNodedotjs, SiPostgresql, SiMysql, SiMagento, SiNextdotjs, SiTailwindcss, SiGooglecloud } from "react-icons/si";
import { TbAutomation, TbApi } from "react-icons/tb";

const experiences = [
  {
    title: "Backend Developer",
    company: "Journey Better Business Group Inc.",
    location: "Makati, Philippines",
    period: "September 2025 - Present",
    duration: "4 months",
    type: "Full-Time",
    responsibilities: [
      "Developed automation workflows using n8n, Zapier, Typeform, and GCP, improving operational efficiency across client processes",
      "Created and maintained backend components including MySQL data handling and a custom product module in Magento",
      "Built structured form systems in Typeform, automated Zoho → Webflow data sync, and integrated Foxy for payments and tax transfer operations",
    ],
    techStack: [
      { name: "MySQL", icon: SiMysql },
      { name: "GCP", icon: SiGooglecloud },
      { name: "Magento", icon: SiMagento },
      { name: "Automation", icon: TbAutomation },
    ],
    achievements: [
      { icon: TrendingUp, text: "Improved operational efficiency by 40%" },
      { icon: Code, text: "Built custom Magento product module" },
      { icon: TbAutomation, text: "Automated 15+ client workflows" },
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Private Client",
    location: "Manila, Philippines",
    period: "May 2025 - July 2025",
    duration: "3 months",
    type: "Freelance",
    responsibilities: [
      "Designed and implemented a custom ticketing system used by internal staff to track service issues, resulting in an 80% reduction in manual tracking",
      "Built both frontend (React.js) and backend (Node.js/Express) components with role-based authentication",
      "Integrated PostgreSQL for persistent storage and wrote automated tests for key features",
    ],
    techStack: [
      { name: "React", icon: SiReact },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "REST API", icon: TbApi },
    ],
    achievements: [
      { icon: TrendingUp, text: "80% reduction in manual tracking" },
      { icon: Users, text: "Deployed for 50+ internal staff" },
      { icon: Code, text: "Implemented role-based auth system" },
    ],
  },
  {
    title: "Full Stack Developer",
    company: "NAESS Shipping Philippines Inc.",
    location: "Malate, Manila",
    period: "February 2025 - May 2025",
    duration: "4 months",
    type: "Intern",
    responsibilities: [
      "Redesigned and modernized the company website using Next.js (JavaScript) and TailwindCSS, transitioning from a legacy site to a scalable and maintainable architecture",
      "Integrated lightweight backend solutions using json-server to simulate REST APIs for internal development, demonstrating practical decision-making for limited-scope systems",
      "Proactively identified and addressed organizational inefficiencies, proposing and implementing tools that enhance communication, reduce undocumented requests, and support long-term maintainability of IT operations",
    ],
    techStack: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TailwindCSS", icon: SiTailwindcss },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "REST API", icon: TbApi },
    ],
    achievements: [
      { icon: Code, text: "Modernized legacy website architecture" },
      { icon: TrendingUp, text: "Improved site performance by 60%" },
      { icon: Users, text: "Enhanced internal communication tools" },
    ],
  },
];

export function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [expandedCards, setExpandedCards] = useState<number[]>([0]); // First card expanded by default
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

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
      targets: ".experience-title",
      translateY: [50, 0],
      opacity: [0, 1],
      duration: 1000,
    });

    timeline.add(
      {
        targets: ".timeline-line",
        height: [0, "100%"],
        duration: 1500,
      },
      "-=600"
    );

    timeline.add(
      {
        targets: ".experience-card",
        translateX: [-50, 0],
        opacity: [0, 1],
        duration: 800,
        delay: anime.stagger(150),
      },
      "-=1200"
    );
  };

  const toggleCard = (index: number) => {
    setExpandedCards(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="experience" ref={sectionRef} className="min-h-screen py-16 md:py-20 bg-background snap-start snap-always flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="experience-title text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 opacity-0">
          Work Experience
        </h2>

        <div className="max-w-5xl mx-auto relative">
          {/* Vertical Timeline Line - Hidden on mobile */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20 timeline-line" style={{ height: 0 }}></div>

          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, index) => {
              const isExpanded = expandedCards.includes(index);
              const isHovered = hoveredCard === index;

              return (
                <div key={index} className="relative md:pl-20">
                  {/* Timeline Dot - Hidden on mobile */}
                  <div className={`hidden md:block absolute left-6 top-6 w-5 h-5 rounded-full border-4 border-background bg-primary transition-all duration-300 ${
                    isHovered ? 'scale-150 shadow-lg shadow-primary/50' : ''
                  } ${index === 0 ? 'animate-pulse' : ''}`}></div>

                  {/* Duration Label - Repositioned for mobile */}
                  <div className="md:absolute md:-left-16 md:top-6 mb-2 md:mb-0 inline-block text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full whitespace-nowrap z-10">
                    {exp.duration}
                  </div>

                  <Card
                    className={`experience-card opacity-0 cursor-pointer transition-all duration-300 ${
                      isHovered ? 'shadow-xl border-primary/50 scale-[1.02]' : ''
                    }`}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                    onClick={() => toggleCard(index)}
                  >
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <CardTitle className="text-2xl flex items-center gap-2">
                              <Briefcase className="h-5 w-5 text-primary" />
                              {exp.title}
                            </CardTitle>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleCard(index);
                              }}
                              className="md:hidden text-primary hover:text-primary/70 transition-colors"
                            >
                              {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                            </button>
                          </div>
                          <CardDescription className="text-lg font-semibold mt-1">
                            {exp.company}
                          </CardDescription>

                          {/* Tech Stack Badges */}
                          <div className="flex flex-wrap gap-1.5 md:gap-2 mt-2 md:mt-3">
                            {exp.techStack.map((tech, idx) => {
                              const Icon = tech.icon;
                              return (
                                <div
                                  key={idx}
                                  className="inline-flex items-center gap-1 px-1.5 md:px-2 py-0.5 md:py-1 bg-secondary/50 border border-border rounded text-[10px] md:text-xs font-medium hover:border-primary/50 hover:bg-primary/5 transition-colors"
                                >
                                  <Icon className="h-2.5 w-2.5 md:h-3 md:w-3" />
                                  <span className="hidden sm:inline">{tech.name}</span>
                                </div>
                              );
                            })}
                          </div>
                        </div>

                        <div className="flex flex-col gap-2 text-sm text-muted-foreground md:text-right md:items-end">
                          <span className="inline-flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {exp.period}
                          </span>
                          <span className="inline-flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {exp.location}
                          </span>
                          <span className="inline-flex items-center">
                            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">
                              {exp.type}
                            </span>
                          </span>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleCard(index);
                            }}
                            className="hidden md:flex items-center gap-1 text-primary hover:text-primary/70 transition-colors text-sm font-medium mt-2"
                          >
                            {isExpanded ? (
                              <>
                                <span>Show Less</span>
                                <ChevronUp className="h-4 w-4" />
                              </>
                            ) : (
                              <>
                                <span>Show More</span>
                                <ChevronDown className="h-4 w-4" />
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    </CardHeader>

                    {/* Expandable Content */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <CardContent className="space-y-6">
                        {/* Key Achievements */}
                        <div>
                          <h4 className="text-xs md:text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                            <TrendingUp className="h-3 w-3 md:h-4 md:w-4 text-primary" />
                            Key Achievements
                          </h4>
                          <div className="grid grid-cols-1 gap-2 md:gap-3">
                            {exp.achievements.map((achievement, idx) => {
                              const Icon = achievement.icon;
                              return (
                                <div
                                  key={idx}
                                  className="flex items-start gap-2 p-2 md:p-3 bg-muted/50 rounded-lg border border-border hover:border-primary/30 transition-colors"
                                >
                                  <Icon className="h-3 w-3 md:h-4 md:w-4 text-primary mt-0.5 flex-shrink-0" />
                                  <span className="text-[11px] md:text-xs text-muted-foreground">{achievement.text}</span>
                                </div>
                              );
                            })}
                          </div>
                        </div>

                        {/* Responsibilities */}
                        <div>
                          <h4 className="text-xs md:text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                            <Code className="h-3 w-3 md:h-4 md:w-4 text-primary" />
                            Responsibilities
                          </h4>
                          <ul className="space-y-2 md:space-y-3">
                            {exp.responsibilities.map((resp, idx) => (
                              <li key={idx} className="flex gap-2 md:gap-3 text-xs md:text-sm text-muted-foreground group">
                                <span className="text-primary mt-1 md:mt-1.5 group-hover:scale-125 transition-transform">●</span>
                                <span className="group-hover:text-foreground transition-colors">{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
