import styled from "styled-components";

interface FormContainerI {
  media?: string;
}

export const FormContainer = styled.form<FormContainerI>`
  display: flex;
  padding: 5rem 10rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
  flex: 1 0 0;
  align-self: stretch;

  border-radius: 3rem;
  background: #1e1e1e;

  ${({ media }) =>
    media
      ? `@media screen and (max-width: ${media}) {
    padding: 3rem 4rem;
  }`
      : null}
`;
