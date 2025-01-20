import "./buttonCodes.css";

// function TabButton({children, onSelect, isSelected}) {
function TabButton({children, isSelected, ...props}) {
  return (
    <li>
      <button
        // onClick={onSelect}
        {...props}
        className={isSelected ? "active" : undefined}
      >
        {children}
      </button>
    </li>
  );
}

export default TabButton;