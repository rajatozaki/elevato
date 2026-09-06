# Alevate

A modern website for Alevate, a company providing websites, digital experiences, and practical AI automation for businesses.

## Tech Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: Custom UI components (No external UI libraries)
- **Fonts**: Geist Sans & Geist Mono

## Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd alevate
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Copy `.env.example` to `.env.local`
   ```bash
   cp .env.example .env.local
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

1. Push your code to a GitHub repository.
2. Import the project in Vercel.
3. Configure the environment variables (if any).
4. Deploy!

## Project Structure Overview

- `app/` - Next.js App Router pages and layouts
- `components/` - React components (UI and layout)
- `data/` - Static content data (projects, services, navigation, config)
- `lib/` - Utility functions

## Where to Edit Content

This site uses local data files for content management to keep things simple and fast.

- **Website copy**: Edit individual page files in `app/` (e.g., `app/about/page.tsx`)
- **Project data**: Edit `data/projects.ts` to add/remove portfolio items
- **Services data**: Edit `data/services.ts` to modify the service offerings
- **Site config**: Edit `data/site.ts` to update the site title, description, and founders' details
- **Navigation**: Edit `data/navigation.ts` to update the header and footer links

## Updating Placeholder Content

### Projects
To replace placeholder projects, modify `data/projects.ts`. You will need to add new project images to the `public/projects/` directory and update the `image` paths in the data file.

### Contact Details
To update your email or add social links, edit `data/site.ts`. The contact form will automatically display your email address below it once the `email` field is populated in the config.

### Social Links
Add your LinkedIn and Instagram URLs to the `social` object in `data/site.ts`.
