import styled from "styled-components";

interface InputI {
  width?: string;
  height?: string;
  color?: string;
  borderRadius?: string;
  fontSize?: string;
  fontWeight?: string;
  background?: string;
  media?: string;
  mediaWidth?: string;
  mediaTextAlign?: string;
  mediaHeight?: string;

  media2?: string;
  media2Height?: string;
}

export const InputTag = styled.input<InputI>`
  width: ${({ width }) => (width ? width : null)};
  ${({ height }) => (height ? `height: ${height}` : null)};

  box-sizing: border-box;
  color: ${({ color }) => (color ? color : "#6a6f6d")};
  ${({ borderRadius }) =>
    borderRadius ? `border-radius: ${borderRadius}` : null};
  text-align: start;

  padding: 1rem;

  font-size: ${({ fontSize }) => (fontSize ? fontSize : "1.6rem")};
  font-style: normal;
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "400")};
  line-height: normal;
  background-color: ${({ background }) =>
    background ? background : "transparent"};
  border: 0;

  ${({ media, mediaWidth, mediaTextAlign, mediaHeight }) =>
    media
      ? `@media screen and (max-width: ${media}) {
    width: ${mediaWidth};
    text-align: ${mediaTextAlign};
    height: ${mediaHeight};
  }`
      : null}

  ${({ media2, media2Height }) => `@media screen and (max-width: ${media2}) {
    height: ${media2Height}
  }`}
`;
