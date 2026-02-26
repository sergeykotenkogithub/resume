'use client';

import styled from 'styled-components';
import { colors, borderRadius, typography, spacing, shadows } from '../../styles/global';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'gradient';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
  children?: React.ReactNode;
}

const variantStyles = {
  primary: `
    background: ${colors.gradient.primary};
    color: ${colors.white};
    border: 1px solid transparent;
    box-shadow: ${shadows.colored};
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(129, 140, 248, 0.5);
    }
  `,
  secondary: `
    background-color: ${colors.backgroundTertiary};
    color: ${colors.text};
    border: 1px solid ${colors.border};
    &:hover {
      background-color: ${colors.backgroundElevated};
      border-color: ${colors.borderLight};
    }
  `,
  outline: `
    background-color: transparent;
    border: 2px solid ${colors.borderLight};
    color: ${colors.text};
    transition: all 0.2s ease;
    &:hover {
      border-color: ${colors.primary};
      color: ${colors.primary};
      background: ${colors.primaryLight};
      transform: translateY(-2px);
    }
  `,
  gradient: `
    background: ${colors.gradient.primary};
    color: ${colors.white};
    border: 1px solid transparent;
    box-shadow: ${shadows.colored};
    &:hover {
      opacity: 0.9;
      transform: translateY(-2px);
    }
  `,
};

const sizeStyles = {
  sm: `
    padding: ${spacing.xs} ${spacing.md};
    ${typography.caption}
    font-weight: 600;
  `,
  md: `
    padding: ${spacing.sm} ${spacing.lg};
    ${typography.bodySmall}
    font-weight: 600;
  `,
  lg: `
    padding: ${spacing.md} ${spacing.xl};
    ${typography.body}
    font-weight: 600;
  `,
};

export const Button = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${spacing.sm};
  border-radius: ${borderRadius.xl};
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.2s ease;

  ${({ variant = 'primary' }) => variantStyles[variant]}
  ${({ size = 'md' }) => sizeStyles[size]}

  ${({ fullWidth }) =>
    fullWidth &&
    `
      width: 100%;
    `}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &.as-link {
    text-decoration: none;
  }
`;
