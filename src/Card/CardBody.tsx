import { useCardContext } from "./CardContext";

const CardBody = () => {
  const { card } = useCardContext();
  return <p>{card.content}</p>;
};

export default CardBody;
