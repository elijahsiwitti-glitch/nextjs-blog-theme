"use client";

import * as React from "react";
import { Link, NavLink } from "react-router-dom";
import { Home, Lightbulb, Users, Trophy, User, Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import { ModeToggle } from "@/components/layout/ModeToggle"; // Will create this next

interface NavItem {
  title: string;
  href: string;
  icon: React.ElementType;
}

const navItems: NavItem[] = [
  { title: "Home", href: "/", icon: Home },
  { title: "Profile", href: "/profile", icon: User },
  { title: "Innovation", href: "/innovation", icon: Lightbulb },
  { title: "Communities", href: "/communities", icon: Users },
  { title: "Leaderboard", href: "/leaderboard", icon: Trophy },
];

export function Sidebar() {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = React.useState(false);

  const NavContent = () => (
    <ScrollArea className="h-full px-3 py-4">
      <div className="flex flex-col space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.title}
            to={item.href}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sidebar-foreground transition-all hover:text-sidebar-primary",
                isActive && "bg-sidebar-accent text-sidebar-primary",
              )
            }
            onClick={() => isMobile && setIsOpen(false)}
          >
            <item.icon className="h-5 w-5" />
            {item.title}
          </NavLink>
        ))}
      </div>
      <div className="mt-auto pt-4 border-t border-sidebar-border">
        <ModeToggle />
      </div>
    </ScrollArea>
  );

  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col w-full p-0 bg-sidebar"> {/* Changed w-64 to w-full */}
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link to="/" className="flex items-center gap-2 font-semibold text-sidebar-primary">
              <span className="text-lg">Socio Gain</span>
            </Link>
          </div>
          <NavContent />
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <div className="hidden border-r bg-sidebar md:block w-64 h-screen fixed top-0 left-0">
      <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
        <Link to="/" className="flex items-center gap-2 font-semibold text-sidebar-primary">
          <span className="text-lg">Socio Gain</span>
        </Link>
      </div>
      <NavContent />
    </div>
  );
}