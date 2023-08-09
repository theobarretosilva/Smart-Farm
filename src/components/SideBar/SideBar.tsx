/* eslint-disable react/function-component-definition */
import * as React from 'react';
import {
  SidebarProps,
  SidebarWrapper,
  SidebarTitle,
  SidebarContent,
  SidebarLink,
  SidebarLinkMenu,
  SidebarParagraph,
  Logout
} from './SideBar_style';

const Sidebar: React.FC<SidebarProps> = ({ links }) => {
  return (
    <SidebarWrapper>
      <SidebarContent>
        <SidebarTitle>EmpresaXYZ</SidebarTitle>
        <SidebarLinkMenu>MENU</SidebarLinkMenu>
        <SidebarLink href="#">Overview</SidebarLink>
        <SidebarLink href="#">Sensores</SidebarLink>
        <SidebarLink href="#">Locais</SidebarLink>
        <SidebarLink href="#">Configurações</SidebarLink>
        <SidebarParagraph />
        <Logout>Logout</Logout>
      </SidebarContent>
    </SidebarWrapper>
  );
};

export default Sidebar;

