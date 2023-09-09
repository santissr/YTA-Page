import { TextM } from "./Button.model";
import { ButtonTag } from "./Button.styled";

export const Button = ({
  text,
  width,
  borderRad,
  background,
  className,
  media,
  mediaBorderRadius,
  mediaWidth,
  media2,
  media2BorderRadius,
  media2Width,
  isHeightComplete,
}: TextM) => {
  return (
    <ButtonTag
      width={width}
      borderRad={borderRad}
      background={background}
      className={className}
      media={media}
      mediaBorderRadius={mediaBorderRadius}
      mediaWidth={mediaWidth}
      media2={media2}
      media2BorderRadius={media2BorderRadius}
      media2Width={media2Width}
      isHeightComplete={isHeightComplete}
    >
      {text}
    </ButtonTag>
  );
};
