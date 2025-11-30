"use client";

import { useRef, useEffect, useState } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiPython,
  SiTensorflow,
  SiDocker,
  SiGit,
  SiGooglecloud,
  SiMagento,
  SiVitest,
} from "react-icons/si";
import { TbBrain, TbApi, TbAutomation } from "react-icons/tb";
import { IconType } from "react-icons";

interface Tech {
  name: string;
  icon: IconType;
}

const topRowTechs: Tech[] = [
  { name: "React.js", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "TailwindCSS", icon: SiTailwindcss },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express", icon: SiExpress },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MySQL", icon: SiMysql },
  { name: "Python", icon: SiPython },
  { name: "Deep Learning", icon: TbBrain },
];

const bottomRowTechs: Tech[] = [
  { name: "TensorFlow", icon: SiTensorflow },
  { name: "NLP/NLTK", icon: TbBrain },
  { name: "Docker", icon: SiDocker },
  { name: "Git", icon: SiGit },
  { name: "GCP", icon: SiGooglecloud },
  { name: "n8n/Zapier", icon: TbAutomation },
  { name: "REST APIs", icon: TbApi },
  { name: "Magento", icon: SiMagento },
  { name: "Vitest", icon: SiVitest },
];

interface MarqueeRowProps {
  techs: Tech[];
  direction: "left" | "right";
  sharedDragVelocity: number;
  onDragStart: () => void;
  onDragEnd: () => void;
  onDragMove: (velocity: number) => void;
}

