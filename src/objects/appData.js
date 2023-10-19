// import eventConceptImage from "./assets/img/events.png";
// import stateConceptImage from "./assets/img/state.png";
// import componentConceptImage from "./assets/img/components.png";

const concepts = [
    {
      title: 'Components',
      // image: "./assets/img/components.png",
      description:
        'Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Components can receive data via props, and they can render dynamic output using JSX.',
      alt: "components"
    },
    {
      title: 'State',
      // image: "./assets/img/state.png",
      description:
        'State is data that may change over time. As it changes, the UI should be updated to reflect the updated data. Each component can maintain its own state and multiple components can share state.',
      alt: "state",
    },
    {
      title: 'Events',
      // image: "./assets/img/events.png",
      description:
        'Event handlers are added via props to (built-in) components. You pass functions as values to such event handlers to control which functions gets executed for which event.',
      alt: "events",
    },
];

export default concepts;