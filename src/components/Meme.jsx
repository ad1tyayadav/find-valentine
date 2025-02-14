import React from "react";

const memes = [
  "meme1.jpg",
  "meme2.jpg",
  "meme3.jpg",
  "meme4.jpg"
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
