import { InputM } from "./Input.model";
import { InputTag } from "./Input.styled";

export const Input = ({
  placeholder,
  width,
  color,
  fontSize,
  fontWeight,
  background,
  borderRadius,
  height,
  className,
  media,
  mediaHeight,
  media2Height,
  media2,
  mediaWidth,
  mediaTextAlign,
}: InputM) => {
  return (
    <InputTag
      placeholder={placeholder}
      width={width}
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      background={background}
      borderRadius={borderRadius}
      height={height}
      className={className}
      media={media}
      mediaWidth={mediaWidth}
      mediaTextAlign={mediaTextAlign}
      media2={media2}
      mediaHeight={mediaHeight}
      media2Height={media2Height}
    ></InputTag>
  );
};
