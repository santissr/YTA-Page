import styled from "styled-components";

interface MainI {
  media?: string;
  media2?: string;
}

export const MainTag = styled.main`
  width: 100%;
  height: 48rem;

  position: relative;
  flex-shrink: 0;
  background-image: url("https://www.grupa.com.co/uploads/6/6/1/7/66172935/colombia-ciudad-atardecer-1024_orig.png");
  background-size: cover;
  background-position: center;

  @media screen and (max-width: 960px) {
    height: 36.3rem;
  }
`;

export const Filter = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  /* background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat; */
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

export const ContainerMain = styled.div<MainI>`
  position: relative; /* Permite posicionar el contenido encima del div con degradado */
  z-index: 2; /* Coloca el contenido encima del div con degradado */ /* Estilos de texto del contenido */
  display: flex;
  padding: 1rem 12.912rem 14rem 12.912rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5.1rem;
  margin-top: 8.5rem;

  width: 100%;
  height: 100%;

  /* media: Media query para tablet
  media2: Media query para telefono */

  ${({ media }) =>
    media
      ? `@media screen and (max-width: ${media}) {
        padding: 0rem 3rem 10rem 3rem;
        gap: 1.3rem;
  }`
      : null}

  ${({ media2 }) =>
    media2
      ? `@media screen and (max-width: ${media2}) {
        padding: 4rem 3rem 0rem 3rem;
        justify-content: start;
        gap: 2rem;
  }`
      : null}
`;
