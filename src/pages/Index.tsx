
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const ModernPortal = () => {
  const currentDate = new Date();
  const formattedDate = new Intl.DateTimeFormat('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  }).format(currentDate);
  
  const dayOfWeek = new Intl.DateTimeFormat('ru-RU', { weekday: 'long' }).format(currentDate);
  const capitalizedDayOfWeek = dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1);

  const hours = currentDate.getHours().toString().padStart(2, '0');
  const minutes = currentDate.getMinutes().toString().padStart(2, '0');
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Верхняя навигация */}
      <header className="bg-primary-red text-white shadow-md">
        <div className="container mx-auto">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-white hover:bg-primary-red-light">
                <Icon name="Home" className="mr-2 h-5 w-5" />
                <span>Главная</span>
              </Button>
              <Button variant="ghost" className="text-white hover:bg-primary-red-light">
                <Icon name="FileText" className="mr-2 h-5 w-5" />
                <span>Обзор</span>
              </Button>
              <Button variant="ghost" className="text-white hover:bg-primary-red-light">
                <Icon name="Layers" className="mr-2 h-5 w-5" />
                <span>Страница</span>
              </Button>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-white hover:bg-primary-red-light">
                <Icon name="Bell" className="h-5 w-5" />
              </Button>
              <div className="flex items-center">
                <Avatar className="h-8 w-8 border-2 border-white">
                  <AvatarImage src="https://source.unsplash.com/100x100/?portrait" alt="Владимир Мартьянов" />
                  <AvatarFallback>ВМ</AvatarFallback>
                </Avatar>
                <span className="ml-2 font-medium">Владимир Мартьянов</span>
                <Icon name="ChevronDown" className="ml-1 h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </header>
      
      {/* Подзаголовок с логотипом */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto py-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="bg-primary-red p-2 rounded shadow-sm">
                <Icon name="LayoutGrid" className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-primary-red">Оптимизационные предложения</h1>
                <p className="text-neutral-gray">Мираторг</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="flex items-center mr-6">
                <div className="bg-primary-red p-3 rounded-l">
                  <img 
                    src="https://via.placeholder.com/80x40?text=МИРАТОРГ" 
                    alt="Мираторг" 
                    className="h-6"
                  />
                </div>
                <div className="bg-white p-3 rounded-r border-t border-r border-b border-gray-200">
                  <div className="text-dark-gray font-medium">Корпоративный портал</div>
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-neutral-gray">
                      {formattedDate}
                      <span className="ml-2">{capitalizedDayOfWeek}</span>
                    </div>
                    <div className="text-xl font-bold text-primary-red">
                      {hours} : {minutes}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Поисковая строка */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto py-2">
          <div className="flex justify-end">
            <div className="relative w-72">
              <Input 
                type="text" 
                placeholder="Искать на этом сайте..." 
                className="pr-10"
              />
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute right-0 top-0 h-full"
              >
                <Icon name="Search" className="h-4 w-4" />
              </Button>
            </div>
            <Button variant="ghost" size="icon" className="ml-2">
              <Icon name="HelpCircle" className="h-5 w-5 text-primary-red" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Основной контент */}
      <div className="flex-1 container mx-auto py-6">
        <div className="grid grid-cols-4 gap-6">
          {/* Боковая навигация */}
          <div className="col-span-1">
            <Card>
              <CardHeader className="bg-gray-50 border-b">
                <CardTitle className="text-base font-medium">Навигация</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <nav className="flex flex-col">
                  <NavItem label="Портал" active />
                  <NavItem label="Начальная страница модуля" />
                  <NavItem label="Ссылки" />
                  <NavItem 
                    label="Добавить оптим. предл." 
                    className="text-sm pl-8 py-2 hover:bg-gray-50 text-neutral-gray"
                  />
                  
                  <div className="py-2 px-4 bg-gray-50 border-t border-b border-gray-200 font-medium">
                    Библиотеки
                  </div>
                  <NavItem label="Справочные материалы" />
                  
                  <div className="py-2 px-4 bg-gray-50 border-t border-b border-gray-200 font-medium">
                    Списки
                  </div>
                  <NavItem label="Оптимизационные предложения. Активные" />
                  <NavItem label="Оптимизационные предложения. Все" />
                  <NavItem label="Предложения у меня на обработке" />
                  
                  <div className="mt-4 border-t border-gray-200">
                    <NavItem 
                      label="Корзина" 
                      icon="Trash2"
                      className="text-neutral-gray"
                    />
                    <NavItem 
                      label="Весь контент сайта" 
                      icon="Database"
                      className="text-neutral-gray"
                    />
                  </div>
                </nav>
              </CardContent>
            </Card>
          </div>
          
          {/* Основное содержимое */}
          <div className="col-span-3">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid grid-cols-5 mb-6">
                <TabsTrigger value="new">Предложить улучшение</TabsTrigger>
                <TabsTrigger value="my">Созданные мной предложения</TabsTrigger>
                <TabsTrigger value="processing">Предложения у меня на обработке</TabsTrigger>
                <TabsTrigger value="inwork">Предложения в обработке</TabsTrigger>
                <TabsTrigger value="all">Все предложения</TabsTrigger>
              </TabsList>
              
              <TabsContent value="new" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Предложить улучшение</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Форма для создания нового предложения по улучшению</p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="my" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Созданные мной предложения</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Список ваших предложений</p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="processing" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Предложения у меня на обработке</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Предложения, требующие вашего внимания</p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="inwork" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Предложения в обработке</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Предложения, находящиеся в процессе обработки</p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="all" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Все предложения</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Список всех предложений в системе</p>
                  </CardContent>
                </Card>
                
                <Card className="border-l-4 border-l-primary-red">
                  <CardHeader>
                    <CardTitle className="flex items-center text-primary-red">
                      <Icon name="BarChart2" className="mr-2 h-5 w-5" />
                      Отчёт. Распределение экономического эффекта по руководителям
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Данные по экономическому эффекту в разрезе руководителей</p>
                  </CardContent>
                </Card>
                
                <Card className="border-l-4 border-l-primary-red">
                  <CardHeader>
                    <CardTitle className="flex items-center text-primary-red">
                      <Icon name="TrendingUp" className="mr-2 h-5 w-5" />
                      Отчёт. Результаты развития по проектам
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Данные о результатах развития проектов</p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
      
      {/* Футер */}
      <footer className="bg-gray-100 border-t border-gray-200 py-4 mt-8">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="text-sm text-neutral-gray">
              © 2025 Мираторг. Все права защищены.
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-sm text-neutral-gray hover:text-primary-red">Поддержка</a>
              <a href="#" className="text-sm text-neutral-gray hover:text-primary-red">Политика конфиденциальности</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Вспомогательный компонент для пунктов навигации
interface NavItemProps {
  label: string;
  icon?: string;
  active?: boolean;
  className?: string;
}

const NavItem: React.FC<NavItemProps> = ({ 
  label, 
  icon, 
  active = false,
  className = ""
}) => {
  return (
    <a 
      href="#" 
      className={`
        flex items-center px-4 py-3 hover:bg-gray-50 transition-colors
        ${active ? 'bg-gray-50 text-primary-red font-medium border-l-4 border-primary-red pl-3' : 'text-dark-gray'}
        ${className}
      `}
    >
      {icon && <Icon name={icon} className="mr-2 h-4 w-4" />}
      <span>{label}</span>
    </a>
  );
};

export default ModernPortal;
