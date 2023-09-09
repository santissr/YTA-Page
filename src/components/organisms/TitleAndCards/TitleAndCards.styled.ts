import styled from "styled-components";

interface TitleAndCardsI {
  media?: string;
  media2?: string;
}

export const CardsAndTitle = styled.div<TitleAndCardsI>`
  width: 100%;
  display: flex;
  padding: 2rem 4rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5.9rem;
  border-radius: 2rem;
  background: var(--barberry-50, #fcfde9);

  ${({ media2 }) =>
    media2
      ? `@media screen and (max-width: ${media2}) {
        padding: 6rem 0rem;
  }`
      : null}
`;

export const CardsContainer = styled.div<TitleAndCardsI>`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: flex-start;
  gap: 2rem;
  flex-wrap: wrap;

  &::-webkit-scrollbar {
    border-radius: 5rem;
    background-color: #c1c1c1;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #dbc717;
    border-radius: 5rem;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #3e280a;
    border-radius: 5rem;
  }

  ${({ media }) =>
    media
      ? `@media screen and (max-width: ${media}) {
        width: 100%;
        display: flex;
        flex-wrap: nowrap;
        overflow-x: auto;
        padding-bottom: 2rem;

  }`
      : null}

  ${({ media2 }) =>
    media2
      ? `@media screen and (max-width: ${media2}) {
        height: 75.9rem;
  }`
      : null}
`;
