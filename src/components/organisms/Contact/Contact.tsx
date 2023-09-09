import { ReactNode } from "react";

import { PhoneSvg } from "@/svgs/InfoSvgs/PhoneSvg";
import { MailSvg } from "@/svgs/InfoSvgs/MailSvg";
import { MapsSvg } from "@/svgs/InfoSvgs/MapsSvg";

import { InfoContact } from "../../molecules/InfoContact/InfoContact";
import { Container, ContainerInfoContact } from "./Contact.styled";
import { RobotMessage } from "@/svgs/InfoSvgs/RobotMessage";

interface ContactM {
  media2?: string;
}

export const Contact = ({ media2 }: ContactM) => {
  const svgs: { svg: ReactNode; text: string; id: string }[] = [
    { svg: <PhoneSvg />, text: "+57 3137687067", id: "phone" },
    { svg: <MailSvg />, text: "ytacompraryvender@grupoyta.com", id: "mail" },
    { svg: <MapsSvg />, text: "Calle 43B # 81-50", id: "maps" },
  ];

  return (
    <Container media2={media2}>
      <RobotMessage />
      <ContainerInfoContact>
        {svgs.map(({ svg, text, id }) => (
          <InfoContact key={id} svg={svg} text={text} />
        ))}
      </ContainerInfoContact>
    </Container>
  );
};
