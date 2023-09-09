import styled from "styled-components";

interface ContainerEmojisI {
  media2?: string;
}

export const ContainerEmojis = styled.div<ContainerEmojisI>`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 2rem;

  ${({ media2 }) =>
    media2
      ? `@media screen and (max-width: ${media2}) {
    gap: 0;
  }`
      : null}
`;
