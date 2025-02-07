import { useState } from 'react';
import styled from 'styled-components';
import CustomInput from './InputLabel';
import ButtonTW from './ButtonTailwind/ButtonTW';
import InputLabelTW from './InputLabelTailwind/InputLabelTW';
import { ButtonCSS } from './Button';

// standard css code without using camelCase to change them.
const ControlContainerCSS = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`

// when passing a logic within styled component you need to pass in a function on it. the props will be used on the element
// const LabelCSS = styled.label`
//   display: block;
//   margin-bottom: 0.5rem;
//   font-size: 0.75rem;
//   font-weight: 700;
//   letter-spacing: 0.1em;
//   text-transform: uppercase;
//   color: ${({ $invalid }) => $invalid ? "#f87171" : "#6b7280"}; 
// `

// add a dollar sign on the prop to remove the error in the browser (i.e Received `false` for a non-boolean attribute `invalid`.)
// const InputCSS = styled.input`
//   width: 100%;
//   padding: 0.75rem 1rem;
//   line-height: 1.5;
//   background-color:${({ $invalid }) => $invalid ? "#fed2d2" : "#d1d5db"};
//   color: ${({ $invalid }) => $invalid ? "#ef4444" : "#374151"};

//   border: 1px solid ${({ $invalid }) => $invalid ? "#f73f3f" : "transparent"};
//   border-radius: 0.25rem;
//   box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
// `


export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }
  
  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;
  
  return (
    <div id="auth-inputs">
      {/* styled component sample */}
      {/* <div className="controls"> */}
      <ControlContainerCSS>
        {/* <p> */}
          {/* <label>Email</label> */}

          {/* wrong way */}
          {/* <LabelCSS className={`label ${emailNotValid ? "invalid": ""}`}>Email</LabelCSS> */}




          {/* correct way when using styled components */}
          {/* adding a dollar sign on the Prop removes this error in the console: Received `false` for a non-boolean attribute `invalid`. */}
          {/* this is still a valid prop even with dollar sign */}
          {/* <LabelCSS $invalid={emailNotValid}>Email</LabelCSS> */}



          {/* <input
            type="email"
            className={emailNotValid ? 'invalid' : undefined}
            onChange={(event) => handleInputChange('email', event.target.value)}
          /> */}
          {/* <InputCSS
            type='email'
            $invalid={emailNotValid}
            onChange={(event) => handleInputChange('email', event.target.value)}
          /> */}

        {/* </p> */}
        
        {/* styled components */}
        {/* <CustomInput 
          label="Email"
          type="email"
          invalid={emailNotValid}  // Ensure consistency
          onChange={(event) => handleInputChange("email", event.target.value)}
        /> */}

        {/* tailwind */}
        <InputLabelTW 
          label="Email"
          type="email"
          invalid={emailNotValid}  // Ensure consistency
          onChange={(event) => handleInputChange("email", event.target.value)}
        />

        {/* <p> */}
          {/* note never add css conditioning inline when using styled components use it on the styled component variable */}
          {/* <LabelCSS $invalid={passwordNotValid}>Password</LabelCSS>
          <InputCSS
            type='password'
            $invalid={passwordNotValid}
            onChange={(event) => handleInputChange('password', event.target.value)}
          />
        </p> */}

        {/* styled component */}
        {/* <CustomInput 
          label="Password"
          type="password"
          invalid={passwordNotValid}
          onChange={(event) => handleInputChange("password", event.target.value)}
        /> */}

        {/* tailwind */}
        <InputLabelTW 
          label="Password"
          type="password"
          invalid={passwordNotValid}
          onChange={(event) => handleInputChange("password", event.target.value)}
        />
      </ ControlContainerCSS >
      {/* </div> */}
      <div className="actions">
        <button type="button" className="text-button">
          Create a new account
        </button>
        {/* <button className='button' onClick={handleLogin}>Sign In</button> */}
        
        {/* styled components */}
        {/* <ButtonCSS onClick={handleLogin}>
          Sign In
        </ButtonCSS> */}

        {/* tailwind */}
        <ButtonTW onClick={handleLogin}>
          Sign In
        </ButtonTW>
      </div>
    </div>
  );
}
