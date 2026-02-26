'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Mail } from '@styled-icons/feather/Mail';
import { Github } from '@styled-icons/feather/Github';
import { MapPin } from '@styled-icons/feather/MapPin';
import { MessageSquare } from '@styled-icons/feather/MessageSquare';
import { colors, spacing, borderRadius, shadows } from '@/shared/styles/global';

const ContactList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${spacing.md};
`;

const ContactItem = styled(motion.li)`
  display: flex;
  align-items: center;
  gap: ${spacing.sm};
  color: ${colors.textSecondary};
`;

const StyledIcon = styled(motion.span)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
  border-radius: ${borderRadius.xl};
  color: ${colors.primary};
  transition: all 0.3s ease;

  svg {
    width: 22px;
    height: 22px;
  }
`;

const LinkContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const Label = styled.span`
  font-size: 0.75rem;
  color: ${colors.textSecondary};
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const Value = styled.a`
  font-size: 0.95rem;
  color: ${colors.text};
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    color: ${colors.primary};
  }
`;

interface ContactLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  value: string;
  delay?: number;
}

function ContactLink({ href, icon, label, value, delay = 0 }: ContactLinkProps) {
  return (
    <ContactItem
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
    >
      <StyledIcon
        whileHover={{ scale: 1.15, rotate: 360 }}
        transition={{ duration: 0.4 }}
      >
        {icon}
      </StyledIcon>
      <LinkContent>
        <Label>{label}</Label>
        <Value href={href} target="_blank" rel="noopener noreferrer">
          {value}
        </Value>
      </LinkContent>
    </ContactItem>
  );
}

interface ContactInfoProps {
  email: string;
  github: string;
  telegram?: string;
  location?: string;
}

export function ContactInfo({ email, github, telegram, location }: ContactInfoProps) {
  return (
    <ContactList>
      <ContactLink
        href={`mailto:${email}`}
        icon={<Mail />}
        label="Email"
        value={email}
        delay={0}
      />
      <ContactLink
        href={github}
        icon={<Github />}
        label="GitHub"
        value="github.com/sergeykotenkogithub"
        delay={0.1}
      />
      {telegram && (
        <ContactLink
          href={`https://t.me/${telegram.replace('@', '')}`}
          icon={<MessageSquare />}
          label="Telegram"
          value={telegram}
          delay={0.2}
        />
      )}
      {location && (
        <ContactItem
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <StyledIcon
            whileHover={{ scale: 1.15, rotate: 10 }}
            transition={{ duration: 0.4 }}
          >
            <MapPin />
          </StyledIcon>
          <LinkContent>
            <Label>Location</Label>
            <Value as="span">{location}</Value>
          </LinkContent>
        </ContactItem>
      )}
    </ContactList>
  );
}
