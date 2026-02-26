'use client';

import styled from 'styled-components';
import { Container, Section, Card } from '@/shared/ui';
import { colors, spacing, typography, borderRadius } from '@/shared/styles/global';
import { SkillList } from '@/features/skill-list';
import { Skill } from '@/entities/candidate';
import { Code } from '@styled-icons/feather/Code';
import { Server } from '@styled-icons/feather/Server';
import { Tool } from '@styled-icons/feather/Tool';

const SkillsSection = styled(Section)`
  background: linear-gradient(180deg, ${colors.backgroundSecondary} 0%, ${colors.background} 100%);
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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: ${spacing.xl};
`;

const SkillCard = styled(Card)`
  padding: ${spacing.xl};
  background: linear-gradient(145deg, ${colors.backgroundElevated}, ${colors.backgroundSecondary});
  border: 1px solid ${colors.border};
  transition: border-color 0.2s ease;

  &:hover {
    border-color: ${colors.borderLight};
  }
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.md};
  margin-bottom: ${spacing.lg};
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: ${borderRadius.lg};
  color: #ffffff;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);

  svg {
    width: 20px;
    height: 20px;
  }
`;

const CategoryTitle = styled.h3`
  font-size: 1.15rem;
  font-weight: 700;
  color: ${colors.text};
`;

const categoryIcons = {
  frontend: Code,
  backend: Server,
  tools: Tool,
  other: Code,
};

const categoryTitles = {
  frontend: 'Frontend',
  backend: 'Backend',
  tools: 'Инструменты',
  other: 'Другое',
};

const categoryColors = {
  frontend: '#667eea',
  backend: '#f5576c',
  tools: '#4facfe',
  other: '#43e97b',
};

type SkillsWidgetProps = {
  skills: Skill[];
};

export function SkillsWidget({ skills }: SkillsWidgetProps) {
  const groupedSkills = skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
      return acc;
    },
    {} as Record<string, Skill[]>
  );

  return (
    <SkillsSection id="skills">
      <Container>
        <SectionHeader>
          <SectionTitle>Навыки</SectionTitle>
          <SectionSubtitle>Технологии и инструменты, которыми я владею</SectionSubtitle>
        </SectionHeader>

        <SkillsGrid>
          {Object.entries(groupedSkills).map(([category, categorySkills]) => {
            const Icon = categoryIcons[category as keyof typeof categoryIcons];
            return (
              <SkillCard key={category}>
                <CategoryHeader>
                  <IconWrapper style={{ background: categoryColors[category as keyof typeof categoryColors] }}>
                    <Icon />
                  </IconWrapper>
                  <CategoryTitle>{categoryTitles[category as keyof typeof categoryTitles]}</CategoryTitle>
                </CategoryHeader>
                <SkillList skills={categorySkills} />
              </SkillCard>
            );
          })}
        </SkillsGrid>
      </Container>
    </SkillsSection>
  );
}
