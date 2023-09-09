import styled from "styled-components";

interface TextI {
  width?: string;
  borderRad?: string;
  background?: string;
  media?: string;
  mediaBorderRadius?: string;
  mediaWidth?: string;
  media2?: string;
  media2BorderRadius?: string;
  media2Width?: string;
  isHeightComplete?: string;
}

export const ButtonTag = styled.button<TextI>`
  display: flex;
  width: ${({ width }) => (width ? width : null)};
  height: ${({ isHeightComplete }) =>
    isHeightComplete ? "100%" : "fit-content"};
  padding: 1rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;
  border-radius: ${({ borderRad }) => (borderRad ? borderRad : "2rem")};
  background: ${({ background }) =>
    background ? background : "var(--barberry-400, #EBE02A)"};
  border: none;

  color: ${({ color }) => (color ? color : "#191717")};
  text-align: center;
  font-family: Inter;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  ${({ media, mediaBorderRadius, mediaWidth }) =>
    media
      ? `@media screen and (max-width: ${media}) {
        width: ${mediaWidth};
        border-radius: ${mediaBorderRadius};
        

  }`
      : null}

  ${({ media2, media2BorderRadius, media2Width }) =>
    media2
      ? `@media screen and (max-width: ${media2}) {
        width: ${media2Width};
        border-radius: ${media2BorderRadius};
        

  }`
      : null}
`;
