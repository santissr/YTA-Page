import { StaticImageData } from "next/image";

export interface LogoM {
  typeLogo: StaticImageData;
  className: string;
  media?: string;
  mediaWidth?: string;
}
