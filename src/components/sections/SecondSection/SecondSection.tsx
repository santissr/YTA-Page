import { Text } from "../../atoms/text/Text";
import { EmojisSecondSection } from "../../molecules/EmojisSecondSection/EmojisSecondSection";
import { Section, TextContainer } from "./SecondSection.styled";

export const SecondSection = () => {
  return (
    <Section>
      <EmojisSecondSection />
      <TextContainer>
        <Text
          color="#000"
          fontSize="3.8rem"
          text="Nuestros clientes YTA siempre, "
        />
        <Text
          color="#000"
          fontSize="3.8rem"
          fontWeight="700"
          text="Nos refieren más clientes."
        />
      </TextContainer>
    </Section>
  );
};
