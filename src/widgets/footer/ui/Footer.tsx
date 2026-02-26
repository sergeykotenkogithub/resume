'use client';

import styled from 'styled-components';
import { Container } from '@/shared/ui';
import { colors, spacing, borderRadius } from '@/shared/styles/global';
import { Github } from '@styled-icons/feather/Github';
import { Mail } from '@styled-icons/feather/Mail';
import { Send } from '@styled-icons/feather/Send';
import { Phone } from '@styled-icons/feather/Phone';
import { Heart } from '@styled-icons/feather/Heart';

const FooterWrapper = styled.footer`
  background: ${colors.gradient.primary};
  color: #ffffff;
  padding: ${spacing['4xl']} 0 ${spacing['2xl']};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(ellipse at top, rgba(255, 255, 255, 0.1), transparent 70%);
    pointer-events: none;
  }
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${spacing.lg};
  text-align: center;
`;

const Name = styled.h3`
  font-size: 1.75rem;
  font-weight: 800;
`;

const Title = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${spacing.md};
  margin: ${spacing.lg} 0;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: ${borderRadius.lg};
  color: #ffffff;
  transition: all 0.2s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);

  svg {
    width: 20px;
    height: 20px;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  }
`;

const Copyright = styled.p`
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);
  display: flex;
  align-items: center;
  gap: ${spacing.xs};
`;

type FooterProps = {
  name: string;
  github: string;
  email: string;
  telegram?: string;
  phone?: string;
};

export function Footer({ name, github, email, telegram, phone }: FooterProps) {
  return (
    <FooterWrapper>
      <Container>
        <FooterContent>
          <Name>{name}</Name>
          <Title>Frontend Developer</Title>

          <SocialLinks>
            <SocialLink
              href={telegram || 'https://t.me/sergey_kot_web'}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
            >
              <Send />
            </SocialLink>
            <SocialLink
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github />
            </SocialLink>
            <SocialLink
              href={`mailto:${email}`}
              aria-label="Email"
            >
              <Mail />
            </SocialLink>
            {phone && (
              <SocialLink
                href={`tel:${phone}`}
                aria-label="Phone"
              >
                <Phone />
              </SocialLink>
            )}
          </SocialLinks>

          <Copyright>
            © {new Date().getFullYear()} {name}. Все права защищены.
            <Heart size={14} fill="currentColor" style={{ color: '#ff6b6b' }} />
            Создано с любовью
          </Copyright>
        </FooterContent>
      </Container>
    </FooterWrapper>
  );
}
