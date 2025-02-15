import React from "react";

const youtubeVideos = [
  { title: "CS50 Harvard", url: "https://www.youtube.com/embed/LfaMVlDaQ24?si=nAaqS96c7B0DAKl7" },
  { title: "Full stack", url: "https://www.youtube.com/embed/3j8JLXDRf1c?si=mw04DKoWyiZmOCZk" },
  { title: "Web Dev Roadmap", url: "https://www.youtube.com/embed/WQoB2z67hvY" },
  { title: "System Design Basics", url: "https://www.youtube.com/embed/xpDnVSmNFX0" },
  { title: "React Crash Course", url: "https://www.youtube.com/embed/bMknfKXIFA8" },
];

const VideoGrid = () => {
  return (
    <div className="bg-transparent w-full text-white py-8 px-4">
      <h2 className="text-2xl text-black font-bold text-center mb-6">
        Bete <b className="text-pink-500">Valentine</b> se ghar nahi chlta :(
      </h2>
      <div className="grid grid-cols-1 text-black sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {youtubeVideos.map((video, index) => (
          <div key={index} className="bg-pink-200 rounded-lg shadow-lg overflow-hidden">
            <div className="relative w-full pt-[56.25%]"> {/* 16:9 Aspect Ratio */}
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={video.url}
                title={video.title}
                allowFullScreen
              />
            </div>
            <p className="text-sm text-center p-2 font-semibold">{video.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoGrid;
