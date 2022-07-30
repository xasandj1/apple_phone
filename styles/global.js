import { createGlobalStyle } from "styled-components";

export const AppRoot = createGlobalStyle`
  :root{
  --black: #000;
  --body: #EAEAEA;
  --dark: #101010;
  --white: #FFFFFF;
  --gold: #FFA542;
  --grey: #838383;
  --lightGray:#838383;

  }
  @font-face {
  font-family: 'Manrope';
  src: url('../assets/fonts/Manrope-Bold.ttf');
  font-weight: 700;
  }
  @font-face { 
  font-family: 'Montserrat';
  src: url('../assets/fonts/Montserrat-Light.ttf');
  font-weight: 300;
  }
  @font-face {
  font-family: 'Montserrat';
  src: url('../assets/fonts/Montserrat-Bold.ttf');
  font-weight: 700;
}
@font-face {
  font-family: 'Montserrat';
  src: url('../assets/fonts/Montserrat-Regular.ttf');
  font-weight: 400;
}
@font-face {
  font-family: 'Montserrat';
  src: url('../assets/fonts/Montserrat-Medium.ttf');
  font-weight: 500;
}
@font-face {
  font-family: 'Montserrat';
  src: url('../assets/fonts/Montserrat-SemiBold.ttf');
  font-weight: 600;
}
  * {
    font-family: 'Montserrat', sans-serif;
    list-style: none ;
    text-decoration: none;
  }
  html,
  body{
    scroll-behavior: smooth;
    background-color: var(--body);
  }
  a {
  color: inherit;
  text-decoration: none !important;
}
 ul,h1,h2,h3,h4,h5,h6,p{
  padding-left: 0 !important;
  margin-bottom: 0 !important;
}
 .container{
  max-width: 1140px;
  width: 100%;
  padding: 0px 15px;
  margin: 0 auto;
}
`;
