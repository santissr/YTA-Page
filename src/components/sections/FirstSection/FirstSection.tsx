import { TitleAndCards } from "../../organisms/TitleAndCards/TitleAndCards";
import { Section } from "./FirstSection.styled";

interface FirstSectionM {
  media?: string;
  media2?: string;
}

export const FirstSection = ({
  media = "960px",
  media2 = "477px",
}: FirstSectionM) => {
  return (
    <Section media={media} media2={media2}>
      <TitleAndCards />
    </Section>
  );
};
