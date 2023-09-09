import { Contact } from "../../organisms/Contact/Contact";

import { FormAndTitle } from "../../organisms/FormAndTitle/FormAndTitle";
import { FooterTag, InfoDiv } from "./Footer.styled";

interface FooterM {
  media2?: string;
  id?: string;
}

export const Footer = ({ media2 = "665px", id }: FooterM) => {
  return (
    <FooterTag media2={media2} id={id}>
      <InfoDiv media2={media2}>
        <Contact media2={media2} />
        <FormAndTitle />
      </InfoDiv>
    </FooterTag>
  );
};
