import styled from "styled-components";

interface HeaderI {
  media?: string;
  media2?: string;
}

const logoMobileNone = `.logoMobile {
  display: none;
}`;

export const HeaderTag = styled.header<HeaderI>`
  display: flex;
  width: 100%;
  height: fit-content;

  justify-content: space-between;
  padding: 0 3rem;
  align-items: center;
  ${logoMobileNone}

  background: #fff;

  ${({ media }) =>
    media
      ? `@media screen and (max-width: ${media}) {
    padding: 0 1rem;
  }`
      : null}

  ${({ media2 }) =>
    media2
      ? `@media screen and (max-width: ${media2}) {
        padding: 0 1rem;

        .logo {
      display: none;
    }

    .redes {
      display: none;
    }

    .logoMobile {
    display: flex;
  }
  }
  `
      : null}
`;
