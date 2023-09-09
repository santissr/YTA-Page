import { StaticImageData } from "next/image";
import buildingImg from "../../../assets/emojisSecondSection/building.png";
import handlesImg from "../../../assets/emojisSecondSection/handles.png";
import houseImg from "../../../assets/emojisSecondSection/house.jpg";
import smileImg from "../../../assets/emojisSecondSection/smile.png";

import { ImgEmoji } from "../../atoms/ImgEmoji/ImgEmoji";
import { ContainerEmojis } from "./EmojisSecondSection.styled";

export const EmojisSecondSection = () => {
  const emojis: StaticImageData[] = [
    buildingImg,
    handlesImg,
    houseImg,
    smileImg,
  ];

  return (
    <ContainerEmojis media2="356px">
      {emojis.map((emoji, index) => (
        <ImgEmoji key={index} emoji={emoji} />
      ))}
    </ContainerEmojis>
  );
};
