import styled, { css, keyframes } from 'styled-components';

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const fadeInDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const fadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const scaleIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const slideInLeft = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

export const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
`;

export const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`;

export const shimmer = keyframes`
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`;

export const gradientFlow = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

interface AnimationProps {
  delay?: number;
  duration?: number;
}

export const animations = {
  fadeIn: css<AnimationProps>`
    animation: ${fadeIn} ${({ duration = 0.6 }) => duration}s ease-out;
  `,
  fadeInUp: css<AnimationProps>`
    animation: ${fadeInUp} ${({ duration = 0.6 }) => duration}s ease-out;
    animation-delay: ${({ delay = 0 }) => delay}ms;
    animation-fill-mode: both;
  `,
  fadeInDown: css<AnimationProps>`
    animation: ${fadeInDown} ${({ duration = 0.6 }) => duration}s ease-out;
    animation-delay: ${({ delay = 0 }) => delay}ms;
    animation-fill-mode: both;
  `,
  fadeInLeft: css<AnimationProps>`
    animation: ${fadeInLeft} ${({ duration = 0.6 }) => duration}s ease-out;
    animation-delay: ${({ delay = 0 }) => delay}ms;
    animation-fill-mode: both;
  `,
  fadeInRight: css<AnimationProps>`
    animation: ${fadeInRight} ${({ duration = 0.6 }) => duration}s ease-out;
    animation-delay: ${({ delay = 0 }) => delay}ms;
    animation-fill-mode: both;
  `,
  scaleIn: css<AnimationProps>`
    animation: ${scaleIn} ${({ duration = 0.4 }) => duration}s ease-out;
    animation-delay: ${({ delay = 0 }) => delay}ms;
    animation-fill-mode: both;
  `,
  float: css`
    animation: ${float} 6s ease-in-out infinite;
  `,
  pulse: css`
    animation: ${pulse} 2s ease-in-out infinite;
  `,
  shimmer: css`
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.1) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    background-size: 1000px 100%;
    animation: ${shimmer} 2s infinite;
  `,
  gradientFlow: css`
    background-size: 200% 200%;
    animation: ${gradientFlow} 15s ease infinite;
  `,
};
