import React, { useState, useEffect } from 'react'
import { FaTimes, FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavItemBtn, NavBtnLink } from './Navbar.elements';
import { Logo } from '../Logo'
import { Button } from '../../globalStyles';
import { animateScroll as scroll } from "react-scroll";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    useEffect(() => {
        showButton();
    }, [])

    window.addEventListener('resize', showButton);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav>
                <NavbarContainer>
                    <NavLogo onClick={scrollToTop}>
                        <Logo />
                    </NavLogo>
                    <MobileIcon onClick={handleClick}
                    >{click ? <FaTimes /> : <FaBars />}
                    </MobileIcon>
                    <NavMenu onClick={handleClick} click={click}>
                        <NavItem>
                            <NavLinks
                                activeClass="active"
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            > Home
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            > About
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                                activeClass="active"
                                to="resume"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            > Resume
                            </NavLinks>
                        </NavItem>
                        <NavItemBtn>
                            {button ? (
                                <NavBtnLink to="/sign-up">
                                    <Button primary>Contact</Button>
                                </NavBtnLink>
                            ) : (
                                <NavBtnLink to="/sign-up">
                                    <Button fontBig primary>Contact</Button>
                                </NavBtnLink>
                            )}
                        </NavItemBtn>
                    </NavMenu>
                </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
