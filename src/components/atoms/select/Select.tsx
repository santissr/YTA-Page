import { SelectM } from "./Select.model";
import { SelectTag } from "./Select.styled";

export const Select = ({
  text,
  color,
  fontSize,
  fontWeight,
  value = "default",
  className,
  media,
  media2,
}: SelectM) => {
  return (
    <SelectTag
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      className={className}
      media={media}
      media2={media2}
    >
      <option value={value}>{text}</option>
    </SelectTag>
  );
};
