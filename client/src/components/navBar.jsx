import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent,
         DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { UserCircleIcon } from "@heroicons/react/24/solid";

export default function navbar() {
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <nav className="glass sticky top-0 z-50 border-b border-zinc-200 dark:border-zinc-700 px-4 py-2 flex items-center justify-between">
      <Link to="/Dashboard" className="font-bold text-lg">Dashboard</Link>
      <Link to="/blogs" className="text-lg font-semibold text-zinc-800 dark:text-zinc-200">Blogs</Link>
      <Link to="/categories" className="text-lg font-semibold text-zinc-800 dark:text-zinc-200">Categories</Link>

      <div className="flex items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <UserCircleIcon className="h-6 w-6" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-44">
            <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
