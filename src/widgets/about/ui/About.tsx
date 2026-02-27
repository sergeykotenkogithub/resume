'use client';

import styled from 'styled-components';
import { Container, Section, Card } from '@/shared/ui';
import { colors, spacing, typography, borderRadius, shadows } from '@/shared/styles/global';
import { User } from '@styled-icons/feather/User';
import { Briefcase } from '@styled-icons/feather/Briefcase';
import { MapPin } from '@styled-icons/feather/MapPin';
import { Award } from '@styled-icons/feather/Award';

const AboutSection = styled(Section)`
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
  background: ${colors.gradient.warm};
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

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${spacing.xl};
`;

const InfoCard = styled(Card)`
  padding: ${spacing.xl};
  background: linear-gradient(145deg, ${colors.backgroundElevated}, ${colors.backgroundSecondary});
  border: 1px solid ${colors.border};
  text-align: center;
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
  width: 60px;
  height: 60px;
  margin: 0 auto ${spacing.lg};
  background: ${colors.gradient.warm};
  border-radius: ${borderRadius.lg};
  color: #ffffff;

  svg {
    width: 28px;
    height: 28px;
  }
`;

const InfoTitle = styled.h3`
  font-size: 1.15rem;
  font-weight: 700;
  color: ${colors.text};
  margin-bottom: ${spacing.sm};
`;

const InfoText = styled.p`
  ${typography.body}
  color: ${colors.textSecondary};
  line-height: 1.6;
`;

const SummaryCard = styled(Card)`
  padding: ${spacing['2xl']};
  margin-top: ${spacing['2xl']};
  background: linear-gradient(145deg, ${colors.backgroundElevated}, ${colors.backgroundSecondary});
  border: 1px solid ${colors.borderLight};
  box-shadow: ${shadows.lg};
`;

const SummaryTitle = styled.h3`
  ${typography.h3}
  color: ${colors.text};
  margin-bottom: ${spacing.lg};
  display: flex;
  align-items: center;
  gap: ${spacing.md};

  svg {
    color: ${colors.primary};
  }
`;

const SummaryText = styled.p`
  ${typography.body}
  color: ${colors.textSecondary};
  line-height: 1.7;
  font-size: 1rem;
`;

export function About() {
  const infoItems = [
    {
      icon: User,
      title: 'Опыт работы',
      text: '5+ лет в коммерческой разработке. Коммерческий опыт и собственные проекты',
    },
    {
      icon: Briefcase,
      title: 'Специализация',
      text: 'React, Vue, Next.js, TypeScript — создаю современные и производительные веб-приложения',
    },
    {
      icon: MapPin,
      title: 'Формат работы',
      text: 'Сочи. Открыт к удалённой работе',
    },
    {
      icon: Award,
      title: 'Подход к работе',
      text: 'Пишу чистый, поддерживаемый код. Использую лучшие практики и архитектурные подходы',
    },
  ];

  return (
    <AboutSection id="about">
      <Container>
        <SectionHeader>
          <SectionTitle>Обо мне</SectionTitle>
          <SectionSubtitle>Информация о моей профессиональной деятельности</SectionSubtitle>
        </SectionHeader>

        <AboutGrid>
          {infoItems.map((item) => {
            const Icon = item.icon;
            return (
              <InfoCard key={item.title}>
                <IconWrapper>
                  <Icon />
                </IconWrapper>
                <InfoTitle>{item.title}</InfoTitle>
                <InfoText>{item.text}</InfoText>
              </InfoCard>
            );
          })}
        </AboutGrid>

        <SummaryCard>
          <SummaryTitle>
            <Award size={24} />
            О себе
          </SummaryTitle>
          <SummaryText>
            Frontend-разработчик с опытом более 5 лет. Специализируюсь на создании современных
            и производительных интерфейсов с использованием React, Vue, Next.js и TypeScript.
            <br /><br />
            <strong>Ключевые навыки:</strong> построение архитектуры по FSD, настройка Redux
            и TypeScript для оптимизации командной работы, создание переиспользуемых компонентов,
            модульное тестирование (Jest), интеграция внешних API, работа по Agile/Scrum,
            проведение код-ревью.
            <br /><br />
            <strong>Дополнительно:</strong> Vue 3 (Composition API), Pinia, Node.js,
            Webpack, Vite, Storybook, CI/CD. Имею опыт fullstack-разработки (MongoDB, Express, Mongoose).
            <br /><br />
            Ищу команду для долгосрочного сотрудничества, где смогу вносить вклад в качественные
            продукты и расти как профессионал. Нахожусь в Сочи, открыт к удалённой работе.
          </SummaryText>
        </SummaryCard>
      </Container>
    </AboutSection>
  );
}
