import styled from "styled-components";

interface TextI {
  width?: string;
  height?: string;
  color?: string;
  textAlign?: string;
  fontSize?: string;
  textShadow?: string;
  fontWeight?: string;
  isPosition?: string;
  top?: string;
  hoverColor?: string;
  media?: string;
  media2?: string;
  mediaFontSize?: string;
  mediaFontWeight?: string;
}

export const TextTag = styled.p<TextI>`
  display: flex;
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => (height ? height : "fit-content")};
  flex-direction: column;
  justify-content: center;
  color: ${({ color }) => (color ? color : "#3D3737")};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "center")};
  /* font-family: "Inter"; */
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "1.7rem")};
  font-style: normal;
  ${({ textShadow }) => (textShadow ? `text-shadow:${textShadow}` : null)}
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "300")};
  line-height: normal;
  ${({ isPosition }) => (isPosition === "yes" ? "position: absolute;" : null)}
  ${({ top }) => (top ? `top: ${top};` : null)}

  &:hover {
    color: ${({ hoverColor }) => (hoverColor ? hoverColor : "none")};
  }

  ${({
    media,
    mediaFontSize,
    mediaFontWeight,
  }) => `@media screen and (max-width: ${media}) {
    font-size: ${mediaFontSize};
    font-weight: ${mediaFontWeight};
  }`}

  ${({ media2 }) => `@media screen and (max-width: ${media2}) {
    
  }`}
`;
