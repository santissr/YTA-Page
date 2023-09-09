import { Button } from "../../atoms/button/Button";
import { Select } from "../../atoms/select/Select";
import { InputSearch } from "../../molecules/inputSearch/InputSearch";
import { SearchEngineM } from "./SearchEngine.model";
import { ContainerSelects, SearchEngineDiv } from "./SearchEngine.styled";

export const SearchEngine = ({ media, media2 }: SearchEngineM) => {
  return (
    <SearchEngineDiv media={media} media2={media2}>
      <InputSearch
        mediaHeight="4.4rem"
        media={media}
        mediaWidth="100%"
        mediaTextAlign="center"
        height="7.2rem"
      />
      <ContainerSelects media={media} media2={media2}>
        <Select text="Tipo de propiedad" />
        <Select text="Habitaciones" />
      </ContainerSelects>
      <Select text="Tipo de propiedad" media={media} media2={media2} />
      <Select text="Habitaciones" media={media} media2={media2} />
      <Button
        text="Buscar"
        isHeightComplete="yes"
        media={media}
        mediaBorderRadius="0rem 0rem 2rem 2rem"
        mediaWidth="100%"
        media2={media2}
      />
      {/* Estoy acomodando el boton a las media querys, pero no sabemos como ya que su width esta mandado por medio de propiedades */}
    </SearchEngineDiv>
  );
};
