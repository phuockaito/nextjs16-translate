# Travel with Ease - Next.js Internationalization App

A modern, multilingual Next.js application for travel data plans with beautiful UI, animations, and full internationalization support.

## Features

- 🌍 **Internationalization (i18n)**: Full support for English and Vietnamese using `next-intl`
- 🎨 **Modern UI**: Beautiful gradient backgrounds, glassmorphism effects, and smooth animations
- 🌙 **Dark Mode**: Built-in dark mode support
- ⚡ **High Performance**: Built with Next.js 16 App Router for optimal performance
- 📱 **Responsive Design**: Mobile-first responsive design
- 🎭 **Smooth Animations**: Custom blob animations and fade-in effects
- 🔤 **Typography**: Geist font family for modern typography
- 🛠️ **TypeScript**: Full TypeScript support for type safety
- 🎯 **Code Quality**: ESLint and Prettier configured

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com)
- **Internationalization**: [next-intl](https://next-intl-docs.vercel.app)
- **React**: React 19
- **Fonts**: [Geist](https://vercel.com/font) font family

## Getting Started

### Prerequisites

- Node.js 22+
- pnpm (recommended) or npm/yarn/bun

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd nextjs
```

2. Install dependencies:

```bash
pnpm install
# or
npm install
# or
yarn install
# or
bun install
```

3. Run the development server:

```bash
pnpm dev
# or
npm run dev
# or
yarn dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
nextjs/
├── app/
│   └── [locale]/              # Locale-based routing
│       ├── _components/      # Client components
│       │   ├── change-locale.tsx
│       │   ├── use-mounted.ts
│       │   └── index.ts
│       ├── [...rest]/        # Catch-all routes
│       ├── layout.tsx        # Root layout with i18n
│       ├── page.tsx          # Home page
│       └── globals.css       # Global styles
├── constants/                # App constants
│   └── index.ts             # Locale configuration
├── i18n/                     # Internationalization setup
│   ├── routing.ts           # Routing configuration
│   ├── navigation.ts        # Navigation helpers
│   ├── use-hooks.ts         # Custom hooks
│   └── index.ts
├── messages/                 # Translation files
│   ├── en.json              # English translations
│   └── vi.json              # Vietnamese translations
├── public/                   # Static assets
└── next.config.ts           # Next.js configuration
```

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Fix ESLint errors automatically
- `pnpm format` - Format code with Prettier
- `pnpm format:check` - Check code formatting

## Internationalization

The app supports multiple locales:

- **English (en)**: Default locale
- **Vietnamese (vi)**: Full translation support

### Adding a New Locale

1. Add the locale to `constants/index.ts`:

```typescript
export const LOCALES = ["en", "vi", "fr"] as const;
```

2. Create a new translation file in `messages/`:

```json
// messages/fr.json
{
  "hello": "Bonjour",
  ...
}
```

3. The routing will automatically handle the new locale.

## Custom Hooks

### `useMounted`

A custom hook to detect when a component has mounted on the client, useful for avoiding hydration mismatches:

```typescript
import { useMounted } from "./_components";

const mounted = useMounted();
```

## Styling

The project uses Tailwind CSS 4 with custom configurations:

- Custom animations (blob animation)
- Dark mode support
- Responsive design utilities
- Glassmorphism effects
- Gradient backgrounds

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [next-intl Documentation](https://next-intl-docs.vercel.app) - Learn about internationalization
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Learn about Tailwind CSS
- [React Documentation](https://react.dev) - Learn about React

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## License

This project is private and proprietary.
