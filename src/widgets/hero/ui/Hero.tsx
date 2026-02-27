'use client';

import styled from 'styled-components';
import { Container, Section, Button } from '@/shared/ui';
import { colors, spacing, typography, borderRadius } from '@/shared/styles/global';
import { Candidate } from '@/entities/candidate';
import { Github } from '@styled-icons/feather/Github';
import { Send } from '@styled-icons/feather/Send';
import { ArrowDown } from '@styled-icons/feather/ArrowDown';

const HeroSection = styled(Section)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: ${spacing['4xl']};
  content-visibility: auto;
  contain-intrinsic-size: 100vh;
  background: 
    radial-gradient(ellipse at top, rgba(99, 102, 241, 0.2), transparent 60%),
    radial-gradient(ellipse at bottom right, rgba(139, 92, 246, 0.12), transparent 50%),
    linear-gradient(180deg, ${colors.background} 0%, ${colors.backgroundSecondary} 100%);
`;

const HeroContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${spacing['4xl']};
  align-items: center;
  position: relative;
  z-index: 1;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: ${spacing['2xl']};
    text-align: center;
  }

  @media (max-width: 480px) {
    gap: ${spacing.xl};
  }
`;

const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.lg};
`;

const Greeting = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${spacing.sm};
  padding: ${spacing.sm} ${spacing.lg};
  background: ${colors.primaryLight};
  border: 1px solid rgba(129, 140, 248, 0.4);
  border-radius: ${borderRadius.full};
  color: ${colors.primary};
  font-size: 0.875rem;
  font-weight: 600;
  width: fit-content;
  box-shadow: 0 0 20px rgba(129, 140, 248, 0.2);
`;

const Title = styled.h1`
  ${typography.h1}
  background: ${colors.gradient.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 968px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  ${typography.body}
  font-size: 1.5rem;
  color: ${colors.textSecondary};
  line-height: 1.7;
  font-weight: 400;

  @media (max-width: 968px) {
    font-size: 1.25rem;
  }
`;

const Description = styled.p`
  ${typography.body}
  color: ${colors.textSecondary};
  line-height: 1.8;
  font-size: 1.1rem;
`;

const Actions = styled.div`
  display: flex;
  gap: ${spacing.md};
  flex-wrap: wrap;
  contain: layout;

  @media (max-width: 968px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: ${spacing.sm};
    
    button, a {
      width: 100%;
      justify-content: center;
    }
  }
`;

const HeroImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 968px) {
    order: -1;
  }
`;

const AvatarWrapper = styled.div`
  position: relative;
  width: 280px;
  height: 280px;
  contain: layout;

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }

  @media (max-width: 480px) {
    width: 160px;
    height: 160px;
  }
`;

const AvatarCircle = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: ${colors.gradient.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 6rem;
  font-weight: 800;
  color: ${colors.white};
  box-shadow:
    0 0 80px rgba(129, 140, 248, 0.5),
    0 0 40px rgba(99, 102, 241, 0.3);
  position: relative;
  z-index: 2;
  overflow: hidden;

  @media (max-width: 768px) {
    font-size: 4rem;
  }
`;

const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  transform: rotate(-5deg);
  content-visibility: auto;
`;

const FloatingBadge = styled.div`
  position: absolute;
  bottom: 10px;
  right: 0;
  background: ${colors.backgroundElevated};
  padding: ${spacing.sm} ${spacing.lg};
  border-radius: ${borderRadius['2xl']};
  border: 1px solid ${colors.borderLight};
  box-shadow: 
    0 4px 20px rgba(0, 0, 0, 0.5),
    0 0 30px rgba(129, 140, 248, 0.2);
  display: flex;
  align-items: center;
  gap: ${spacing.xs};
  font-size: 0.875rem;
  font-weight: 700;
  color: ${colors.text};
  z-index: 3;
  white-space: nowrap;
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: ${spacing['2xl']};
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${spacing.sm};
  color: ${colors.textSecondary};
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ScrollIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: ${colors.backgroundTertiary};
  border: 2px solid ${colors.borderLight};
  color: ${colors.primary};
  box-shadow: 0 0 20px rgba(129, 140, 248, 0.3);
  animation: bounce 2s infinite;

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(6px);
    }
    60% {
      transform: translateY(3px);
    }
  }
`;

type HeroProps = {
  candidate: Candidate;
};

export function Hero({ candidate }: HeroProps) {
  return (
    <HeroSection>
      <Container>
        <HeroContent>
          <HeroText>
            <Greeting>
              <span>👋</span>
              Открыт к предложениям
            </Greeting>

            <Title>{candidate.name}</Title>

            <Subtitle>{candidate.title}</Subtitle>

            <Description>{candidate.summary}</Description>

            <Actions>
              <Button
                as="a"
                href={candidate.contact.telegram || 'https://t.me/sergey_kot_web'}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="lg"
              >
                <Send size={20} />
                Написать в Telegram
              </Button>
              <Button
                as="a"
                href={`mailto:${candidate.contact.email}`}
                variant="outline"
                size="lg"
              >
                sergeykotenko@bk.ru
              </Button>
              <Button
                as="a"
                href={candidate.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="lg"
              >
                <Github size={20} />
                GitHub
              </Button>
            </Actions>
          </HeroText>

          <HeroImage>
            <AvatarWrapper>
              <AvatarCircle>
                <AvatarImage src="/avatar.jpeg" alt={candidate.name} loading="eager" decoding="sync" />
              </AvatarCircle>
              <FloatingBadge>
                🚀 React • Vue • Next.js • TypeScript
              </FloatingBadge>
            </AvatarWrapper>
          </HeroImage>
        </HeroContent>
      </Container>

      <ScrollIndicator>
        <ScrollIcon>
          <ArrowDown size={16} />
        </ScrollIcon>
        Листайте вниз
      </ScrollIndicator>
    </HeroSection>
  );
}
