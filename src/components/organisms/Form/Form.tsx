import { Button } from "../../atoms/button/Button";
import { Input } from "../../atoms/input/Input";
import { TextArea } from "../../atoms/textArea/TextArea";
import { FormContainer } from "./Form.styled";

interface FormM {
  media?: string;
}

export const Form = ({ media }: FormM) => {
  const inputs: string[] = ["Nombre", "Correo Electrónico", "Celular"];

  return (
    <FormContainer media={media} onSubmit={(event) => event.preventDefault()}>
      {inputs.map((input, index) => (
        <Input
          key={index}
          placeholder={input}
          width="100%"
          fontSize="1.4rem"
          color="#000"
          background="#FFF"
          borderRadius="1rem"
        />
      ))}
      {/* Modificar la casilla de "adicionales" para poner un <textarea /> para comentarios adicionales  */}
      <TextArea
        height="7.6rem"
        placeholder="Adicionales"
        fontSize="1.4rem"
        fontWeight="400"
      />
      <Button text="Enviar formulario" width="24rem" height="3.1rem" />
    </FormContainer>
  );
};
