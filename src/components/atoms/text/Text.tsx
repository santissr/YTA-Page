import { TextM } from "./Text.model";
import { TextTag } from "./Text.styled";

export const Text = ({
  text,
  width,
  height,
  color,
  fontSize,
  fontWeight,
  position,
  top,
  hoverColor,
  media,
  media2,
  textAlign,
  mediaFontSize,
  mediaFontWeight,
}: TextM) => {
  return (
    <TextTag
      width={width}
      height={height}
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      isPosition={position}
      top={top}
      hoverColor={hoverColor}
      media={media}
      media2={media2}
      textAlign={textAlign}
      mediaFontSize={mediaFontSize}
      mediaFontWeight={mediaFontWeight}
    >
      {text}
    </TextTag>
  );
};
