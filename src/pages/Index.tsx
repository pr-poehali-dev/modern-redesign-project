
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const Index = () => {
  const currentDate = new Date();
  const formattedDate = new Intl.DateTimeFormat('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  }).format(currentDate);
  
  const dayOfWeek = new Intl.DateTimeFormat('ru-RU', { weekday: 'long' }).format(currentDate);
  const capitalizedDay = dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1);
  
  const hours = currentDate.getHours().toString().padStart(2, '0');
  const minutes = currentDate.getMinutes().toString().padStart(2, '0');
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Верхняя панель */}
      

Обновим герой-баннер для более современного вида:

<pp-write filepath="src/components/HeroBanner.tsx" partial>
import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const HeroBanner = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white to-light-gray">
      {/* Декоративные элементы */}
      <div className="absolute right-0 -top-10 w-96 h-96 bg-primary-red/5 rounded-full blur-3xl"></div>
      <div className="absolute -left-10 bottom-0 w-72 h-72 bg-primary-red/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="animate-enter" style={{animationDelay: '0.1s'}}>
            <h1 className="text-4xl font-bold tracking-tight text-dark-gray sm:text-5xl lg:text-6xl">
              Создавайте 
              <span className="text-primary-red"> потрясающие </span>
              проекты
            </h1>
            <p className="mt-6 text-lg text-neutral-gray">
              Разрабатывайте современные веб-приложения с минимальными усилиями благодаря нашей платформе. 
              Быстро, надежно и стильно.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Button className="bg-primary-red hover:bg-primary-red-light text-white px-8 py-6">
                Начать сейчас <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-neutral-gray text-neutral-gray hover:text-dark-gray">
                Узнать больше
              </Button>
            </div>
            
            <div className="mt-12 flex items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="inline-block h-10 w-10 rounded-full border-2 border-white shadow-md overflow-hidden">
                    <img 
                      src={`https://source.unsplash.com/100x100/?person&${i}`} 
                      alt="User" 
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="ml-4">
                <span className="text-sm font-medium text-dark-gray">Присоединились +1200 разработчиков</span>
                <div className="flex items-center mt-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Icon key={i} name="Star" className="h-4 w-4 text-primary-red" />
                  ))}
                  <span className="ml-2 text-sm text-neutral-gray">4.9/5 рейтинг</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-enter" style={{animationDelay: '0.3s'}}>
            <div className="absolute top-8 -left-4 w-72 h-72 bg-primary-red/10 rounded-full blur-3xl"></div>
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl transform rotate-1 hover:rotate-0 transition-transform duration-500 hover-scale">
              <img 
                src="https://source.unsplash.com/800x600/?code,technology" 
                alt="Coding and technology" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-gray/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <span className="inline-block px-3 py-1 mb-3 text-xs font-medium bg-primary-red text-white rounded-full">
                  Популярное
                </span>
                <h3 className="text-xl font-semibold text-white">Разработка современных интерфейсов</h3>
                <p className="mt-2 text-white/80">Создавайте потрясающие UI компоненты</p>
              </div>
            </div>
            
            <div className="absolute -bottom-10 right-0 md:right-10 animate-pulse-slow">
              <div className="bg-white rounded-lg p-4 shadow-lg transform rotate-3 hover:rotate-0 transition-transform">
                <div className="flex items-center">
                  <Icon name="Code" className="h-5 w-5 text-primary-red mr-2" />
                  <span className="font-medium text-dark-gray">React+TypeScript</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
