import styled from "styled-components";

interface ContainerI {
  media2?: string;
}

export const ContainerInfoContact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Container = styled.div<ContainerI>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;
  flex: 1 0 0;
  align-self: stretch;

  ${({ media2 }) =>
    media2
      ? `@media screen and (max-width: ${media2}) {
    align-items: center;
  })`
      : null};
`;
