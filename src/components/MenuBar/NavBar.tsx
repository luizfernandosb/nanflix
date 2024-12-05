import { navitems } from "./navitems";
import { NavItem } from "./NavItem";


export const NavBar = () => {
  return (
    <ul className="flex text-white bg-black w-[700px] max-w-[700rem] justify-between h-10 items-center px-5 rounded-md">
      {navitems.map((item, index) => (
        <NavItem key={index} value={item.value} to={item.link} />
      ))}
    </ul>
  );
};
