
import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { LayoutDashboard, Wrench, ClipboardList, History, BarChart3, Settings, Menu, X, LogOut, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { useIsMobile } from "@/hooks/use-mobile";

const DashboardLayout = () => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const isMobile = useIsMobile();

  const navItems = [
    { name: 'Accueil', path: '/', icon: LayoutDashboard },
    { name: 'Machines', path: '/machines', icon: Wrench },
    { name: 'Maintenance', path: '/interventions', icon: ClipboardList },
    { name: 'Rapports', path: '/reports', icon: BarChart3 },
    { name: 'Paramètres', path: '/settings', icon: Settings },
  ];

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <SidebarProvider defaultOpen={sidebarOpen}>
      <div className="min-h-screen w-full bg-gray-50 flex flex-col">
        {/* Header */}
        

        <div className="flex flex-1">
          {/* Sidebar using shadcn/ui sidebar */}
          <Sidebar>
            <SidebarHeader className="py-4">
              <div className="flex items-center space-x-2 px-2">
                <div className="bg-blue-500 p-2 rounded-md">
                  <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg> 
                </div>
                <span className="text-xl font-bold">MaintLink</span>
              </div>
            </SidebarHeader>

            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel>Menu</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {navItems.map((item) => (
                      <SidebarMenuItem key={item.path}>
                        <SidebarMenuButton 
                          isActive={location.pathname === item.path} 
                          asChild
                          tooltip={item.name}
                        >
                          <Link to={item.path} className="w-full">
                            <item.icon className="mr-2 h-5 w-5" />
                            <span>{item.name}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>

            <SidebarFooter>
              <Button variant="destructive" className="w-full">
                <LogOut className="h-4 w-4 mr-2" />
                Déconnexion
              </Button>
            </SidebarFooter>
          </Sidebar>

          {/* Main Content */}
          <main className="flex-grow p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
