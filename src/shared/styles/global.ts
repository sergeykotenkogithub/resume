import { createGlobalStyle, css } from 'styled-components';

export const colors = {
  // Основные цвета
  primary: '#818cf8',
  primaryHover: '#a5b4fc',
  primaryLight: 'rgba(129, 140, 248, 0.15)',
  secondary: '#94a3b8',
  
  // Фон - глубокая тёмная палитра
  background: '#0a0e1a',
  backgroundSecondary: '#111827',
  backgroundTertiary: '#1f2937',
  backgroundElevated: '#1a1f2e',
  
  // Текст - высокий контраст для читаемости
  text: '#ffffff',
  textSecondary: '#cbd5e1',
  textMuted: '#94a3b8',
  
  // Границы и разделители
  border: '#2d3748',
  borderLight: '#4a5568',
  
  // Акцентные цвета
  success: '#34d399',
  warning: '#fbbf24',
  error: '#f87171',
  white: '#ffffff',
  
  // Градиенты - более насыщенные и глубокие
  gradient: {
    primary: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
    secondary: 'linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)',
    success: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)',
    warm: 'linear-gradient(135deg, #f59e0b 0%, #ec4899 100%)',
    dark: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
  },
} as const;

export const spacing = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  '2xl': '3rem',
  '3xl': '4rem',
  '4xl': '6rem',
} as const;

export const borderRadius = {
  sm: '0.375rem',
  md: '0.5rem',
  lg: '0.75rem',
  xl: '1rem',
  '2xl': '1.5rem',
  '3xl': '2rem',
  full: '9999px',
} as const;

export const typography = {
  h1: css`
    font-size: 3rem;
    font-weight: 800;
    line-height: 1.1;
    letter-spacing: -0.025em;
  `,
  h2: css`
    font-size: 2.25rem;
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -0.025em;
  `,
  h3: css`
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1.4;
  `,
  body: css`
    font-size: 1rem;
    line-height: 1.7;
  `,
  bodySmall: css`
    font-size: 0.875rem;
    line-height: 1.5;
  `,
  caption: css`
    font-size: 0.75rem;
    line-height: 1.4;
  `,
} as const;

export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.5)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.6)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.6)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.7)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.8)',
  colored: '0 20px 40px -10px rgba(99, 102, 241, 0.5)',
  glow: '0 0 30px rgba(129, 140, 248, 0.3)',
} as const;

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${colors.background};
    scroll-behavior: smooth;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
    background: ${colors.background};
    color: ${colors.text};
    ${typography.body}
    line-height: 1.6;
    overflow-x: hidden;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.2s ease;
  }

  ul, ol {
    list-style: none;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
    font-family: inherit;
  }

  img {
    max-width: 100%;
    display: block;
  }

  ::selection {
    background: ${colors.primary};
    color: ${colors.white};
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${colors.backgroundSecondary};
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, ${colors.primary}, #6366f1);
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${colors.primaryHover};
  }
`;
