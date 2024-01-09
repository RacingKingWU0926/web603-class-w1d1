// Use `npm` to install `react` and `reactDOM` ahead.

// Create a class called `HelloMessage`.
class HelloMessage extends React.Component {
    render() {
        return React.createElement(
            "div",
            null,
            `Hello ${this.props.name}!`  // "Westcliff"
        );
    }
}

// Ask reactDOM to create an element HelloMessage,
// which has an attribute "name" with value "Westcliff",
// and then find `id="hello-example"` to display it.
ReactDOM.render(React.createElement(HelloMessage, { name: "Westcliff" }), document.getElementById('hello-example'));
