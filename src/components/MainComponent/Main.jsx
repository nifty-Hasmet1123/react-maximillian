import "../styles.css";

const Main = (props) => {
    return (
        <main>
            <header id="_activity">
                <div><h1>Activity 01: Creating reusable components</h1></div>
                <div id="keyConceptBox">
                    <img src={ props.keyConcept } alt="keyConcept" width="100px"/>
                </div>                 
            </header>
            <div id="para-header-box">
                <p>Key react concepts</p>
            </div>
            { props.children }
            <footer id="_footer-activity">
                <span>React activity concepts: see my github </span>
                <a 
                    href="https://github.com/nifty-Hasmet1123/react-maximillian/tree/02-practice-stateless-components" 
                    id="source-code"
                    rel="noopener noreferrer"
                > 
                    source code
                </a>.
            </footer>
        </main>
    );
};

export default Main;