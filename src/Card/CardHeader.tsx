import { useCardContext } from "./CardContext";

const CardHeader = () => {
  const { card } = useCardContext();
  return <h1>{card.title}</h1>;
};

export default CardHeader;
