import { Metadata } from 'next';
import StyledComponentsRegistry from './StyledComponentsRegistry';
import './globals.css';

export const metadata: Metadata = {
  title: 'Сергей Котенко — Frontend Developer',
  description: 'Frontend-разработчик с более чем 5-летним опытом. Vue, React, Next.js, TypeScript.',
  keywords: ['frontend', 'developer', 'vue', 'react', 'next.js', 'typescript', 'resume'],
  authors: [{ name: 'Сергей Котенко' }],
  openGraph: {
    title: 'Сергей Котенко — Frontend Developer',
    description: 'Frontend-разработчик с более чем 5-летним опытом. Vue, React, Next.js, TypeScript.',
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
      <body suppressHydrationWarning>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
