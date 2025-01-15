import components from "./assets/components.png";
import config from "./assets/config.png";
import jsxUi from "./assets/jsx-ui.png";
import stateMgmt from "./assets/state-mgmt.png";

export const CORE_CONCEPTS = [
    {
        image: components,
        title: "Components",
        description: "The core UI building block - compose the user interface by combining multiple components",
        uniqueKey: "core-concept-components"
    },
    {
        image: jsxUi,
        title: "JSX",
        description: "Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.",
        uniqueKey: "core-concept-jsx"
    },
    {
        image: config,
        title: "Props",
        description: "Make components configurable (and therefore reusable) by passing input data to them.",
        uniqueKey: "core-concept-props"
    },
    {
        image: stateMgmt,
        title: "State",
        description: "React-managed data which, when changed, causes the component to re-render & the UI to update.",
        uniqueKey: "core-concept-state-management"
    },
];