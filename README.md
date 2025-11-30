# Portfolio Website

A modern, responsive portfolio website built to showcase software engineering skills and projects. This portfolio demonstrates proficiency in full-stack development, DevOps practices, and modern web technologies.

## Features

- **Modern Tech Stack**: Built with Next.js 16, TypeScript, and Tailwind CSS
- **Beautiful Design**: Elegant beige color scheme with smooth animations using Anime.js
- **Fully Responsive**: Optimized for all devices and screen sizes
- **Content Management**: Headless CMS powered by ContentLayer for easy project updates
- **Contact Form**: Functional contact form with API route and validation
- **Analytics**: Integrated Vercel Analytics for tracking visitor insights
- **Docker Support**: Containerized application with multi-stage builds
- **Comprehensive Testing**: Unit tests (Vitest) and E2E tests (Playwright)
- **CI/CD Pipeline**: GitHub Actions for automated testing and deployment
- **SEO Optimized**: Proper meta tags and semantic HTML

## Tech Stack

### Frontend
- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn UI** - High-quality, accessible UI components
- **Anime.js** - Smooth animations and transitions

### Backend
- **Next.js API Routes** - Serverless API endpoints
- **ContentLayer** - Type-safe content management

### DevOps & Testing
- **Docker** - Containerization
- **Vitest** - Unit testing framework
- **Playwright** - End-to-end testing
- **GitHub Actions** - CI/CD automation
- **Vercel** - Deployment platform

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm or yarn
- Docker (optional, for containerized development)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/monteverol/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Create environment variables:
```bash
cp .env.example .env.local
```

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm test` - Run unit tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Generate test coverage report
- `npm run test:e2e` - Run E2E tests
- `npm run test:e2e:ui` - Run E2E tests with UI

### Docker Commands

- `npm run docker:build` - Build Docker image
- `npm run docker:run` - Run Docker container
- `npm run docker:compose:up` - Start with docker-compose
- `npm run docker:compose:down` - Stop docker-compose
- `npm run docker:compose:dev` - Start development environment

## Project Structure

```
portfolio/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── sections/         # Page sections
│   ├── ui/              # UI components
│   ├── navigation.tsx   # Navigation component
│   └── footer.tsx       # Footer component
├── content/              # Content (markdown files)
│   └── projects/        # Project content
├── lib/                 # Utility functions
├── __tests__/           # Unit tests
├── e2e/                # E2E tests
├── public/             # Static assets
├── .github/           # GitHub Actions workflows
├── Dockerfile         # Production Docker image
├── docker-compose.yml # Docker compose configuration
└── README.md         # Documentation
```

## Customization

### Update Personal Information

1. **Hero Section**: Edit `components/sections/hero.tsx`
2. **About Section**: Edit `components/sections/about.tsx`
3. **Skills**: Edit `components/sections/skills.tsx`
4. **Contact Info**: Edit `components/sections/contact.tsx` and `components/footer.tsx`

### Add Projects

Create new markdown files in `content/projects/`:

```markdown
---
title: "Project Name"
description: "Project description"
date: "2024-01-01"
tags: ["React", "TypeScript"]
github: "https://github.com/username/repo"
demo: "https://demo-url.com"
featured: true
---

Project content here...
```

### Modify Color Scheme

Edit the CSS variables in `app/globals.css`:

```css
:root {
  --primary: #D4A574;  /* Your primary color */
  --secondary: #E8DCC8; /* Your secondary color */
  /* ... other colors */
}
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Configure environment variables
4. Deploy

### Docker

Build and run with Docker:

```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

Or use docker-compose:

```bash
docker-compose up
```

## Testing

### Unit Tests

```bash
npm test
```

### E2E Tests

```bash
npm run test:e2e
```

### Coverage Report

```bash
npm run test:coverage
```

## CI/CD

The project includes a GitHub Actions workflow that:

1. Runs ESLint on code
2. Executes unit tests
3. Runs E2E tests
4. Builds the application
5. Creates Docker image (on main branch)

## Performance

- **Lighthouse Score**: 95+ across all categories
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic route-based code splitting

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

This is a personal portfolio project, but suggestions and feedback are welcome!

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- **Email**: ayanbatulan2132@gmail.com
- **Phone**: +63 (908) 319-3522
- **Location**: Metro Manila, Philippines
- **LinkedIn**: [Ayan Batulan](https://www.linkedin.com/in/ayan-batulan-83a6302a4/)
- **GitHub**: [@monteverol](https://github.com/monteverol)

---

Built with by Ayan Batulan