function MarqueeRow({
  techs,
  direction,
  sharedDragVelocity,
  onDragStart,
  onDragEnd,
  onDragMove,
}: MarqueeRowProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef(0);
  const [localVelocity, setLocalVelocity] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startPos, setStartPos] = useState(0);
  const lastTimeRef = useRef<number>(0);
  const lastPosRef = useRef<number>(0);

  // Duplicate techs for infinite scroll
  const duplicatedTechs = [...techs, ...techs, ...techs];

  // Animation loop - ALWAYS runs and NEVER stops
  useEffect(() => {
    let animationId: number;
    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;

      // Normalize to 60fps for consistent speed
      const frameMultiplier = deltaTime / 16.67;

      if (contentRef.current) {
        // Only apply base speed when not actively dragging
        let totalSpeed = 0;

        if (!isDragging) {
          // Base speed ensures continuous movement
          const baseSpeed = (direction === "left" ? -1 : 1) * frameMultiplier;
          // Apply drag effects from this row and the other row
          const additionalSpeed = (localVelocity * 0.1 + sharedDragVelocity * 0.1) * frameMultiplier;
          totalSpeed = baseSpeed + additionalSpeed;
        }

        // Move the marquee
        positionRef.current += totalSpeed;

        // Seamless infinite loop reset
        const sectionWidth = contentRef.current.offsetWidth / 3;

        // For leftward movement: reset when we've scrolled past 2 sections
        if (positionRef.current <= -sectionWidth * 2) {
          positionRef.current += sectionWidth;
        }
        // For rightward movement: reset when we've scrolled back to start
        else if (positionRef.current >= 0) {
          positionRef.current -= sectionWidth;
        }

        // Apply transform
        contentRef.current.style.transform = `translateX(${positionRef.current}px)`;
      }

      // Dampen velocity gradually
      if (!isDragging && Math.abs(localVelocity) > 0.01) {
        setLocalVelocity(localVelocity * 0.92);
      } else if (!isDragging && localVelocity !== 0) {
        setLocalVelocity(0);
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [direction, localVelocity, sharedDragVelocity, isDragging]);

  // Initialize position to the middle section
  useEffect(() => {
    if (contentRef.current) {
      const sectionWidth = contentRef.current.offsetWidth / 3;
      positionRef.current = -sectionWidth;
      contentRef.current.style.transform = `translateX(${positionRef.current}px)`;
    }
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    onDragStart();
    setStartX(e.pageX);
    setStartPos(positionRef.current);
    setLocalVelocity(0);
    lastTimeRef.current = Date.now();
    lastPosRef.current = e.pageX;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !contentRef.current) return;
    e.preventDefault();

    const currentTime = Date.now();
    const deltaTime = currentTime - lastTimeRef.current;
    const deltaX = e.pageX - lastPosRef.current;

    const x = e.pageX;
    const walk = x - startX;
    positionRef.current = startPos + walk;
    contentRef.current.style.transform = `translateX(${positionRef.current}px)`;

    // Calculate velocity
    if (deltaTime > 0) {
      const vel = (deltaX / deltaTime) * 16; // Normalize to ~60fps
      setLocalVelocity(vel);
      onDragMove(vel);
    }

    lastTimeRef.current = currentTime;
    lastPosRef.current = e.pageX;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    onDragEnd();
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      onDragEnd();
    }
  };

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    onDragStart();
    setStartX(e.touches[0].pageX);
    setStartPos(positionRef.current);
    setLocalVelocity(0);
    lastTimeRef.current = Date.now();
    lastPosRef.current = e.touches[0].pageX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !contentRef.current) return;

    const currentTime = Date.now();
    const deltaTime = currentTime - lastTimeRef.current;
    const deltaX = e.touches[0].pageX - lastPosRef.current;

    const x = e.touches[0].pageX;
    const walk = x - startX;
    positionRef.current = startPos + walk;
    contentRef.current.style.transform = `translateX(${positionRef.current}px)`;

    if (deltaTime > 0) {
      const vel = (deltaX / deltaTime) * 16;
      setLocalVelocity(vel);
      onDragMove(vel);
    }

    lastTimeRef.current = currentTime;
    lastPosRef.current = e.touches[0].pageX;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    onDragEnd();
  };

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden cursor-grab ${
        isDragging ? "cursor-grabbing" : ""
      } select-none`}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div ref={contentRef} className="flex gap-6" style={{ willChange: "transform" }}>
        {duplicatedTechs.map((tech, index) => {
          const Icon = tech.icon;
          return (
            <div
              key={`${tech.name}-${index}`}
              className="flex-shrink-0 flex flex-col items-center gap-2 px-6 py-4 bg-card border border-border rounded-lg hover:border-primary hover:text-primary transition-colors min-w-[120px]"
            >
              <Icon className="h-8 w-8" />
              <span className="text-xs font-medium whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function TechMarquee() {
  const [topToBottomVelocity, setTopToBottomVelocity] = useState(0);
  const [bottomToTopVelocity, setBottomToTopVelocity] = useState(0);
  const topTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);
  const bottomTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

  const handleDragStart = () => {
    // Clear any existing timeouts
    if (topTimeoutRef.current) {
      clearTimeout(topTimeoutRef.current);
    }
    if (bottomTimeoutRef.current) {
      clearTimeout(bottomTimeoutRef.current);
    }
  };

  const handleDragEnd = () => {
    // Gradually reduce both velocities
    const reduceTopVelocity = () => {
      setTopToBottomVelocity((prev) => {
        const newVel = prev * 0.88;
        if (Math.abs(newVel) > 0.1) {
          topTimeoutRef.current = setTimeout(reduceTopVelocity, 16);
          return newVel;
        }
        return 0;
      });
    };

    const reduceBottomVelocity = () => {
      setBottomToTopVelocity((prev) => {
        const newVel = prev * 0.88;
        if (Math.abs(newVel) > 0.1) {
          bottomTimeoutRef.current = setTimeout(reduceBottomVelocity, 16);
          return newVel;
        }
        return 0;
      });
    };

    topTimeoutRef.current = setTimeout(reduceTopVelocity, 16);
    bottomTimeoutRef.current = setTimeout(reduceBottomVelocity, 16);
  };

  const handleTopDragMove = (velocity: number) => {
    // Top row drag affects bottom row in opposite direction
    setTopToBottomVelocity(-velocity);
  };

  const handleBottomDragMove = (velocity: number) => {
    // Bottom row drag affects top row in opposite direction
    setBottomToTopVelocity(-velocity);
  };

  return (
    <div className="w-full overflow-hidden py-8 space-y-6">
      <MarqueeRow
        techs={topRowTechs}
        direction="left"
        sharedDragVelocity={bottomToTopVelocity}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDragMove={handleTopDragMove}
      />
      <MarqueeRow
        techs={bottomRowTechs}
        direction="right"
        sharedDragVelocity={topToBottomVelocity}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDragMove={handleBottomDragMove}
      />
    </div>
  );
}
