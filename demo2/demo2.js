// Use `npm` to install `react` and `reactDOM`, so you can use them in the component.
// It would still work if you set up React using CDN in the `.html` file.
const React = require('react');
const ReactDOM = require('react-dom');

// Create a class called `HelloMessage`.
class HelloMessage extends React.Component {
    render() {
        return React.createElement(
            "div",
            null,
            "Hello ",
            this.props.name
        );
    }
}

// Ask reactDOM to create an element HelloMessage, named "Westcliff", and then find `id="hello-example"` to display it.
ReactDOM.render(React.createElement(HelloMessage, { name: "Westcliff" }), document.getElementById('hello-example'));
