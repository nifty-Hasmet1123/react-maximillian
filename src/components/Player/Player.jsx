import { useState, useRef } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setEditing] = useState(false);
  const [currentName, setName] = useState(name);
  const inputRef = useRef();
  
  // without useEffect using the settimeout because of how react state works. It will need to have some delay because the input tag may not be available if inputRef.current.focus is called immedietly.
  //
  const clickHandler = () => {
    // when updating state based on the previous value you should always use a function instead of this setEditing(!isEditing)
    // the problem with the code setEditing(!isEditing) is react is scheduling state updates behind the scene. 
    // @SEE SECTION 4 NUMBER 78 IN REACT
    setEditing(editing => !editing);
    
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  }

  const handleInputChange = (e) => {
    setName(e.target.value);
  }

  return (
    <li>
      <span className="player">
        {
          !isEditing
            ? <span className="player-name">{currentName}</span>
            : <input 
                ref={inputRef} 
                type="text" 
                value={currentName} 
                onChange={handleInputChange}
                required 
              />
        }
        <span className="player-symbol">
          {symbol}
        </span>
      </span>

      <button onClick={clickHandler}>
        {
          isEditing
            ? "Save"
            : "Edit"
        }
      </button>
    </li>
  );
}