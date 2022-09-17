import React from "react"
import { Link } from "gatsby"
import tw from "twin.macro"
import logo from "../../public/assets/shared/logo.svg"
import hamburger from "../../public/assets/shared/icon-hamburger.svg"
const Nav = () => {
  return (
    <Header>
      <Logo src={logo} alt="logo" />
      <Menu>
        <Link to="/">00 Home</Link>
        <Link to="/destinations">01 Destinations</Link>
        <Link to="/crew">02 Crew</Link>
        <Link to="/technology">03 Technology</Link>
      </Menu>
      <HamburgerBtn>
        <img src={hamburger} alt="hamburger button" />
      </HamburgerBtn>
    </Header>
  )
}
const Header = tw.nav`
flex justify-between px-6 md:pr-0
`
const Logo = tw.img`
  py-3
`
const Menu = tw.div`hidden bg-space-white/5 lg:bg-space-white/25 sm:flex items-center text-space-white font-space-text gap-3 px-12 lg:pl-24 lg:pr-40`
const HamburgerBtn = tw.button`
sm:hidden`
export default Nav
