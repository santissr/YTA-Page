import { LogoP } from "../../atoms/logo/Logo";
import { SocialRed } from "../../molecules/SocialRed/SocialRed";
import { HeaderTag } from "./Header.styled";
import { HeaderNav } from "./HeaderNav";
import Logo from "../../../assets/logoPng/Logo.png";
import LogoMobile from "../../../assets/logoPng/LogoMobile.png";

export const Header = () => {
  return (
    <HeaderTag media="744px" media2="480px">
      <LogoP
        typeLogo={Logo}
        className="logo"
        media="605px"
        mediaWidth="20rem"
      />

      <LogoP typeLogo={LogoMobile} className="logoMobile" />

      <HeaderNav />
      <SocialRed className="redes" />
    </HeaderTag>
  );
};
