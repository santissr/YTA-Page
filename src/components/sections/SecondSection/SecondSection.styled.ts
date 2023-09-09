import styled from "styled-components";

interface SectionI {
  media?: string;
}

export const Section = styled.section<SectionI>`
  display: flex;
  padding: 10rem 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  align-self: stretch;
  background: #ebe02a;

  ${({ media }) =>
    media
      ? `@media screen and (max-width: ${media}) {
        
  }`
      : null}
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
