import { Text } from "../../atoms/text/Text";
import { Card } from "../../molecules/Card/Card";
import { CardsAndTitle, CardsContainer } from "./TitleAndCards.styled";

export const TitleAndCards = () => {
  const urls: string[] = [
    "https://www.grupoyta.com/gallery/domenico-loia-hGV2TfOh0ns-unsplash-ts1665497656.jpg",
    "https://www.grupoyta.com/gallery/thisisengineering-raeng-hOCYuLmTTnY-unsplash-ts1665497657.jpg",
    "https://www.grupoyta.com/gallery/windows-p74ndnYWRY4-unsplash-ts1665497656.jpg",
  ];

  const titleCards: string[] = [
    "YTA VENDEDORES",
    "YTA COMPRADORES",
    "YTA EQUIPO DE TRABAJO",
  ];

  const textCards: string[] = [
    "Nuestros propietarios vendedores tienen nuestro apoyo en el conocimiento legal y actualización de precios comerciales correctos según el sector. Brindándoles siempre seguridad y comunicación constante.",
    "Nuestros compradores son acompañados por personas capacitadas con la calidad de nuestras políticas YTA ayudamos a hacer este proceso más efectivo, seguro y agradable. Ten la seguridad que te ayudarán.",
    "Nuestros colaboradores, asesores, agentes, abogados y avaluadores tienen nuestro respaldo por su lealtad, compromiso, amabilidad, confianza y esto también es parte del resultado de una evaluación y capacitación constante.",
  ];

  return (
    <CardsAndTitle media2="477px">
      <Text
        color="#000"
        fontSize="2.4rem"
        fontWeight="700"
        text="Yo Te Ayudo A comprar Y A Vender"
      />
      <CardsContainer media="1114px">
        {urls.map((url, index) => (
          <Card
            key={index}
            imgUrl={url}
            titleCard={titleCards[index]}
            textCard={textCards[index]}
          />
        ))}
      </CardsContainer>
    </CardsAndTitle>
  );
};
