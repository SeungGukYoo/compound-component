import CardBody from "./CardBody";
import CardContext, { CardType } from "./CardContext";
import CardHeader from "./CardHeader";
import CardInfo from "./CardInfo";

const Card = ({ customCard }: { customCard: CardType }) => {
  return (
    <CardContext.Provider value={{ card: customCard }}>
      <Card.Header />
      <Card.Info />
      <Card.Body />
    </CardContext.Provider>
  );
};

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Info = CardInfo;

export default Card;
