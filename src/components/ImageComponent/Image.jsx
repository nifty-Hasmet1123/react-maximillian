import concepts from "../../objects/appData";
import eventConceptImage from "../../assets/img/events.png";
import stateConceptImage from "../../assets/img/state.png";
import componentConceptImage from "../../assets/img/components.png";
import "../styles.css";

const arrayOfImage = [
    componentConceptImage,
    stateConceptImage,
    eventConceptImage
];

const Image = () => {
    return (
        <div className="main-image-container">
            {
                concepts.map((items, index) => {
                    const { title, description, alt } = items;

                    return (
                        <div key={ index } className="outer-image-container">
                            <div className="inner-image-container">
                                <h3> { title } </h3>
                                <img src={ arrayOfImage[index] } alt={ alt } width="200px" />
                                <p className="desc-para">{ description }</p>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default Image;