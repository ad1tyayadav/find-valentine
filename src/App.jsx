import React, { useState } from "react";
import MemeComponent from "./components/Meme";
import VideoGrid from "./components/Videos";
import FloatingHearts from "./components/FlotingHearts";
import Form from "./components/Form";
import GirlPage from "./components/GirlPage"; // Import new component
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
  const [city, setCity] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showVideos, setShowVideos] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    setShowVideos(false);

    setTimeout(() => {
      setLoading(false);
      setShowVideos(true);

      if (gender === "female") {
        setResult({ type: "girlPage" });
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
        <GrGithub /> Give it a Star
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
            city={city}
            setCity={setCity}
            handleSubmit={handleSubmit}
          />
        ) : loading ? (
          <LoadingComponent />
        ) : result.type === "girlPage" ? (
          <GirlPage />
        ) : (
          <MemeComponent />
        )}
      </div>

      {showVideos && <VideoGrid />}

      <footer className="mt-10 text-white text-sm">
        Made with ❤️ by Aditya
      </footer>
    </div>
  );
};

export default App;
