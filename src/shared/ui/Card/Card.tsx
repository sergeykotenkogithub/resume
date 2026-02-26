'use client';

import styled from 'styled-components';
import { colors, borderRadius, spacing, shadows } from '../../styles/global';

export const Card = styled.div`
  background: linear-gradient(145deg, ${colors.backgroundElevated}, ${colors.backgroundSecondary});
  border-radius: ${borderRadius['2xl']};
  border: 1px solid ${colors.border};
  padding: ${spacing.xl};
  box-shadow: ${shadows.md};
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;

  &:hover {
    border-color: ${colors.borderLight};
    box-shadow: ${shadows.lg};
  }
`;
