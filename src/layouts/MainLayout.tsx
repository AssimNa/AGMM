
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard, 
  Settings, 
  Clock, 
  History, 
  FileText, 
  Plane,
  Bell,
  LogOut,
  UserRound
} from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
} from '@/components/ui/sidebar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';

interface MainLayoutProps {
  children: React.ReactNode;
  title: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, title }) => {
  const location = useLocation();
  const navigate = useNavigate();
  
  

  const handleLogout = () => {
    // TODO: Implement actual logout logic
    console.log('Logging out...');
    navigate('/login');
  };

  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar className="border-r">
          <SidebarHeader className="flex items-center justify-center p-4">
            <div className="flex items-center justify-center">
              <Plane className="h-6 w-6 text-aerospace-600" />
              <span className="font-bold text-lg ml-2 text-gray-800">AeroMaint</span>
            </div>
          </SidebarHeader>
          <SidebarContent className="p-2">
            <SidebarMenu>
            
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>
        
        <div className="flex-1 flex flex-col">
          <Header title={title} />
          <main className="flex-1 p-6 overflow-auto">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default MainLayout;
