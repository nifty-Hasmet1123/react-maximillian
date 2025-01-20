function Tabs({ children, buttons, buttonContainer = "menu" }) {
  // with parameter default values
  // will also work for jsx pointer (example: buttonContainer = Section). Section is a jsx component
  // will not work directly on the jsx code because it should be pascal case. 
  // Can also make the buttonContainer attribute to ButtonContainer starting with capital letter
  const ButtonContainer = buttonContainer;
  
  return (
    <>
      <ButtonContainer>
        {buttons}
      </ButtonContainer>
      {children}
    </>
  );
}

export default Tabs;