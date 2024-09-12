import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Menu2 } from "@/lib/Menu2";
import { ChevronDown } from "lucide-react";
import { Menu0 } from "./Menu0";
import { Menu3 } from "./Menu3";
import { Menu1 } from "./Menu1";
import clsx from "clsx";

const NavLinks: { id: number; service: string }[] = [
  {
    id: 1,
    service: "Home",
  },
  {
    id: 2,
    service: "Company",
  },
  {
    id: 3,
    service: "PortFolio",
  },
  {
    id: 4,
    service: "Services",
  },
];

export function NavBar() {
  const menuRef = useRef(null);
  const [hovering, setHovering] = useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  
  const [isLayoutOpen, setIsLayoutOpen] = useState<boolean>(false);

  const handleMouseEnter = (id: number) => {
    console.log(id);
    setHovering(id);
    setIsMenuOpen(true);
  };
  const handleMouseLeave = () => {
    setIsMenuOpen(false);
    setHovering(null);
  };
  const handleMenuMouseEnter = () => {
    setHovering(hovering);
  };

  return (
    <nav onMouseEnter={() => setHovering(null)}>
      <ul className="hidden lg:flex xl:flex-row gap-10 list-none -z-10 max-sm:hidden">
        {NavLinks.map((navlink) => (
          <li
            
            key={navlink.id}
            onMouseEnter={(event) => handleMouseEnter(navlink.id)}
            onMouseLeave={(event) => handleMouseLeave()}
            className=" leading-[60px] rounded-full  hover:bg-opacity-20"
          >
            <a className="pr-4  text-lg hover:text-blue-500">
              {navlink.service}
            </a>
            <div
              onMouseEnter={handleMenuMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="top-full z-10 bg-red-600 "
            >
              {hovering === 3 ? (
                <Menu0 />
              ) : hovering === 4 ? (
                <Menu1 />
              ) : hovering === 4 ? (
                <Menu2 />
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
}
