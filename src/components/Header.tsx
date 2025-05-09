
import React from 'react';
import { Bell, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SidebarTrigger } from '@/components/ui/sidebar';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="bg-white shadow-sm border-b px-4 py-3 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <SidebarTrigger>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </SidebarTrigger>
        <h1 className="text-xl font-semibold text-gray-800">{title}</h1>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-red-500"></span>
        </Button>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-aerospace-600 flex items-center justify-center text-white font-medium">
            GM
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
