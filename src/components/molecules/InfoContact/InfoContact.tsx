import { Text } from "../../atoms/text/Text";
import { InfoContactM } from "./InfoContact.model";
import { AddTextDiv, Container } from "./InfoContact.styled";

export const InfoContact = ({ svg, text }: InfoContactM) => {
  return (
    <Container>
      {svg ? svg : null}
      {text === "Calle 43B # 81-50" ? (
        <AddTextDiv>
          <Text
            text={text}
            color="#FFFFFF"
            fontSize="1.6rem"
            media="348px"
            mediaFontSize="1.4rem"
            textAlign="flex-start"
          />
          <Text
            text="Medellín - Antioquia - Colombia"
            color="#FFFFFF"
            fontSize="1.6rem"
            textAlign="flex-start"
          />
        </AddTextDiv>
      ) : (
        <Text
          text={text}
          textAlign="flex-start"
          color="#FFFFFF"
          fontSize="1.6rem"
          media="348px"
          mediaFontSize="1.4rem"
        />
      )}
    </Container>
  );
};
