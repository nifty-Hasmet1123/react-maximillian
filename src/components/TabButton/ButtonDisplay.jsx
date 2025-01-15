// import { buttonCodes } from "./buttonCodes";

function ButtonDisplay({ tabContent }) {
  // default value because an empty object is still truthy in javascript :(
  // if (Object.keys(tabContent).length === 0) {
  //   tabContent = {...buttonCodes[0], displayTab: true};
  // }

  const defaultMessage = () => {
    return "Please select a topic.";
  }

  return (
    <>
      <h2>{tabContent?.title ?? defaultMessage()}</h2>
      <p>{tabContent.description}</p>
      
      {/* I put a displaytab in the app.jsx function because I change the useState into 1 only*/}
      <div className={tabContent.displayTab ? "buttonCodes" : ""}>
        <pre className={tabContent.displayTab ? "pretag" : ""}>
          <code>
            {tabContent.code}
          </code>
        </pre>
      </div>
    </>
  )
}

export default ButtonDisplay;