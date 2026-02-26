'use client';

import { useEffect } from 'react';
import { GlobalStyles } from '@/shared/styles/global';
import { Header, Hero, About, ExperienceWidget, SkillsWidget, ProjectsWidget, Contact, Footer } from '@/widgets';
import { candidateData } from '@/entities/candidate';

function useSmoothScroll() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href^="#"]');
      if (!link) return;

      const href = link.getAttribute('href');
      if (!href || href === '#') return;

      const element = document.querySelector(href);
      if (!element) return;

      e.preventDefault();
      element.scrollIntoView({ behavior: 'smooth' });
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);
}

export default function Home() {
  useSmoothScroll();

  return (
    <>
      <GlobalStyles />
      <Header candidate={candidateData} />
      <main>
        <Hero candidate={candidateData} />
        <About />
        <ExperienceWidget experience={candidateData.experience} />
        <SkillsWidget skills={candidateData.skills} />
        <ProjectsWidget projects={candidateData.projects} />
        <Contact
          email={candidateData.contact.email}
          github={candidateData.contact.github}
          telegram={candidateData.contact.telegram || 'https://t.me/sergey_kot_web'}
          phone={candidateData.contact.phone || '+79384005562'}
          location={candidateData.contact.location || 'Сочи, Россия • Открыт к удалённой работе'}
        />
      </main>
      <Footer
        name={candidateData.name}
        github={candidateData.contact.github}
        email={candidateData.contact.email}
        telegram={candidateData.contact.telegram}
        phone={candidateData.contact.phone}
      />
    </>
  );
}
