'use client';

import styled from 'styled-components';

interface SectionProps {
  variant?: 'default' | 'secondary' | 'gradient';
}

export const Section = styled.section<SectionProps>`
  padding: 4rem 0;
  content-visibility: auto;
  contain-intrinsic-size: 400px;
`;
