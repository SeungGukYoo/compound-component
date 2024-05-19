import "./App.css";
import Card from "./Card/Card";

function App() {
  const customCard = {
    title: "title1",
    content: "content2",
    id: "id3",
  };
  return (
    <>
      <Card customCard={customCard} />
    </>
  );
}

export default App;
