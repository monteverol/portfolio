"use client";

import { useEffect, useRef, useState } from "react";
import anime from "animejs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { allProjects } from "contentlayer/generated";
import { format } from "date-fns";

export function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const animateSection = () => {
    const timeline = anime.timeline({
      easing: "easeOutExpo",
    });

    timeline.add({
      targets: ".projects-title",
      translateY: [50, 0],
      opacity: [0, 1],
      duration: 1000,
    });

    timeline.add(
      {
        targets: ".project-card",
        scale: [0.9, 1],
        opacity: [0, 1],
        duration: 800,
        delay: anime.stagger(150),
      },
      "-=600"
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const sortedProjects = allProjects.sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <div id="projects" ref={sectionRef} className="py-12 md:py-16 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="projects-title text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 md:mb-16 opacity-0">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {sortedProjects.map((project, index) => (
            <Card key={index} className="project-card opacity-0 flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {project.title}
                  {project.featured && (
                    <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded">
                      Featured
                    </span>
                  )}
                </CardTitle>
                <CardDescription>
                  {format(new Date(project.date), "MMMM yyyy")}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                {project.github && (
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                )}
                {project.demo && (
                  <Button size="sm" asChild>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
