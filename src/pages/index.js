import * as React from "react";
import background from '../images/lmao.jpeg';
import "../components/layout.css";

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  height: '100vh',
  width: '100vw',
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  backgroundImage: `url(${ background })`
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
  color: "#fff"
}
const headingAccentStyles = {
  color: "#FFF",
}

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Maple Syrup Warrior Day</title>
      <h1 style={headingStyles}>
        Happy Maple Syrup Warrior Day, fellow Canadians!
        <br />
        <span style={headingAccentStyles}>— you can celebrate all day, Monday April 19th, 2021! </span>
        <span role="img" aria-label="Party popper emojis">
          🎉🎉🎉
        </span>
      </h1>
    </main>
  )
}

export default IndexPage
