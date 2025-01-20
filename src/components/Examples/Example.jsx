import { useState } from "react";
import { buttonCodes } from "../TabButton/buttonCodes";
import Tabs from "../Tabs";
import Section from "../Section";
import ButtonDisplay from "../TabButton/ButtonDisplay";
import TabButton from "../TabButton/TabButton";

function ExamplesSection() {
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
    <Section id="examples" title="Examples">
      <Tabs
        // buttonContainer={Section} custom pointer for a jsx component no need for angle brackets
        // buttonContainer="menu"
        buttons={
          <>
            <TabButton
              isSelected={tabContent.isSelected === menuList[0]}
              // onSelect={() => handleSelect(menuList[0])}
              onClick={() => handleSelect(menuList[0])}
            >
              {menuList[0]}
            </TabButton>
            <TabButton
              isSelected={tabContent.isSelected === menuList[1]}
              // onSelect={() => handleSelect(menuList[1])}
              onClick={() => handleSelect(menuList[1])}
            >
              {menuList[1]}
            </TabButton>
            <TabButton
              isSelected={tabContent.isSelected === menuList[2]}
              // onSelect={() => handleSelect(menuList[2])}
              onClick={() => handleSelect(menuList[2])}
            >
              {menuList[2]}
            </TabButton>
            <TabButton
              isSelected={tabContent.isSelected === menuList[3]}
              // onSelect={() => handleSelect(menuList[3])}
              onClick={() => handleSelect(menuList[3])}
            >
              {menuList[3]}
            </TabButton>
          </>
        }
      >
        <div id="tab-content">
          <ButtonDisplay tabContent={tabContent} />
        </div>

      </Tabs>
    </Section>
  );
}

export default ExamplesSection;