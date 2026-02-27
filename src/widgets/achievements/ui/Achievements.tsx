'use client';

import styled from 'styled-components';
import { Container, Section } from '@/shared/ui';
import { colors, spacing, typography, borderRadius, shadows } from '@/shared/styles/global';
import { CheckCircle } from '@styled-icons/feather/CheckCircle';
import { Zap } from '@styled-icons/feather/Zap';
import { Code } from '@styled-icons/feather/Code';
import { Users } from '@styled-icons/feather/Users';
import { ArrowUp } from '@styled-icons/feather/ArrowUp';

const AchievementsSection = styled(Section)`
  background: linear-gradient(180deg, ${colors.backgroundSecondary} 0%, ${colors.background} 100%);
  content-visibility: auto;
  contain-intrinsic-size: 400px;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: ${spacing['4xl']};
`;

const SectionTitle = styled.h2`
  ${typography.h2}
  background: ${colors.gradient.success};
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

const AchievementsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${spacing.xl};
  max-width: 1000px;
  margin: 0 auto;
`;

const AchievementCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: ${spacing.xl};
  background: linear-gradient(145deg, ${colors.backgroundElevated}, ${colors.backgroundSecondary});
  border-radius: ${borderRadius.xl};
  border: 1px solid ${colors.border};
  transition: transform 0.2s ease, border-color 0.2s ease;
  box-shadow: ${shadows.md};

  &:hover {
    transform: translateY(-4px);
    border-color: ${colors.borderLight};
    box-shadow: ${shadows.lg};
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  margin-bottom: ${spacing.lg};
  background: ${colors.gradient.success};
  border-radius: ${borderRadius.lg};
  color: #ffffff;
  box-shadow: ${shadows.colored};

  svg {
    width: 26px;
    height: 26px;
  }
`;

const AchievementTitle = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  color: ${colors.text};
  margin-bottom: ${spacing.sm};
`;

const AchievementText = styled.p`
  ${typography.bodySmall}
  color: ${colors.textSecondary};
  line-height: 1.5;
`;

const UpButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${spacing.sm};
  margin-top: ${spacing['2xl']};
  padding: ${spacing.sm} ${spacing.lg};
  font-size: 0.875rem;
  font-weight: 600;
  color: ${colors.primary};
  background: ${colors.backgroundTertiary};
  border: 1px solid ${colors.border};
  border-radius: ${borderRadius.full};
  transition: all 0.2s ease;
  cursor: pointer;

  svg {
    width: 16px;
    height: 16px;
  }

  &:hover {
    background: ${colors.primary};
    color: ${colors.white};
    border-color: ${colors.primary};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(129, 140, 248, 0.4);
  }
`;

export function Achievements() {
  const achievements = [
    {
      icon: Zap,
      title: 'Ускорение разработки',
      text: 'Внедрил переиспользуемые компоненты, что сократило время разработки новых фич на 30%',
    },
    {
      icon: Code,
      title: 'Чистая архитектура',
      text: 'Построил архитектуру по FSD с нуля. Код легко поддерживать и масштабировать',
    },
    {
      icon: Users,
      title: 'Командная работа',
      text: 'Провожу код-ревью, менторю джуниоров, внедряю лучшие практики в команде',
    },
    {
      icon: CheckCircle,
      title: 'Надёжный код',
      text: 'Пишу тесты (Jest), использую TypeScript — меньше багов в продакшене',
    },
  ];

  return (
    <AchievementsSection id="achievements">
      <Container>
        <SectionHeader>
          <SectionTitle>Что я приношу команде</SectionTitle>
          <SectionSubtitle>Ценность для команды и продукта</SectionSubtitle>
        </SectionHeader>

        <AchievementsGrid>
          {achievements.map((item) => {
            const Icon = item.icon;
            return (
              <AchievementCard key={item.title}>
                <IconWrapper>
                  <Icon />
                </IconWrapper>
                <AchievementTitle>{item.title}</AchievementTitle>
                <AchievementText>{item.text}</AchievementText>
              </AchievementCard>
            );
          })}
        </AchievementsGrid>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <UpButton href="#value">
            <ArrowUp />
            К ценности
          </UpButton>
        </div>
      </Container>
    </AchievementsSection>
  );
}
