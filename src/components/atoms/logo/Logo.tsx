import Image from "next/image";
import { LogoM } from "./Logo.model";
import { LogoDiv } from "./Logo.styled";

export const LogoP = ({ typeLogo, className, media, mediaWidth }: LogoM) => {
  return (
    <LogoDiv className={className} media={media} mediaWidth={mediaWidth}>
      <Image src={typeLogo} alt="Logo de la empresa, YTA" />
    </LogoDiv>
  );
};
