'use client';

import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { colors, borderRadius, spacing } from '../../styles/global';

interface BadgeProps {
  variant?: 'default' | 'primary' | 'success' | 'gradient';
}

export const Badge = styled(motion.span)<BadgeProps>`
  display: inline-flex;
  align-items: center;
  padding: ${spacing.xs} ${spacing.md};
  border-radius: ${borderRadius.full};
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1;
  transition: all 0.3s ease;

  ${({ variant = 'default' }) => {
    switch (variant) {
      case 'default':
        return css`
          background-color: ${colors.backgroundTertiary};
          color: ${colors.textSecondary};
          border: 1px solid ${colors.border};
        `;
      case 'primary':
        return css`
          background: ${colors.gradient.primary};
          color: ${colors.white};
          box-shadow: 0 4px 15px rgba(99, 102, 241, 0.5);
          border: 1px solid rgba(129, 140, 248, 0.3);
        `;
      case 'success':
        return css`
          background-color: rgba(16, 185, 129, 0.2);
          color: ${colors.success};
          border: 1px solid rgba(16, 185, 129, 0.3);
        `;
      case 'gradient':
        return css`
          background: ${colors.gradient.warm};
          color: ${colors.white};
          box-shadow: 0 4px 15px rgba(245, 158, 11, 0.5);
          border: 1px solid rgba(245, 158, 11, 0.3);
        `;
    }
  }}

  &:hover {
    transform: translateY(-2px) scale(1.05);
  }
`;
