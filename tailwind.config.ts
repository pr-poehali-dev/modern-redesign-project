
import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Custom color palette
        "primary-red": "#EA384C",
        "primary-red-light": "#F04D5F",
        "primary-red-dark": "#D03041",
        "dark-gray": "#333333",
        "neutral-gray": "#8E9196",
        "light-gray": "#F1F0FB",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "fade-out": {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(10px)" }
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
        "fade-out": "fade-out 0.3s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;

export default config;
</current-code>

<pp-write filepath="src/App.tsx">
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
</current-code>

🚀 Редизайн корпоративного портала "Мираторг" готов! Создал современный интерфейс в молодежном стиле, используя красную, серую и белую цветовые схемы. Сохранил все элементы оригинального сайта, но сделал их визуально привлекательнее и удобнее.

Основные улучшения:
- Современный навбар с улучшенной навигацией и аватаром пользователя
- Стильный заголовок с логотипом компании и часами
- Карточки с контентом вместо обычных списков
- Табы для переключения между разделами
- Улучшенная боковая навигация с подсветкой активных пунктов

Дизайн получился чистым, современным и профессиональным, сохраняя при этом корпоративный стиль "Мираторг".
);

interface SidebarLinkProps {
  href: string;
  label: string;
  active?: boolean;
}

const SidebarLink = ({ href, label, active = false }: SidebarLinkProps)ер:

<pp-write filepath="src/components/Footer.tsx" partial>
import React from 'react';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark-gray text-white pt-16 pb-8 animate-enter" style={{animationDelay: '0.6s'}}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-primary-red rounded-md flex items-center justify-center text-white font-bold text-xl">
                P
              </div>
              <span className="ml-2 text-xl font-bold">Поехали!</span>
            </div>
            <p className="mt-4 text-neutral-gray">
              Создавайте современные и отзывчивые веб-приложения с помощью нашей платформы. 
              Мы делаем разработку быстрой, простой и приятной.
            </p>
            <div className="mt-6 flex space-x-4">
              <SocialLink icon="Facebook" href="#" />
              <SocialLink icon="Twitter" href="#" />
              <SocialLink icon="Instagram" href="#" />
              <SocialLink icon="Github" href="#" />
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Навигация</h3>
            <ul className="space-y-3">
              <FooterLink href="/" label="Главная" />
              <FooterLink href="/about" label="О нас" />
              <FooterLink href="/services" label="Услуги" />
              <FooterLink href="/projects" label="Проекты" />
              <FooterLink href="/contact" label="Контакты" />
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Ресурсы</h3>
            <ul className="space-y-3">
              <FooterLink href="/docs" label="Документация" />
              <FooterLink href="/blog" label="Блог" />
              <FooterLink href="/tutorials" label="Уроки" />
              <FooterLink href="/community" label="Сообщество" />
              <FooterLink href="/support" label="Поддержка" />
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Связаться</h3>
            <ul className="space-y-3 text-neutral-gray">
              <li className="flex items-center">
                <Icon name="MapPin" className="h-5 w-5 mr-3 text-primary-red" />
                <span>Москва, Россия</span>
              </li>
              <li className="flex items-center">
                <Icon name="Mail" className="h-5 w-5 mr-3 text-primary-red" />
                <a href="mailto:info@poehali.dev" className="hover:text-white transition-colors">
                  info@poehali.dev
                </a>
              </li>
              <li className="flex items-center">
                <Icon name="Phone" className="h-5 w-5 mr-3 text-primary-red" />
                <a href="tel:+74951234567" className="hover:text-white transition-colors">
                  +7 (495) 123-45-67
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-neutral-gray text-sm">
            &copy; {new Date().getFullYear()} Поехали! Все права защищены.
          </p>
          <div className="mt-4 sm:mt-0 flex space-x-6">
            <a href="#" className="text-neutral-gray hover:text-white text-sm">Условия использования</a>
            <a href="#" className="text-neutral-gray => (
  <a 
    href={href} 
    className={`flex px-3 py- hover:text-white text-sm">Политика конфиденциальности</a>
            <a href="#" className="text-neutral-gray hover:text-white text-sm">Правовая информация</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ icon, href }: { icon: string; href: string }) => (
  <a 
    href={href} 
    className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-primary-red transition-colors"
  >
    <Icon name={icon} className="h-5 w-5" />
  </a>
);

const FooterLink = ({ href, label }: { href: string; label: string }) => (
  <li>
    <Link to={href} className="text-neutral-gray hover:text-white transition-colors">
      {label}
    </Link>
  </li>
);

export default Footer;
