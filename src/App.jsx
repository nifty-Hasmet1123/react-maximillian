import "./css/App.css"
import React from "react";

import keyConceptImage from "./assets/img/key-concepts.png";
import Main from "./components/MainComponent/Main";
import Image from "./components/ImageComponent/Image";

class App extends React.Component {
    render() {
        return (
            <Main keyConcept={ keyConceptImage }>
                <Image />
            </Main>
        );
    };
};

export default App;
