import styled from "styled-components";

interface FirstSectionI {
  media?: string;
  media2?: string;
}

export const Section = styled.section<FirstSectionI>`
  display: flex;
  width: 100%;
  padding: 12rem 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  ${({ media }) =>
    media
      ? `@media screen and (max-width: ${media}) {
        height: 71.4rem;
        padding: 5rem 2.5rem;
  }`
      : null}

  ${({ media2 }) =>
    media2
      ? `@media screen and (max-width: ${media2}) {
        display: flex;
        height: 78.8rem;
        padding: 0rem 2.5rem;

  }`
      : null}
`;
