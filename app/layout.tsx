import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ayan Batulan - Computer Science Graduate | Data Science Specialist",
  description: "Computer Science graduate specialized in Data Science with expertise in Full Stack Development, Machine Learning, and Wi-Fi Sensing. DOST Scholar (Cum Laude) passionate about building scalable systems.",
  keywords: ["Ayan Batulan", "Computer Science", "Data Science", "Full Stack Developer", "Machine Learning", "Deep Learning", "React", "Next.js", "Node.js", "DOST Scholar"],
  authors: [{ name: "Ayan Lodovice Batulan" }],
  openGraph: {
    title: "Ayan Batulan - Computer Science Graduate | Data Science Specialist",
    description: "DOST Scholar specialized in Data Science, Full Stack Development, and Machine Learning",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme') || 'light';
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider defaultTheme="light">
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
