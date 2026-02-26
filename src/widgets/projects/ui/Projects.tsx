'use client';

import styled from 'styled-components';
import { Container, Section, Card, Button } from '@/shared/ui';
import { colors, spacing, typography, borderRadius } from '@/shared/styles/global';
import { Project } from '@/entities/candidate';
import { Github } from '@styled-icons/feather/Github';

const ProjectsSection = styled(Section)`
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
  background: ${colors.gradient.secondary};
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: ${spacing.xl};
`;

const ProjectCard = styled(Card)`
  display: flex;
  flex-direction: column;
  padding: ${spacing.xl};
  background: linear-gradient(145deg, ${colors.backgroundElevated}, ${colors.backgroundSecondary});
  border: 1px solid ${colors.border};
  transition: transform 0.2s ease, border-color 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: ${colors.borderLight};
  }
`;

const ProjectTitle = styled.h3`
  ${typography.h3}
  color: ${colors.text};
  margin-bottom: ${spacing.sm};
`;

const ProjectDescription = styled.p`
  ${typography.body}
  color: ${colors.textSecondary};
  line-height: 1.7;
  flex: 1;
  margin-bottom: ${spacing.lg};
`;

const Technologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${spacing.sm};
  margin-bottom: ${spacing.lg};
`;

const TechBadge = styled.span`
  padding: ${spacing.xs} ${spacing.sm};
  background: ${colors.backgroundTertiary};
  border: 1px solid ${colors.border};
  border-radius: ${borderRadius.full};
  font-size: 0.75rem;
  font-weight: 600;
  color: ${colors.textSecondary};
  transition: all 0.2s ease;

  &:hover {
    border-color: ${colors.primary};
    color: ${colors.primary};
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: ${spacing.sm};
`;

const LinkButton = styled(Button)`
  gap: ${spacing.xs};
`;

type ProjectsWidgetProps = {
  projects: Project[];
};

export function ProjectsWidget({ projects }: ProjectsWidgetProps) {
  return (
    <ProjectsSection id="projects">
      <Container>
        <SectionHeader>
          <SectionTitle>Проекты</SectionTitle>
          <SectionSubtitle>Избранные работы, которыми я горжусь</SectionSubtitle>
        </SectionHeader>

        <ProjectsGrid>
          {projects.map((project) => (
            <ProjectCard key={project.id}>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <Technologies>
                {project.technologies.map((tech) => (
                  <TechBadge key={tech}>{tech}</TechBadge>
                ))}
              </Technologies>
              <ProjectLinks>
                {project.link && (
                  <LinkButton
                    as="a"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline"
                    size="sm"
                  >
                    <Github size={16} />
                    Код
                  </LinkButton>
                )}
              </ProjectLinks>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </ProjectsSection>
  );
}
