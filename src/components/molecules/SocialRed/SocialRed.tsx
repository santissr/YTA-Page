import Link from "next/link";
import { FacebookSvg } from "../../../svgs/socialRed/FacebookSvg";
import { InstagramSvg } from "../../../svgs/socialRed/InstagramSvg";
import { SocialRedM } from "./SocialRed.model";
import { RedSocialContainer, SvgContainer } from "./SocialRed.styled";

export const SocialRed = ({ bgHover, className }: SocialRedM) => {
  return (
    <RedSocialContainer className={className}>
      <Link
        href="https://www.instagram.com/ytacompraryvender/?hl=es-la"
        rel="noopener noreferrer"
        target="_blank"
      >
        <SvgContainer bgHover={bgHover}>
          <InstagramSvg />
        </SvgContainer>
      </Link>
      <Link
        href="https://www.facebook.com/profile.php?id=100091147772808"
        rel="noopener noreferrer"
        target="_blank"
      >
        <SvgContainer bgHover={bgHover}>
          <FacebookSvg />
        </SvgContainer>
      </Link>
    </RedSocialContainer>
  );
};
