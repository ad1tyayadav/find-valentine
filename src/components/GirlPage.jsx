import React from "react";

// Array of funny quotes
const funnyQuotes = [
  "Padh le behan, teri to roti bhi gol nahi hoti! 😂",
  "Engineering mat kar, shaadi bhi na ho paayegi! 😆",
  "Study harder, warna Tinder bhi swipe left karega! 🤣",
  "Sharma ji ki beti banne ka time aa gaya! 📚",
  "Focus on your studies, warna arranged marriage pakki hai! 💀",
];

const GirlPage = () => {
  const randomIndex = Math.floor(Math.random() * funnyQuotes.length);
  const randomQuote = funnyQuotes[randomIndex];

  return (
    <div className="text-center text-xl font-bold text-red-600 p-4">
      {randomQuote}
    </div>
  );
};

export default GirlPage;
