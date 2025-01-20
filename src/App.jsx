import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts/CoreConcepts.jsx";
import TabButton from "./components/TabButton/TabButton.jsx";
import ButtonDisplay from "./components/TabButton/ButtonDisplay.jsx";
import { buttonCodes } from "./components/TabButton/buttonCodes.js";
import { useState } from "react";

function App() {
  const headerDescriptions = ["Core", "Fundamental", "Crucial"];
  const menuList = ["Components", "JSX", "Props", "State"];
  const [tabContent, setTabContent] = useState({});

  const handleSelect = (content) => {
    let selectedContent = null;

    switch (content) {
      case "Components":
        selectedContent = buttonCodes[0];
        break;
      case "JSX":
        selectedContent = buttonCodes[1];
        break;
      case "Props":
        selectedContent = buttonCodes[2];
        break;
      case "State":
        selectedContent = buttonCodes[3];
        break;
      default:
        break;
    }

    if (selectedContent) {
      setTabContent({ ...selectedContent, displayTab: true, isSelected: content });
    }
  }

  return (
    <>
      <Header wordList={headerDescriptions} />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {
              CORE_CONCEPTS.map(element => {
                return <CoreConcepts
                  key={element.uniqueKey}
                  title={element.title}
                  img={element.image}
                  descriptions={element.description}
                />
              })
            }
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={tabContent.isSelected === menuList[0]}
              onSelect={() => handleSelect(menuList[0])}
            >
              {menuList[0]}
            </TabButton>
            <TabButton
              isSelected={tabContent.isSelected === menuList[1]}
              onSelect={() => handleSelect(menuList[1])}
            >
              {menuList[1]}
            </TabButton>
            <TabButton
              isSelected={tabContent.isSelected === menuList[2]}
              onSelect={() => handleSelect(menuList[2])}
            >
              {menuList[2]}
            </TabButton>
            <TabButton
              isSelected={tabContent.isSelected === menuList[3]}
              onSelect={() => handleSelect(menuList[3])}
            >
              {menuList[3]}
            </TabButton>
          </menu>
          <div id="tab-content">
            <ButtonDisplay tabContent={tabContent} />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
