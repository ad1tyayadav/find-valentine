import React, { useState } from "react";
import MemeComponent from "./components/Meme";
import VideoGrid from "./components/Videos";
import FloatingHearts from "./components/FlotingHearts";
import Form from "./components/Form";
import "./index.css";
import { GrGithub } from "react-icons/gr";

const LoadingComponent = () => (
  <div className="flex flex-col items-center justify-center text-center gap-3">
    <div className="animate-bounce text-4xl">❤️💘💞</div>
    <p className="text-lg font-semibold text-pink-700">
      "Cupid is working overtime... Finding your perfect match! 💕"
    </p>
  </div>
);

const App = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    setTimeout(() => {
      setLoading(false);
      if (gender === "female") {
        setResult({
          type: "profile",
          content: {
            name: name || "Your Name",
            image: "https://pbs.twimg.com/profile_images/1789602721227739136/caT3CY4z_400x400.jpg",
            description: `Hi ${name || "there"}! Aditya is your Valentine! 💖`,
          },
        });
      } else {
        setResult({ type: "meme" });
      }
    }, 3000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-200 to-pink-400 p-4 relative overflow-hidden">
      <FloatingHearts />
      <a
        href="https://github.com/ad1tyayadav/find-valentine"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 hover:bg-gray-100 transition"
      >
        <GrGithub/> Give it a Star
      </a>

      <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-glow">
        Find Your Valentine 💘
      </h1>

      <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full">
        {!result && !loading ? (
          <Form
            name={name}
            setName={setName}
            gender={gender}
            setGender={setGender}
            age={age}
            setAge={setAge}
            handleSubmit={handleSubmit}
          />
        ) : loading ? (
          <LoadingComponent />
        ) : result.type === "profile" ? (
          <div className="text-center">
            <img
              src={result.content.image}
              alt="Profile"
              className="w-32 h-32 rounded-full mx-auto mb-2 shadow-lg"
            />
            <h3 className="text-xl font-bold text-red-600 animate-pulse">
              Hi {result.content.name}, Aditya is your Valentine! 💖
            </h3>
            <p className="text-gray-700 italic">"Love is in the air, and so are DMs! 💌"</p>

            <a
              href="https://www.instagram.com/aditya__yadav.10/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-700 transition transform hover:scale-105"
            >
              💬 Message Now
            </a>
          </div>
        ) : (
          <MemeComponent />
        )}
      </div>

      {result?.type === "meme" && <VideoGrid />}

      <footer className="mt-10 text-white text-sm">
        Made with ❤️ by Aditya
      </footer>
    </div>
  );
};

export default App;