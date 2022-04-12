import React, { useState } from "react";
import "./style.css";
import memeData from "../../data/meme.js";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  
  const [allMemeImages, setAllMemeImages] = useState(memeData);

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({ ...prevMeme, randomImage: url }));
    console.log(url);
  }

  function handleChange(event) {
    setMeme((prevState) => ({
      ...prevState,
      [event.traget.name]: event.traget.value,
    }));
  }
  return (
    <section>
      <form>
        <div className="form-grid">
          <div className="form-input-top">
            <input
              type="text"
              onChange={handleChange}
              name="topText"
              value={meme.topText}
            />
          </div>
          <div className="form-input-bot">
            <input
              type="text"
              onChange={handleChange}
              name="bottomText"
              value={meme.bottomText}
            />
          </div>
          <div className="form-submit">
            <input
              type="button"
              value="Get a new meme Image 🖼️"
              className="btn"
              onClick={getMemeImage}
            />
          </div>
        </div>
      </form>
      <img src={meme.randomImage} alt="meme" className="meme-img" />
    </section>
  );
}
