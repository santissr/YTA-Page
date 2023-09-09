import styled from "styled-components";

interface FooterI {
  media2?: string;
}

export const InfoDiv = styled.div<FooterI>`
  display: grid;
  grid-template-columns: 1fr 1fr;

  align-items: center;
  flex: 1 0 0;
  align-self: stretch;

  ${({ media2 }) =>
    media2
      ? `@media screen and (max-width: ${media2}) {
    display: flex;
    gap: 4rem;
    flex-direction: column;
  }`
      : null}
`;

export const FooterTag = styled.footer<FooterI>`
  display: flex;
  width: 100%;
  height: fit-content;
  padding: 10rem 2.5rem;
  justify-content: center;
  align-items: center;

  background: #6b4b18;

  ${({ media2 }) =>
    media2
      ? `@media screen and (max-width: ${media2}) {
    display: flex;
    flex-direction: column;    
    height: 81.5rem;
  }`
      : null}
`;
