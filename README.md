# Telegram Portfolio Mini App

Modern, lightweight portfolio application designed for Telegram Web Apps.

## Features

- ⚡️ Built with React, TypeScript, and Vite
- 🎨 Tailwind CSS for styling
- 🌍 Multi-language support (RU/EN)
- 📱 Mobile-first design
- 🔄 Telegram Web Apps API integration

## Content Management (Admin Guide)

Since this is a lightweight static application, content is managed via configuration files. You do not need a database or complex backend.

### Adding Projects
1. Open `src/data/projects.ts`.
2. Add a new object to the `projects` array. Note that `title` and `description` are now objects supporting both English (`en`) and Russian (`ru`):
   ```typescript
   {
     id: 4,
     title: {
       en: "New Project Name",
       ru: "Название нового проекта"
     },
     description: {
       en: "Short description of the project.",
       ru: "Краткое описание проекта."
     },
     image: "https://link-to-your-image.com/image.jpg",
     techStack: ["React", "TypeScript"],
     link: "https://project-url.com" // (Optional) Not currently used in UI
   }
   ```
   *Note: Clicking on a project in the UI will open the `image` in a full-screen viewer. It will NOT navigate to the `link` URL.*
3. Save the file. The app will automatically update.

### Adding Reviews
1. Open `src/data/reviews.ts`.
2. Add a new object to the `reviews` array. The `text` field supports localization:
   ```typescript
   {
     id: 4,
     name: "Client Name",
     text: {
       en: "Feedback text goes here.",
       ru: "Текст отзыва здесь."
     }
   }
   ```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Deployment

This is a static web application. You can deploy the contents of the `dist` folder to any static hosting provider (GitHub Pages, Vercel, Netlify) or your own VPS.

### VPS Deployment (Nginx)

1. Build the project locally:
   ```bash
   npm run build
   ```

2. Upload the `dist` folder to your server (e.g., `/var/www/portfolio`).

3. Configure Nginx:
   ```nginx
   server {
       listen 80;
       server_name portfolio.yourdomain.com;
       root /var/www/portfolio;
       index index.html;

       location / {
           try_files $uri $uri/ /index.html;
       }
   }
   ```

## Telegram Bot Setup

1. Create a new bot via @BotFather.
2. Create a new Web App via @BotFather linked to your hosted URL.
3. Add the Web App to your bot's menu or send it as a button.
