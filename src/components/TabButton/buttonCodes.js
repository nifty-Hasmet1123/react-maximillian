export const buttonCodes = [
    {
        title: "Component Example",
        code: "function Car() {\n  return <h2>Hi, I am a Car!</h2>;\n}",
        description: "A Function component also returns HTML, and behaves much the same way as a Class component, but Function components can be written using much less code, are easier to understand, and will be preferred in this tutorial."
    },
    {
        title: "JSX",
        code: "const myElement = <h1>I Love JSX!</h1>;\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(myElement);",
        description: "JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement()  and/or appendChild() methods.\nJSX converts HTML tags into react elements."
    },
    {
        title: "Props",
        code: "const myElement = <Car brand='Ford' />;",
        description: "Props are arguments passed into React components.\nProps are passed to components via HTML attributes."
    },
    {
        title: "State",
        code: "const [position, setPosition] = useState({ x: 0, y: 0 });",
        description: "React components has a built-in state object.\nThe state object is where you store property values that belong to the component.\nWhen the state object changes, the component re-renders."
    }
];