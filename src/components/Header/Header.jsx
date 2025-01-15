import reactCoreConceptImg from "../../assets/react-core-concepts.png";
import "./Header.css";

function Header({wordList}) {
  return <header>
    <img src={reactCoreConceptImg} alt="Stylized Atom" />
    <h1>React Essentials</h1>
    <p>
      <span>
        { getRandomInt(wordList) }
      </span> 
      &nbsp;react components you will need for almost any app you are going to build
    </p>
  </header>
}

function getRandomInt(wordList) {
  const randomIndex = Math.floor(Math.random() * wordList.length);

  return wordList[randomIndex];
}

export default Header;