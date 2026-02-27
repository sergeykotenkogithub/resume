import { Candidate } from '@/entities/candidate';

export const candidateData: Candidate = {
  name: 'Сергей Котенко',
  title: 'Frontend-разработчик (React / Vue / Next.js / TypeScript)',
  summary:
    'Разрабатываю веб-приложения с 2020 года. Работаю с React, Vue и Next.js — там, где нужен TypeScript, там и я. Умею выстраивать архитектуру с нуля (FSD, Webpack). Пишу компоненты так, чтобы их хотелось переиспользовать, и оптимизирую так, чтобы пользователи не ждали. Активно использую ИИ-инструменты для ускорения разработки и поиска решений. Работал с разным стеком: от корпоративных систем на Vue + Pinia до собственных fullstack-проектов (React + Node.js + MongoDB). Работаю по Agile/Scrum, провожу код-ревью, пишу тесты. Ищу команду, где смогу применять лучшие практики и расти вместе с продуктом.',
  experience: [
    {
      id: 'exp-1',
      company: 'ООО "СК Софтлайн"',
      position: 'Frontend-разработчик',
      period: 'Июль 2023 — Сентябрь 2025 (2 года 3 месяца)',
      description: [
        'Разработка пользовательских интерфейсов для аналитиков: личный кабинет, таблицы, права доступа, каталоги',
        'Построение и доработка архитектуры проекта по FSD',
        'Внедрение повторно используемых компонентов, ускоривших разработку',
        'Настройка Redux и TypeScript, оптимизировавшая работу команды',
        'Модульное тестирование (Jest), кросс-ревью в команде по Agile',
      ],
      technologies: ['React', 'Redux', 'TypeScript', 'Vue 3', 'Pinia', 'MUI', 'Jest', 'FSD', 'GitLab'],
    },
    {
      id: 'exp-2',
      company: 'ООО "Камелеон"',
      position: 'Frontend-разработчик',
      period: 'Октябрь 2021 — Ноябрь 2022 (1 год 2 месяца)',
      description: [
        'Разработка А/Б тестов с использованием облачного сервиса Kameleoon',
        'Интеграция внешних API для улучшения функциональности сайтов',
        'Оптимизация производительности и логики отображения',
        'Работа в команде по Trello',
      ],
      technologies: ['JavaScript', 'HTML', 'SCSS', 'CSS', 'Kameleoon', 'GitLab'],
    },
    {
      id: 'exp-3',
      company: 'Веб-студия "Oskar-studio"',
      position: 'Frontend-разработчик',
      period: 'Май 2021 — Октябрь 2021 (6 месяцев)',
      description: [
        'Разработка многофункциональных и адаптивных сайтов',
        'Вёрстка, работа с логикой сайта, построение архитектуры приложения',
        'Оптимизация процессов и повышение удовлетворённости клиентов',
      ],
      technologies: ['HTML', 'JavaScript', 'CSS', 'GitLab', 'Redmine'],
    },
  ],
  skills: [
    { id: 'skill-1', name: 'React', level: 'expert', category: 'frontend' },
    { id: 'skill-2', name: 'TypeScript', level: 'advanced', category: 'frontend' },
    { id: 'skill-3', name: 'Next.js', level: 'advanced', category: 'frontend' },
    { id: 'skill-4', name: 'JavaScript (ES6+)', level: 'advanced', category: 'frontend' },
    { id: 'skill-5', name: 'Redux Toolkit', level: 'advanced', category: 'frontend' },
    { id: 'skill-6', name: 'RTK Query', level: 'advanced', category: 'frontend' },
    { id: 'skill-7', name: 'React Query', level: 'advanced', category: 'frontend' },
    { id: 'skill-8', name: 'HTML5 / CSS3', level: 'expert', category: 'frontend' },
    { id: 'skill-9', name: 'SCSS', level: 'advanced', category: 'frontend' },
    { id: 'skill-10', name: 'Vue.js / Vue 3', level: 'intermediate', category: 'frontend' },
    { id: 'skill-11', name: 'Material Design', level: 'intermediate', category: 'frontend' },
    { id: 'skill-12', name: 'Node.js', level: 'intermediate', category: 'backend' },
    { id: 'skill-13', name: 'Git', level: 'advanced', category: 'tools' },
    { id: 'skill-14', name: 'Webpack / Vite', level: 'advanced', category: 'tools' },
    { id: 'skill-15', name: 'Jest', level: 'intermediate', category: 'tools' },
    { id: 'skill-16', name: 'Storybook', level: 'intermediate', category: 'tools' },
    { id: 'skill-17', name: 'CI/CD', level: 'intermediate', category: 'tools' },
    { id: 'skill-18', name: 'REST API', level: 'advanced', category: 'tools' },
  ],
  projects: [
    {
      id: 'proj-1',
      title: 'Workout App',
      description:
        'Fullstack-приложение для тренировок: отслеживание прогресса, статистика, личный кабинет. Реализованы авторизация, CRUD-операции, работа с MongoDB.',
      technologies: ['React', 'React Query', 'Axios', 'Node.js', 'Express', 'MongoDB', 'Mongoose'],
      link: 'https://github.com/sergeykotenkogithub/workout-app',
    },
    {
      id: 'proj-2',
      title: 'Travel App',
      description:
        'Приложение для планирования путешествий с интеграцией Sanity CMS. Поиск, фильтрация, динамические маршруты.',
      technologies: ['Next.js', 'TypeScript', 'Sanity', 'React Toastify', 'React Icons'],
      link: 'https://github.com/sergeykotenkogithub/travel-app',
    },
    {
      id: 'proj-3',
      title: 'Power Movie',
      description:
        'Онлайн-кинотеатр: каталог фильмов, поиск, фильтрация по жанрам, избранное, админ-панель. Реализована полная CRUD-логика.',
      technologies: ['TypeScript', 'Next.js', 'Redux', 'React Query', 'Axios', 'React Select'],
      link: 'https://github.com/sergeykotenkogithub/power-movie',
    },
    {
      id: 'proj-4',
      title: 'Shop Watch',
      description:
        'Интернет-магазин с корзиной, фильтрацией товаров, анимациями. Реализовано состояние через Redux Toolkit и кэширование через RTK Query.',
      technologies: ['React', 'TypeScript', 'RTK Query', 'Redux Toolkit'],
      link: 'https://github.com/sergeykotenkogithub/shop-watch',
    },
    {
      id: 'proj-5',
      title: 'Info App',
      description:
        'Многоязычное приложение с архитектурой FSD. Настроено с нуля: Webpack, ESLint, Prettier, Stylelint, Storybook, Jest. i18n-локализация.',
      technologies: ['React', 'TypeScript', 'Webpack', 'Jest', 'Storybook', 'i18next', 'ESLint'],
      link: 'https://github.com/sergeykotenkogithub/info-app',
    },
    {
      id: 'proj-6',
      title: 'Internet Shop (Vanilla JS)',
      description:
        'Интернет-магазин на чистом JavaScript. Демонстрация глубокого понимания DOM, событий, работы с localStorage без фреймворков.',
      technologies: ['HTML', 'JavaScript', 'CSS'],
      link: 'https://github.com/sergeykotenkogithub/withoutframework',
    },
  ],
  contact: {
    email: 'sergeykotenko@bk.ru',
    github: 'https://github.com/sergeykotenkogithub/',
    telegram: 'https://t.me/sergey_kot_web',
    phone: '+7 938 400-55-62',
    location: 'Сочи, Россия • Открыт к удалённой работе',
  },
};
