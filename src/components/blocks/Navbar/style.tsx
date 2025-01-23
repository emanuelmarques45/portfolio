import styled from "styled-components";
import { devices } from "../../../constants/devices";

const Name = styled.a`
  color: ${(p) => p.theme.secondaryLight};
  transition: color 100ms ease;

  &:hover {
    color: ${(p) => p.theme.neutral};
  }
`;

const NavItemsDesktop = styled.nav`
  display: none;

  @media (${devices.tablet}) {
    display: block;
  }
`;

const NavItemsMobile = styled.nav<{ $isOpen: boolean }>`
  position: absolute;
  width: 100vw;
  top: 100%;
  left: 0;
  transform: translateX(${({ $isOpen }) => ($isOpen ? "0%" : "100%")});
  transition: transform 400ms ease-in;
`;

const NavItemsList = styled.ul`
  @media (${devices.tablet}) {
    display: flex;
  }
`;

const NavItem = styled.a`
  display: block;
  padding: var(--sz-2) var(--sz-5);
  color: ${(p) => p.theme.secondaryLight};
  transition: color 100ms ease;

  &:hover {
    color: ${(p) => p.theme.neutral};
  }
`;

const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: var(--sz-5);
  background-color: ${(p) => p.theme.neutralDark};
`;

const MenuToggleContainer = styled.div`
  cursor: pointer;
  padding: var(--sz-2) var(--sz-1);

  @media (${devices.tablet}) {
    display: none;
  }
`;

const MenuToggle = styled.div<{ $isOpen: boolean }>`
  background: ${(props) => props.theme.neutral};
  display: block;
  height: 2px;
  position: relative;
  width: 2rem;
  transition: background-color 200ms ease;

  &::before,
  &::after {
    background: ${(props) => props.theme.neutral};
    content: "";
    display: block;
    height: 100%;
    position: absolute;
    transition: all 0.2s ease-out;
    width: 100%;
  }
  &::before {
    top: 0.6rem;
  }
  &::after {
    top: -0.6rem;
  }

  ${({ $isOpen }) => {
    if ($isOpen) {
      return `
        & {
            background: transparent;
        }
        &::before {
            transform: rotate(-45deg);
            top:0;
        }
        &::after {
            transform: rotate(45deg);
            top:0;
        }`;
    }
  }}
`;

export {
  Name,
  NavItemsDesktop,
  NavItemsMobile,
  NavItemsList,
  NavItem,
  Header,
  MenuToggleContainer,
  MenuToggle,
};
