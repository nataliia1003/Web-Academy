import React from 'react';
import ReactDOM from 'react-dom';

/*class HelloMessage extends React.Component {
    render() {
        return React.createElement(
            "div",
            null,
            "Привет, ",
            this.props.name
        );
    }
}
ReactDOM.render(
    React.createElement(HelloMessage, { name: "Саша" }),
    document.getElementById('hello-example')
);*/
class HelloMessage extends React.Component {
    render() {
        return (
            <div>
                <h2>Привет</h2>, {this.props.name}
            </div>
        );
    }
}
ReactDOM.render(
    <HelloMessage name="Саша" />,
    document.getElementById('hello-example')
);
Collapse





