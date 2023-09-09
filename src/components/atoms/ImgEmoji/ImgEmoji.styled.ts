import { StaticImageData } from "next/image";
import styled from "styled-components";

interface ImgEmojiI {
  emoji: StaticImageData;
}

export const Img = styled.div<ImgEmojiI>`
  width: 7rem;
  height: 7rem;
  background: ${({ emoji }) => `url(${emoji.src})`};
`;
