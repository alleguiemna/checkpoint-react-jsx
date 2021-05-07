import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import imageInSrc from "./images/imageInSrc.jpg";
import imageInSrc1 from "./images/imageInSrc1.png"
import video1 from "./videos/WhatisJSX.mp4";

function App() {
  return (
    <div className="App">
      <header className="header">JSX (Javascript Extension)</header>
      <div
        className="part1"
        style={{ border: "solid 1px black", maxWidth: "100vw" }}
      >
        <h1>What's JSX</h1>
        <p>
          JSX is the abreviation of JavaScript Extension, is a React extension
          wich allows writing avascript code that looks like HTML. In other
          words,JSX is an HTML-like a syntax used by react that extends
          ECMAScript so that <b>HTML-like </b>syntax can co-exist with
          JavaScript/React code.
        </p>
        <h3 className="title red">JSX is the combination of:</h3>
        <br></br>
        <img id="img1"src={imageInSrc} alt="description" />
        <span>+</span>
        <img id="img2"src="/images/imageInPublic.jpg" alt="description" />
        <span>=</span>
        <img id="img3"src={imageInSrc1} alt="description" />
      </div>
      <div className="part2"
      style={{ border: "solid 1px black", maxWidth: "100vw" }}>
        <h3>In this video we will introduce the exciting topic of JSX:</h3>
      <video
        style={{ width: "320", height: "240" }}
        src={video1}
        type="video/mp4"
        controls
      ></video>
      </div>
        <footer>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://www.mdbootstrap.com"> JSX React.com </a>
        </footer>
    </div>
  );
}

export default App;
