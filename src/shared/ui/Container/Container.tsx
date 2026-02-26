'use client';

import styled from 'styled-components';

interface ContainerProps {
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

const maxWidths = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  full: '100%',
} as const;

export const Container = styled.div<ContainerProps>`
  width: 100%;
  max-width: ${({ maxWidth = 'xl' }) => maxWidths[maxWidth]};
  margin: 0 auto;
  padding: 0 1.5rem;
`;
