import { Search } from "lucide-react";
import { NavBar } from "./NavBar";
import { Logo } from "./Logo";

export const Navbar = () => {
  return (
    <nav className="flex justify-between px-20 py-5 border-1 bg-stone-700 items-center">
      <Logo />
      <NavBar />
      <Search />
    </nav>
  );
};
