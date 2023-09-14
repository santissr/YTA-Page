import styled from "styled-components";

interface TextAreaI {
  height?: string;
  fontSize?: string;
  fontWeight?: string;
}

export const TextAreaTag = styled.textarea<TextAreaI>`
  display: flex;
  ${({ height }) => (height ? `height: ${height}` : null)};
  padding: 1rem;
  align-items: flex-start;
  gap: 1rem;
  align-self: stretch;
  border-radius: 1rem;
  background: #fff;

  color: #000;

  ${({ fontSize }) => (fontSize ? `font-size: ${fontSize}` : null)};
  ${({ fontWeight }) => (fontWeight ? `font-weight: ${fontWeight}` : null)};
  font-style: normal;
  line-height: normal;
`;
