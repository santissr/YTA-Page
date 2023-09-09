import { Text } from "../../atoms/text/Text";
import { Form } from "../Form/Form";

import { Container } from "./FormAndTitle.styled";

export const FormAndTitle = () => {
  return (
    <Container>
      <Text
        text="Oferte su inmueble con nosotros"
        color="#FFF"
        fontSize="2.4rem"
        fontWeight="700"
      />
      <Form media="787px" />
    </Container>

    // media="787px" esto deberia ir en el form mientras.
  );
};
