import Link from "next/link";
import React from "react";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const lc = `font-medium text-blue-600 dark:text-blue-500 hover:underline`

function Header() {
  return (
    <div className="flex py-4">
      <h1 className="text-2xl">CodeCripto testing</h1>
      <nav className="flex-1">
        <ul className="flex justify-center gap-3">
        <li>
            <Link className={cn(lc)}  href="/">Home</Link>
          </li>
          <li>
            <Link className={cn(lc)}  href="/user">User</Link>
          </li>
          <li>
            <Link className={cn(lc)} href="/lab">Lab</Link>
          </li>
          <li>
            <Link className={cn(lc)} href="/actividad">Actividad</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
