import styled from 'styled-components'

export const SidebarWrapper = styled.div`
  position: fixed;
  top: 100px;
  left: 0;
  bottom: 0;
  width: 390px;
  background-color: #f9fafb;
`

export const SidebarLinkMenu = styled.h2``

export const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 20px;
`

export const SidebarLink = styled.a`
  color: #000;
  cursor: pointer;
  font-size: 18px;
  margin-bottom: 10px;
  text-decoration: none;
  padding: 10px;
  position: relative;
  top: 200px;
  left: 40px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;

  color: black;

  flex: none;
  order: 0;
  flex-grow: 0;

  &:hover {
    color: #00a335;
  }

  &:active {
    background-color: transparent;
  }
`
export const Logout = styled.a`
  position: absolute;
  width: 54px;
  height: 19px;
  left: 60px;
  top: 663px;
  color: #000;
  cursor: pointer;
  font-size: 18px;
  margin-bottom: 10px;
  text-decoration: none;
  padding: 10px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: black;
  flex: none;
  order: 0;
  flex-grow: 0;

  color: #2d2d34;
  &:hover {
    color: #00a335;
  }

  &:active {
    background-color: transparent;
  }
`

export const SidebarMenu = styled.p`
  position: absolute;
  width: 252.07px;
  height: 17px;
  left: 32px;
  top: 154px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  color: #b4b6c1;
`

export const SidebarTitle = styled.h1`
  margin-top: 0;
  position: absolute;
  width: 131px;
  height: 24px;
  left: 60px;
  top: 50px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #2d2d34;
`

export const SidebarParagraph = styled.p`
  margin-top: 20px;
`

export interface SidebarProps {
  links: { title: string; href: string }[]
}
