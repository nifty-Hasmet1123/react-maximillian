import Header from "./components/Header/Header.jsx";
import CoreConceptSection from "./components/CoreConcepts/CoreConcepts.jsx";
import ExamplesSection from "./components/Examples/Example.jsx";

function App() {
  const headerDescriptions = ["Core", "Fundamental", "Crucial"];

  return (
    <>
      <Header wordList={headerDescriptions} />
      <main>
        <CoreConceptSection />
        <ExamplesSection />
      </main>
    </>
  );
}

export default App;
