import React from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const NavigationBar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm animate-enter">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="w-10 h-10 bg-primary-red rounded-md flex items-center justify-center text-white font-bold text-xl">
                P
              </div>
              <span className="ml-2 text-lg font-bold text-dark-gray">
                Поехали!
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="/" label="Главная" active />
            <NavLink href="/about" label="О нас" />
            <NavLink href="/services" label="Услуги" />
            <NavLink href="/projects" label="Проекты" />
            <NavLink href="/contact" label="Контакты" />
          </nav>

          <div className="flex items-center space-x-2">
            <button className="p-2 rounded-full hover:bg-light-gray transition-colors">
              <Icon name="Search" className="h-5 w-5 text-neutral-gray" />
            </button>
            <button className="p-2 rounded-full hover:bg-light-gray transition-colors">
              <Icon name="Bell" className="h-5 w-5 text-neutral-gray" />
            </button>
            <button className="ml-4 inline-flex items-center justify-center rounded-md bg-primary-red px-4 py-2 font-medium text-white hover:bg-primary-red-light transition-colors">
              Связаться
            </button>
          </div>

          <button className="md:hidden p-2 rounded-md hover:bg-light-gray">
            <Icon name="Menu" className="h-6 w-6 text-dark-gray" />
          </button>
        </div>
      </div>
    </header>
  );
};

type NavLinkProps = {
  href: string;
  label: string;
  active?: boolean;
};

const NavLink = ({ href, label, active }: NavLinkProps) => (
  <Link
    to={href}
    className={`relative px-1 py-2 font-medium text-sm transition-colors ${
      active ? "text-primary-red" : "text-neutral-gray hover:text-dark-gray"
    }`}
  >
    {label}
    {active && (
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-red" />
    )}
  </Link>
);

export default NavigationBar;
