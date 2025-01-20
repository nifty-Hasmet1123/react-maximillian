import "./CoreConcepts.css";
import { CORE_CONCEPTS } from "../../data";
import Section from "../Section";

function CoreConcepts(props) {
  return <li>
    <img src={props.img} alt={props.title} />
    <h2>{props.title}</h2>
    <p>{props.descriptions}</p>
  </li>
}

function CoreConceptSection() {
  return <Section id="core-concepts" title="Core Concepts">
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
  </Section>
}

export default CoreConceptSection;