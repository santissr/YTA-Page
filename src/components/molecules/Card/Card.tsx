import { Text } from "@/components/atoms/text/Text";
import { CardM } from "./Card.model";
import { CardContainer, ImgContainer } from "./Card.styled";

export const Card = ({ titleCard, textCard, imgUrl }: CardM) => {
  const colorCard = "#000";

  return (
    <CardContainer>
      <ImgContainer url={imgUrl} />
      <Text
        color={colorCard}
        fontSize="2rem"
        fontWeight="600"
        text={titleCard}
      />
      <Text
        color={colorCard}
        fontSize="1.6rem"
        fontWeight="400"
        text={textCard}
      />
    </CardContainer>
  );
};
