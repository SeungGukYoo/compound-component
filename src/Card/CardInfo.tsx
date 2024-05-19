import { useCardContext } from "./CardContext";

const CardInfo = () => {
  const { card } = useCardContext();
  return <h2>{card.id}</h2>;
};

export default CardInfo;
