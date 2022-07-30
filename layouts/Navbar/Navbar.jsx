import React, { useState } from "react";
import Image from "next/image";
import {
  Nav,
  NavbarContent,
  NavBlock,
  NavDropDown,
  NavDropDownItem,
  NavDropDownLink,
  NavDropDownList,
  NavSelect,
  NavSelectInner,
  NavSelectTxt,
} from "./navbarStyled";
import images from "../../constants/images";
import { AiOutlineMobile } from 'react-icons/ai'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'

const Navbar = () => {

  const [show, setShow] = useState(false)
  
  const Show = () => {
    setShow(prev => !prev)
  }
  const [active, setActive] = useState(false)
  
  const Active = () => {
    setActive(next => !next)
  }

  return (
    <>
      <Nav>
        <div className="container">
          <NavbarContent>
            <NavBlock>
              <a href=''>
                <Image src={images.Logo} alt="" />
              </a>
              <NavSelect>
                <NavSelectInner onClick={Show}>
                  <AiOutlineMobile fontSize={20} />
                  <NavSelectTxt>Выбрать модель телефона</NavSelectTxt>
                  {show ? (
                    <BsChevronUp />
                  ) : (
                    <BsChevronDown />
                  )}
                </NavSelectInner>
                <NavDropDown className={show ? 'show' : ''}>
                  <NavDropDownList >
                    <NavDropDownItem >
                      <NavDropDownLink onClick={active}>Apple
                      {show ? (
                    <BsChevronUp />
                  ) : (
                    <BsChevronDown />
                  )}
                      </NavDropDownLink>
                      <NavDropDownLink >Apple
                      </NavDropDownLink>
                    </NavDropDownItem>
                  </NavDropDownList>
                </NavDropDown>
              </NavSelect>
            </NavBlock>
            <NavBlock>
              xax
            </NavBlock>

          </NavbarContent>
        </div>
      </Nav>
    </>
  );
};

export default Navbar;
