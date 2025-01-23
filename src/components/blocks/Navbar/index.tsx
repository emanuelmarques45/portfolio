import { useState } from "react";
import { navLinks } from "../../../constants";
import * as S from "./style";

function NavItems() {
  return (
    <>
      <S.NavItemsList>
        {navLinks.map(({ id, href, name }) => {
          return (
            <li key={id}>
              <S.NavItem href={href}>{name}</S.NavItem>
            </li>
          );
        })}
      </S.NavItemsList>
    </>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <S.Header>
        <S.Name href='https://github.com/emanuelmarques45' target='blank'>
          Emanuel Marques
        </S.Name>

        <S.MenuToggleContainer onClick={toggleMenu}>
          <S.MenuToggle $isOpen={isOpen} />
          <S.NavItemsMobile $isOpen={isOpen}>
            <NavItems />
          </S.NavItemsMobile>
        </S.MenuToggleContainer>

        <S.NavItemsDesktop>
          <NavItems />
        </S.NavItemsDesktop>
      </S.Header>
    </>
  );
}

export { Navbar };
