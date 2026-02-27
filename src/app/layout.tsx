import { Metadata } from 'next';
import StyledComponentsRegistry from './StyledComponentsRegistry';
import './globals.css';

export const metadata: Metadata = {
  title: 'Сергей Котенко — Frontend-разработчик (React, Vue, TypeScript)',
  description: 'Frontend-разработчик с опытом более 5 лет. Специализируюсь на React, Vue, Next.js и TypeScript. Создаю современные и производительные веб-приложения.',
  keywords: ['frontend', 'developer', 'vue', 'react', 'next.js', 'typescript', 'resume', 'frontend-разработчик'],
  authors: [{ name: 'Сергей Котенко' }],
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'Сергей Котенко — Frontend-разработчик (React, Vue, TypeScript)',
    description: 'Frontend-разработчик с опытом более 5 лет. Специализируюсь на React, Vue, Next.js и TypeScript. Создаю современные и производительные веб-приложения.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <link
          rel="preload"
          href="/avatar.jpeg"
          as="image"
          type="image/jpeg"
        />
      </head>
      <body suppressHydrationWarning>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
