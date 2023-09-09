import styled from "styled-components";

interface LogoDivI {
  media?: string;
  mediaWidth?: string;
}

export const LogoDiv = styled.div<LogoDivI>`
  display: inline-block;

  ${({ media, mediaWidth }) =>
    media
      ? `@media screen and (max-width: ${media}) {
    width: ${mediaWidth}}`
      : null}
`;
