import { createContext, useContext } from "react";

export interface CardType {
  title: string;
  content: string;
  id: string;
}
const CardContext = createContext<{ card: CardType } | null>(null);

export const useCardContext = () => {
  const context = useContext(CardContext);
  if (!context) {
    throw new Error("useCardContext must be used within a CardProvider");
  }
  return context;
};

export default CardContext;
