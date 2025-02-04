import { toTitleCase } from "../../util/helper";

function UserInput({ onChange, ...props }) {
  return (
    <section {...props}>
      <InputGroup
        label1="initial-investment"
        label2="annual-investment"
        className="input-group"
        onChange={onChange}
      />
      <InputGroup
        label1="expected-return"
        label2="duration"
        className="input-group"
        onChange={onChange}
      />
    </section>
  );
}

function InputGroup({ label1, label2, onChange, ...props }) {
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
          onChange={onChange}
        /> 
      </p>

      <p>
        {/* second label */}
        <label htmlFor={label2}>{modifiedLabel2} </label>
        <input 
          type="number" 
          id={label2}
          name={label2}
          onChange={onChange}
        />
      </p>
    </div>
  );
}

export default UserInput;