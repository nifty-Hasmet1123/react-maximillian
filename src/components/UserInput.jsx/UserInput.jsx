function UserInput({ setInvestments, ...props }) {
  return (
    <section {...props}>
      <InputGroup
        label1="initial-investment"
        label2="annual-investment"
        className="input-group"
        setInvestments={setInvestments}
      />
      <InputGroup
        label1="expected-return"
        label2="duration"
        className="input-group"
        setInvestments={setInvestments}
      />
    </section>
  );
}

function InputGroup({ label1, label2, setInvestments, ...props }) {
  const handleInputChange = (event) => {
    const {value, name} = event.target;
    
    const floatValue = parseFloat(value);

    setInvestments(prevInvestments => {
      return { ...prevInvestments, [convertToCamelCase(name)]: floatValue }
    });
  }

  const modifiedLabel1 = toTitleCase(label1);
  const modifiedLabel2 = toTitleCase(label2);
  
  return (
    <div {...props}>
      <p>
        {/* first label */}
        <label htmlFor={label1}>{modifiedLabel1}</label>
        <input 
          type="number" 
          id={label1}
          name={label1}
          onChange={handleInputChange}
        /> 
      </p>

      <p>
        {/* second label */}
        <label htmlFor={label2}>{modifiedLabel2} </label>
        <input 
          type="number" 
          id={label2}
          name={label2}
          onChange={handleInputChange}
        />
      </p>
    </div>
  );
}


function toTitleCase(argString) {
  const capitalFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  if (argString.includes("-")) {
    let word = argString
      .split("-")
      .map(word => capitalFirstLetter(word))
      .join(" ");

    return word;
  }

  return capitalFirstLetter(argString);
}

function convertToCamelCase(str) {
  return str.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
}

export default UserInput;