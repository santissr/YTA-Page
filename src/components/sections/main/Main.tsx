import { Text } from "../../atoms/text/Text";
import { SearchEngine } from "../../organisms/searchEngine/SearchEngine";
import { ContainerMain, Filter, MainTag } from "./Main.styled";

const media: string = "960px";
const media2: string = "420px";

// Aca cree constantes en lugar de argumentos, ya que no me dejaban activar las MediaQuerys
// Preguntas sobre esto

export const Main = () => {
  return (
    <MainTag>
      <Filter />
      <ContainerMain media={media} media2={media2}>
        <Text
          text="Compra o vende tu propiedad con nosotros"
          fontWeight="700"
          fontSize="3.6rem"
          color="#FFF"
          textShadow="0 0.4rem 0.4rem 0 rgba(0, 0, 0, 0.25);"
          media="826px"
          mediaFontSize="2.8rem"
        />
        <SearchEngine media={media} media2={media2} />
      </ContainerMain>
    </MainTag>
  );
};
