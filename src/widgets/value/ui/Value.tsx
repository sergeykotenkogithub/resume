'use client';

import styled from 'styled-components';
import { Container, Section, Card } from '@/shared/ui';
import { colors, spacing, typography, borderRadius, shadows } from '@/shared/styles/global';
import { Target } from '@styled-icons/feather/Target';
import { Users } from '@styled-icons/feather/Users';
import { TrendingUp } from '@styled-icons/feather/TrendingUp';
import { Zap } from '@styled-icons/feather/Zap';

const ValueSection = styled(Section)`
  background: linear-gradient(180deg, ${colors.background} 0%, ${colors.backgroundSecondary} 100%);
  content-visibility: auto;
  contain-intrinsic-size: 600px;
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

const ValueGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${spacing.xl};
`;

const ValueCard = styled(Card)`
  padding: ${spacing['2xl']};
  background: linear-gradient(145deg, ${colors.backgroundElevated}, ${colors.backgroundSecondary});
  border: 1px solid ${colors.border};
  border-radius: ${borderRadius.xl};
  box-shadow: ${shadows.md};
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, ${colors.primary}, #6366f1);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-6px);
    border-color: ${colors.borderLight};
    box-shadow: ${shadows.xl};

    &::before {
      opacity: 1;
    }
  }
`;

const IconWrapper = styled.div<{ gradient: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  margin-bottom: ${spacing.lg};
  border-radius: ${borderRadius.lg};
  background: ${(props) => props.gradient};
  color: #ffffff;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);

  svg {
    width: 26px;
    height: 26px;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${colors.text};
  margin-bottom: ${spacing.md};
`;

const CardText = styled.p`
  ${typography.body}
  color: ${colors.textSecondary};
  line-height: 1.7;
`;

const ValueList = styled.ul`
  margin-top: ${spacing.md};
  padding-left: ${spacing.md};
`;

const ValueListItem = styled.li`
  ${typography.body}
  color: ${colors.textSecondary};
  line-height: 1.8;
  position: relative;
  padding-left: ${spacing.lg};

  &::before {
    content: '▸';
    position: absolute;
    left: 0;
    color: ${colors.primary};
    font-weight: 700;
  }
`;

const highlightItems = [
  {
    icon: Target,
    title: 'Для продукта',
    description: 'Создаю интерфейсы, которые работают на бизнес-метрики',
    points: [
      'Повышаю конверсию через продуманный UX и быстрые интерфейсы',
      'Оптимизирую производительность (Core Web Vitals, Fast Load)',
      'Делаю доступные решения (a11y), расширяющие аудиторию',
    ],
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
  {
    icon: Users,
    title: 'Для команды',
    description: 'Усиливаю команду и ускоряю процессы разработки',
    points: [
      'Выстраиваю архитектуру, которую легко масштабировать',
      'Пишу документацию и переиспользуемые компоненты',
      'Провожу код-ревью и делюсь знаниями с командой',
    ],
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  },
  {
    icon: TrendingUp,
    title: 'Для бизнеса',
    description: 'Говорю на языке результатов и метрик',
    points: [
      'Использую ИИ-инструменты для ускорения разработки на 30-40%',
      'Понимаю приоритеты и сроки, соблюдаю дедлайны',
      'Предлагаю решения с учётом ROI и стоимости владения',
    ],
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  },
  {
    icon: Zap,
    title: 'Техническая экспертиза',
    description: 'Глубокие знания для сложных задач',
    points: [
      '5+ лет коммерческого опыта с React, Next.js, TypeScript',
      'Архитектура по FSD, настройка Webpack/Vite с нуля',
      'Fullstack-навыки (Node.js, MongoDB) для комплексных решений',
    ],
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #ec4899 100%)',
  },
];

export function Value() {
  return (
    <ValueSection id="value">
      <Container>
        <SectionHeader>
          <SectionTitle>Ценность для команды и продукта</SectionTitle>
          <SectionSubtitle>Что я приношу в проект помимо кода</SectionSubtitle>
        </SectionHeader>

        <ValueGrid>
          {highlightItems.map((item) => {
            const Icon = item.icon;
            return (
              <ValueCard key={item.title}>
                <IconWrapper gradient={item.gradient}>
                  <Icon />
                </IconWrapper>
                <CardTitle>{item.title}</CardTitle>
                <CardText>{item.description}</CardText>
                <ValueList>
                  {item.points.map((point, index) => (
                    <ValueListItem key={index}>{point}</ValueListItem>
                  ))}
                </ValueList>
              </ValueCard>
            );
          })}
        </ValueGrid>
      </Container>
    </ValueSection>
  );
}
