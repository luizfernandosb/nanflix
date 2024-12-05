import { Link } from "@tanstack/react-router";

type NavItemsProps = {
  to: string;
  value: string;
};

export const NavItem = (props: NavItemsProps) => {
  return (
    <li className="hover:cursor-pointer hover:bg-stone-600 hover:rounded-md hover:font-bold px-4">
      <Link className="[&.active]:font-bold" to={props.to}>
        {props.value}
      </Link>
    </li>
  );
};
