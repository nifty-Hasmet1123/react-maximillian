// using component to catch the .children

const footerStyle = {
    display: "flex",
    justifyContent: "center",
    color: "aliceblue",
};

export default function Main(props) {
    // props.children captures all .children within the component in App.jsx file
    return (
        <main>
            { props.children }
            <footer style={ footerStyle }>
                <h4>Main Component Footer</h4>
            </footer>
        </main>
    );
};
