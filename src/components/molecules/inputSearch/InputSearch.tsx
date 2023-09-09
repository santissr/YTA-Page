import { SearchSvg } from "../../../svgs/searchSvg/SearchSvg";
import { Input } from "../../atoms/input/Input";
import { InputSearchM } from "./InputSearch.model";
import { Container } from "./InputSearch.styled";

export const InputSearch = ({
  media,
  mediaWidth,
  mediaTextAlign,
  height,
  mediaHeight,
}: InputSearchM) => {
  return (
    <Container>
      <SearchSvg />
      <Input
        height={height}
        mediaHeight={mediaHeight}
        media={media}
        mediaWidth={mediaWidth}
        mediaTextAlign={mediaTextAlign}
        placeholder="Busca por ciudad, zona o barrio"
        color="#6A6F6D"
        width="29rem"
      />
    </Container>
  );
};
