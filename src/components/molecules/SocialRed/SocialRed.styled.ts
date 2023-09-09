import styled from "styled-components";

export const RedSocialContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.2rem;
`;

interface SocialRed {
  bgHover?: string;
}

export const SvgContainer = styled.div<SocialRed>`
  display: flex;
  padding: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;
  border-radius: 5rem;
  background: #fff;

  &:hover {
    background: ${({ bgHover }) => (bgHover ? bgHover : "#ebe02a")};
  }
`;
