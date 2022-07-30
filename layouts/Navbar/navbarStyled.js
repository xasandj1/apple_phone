import styled from "styled-components";

export const Nav = styled.nav `
  margin-top: 10px;
`;
export const NavbarContent = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const NavBlock = styled.div `
display: flex;
align-items: center;
justify-content: center;

`;


export const NavSelect = styled.div `
cursor: pointer;
position: relative;
margin-left:50px;
`;

export const NavSelectInner = styled.div `
display: flex;
align-items: center;
justify-content: center;

`;

export const NavSelectTxt = styled.p `
font-weight: 500;
font-size: 15px;
line-height: 18px;
color: var(--dark);
`;

export const NavDropDown = styled.div `
position: absolute;
bottom: -80px;
left: 0;
width: 100%;
background: var(--gray);
box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
border-radius: 0px 0px 30px 30px;
padding: 25px;
display: none;
&.show{
  display: block;
}
`;
export const NavDropDownList = styled.ul `
display: flex;
flex-direction: column;
`;
export const NavDropDownItem = styled.li `

`;
export const NavDropDownLink = styled.a `
font-weight: 500;
font-size: 17px;
line-height: 21px;
color: var(--dark);
&:hover{
  color: var(--dark);
}
`;export const HeartButton = styled.button `
border: none;
background: inherit;
color: var(--grey);
`;
export const ShopButton = styled.button `
border: none;
color: var(--grey);
background: inherit;
`;