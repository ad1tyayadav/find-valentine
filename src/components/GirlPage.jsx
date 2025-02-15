import React from "react";

const funnyQuotes = [
  "Padh le behan, teri to roti bhi gol nahi hoti! 😂",
  "Kitne bure din chal rhe hai tere ki tujhe ye sab site use karni pad rhi hai :)",
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
