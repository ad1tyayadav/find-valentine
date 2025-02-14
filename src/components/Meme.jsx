import React from "react";

const memes = [
  "https://indianmemetemplates.com/wp-content/uploads/abe-loude-apna-kaam-kar-bhsdike.jpg",
  "https://scrolldroll.com/wp-content/uploads/2024/08/Bhagam-Bhag-Movie-Dialogues-019.jpg",
  "https://indianmemetemplates.com/wp-content/uploads/raha-nahi-jaata-tadap-hi-aisi-hai.jpg",
  "https://media.tenor.com/JGKaieuPFZIAAAAe/padhai-kyu-nhai-ho-rahi-padhai.png"
];

const Meme = () => {
  const randomMeme = memes[Math.floor(Math.random() * memes.length)];

  return (
    <div className="flex flex-col items-center w-full px-4 mt-6">
      <div className="w-full max-w-lg bg-white p-4 rounded-lg shadow-lg text-center">
        <img src={randomMeme} alt="Meme" className="w-full rounded-lg" />
      </div>
    </div>
  );
};

export default Meme;
