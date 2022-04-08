import React from "react";
import Meme from "./Components/Meme/Meme";
import Navbar from "./Components/Navbar/Navbar";

export default function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Meme />
      </main>
    </div>
  );
}
