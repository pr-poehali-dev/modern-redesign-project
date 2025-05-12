
import React from 'react';
import NavigationBar from '@/components/NavigationBar';
import HeroBanner from '@/components/HeroBanner';
import ContentCard from '@/components/ContentCard';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <NavigationBar />
      
      <main>
        <HeroBanner />
        
        {/* Секция с карточками */}
        <section className="py-16 bg-light-gray">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12 animate-enter">
              <h2 className="text-3xl font-bold text-dark-gray">Почему выбирают нас</h2>
              <p className="mt-4 text-neutral-gray">
                Мы предлагаем комплексный подход к разработке, который помогает вам быстрее создавать качественные приложения
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ContentCard 
                title="Быстрая разработка" 
                description="Создавайте и запускайте проекты в кратчайшие сроки с нашими готовыми компонентами."
                icon="Zap"
                delay={100}
              />
              <ContentCard 
                title="Отзывчивый дизайн" 
                description="Все элементы адаптируются под любые устройства без дополнительных настроек."
                icon="Smartphone"
                iconBg="bg-blue-100"
                delay={200}
              />
              <ContentCard 
                title="Простая интеграция" 
                description="Легко подключайте внешние сервисы и API для расширения функциональности."
                icon="Link"
                iconBg="bg-green-100"
                delay={300}
              />
              <ContentCard 
                title="Высокая производительность" 
                description="Оптимизированный код обеспечивает быструю загрузку и плавную работу."
                icon="Gauge"
                iconBg="bg-yellow-100"
                delay={400}
              />
              <ContentCard 
                title="Богатая экосистема" 
                description="Доступ к обширной библиотеке плагинов и интеграций для любых задач."
                icon="Layers"
                iconBg="bg-purple-100"
                delay={500}
              />
              <ContentCard 
                title="Поддержка 24/7" 
                description="Наша команда всегда готова помочь вам с любыми вопросами в любое время."
                icon="Headphones"
                iconBg="bg-orange-100"
                delay={600}
              />
            </div>
          </div>
        </section>
        
        {/* Секция с большой картинкой */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="absolute left-0 bottom-0 w-96 h-96 bg-primary-red/10 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-enter" style={{animationDelay: '0.3s'}}>
                <div className="relative">
                  <div className="absolute -z-10 inset-0 bg-primary-red/5 rounded-3xl transform rotate-3"></div>
                  <img 
                    src="https://source.unsplash.com/800x600/?workspace,coding" 
                    alt="Workspace" 
                    className="rounded-2xl shadow-lg relative z-10"
                  />
                  <div className="absolute -bottom-5 -right-5 bg-white rounded-lg p-4 shadow-lg z-20 hover-scale">
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 rounded-full bg-green-500"></div>
                      <span className="text-dark-gray font-medium">24/7 онлайн</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="animate-enter" style={{animationDelay: '0.6s'}}>
                <h2 className="text-3xl font-bold text-dark-gray">Разрабатывайте проекты без усилий</h2>
                <p className="mt-4 text-neutral-gray">
                  Наша платформа предоставляет все необходимые инструменты для разработки современных веб-приложений. 
                  От быстрого прототипирования до готового развертывания — мы поддерживаем вас на каждом этапе.
                </p>
                
                <ul className="mt-8 space-y-4">
                  {[
                    "Современные компоненты интерфейса",
                    "Поддержка TypeScript из коробки",
                    "Оптимизированная производительность",
                    "Подробная документация"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-5 h-5 rounded-full bg-primary-red/20 flex items-center justify-center">
                          <Icon name="Check" className="h-3 w-3 text-primary-red" />
                        </div>
                      </div>
                      <span className="ml-3 text-neutral-gray">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-10">
                  <Button className="bg-primary-red hover:bg-primary-red-light text-white">
                    Начать работу
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Секция-CTA */}
        <section className="py-20 bg-primary-red text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center animate-enter" style={{animationDelay: '0.4s'}}>
              <h2 className="text-3xl font-bold">Готовы начать свой проект?</h2>
              <p className="mt-4 text-white/80">
                Присоединяйтесь к тысячам разработчиков, которые уже используют нашу платформу для своих проектов
              </p>
              
              <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
                <Button className="bg-white text-primary-red hover:bg-light-gray w-full sm:w-auto">
                  Зарегистрироваться
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
                  Узнать больше
                </Button>
              </div>
              
              <div className="mt-8 text-white/80">
                Нет обязательств. Отменить подписку можно в любое время.
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
