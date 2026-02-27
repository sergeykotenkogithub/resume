'use client';

import styled from 'styled-components';
import { Container, Section, Card } from '@/shared/ui';
import { colors, spacing, typography, borderRadius } from '@/shared/styles/global';
import { Experience } from '@/entities/candidate';
import { Briefcase } from '@styled-icons/feather/Briefcase';

const ExperienceSection = styled(Section)`
  background: linear-gradient(180deg, ${colors.backgroundSecondary} 0%, ${colors.background} 100%);
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

const Timeline = styled.ol`
  position: relative;
  max-width: 900px;
  margin: 0 auto;

  &::before {
    content: '';
    position: absolute;
    left: 24px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: ${colors.border};
  }
`;

const TimelineItem = styled.li`
  position: relative;
  padding-left: 80px;
  padding-bottom: ${spacing['2xl']};

  &:last-child {
    padding-bottom: 0;
  }

  &::before {
    content: '';
    position: absolute;
    left: 16px;
    top: 8px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: ${colors.background};
    border: 3px solid ${colors.primary};
    box-shadow: 0 0 20px rgba(129, 140, 248, 0.4);
    z-index: 1;
  }
`;

const ExperienceCard = styled(Card)`
  padding: ${spacing.xl};
  background: linear-gradient(145deg, ${colors.backgroundElevated}, ${colors.backgroundSecondary});
  border: 1px solid ${colors.border};
`;

const ExperienceHeader = styled.div`
  display: flex;
  gap: ${spacing.lg};
  margin-bottom: ${spacing.lg};
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: ${colors.gradient.primary};
  border-radius: ${borderRadius.lg};
  color: #ffffff;
  flex-shrink: 0;

  svg {
    width: 22px;
    height: 22px;
  }
`;

const ExperienceInfo = styled.div`
  flex: 1;
`;

const CompanyName = styled.h3`
  ${typography.h3}
  color: ${colors.text};
  margin-bottom: ${spacing.xs};
`;

const Position = styled.div`
  font-size: 0.95rem;
  font-weight: 600;
  color: ${colors.primary};
  margin-bottom: ${spacing.xs};
`;

const Period = styled.div`
  font-size: 0.875rem;
  color: ${colors.textSecondary};
`;

const Description = styled.ul`
  margin-bottom: ${spacing.lg};

  li {
    position: relative;
    padding-left: ${spacing.md};
    margin-bottom: ${spacing.sm};
    color: ${colors.textSecondary};
    line-height: 1.7;

    &::before {
      content: '•';
      position: absolute;
      left: 0;
      color: ${colors.primary};
      font-weight: bold;
    }
  }
`;

const Technologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${spacing.sm};
`;

const TechBadge = styled.span`
  padding: ${spacing.xs} ${spacing.sm};
  background: ${colors.backgroundTertiary};
  border: 1px solid ${colors.border};
  border-radius: ${borderRadius.full};
  font-size: 0.75rem;
  font-weight: 600;
  color: ${colors.primary};
  transition: all 0.2s ease;

  &:hover {
    background: ${colors.primary};
    color: ${colors.white};
    border-color: ${colors.primary};
  }
`;

type ExperienceWidgetProps = {
  experience: Experience[];
};

export function ExperienceWidget({ experience }: ExperienceWidgetProps) {
  return (
    <ExperienceSection id="experience">
      <Container>
        <SectionHeader>
          <SectionTitle>Опыт работы</SectionTitle>
          <SectionSubtitle>Профессиональный рост и достижения</SectionSubtitle>
        </SectionHeader>

        <Timeline>
          {experience.map((exp) => (
            <TimelineItem key={exp.id}>
              <ExperienceCard>
                <ExperienceHeader>
                  <IconWrapper>
                    <Briefcase />
                  </IconWrapper>
                  <ExperienceInfo>
                    <CompanyName>{exp.company}</CompanyName>
                    <Position>{exp.position}</Position>
                    <Period>{exp.period}</Period>
                  </ExperienceInfo>
                </ExperienceHeader>

                <Description>
                  {exp.description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </Description>

                <Technologies>
                  {exp.technologies.map((tech) => (
                    <TechBadge key={tech}>{tech}</TechBadge>
                  ))}
                </Technologies>
              </ExperienceCard>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </ExperienceSection>
  );
}
