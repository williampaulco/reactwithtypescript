import React from "react";
import ReactDOM from "react-dom";

interface IProps {
    name?: string;
}

interface IState {
    greeting?: string;
}

class App extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            greeting: "Hello"
        }
    }
    render() {
        return <h1>{this.state.greeting + " " + this.props.name}</h1>
    }
}

ReactDOM.render(
    <App name="World" />,
    document.getElementById("root")
);