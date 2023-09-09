import styled from "styled-components";

interface SelectI {
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  media?: string;
  media2?: string;
}

export const SelectTag = styled.select<SelectI>`
  box-sizing: border-box;
  color: ${({ color }) => (color ? color : "#1A1717")};
  text-align: center;
  font-family: Inter;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "1.6rem")};
  font-style: normal;
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "400")};
  line-height: normal;
  background-color: transparent;
  border: none;

  ${({ media }) =>
    media
      ? `@media screen and (max-width: ${media}) {
    display: none;
  }`
      : null}

  ${({ media2 }) =>
    media2
      ? `@media screen and (max-width: ${media2}) {
    display: block;
  }`
      : null}
`;
