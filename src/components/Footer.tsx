
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
            <a href="#" className="text-neutral-gray hover:text-white text-sm">Политика конфиденциальности</a>
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
