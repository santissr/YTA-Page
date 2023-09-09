import styled from "styled-components";

interface SearchEngineI {
  media?: string;
  media2?: string;
}

export const SearchEngineDiv = styled.div<SearchEngineI>`
  display: grid;

  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1rem;
  align-items: center;
  width: 100%;

  border-radius: 2rem;
  background: #fff;

  ${({ media }) =>
    media
      ? `@media screen and (max-width: ${media}) {
        display:grid;
        grid-template-rows: 1fr 1fr 1fr;
         grid-template-columns: unset; /* Anular la regla para esta media query */

  }`
      : null}

  ${({ media2 }) =>
    media2
      ? `@media screen and (max-width: ${media2}) {
        height: 14.4rem;
        
        display: grid;
        grid-template-rows: 1fr 1fr 1fr 1fr;
         grid-template-columns: unset; /* Anular la regla para esta media query */
  }`
      : null}
`;

export const ContainerSelects = styled.div<SearchEngineI>`
  display: none;
  width: 100%;
  height: 3.9rem;

  ${({ media }) =>
    media
      ? `@media screen and (max-width: ${media}) {
        display: grid;
        grid-template-columns: 1fr 1fr;
}`
      : null}

  ${({ media2 }) =>
    media2
      ? `@media screen and (max-width: ${media2}) {
        display: none;
}`
      : null}
`;
