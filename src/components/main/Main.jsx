import React from "react";
import "./main.css";
const Main = () => {
  const items = [
    { title: "Card 1", description: "This is the description for Card 1." },
    { title: "Card 2", description: "This is the description for Card 2." },
    { title: "Card 3", description: "This is the description for Card 3." },
  ];
  return (
    <main>
      <div className="card_container">
        {items.map((item) => (
          <div className="card">
            <h1 className="title">{item.title}</h1>
            <p className="description">{item.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Main;
