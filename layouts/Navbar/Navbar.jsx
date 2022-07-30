import React, { useState } from "react";
import Image from "next/image";
import {
  HeartButton,
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
  ShopButton,
} from "./navbarStyled";
import images from "../../constants/images";
import { AiOutlineMobile } from 'react-icons/ai'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
import { FaRegHeart } from 'react-icons/fa'
import { HiOutlineShoppingCart } from 'react-icons/hi'

const Navbar = () => {

  const [show, setShow] = useState(false)
  
  const Show = () => {
    setShow(prev => !prev)
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
                      <NavDropDownLink >
                      </NavDropDownLink>
                      <NavDropDownLink >Apple
                      </NavDropDownLink>
                    </NavDropDownItem>
                  </NavDropDownList>
                </NavDropDown>
              </NavSelect>
            </NavBlock>
            <NavBlock>
            <HeartButton>
            <FaRegHeart fontSize={20}/>
            </HeartButton>
            <ShopButton>
            <HiOutlineShoppingCart fontSize={20}/>

            </ShopButton>
            </NavBlock>

          </NavbarContent>
        </div>
      </Nav>
    </>
  );
};

export default Navbar;
