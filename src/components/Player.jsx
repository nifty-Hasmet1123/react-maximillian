import { useRef, useState } from "react";

export default function Player() {
  const [ entity, setEntity ] = useState(null);
  const refEntity = useRef(null);
  
  const handleClick = () => {
    setEntity(refEntity.current.value);

    if (entity) {
      // directly accessing the DOM is not the right approach for react 
      refEntity.current.value = ""; 
    }
  }
  
  return (
    <section id="player">
      <h2>
        Welcome { entity ?? "Unknown" }
      </h2>
      <p>
        <input ref={refEntity} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
