'use client';

import styled from 'styled-components';
import { colors, borderRadius, spacing } from '@/shared/styles/global';
import type { Skill } from '@/entities/candidate';

const SkillItem = styled.li`
  display: inline-flex;
  align-items: center;
  padding: ${spacing.sm} ${spacing.md};
  background: ${colors.backgroundSecondary};
  border: 1px solid ${colors.border};
  border-radius: ${borderRadius.full};
  font-size: 0.875rem;
  font-weight: 600;
  color: ${colors.text};
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    background: ${colors.primary};
    border-color: ${colors.primary};
    color: ${colors.white};
  }
`;

const SkillsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${spacing.sm};
`;

interface SkillBadgeProps {
  skill: Skill;
}

export function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <SkillItem>
      {skill.name}
    </SkillItem>
  );
}

interface SkillListProps {
  skills: Skill[];
}

export function SkillList({ skills }: SkillListProps) {
  return (
    <SkillsList>
      {skills.map((skill) => (
        <SkillBadge key={skill.id} skill={skill} />
      ))}
    </SkillsList>
  );
}
