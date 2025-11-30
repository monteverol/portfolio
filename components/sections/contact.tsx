"use client";

import { useEffect, useRef, useState } from "react";
import anime from "animejs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Github, Linkedin, Clock, Send, CheckCircle2, Calendar } from "lucide-react";

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

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
      targets: ".contact-title",
      translateY: [50, 0],
      opacity: [0, 1],
      duration: 1000,
    });

    timeline.add(
      {
        targets: ".contact-card",
        scale: [0.9, 1],
        opacity: [0, 1],
        duration: 800,
        delay: anime.stagger(150),
      },
      "-=600"
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Something went wrong. Please try again.",
        });
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message: "Failed to send message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" ref={sectionRef} className="min-h-screen py-16 md:py-20 bg-secondary/20 snap-start snap-always flex items-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="contact-title text-3xl sm:text-4xl md:text-5xl font-bold mb-4 opacity-0">
            Get In Touch
          </h2>
          <p className="contact-title text-base md:text-lg text-muted-foreground max-w-2xl mx-auto opacity-0">
            Have a project in mind or want to collaborate? I&apos;m always open to discussing new opportunities and ideas.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Quick Stats/Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 md:mb-12">
            <Card className="contact-card opacity-0 border-primary/20 hover:border-primary/50 transition-colors">
              <CardContent className="p-4 md:p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-1 text-sm md:text-base">Response Time</h3>
                <p className="text-xs md:text-sm text-muted-foreground">Usually within 24 hours</p>
              </CardContent>
            </Card>

            <Card className="contact-card opacity-0 border-primary/20 hover:border-primary/50 transition-colors">
              <CardContent className="p-4 md:p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-1 text-sm md:text-base">Availability</h3>
                <p className="text-xs md:text-sm text-muted-foreground">
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                  Open to opportunities
                </p>
              </CardContent>
            </Card>

            <Card className="contact-card opacity-0 border-primary/20 hover:border-primary/50 transition-colors">
              <CardContent className="p-4 md:p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-1 text-sm md:text-base">Timezone</h3>
                <p className="text-xs md:text-sm text-muted-foreground">GMT+8 (Manila)</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="contact-card opacity-0">
              <CardHeader>
                <CardTitle>Contact Info</CardTitle>
                <CardDescription>
                  Feel free to reach out through any of these channels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <a href="mailto:ayanbatulan2132@gmail.com" className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm">Email</p>
                    <p className="text-sm text-muted-foreground truncate">
                      ayanbatulan2132@gmail.com
                    </p>
                  </div>
                </a>

                <a href="tel:+639083193522" className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm">Phone</p>
                    <p className="text-sm text-muted-foreground">
                      +63 (908) 319-3522
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3 rounded-lg">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm">Location</p>
                    <p className="text-sm text-muted-foreground">
                      Metro Manila, Philippines
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links Card */}
            <Card className="contact-card opacity-0">
              <CardHeader>
                <CardTitle>Follow Me</CardTitle>
                <CardDescription>
                  Connect with me on social media
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-3">
                  <a
                    href="https://github.com/monteverol"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Github className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">GitHub</p>
                      <p className="text-sm text-muted-foreground">@monteverol</p>
                    </div>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/ayan-batulan-83a6302a4/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Linkedin className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">LinkedIn</p>
                      <p className="text-sm text-muted-foreground">Ayan Batulan</p>
                    </div>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form - Spans 2 columns */}
          <Card className="contact-card opacity-0 lg:col-span-2">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>
                Fill out the form below and I&apos;ll get back to you as soon as
                possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                {submitStatus.type && (
                  <div
                    className={`p-3 rounded-md text-sm ${
                      submitStatus.type === "success"
                        ? "bg-green-100 text-green-800 border border-green-200"
                        : "bg-red-100 text-red-800 border border-red-200"
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin mr-2">⏳</span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
