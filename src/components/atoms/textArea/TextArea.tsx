import { TextAreaM } from "./TextArea.model";
import { TextAreaTag } from "./TextArea.styled";

export const TextArea = ({
  fontSize,
  fontWeight,
  height,
  placeholder,
}: TextAreaM) => {
  return (
    <TextAreaTag
      fontSize={fontSize}
      fontWeight={fontWeight}
      height={height}
      placeholder={placeholder}
    ></TextAreaTag>
  );
};
