import styled from "styled-components";
import { TextTag } from "../../atoms/text/Text.styled";

interface CardI {
  backG?: string;
  backGHover?: string;
  url?: string;
}

export const CardContainer = styled.div<CardI>`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  flex: 0 0 auto;
  max-width: 36.6rem;
  height: 49.3rem;

  padding: 4rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1.9rem;
  border-radius: 3rem;
  background: ${({ backG }) => (backG ? backG : "white")};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  &:hover {
    background: ${({ backGHover }) =>
      backGHover ? backGHover : "var(--barberry-950, #3e280a)"};
    ${TextTag} {
      color: white;
    }
  }
`;

export const ImgContainer = styled.div<CardI>`
  width: 100%;
  height: 21.8rem;
  flex-shrink: 0;
  border-radius: 1.5rem;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
`;
