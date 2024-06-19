import Link from "next/link";

import { cn } from "@/lib/utils";
import { ModeToggle } from "./ModeToogle";

const lc = `font-medium text-blue-600 dark:text-blue-500 hover:underline`;

function Header() {
  return (
    <div className="flex  justify-between p-10">
      <h1 className="text-2xl">
        <Link href="/">CodeCripto testing</Link>
      </h1>
      <nav className="flex gap-3 ">
          <div>
            <Link className={cn(lc)} href="/">
              Home
            </Link>
          </div>
          <div>
            <Link className={cn(lc)} href="/user">
              User
            </Link>
          </div>
          <div>
            <Link className={cn(lc)} href="/lab">
              Lab
            </Link>
          </div>
          <div>
            <Link className={cn(lc)} href="/actividad">
              Actividad
            </Link>
          </div>
        
      </nav>
      <div className="">
        <ModeToggle />
      </div>
    </div>
  );
}

export default Header;
