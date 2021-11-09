import { useState } from "react";
import CardList from "./components/CardList/CardList";
import "./App.css";

function App() {
  const cards = [
    {
      id: 1,
      title: "Build test task",
      content: [
        "Create repository",
        "Implement designs",
        "Implement functionality",
      ],
    },
    {
      id: 2,
      title: "Submit your test task",
      content: [
        "Open email client",
        "Sent link with information to careers@cornercasetech.com",
      ],
    },
    {
      id: 3,
      title: "Participate in tech interview",
      content: ["Talk with HR", "Talk with Tech team"],
    },
    {
      id: 4,
      title: "Receive answer",
      content: ["Receive answers", "Start your IT career"],
    },
  ];

  const [openCard, setOpenCard] = useState(null);
  const handleCardOpen = (id) => {
    setOpenCard(id);
  };

  return (
    <div className="App">
      <CardList
        cards={cards}
        openCardId={openCard}
        onCardClick={handleCardOpen}
      />
    </div>
  );
}

export default App;
