export interface LocalizedText {
  ru: string;
  en: string;
}

export interface Review {
  id: number;
  name: string;
  text: LocalizedText;
}

export const reviews: Review[] = [
  {
    id: 1,
    name: "Alex Johnson",
    text: {
      en: "Great work! The project was delivered on time and exceeded expectations.",
      ru: "Отличная работа! Проект был сдан вовремя и превзошел ожидания."
    }
  },
  {
    id: 2,
    name: "Maria Garcia",
    text: {
      en: "Excellent communication and technical skills. Highly recommended for Telegram bot development.",
      ru: "Отличная коммуникация и технические навыки. Рекомендую для разработки Telegram-ботов."
    }
  },
  {
    id: 3,
    name: "Dmitry Ivanov",
    text: {
      en: "Professional approach to problem solving. The web app works perfectly.",
      ru: "Профессиональный подход к решению задач. Веб-приложение работает идеально."
    }
  }
];
