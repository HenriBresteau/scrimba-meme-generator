import React, { useState } from "react";
import "./style.css";
// import memeData from "../../data/meme.js";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = useState([]);

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme((prevMeme) => ({ ...prevMeme, randomImage: url }));
    console.log(url);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  React.useEffect(() => {
    fetch(`https://api.imgflip.com/get_memes`)
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

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
      <div className="meme">
        <img src={meme.randomImage} alt="meme" className="meme-img" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </section>
  );
}
