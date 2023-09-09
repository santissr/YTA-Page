import Link from "next/link";
import { HeaderNavLi, HeaderNavUl } from "./HeaderNav.styled";

export const HeaderNav = () => {
  return (
    <nav>
      <HeaderNavUl>
        <HeaderNavLi>
          <Link href="/">Inicio</Link>
        </HeaderNavLi>
        <HeaderNavLi>
          <Link href="#footer">Contáctenos</Link>
        </HeaderNavLi>
      </HeaderNavUl>
    </nav>
  );
};
