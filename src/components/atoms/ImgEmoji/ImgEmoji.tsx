import { Img } from "./ImgEmoji.styled";
import { ImgEmojiM } from "./ImgEmoji.model";

export const ImgEmoji = ({ emoji }: ImgEmojiM) => {
  return <Img emoji={emoji} />;
};
