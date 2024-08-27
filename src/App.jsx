import { Navbar } from "./components/navbar/Navbar";
import { Hero } from "./components/hero/Hero";
import { Card } from "./components/card/Card";
import data from "./data";
import "./App.css";

function App() {
  const cards = data.map((card) => {
    return <Card key={card.id} card={card} />;
  });
  return (
    <>
      <Navbar />
      <Hero />
      <section className="cards-list">{cards}</section>
    </>
  );
}

export default App;
