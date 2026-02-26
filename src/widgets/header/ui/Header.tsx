'use client';

import styled from 'styled-components';
import { Container } from '@/shared/ui';
import { colors, spacing, borderRadius, shadows } from '@/shared/styles/global';
import { Github } from '@styled-icons/feather/Github';
import { Mail } from '@styled-icons/feather/Mail';
import { Menu } from '@styled-icons/feather/Menu';
import { X } from '@styled-icons/feather/X';
import { Send } from '@styled-icons/feather/Send';
import { Phone } from '@styled-icons/feather/Phone';
import { useState } from 'react';
import { Candidate } from '@/entities/candidate';

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(10, 14, 26, 0.95);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid ${colors.border};
  will-change: transform;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
`;

const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: 800;
  background: ${colors.gradient.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: ${spacing.sm};

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  padding: ${spacing.sm} ${spacing.md};
  font-size: 0.875rem;
  font-weight: 600;
  color: ${colors.textSecondary};
  border-radius: ${borderRadius.lg};
  transition: all 0.2s ease;

  &:hover {
    color: ${colors.primary};
    background: ${colors.primaryLight};
  }
`;

const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.sm};
`;

const IconButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: ${borderRadius.lg};
  background: ${colors.backgroundTertiary};
  color: ${colors.text};
  transition: all 0.2s ease;
  border: 1px solid ${colors.border};

  svg {
    width: 20px;
    height: 20px;
  }

  &:hover {
    background: ${colors.primary};
    color: ${colors.white};
    border-color: ${colors.primary};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(129, 140, 248, 0.4);
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: ${borderRadius.lg};
  background: ${colors.backgroundTertiary};
  color: ${colors.text};
  border: 1px solid ${colors.border};
  cursor: pointer;
  z-index: 1001;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  background: ${colors.background};
  padding: ${spacing.lg};
  border-bottom: 1px solid ${colors.border};
  box-shadow: ${shadows.lg};
  z-index: 999;
  max-height: calc(100vh - 70px);
  overflow-y: auto;
`;

const MobileNavLink = styled.a`
  display: block;
  padding: ${spacing.md} ${spacing.lg};
  font-size: 1rem;
  font-weight: 600;
  color: ${colors.text};
  border-radius: ${borderRadius.lg};
  transition: color 0.2s ease;

  &:hover {
    color: ${colors.primary};
  }
`;

type HeaderProps = {
  candidate: Pick<Candidate, 'name' | 'contact'>;
};

export function Header({ candidate }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#about', label: 'Обо мне' },
    { href: '#achievements', label: 'Достижения' },
    { href: '#experience', label: 'Опыт' },
    { href: '#skills', label: 'Навыки' },
    { href: '#projects', label: 'Проекты' },
    { href: '#contact', label: 'Контакты' },
  ];

  return (
    <>
      <HeaderWrapper>
        <Container>
          <HeaderContent>
            <Logo href="#">{candidate.name}</Logo>

            <Nav>
              {navLinks.map((link) => (
                <NavLink key={link.href} href={link.href}>
                  {link.label}
                </NavLink>
              ))}
            </Nav>

            <ActionButtons>
              <IconButton
                href={candidate.contact.telegram || 'https://t.me/sergey_kot_web'}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
              >
                <Send />
              </IconButton>
              <IconButton
                href={candidate.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github />
              </IconButton>
              <IconButton
                href={`mailto:${candidate.contact.email}`}
                aria-label="Email"
              >
                <Mail />
              </IconButton>
              {candidate.contact.phone && (
                <IconButton
                  href={`tel:${candidate.contact.phone}`}
                  aria-label="Phone"
                >
                  <Phone />
                </IconButton>
              )}
              <MobileMenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X /> : <Menu />}
              </MobileMenuButton>
            </ActionButtons>
          </HeaderContent>
        </Container>
      </HeaderWrapper>

      {isMobileMenuOpen && (
        <MobileMenu>
          {navLinks.map((link) => (
            <MobileNavLink
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </MobileNavLink>
          ))}
        </MobileMenu>
      )}
    </>
  );
}
