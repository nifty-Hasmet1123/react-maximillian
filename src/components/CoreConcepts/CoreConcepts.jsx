import "./CoreConcepts.css";

function CoreConcepts(props) {
    return <li>
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <p>{props.descriptions}</p>
    </li>
}

export default CoreConcepts;