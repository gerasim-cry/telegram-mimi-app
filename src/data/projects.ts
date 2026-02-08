export interface LocalizedText {
  ru: string;
  en: string;
}

export interface Project {
  id: number;
  title: LocalizedText;
  description: LocalizedText;
  image: string;
  techStack: string[];
  link: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: {
      en: "E-commerce Store",
      ru: "Интернет-магазин"
    },
    description: {
      en: "Modern online store with cart, payments and admin panel.",
      ru: "Современный интернет-магазин с корзиной, оплатой и админ-панелью."
    },
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?fit=crop&w=800&h=450&q=80",
    techStack: ["React", "Node.js", "PostgreSQL", "Stripe"],
    link: "https://example.com"
  },
  {
    id: 2,
    title: {
      en: "Task Manager Bot",
      ru: "Бот Менеджер Задач"
    },
    description: {
      en: "Telegram bot for managing daily tasks and reminders.",
      ru: "Telegram-бот для управления ежедневными задачами и напоминаниями."
    },
    image: "https://images.unsplash.com/photo-1555421689-d68471e189f2?fit=crop&w=800&h=450&q=80",
    techStack: ["Telegraf", "NestJS", "MongoDB"],
    link: "https://t.me/example_bot"
  },
  {
    id: 3,
    title: {
      en: "Crypto Dashboard",
      ru: "Крипто Дашборд"
    },
    description: {
      en: "Real-time cryptocurrency tracking dashboard.",
      ru: "Дашборд для отслеживания криптовалют в реальном времени."
    },
    image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?fit=crop&w=800&h=450&q=80",
    techStack: ["Vue.js", "Firebase"],
    link: "https://example.com"
  }
];
