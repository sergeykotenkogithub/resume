'use client';

import styled from 'styled-components';
import { Container, Section, Card, Button } from '@/shared/ui';
import { colors, spacing, typography, borderRadius, shadows } from '@/shared/styles/global';
import { Send } from '@styled-icons/feather/Send';
import { Github } from '@styled-icons/feather/Github';
import { Mail } from '@styled-icons/feather/Mail';
import { Phone } from '@styled-icons/feather/Phone';
import { MapPin } from '@styled-icons/feather/MapPin';

const ContactSection = styled(Section)`
  background: linear-gradient(180deg, ${colors.background} 0%, ${colors.backgroundSecondary} 100%);
  content-visibility: auto;
  contain-intrinsic-size: 500px;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: ${spacing['4xl']};
`;

const SectionTitle = styled.h2`
  ${typography.h2}
  background: ${colors.gradient.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: ${spacing.sm};
`;

const SectionSubtitle = styled.p`
  ${typography.body}
  color: ${colors.textSecondary};
  font-size: 1.1rem;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${spacing.xl};
  max-width: 900px;
  margin: 0 auto;
`;

const ContactCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: ${spacing['2xl']} ${spacing.xl};
  background: linear-gradient(145deg, ${colors.backgroundElevated}, ${colors.backgroundSecondary});
  border: 1px solid ${colors.border};
  transition: transform 0.2s ease, border-color 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: ${colors.borderLight};
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  margin-bottom: ${spacing.lg};
  background: ${colors.gradient.primary};
  border-radius: ${borderRadius.xl};
  color: #ffffff;
  box-shadow: ${shadows.colored};

  svg {
    width: 28px;
    height: 28px;
  }
`;

const ContactTitle = styled.h3`
  font-size: 1.15rem;
  font-weight: 700;
  color: ${colors.text};
  margin-bottom: ${spacing.sm};
`;

const ContactText = styled.p`
  ${typography.body}
  color: ${colors.textSecondary};
  margin-bottom: ${spacing.lg};
`;

const ContactButton = styled(Button)`
  width: 100%;
`;

const LocationCard = styled(Card)`
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${spacing.md};
  padding: ${spacing.xl};
  background: linear-gradient(145deg, ${colors.backgroundElevated}, ${colors.backgroundSecondary});
  border: 1px solid ${colors.border};
  text-align: center;

  svg {
    color: ${colors.primary};
  }
`;

const LocationText = styled.span`
  ${typography.body}
  color: ${colors.textSecondary};
`;

type ContactProps = {
  email: string;
  github: string;
  telegram: string;
  phone: string;
  location: string;
};

export function Contact({ email, github, telegram, phone, location }: ContactProps) {
  return (
    <ContactSection id="contact">
      <Container>
        <SectionHeader>
          <SectionTitle>Контакты</SectionTitle>
          <SectionSubtitle>Свяжитесь со мной удобным способом</SectionSubtitle>
        </SectionHeader>

        <ContactGrid>
          <ContactCard>
            <IconWrapper>
              <Send />
            </IconWrapper>
            <ContactTitle>Telegram</ContactTitle>
            <ContactText>Оперативная связь</ContactText>
            <ContactButton
              as="a"
              href={telegram}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="md"
            >
              Написать
            </ContactButton>
          </ContactCard>

          <ContactCard>
            <IconWrapper>
              <Mail />
            </IconWrapper>
            <ContactTitle>Email</ContactTitle>
            <ContactText>Для официальных запросов</ContactText>
            <ContactButton
              as="a"
              href={`mailto:${email}`}
              variant="outline"
              size="md"
            >
              {email}
            </ContactButton>
          </ContactCard>

          <ContactCard>
            <IconWrapper>
              <Github />
            </IconWrapper>
            <ContactTitle>GitHub</ContactTitle>
            <ContactText>Мои проекты и код</ContactText>
            <ContactButton
              as="a"
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="md"
            >
              Посмотреть
            </ContactButton>
          </ContactCard>

          <ContactCard>
            <IconWrapper style={{ background: colors.gradient.success }}>
              <Phone />
            </IconWrapper>
            <ContactTitle>Телефон</ContactTitle>
            <ContactText>Звоните с 9:00 до 21:00</ContactText>
            <ContactButton
              as="a"
              href={`tel:${phone}`}
              variant="outline"
              size="md"
            >
              {phone}
            </ContactButton>
          </ContactCard>

          <LocationCard>
            <MapPin size={24} />
            <LocationText>{location}</LocationText>
          </LocationCard>
        </ContactGrid>
      </Container>
    </ContactSection>
  );
}
