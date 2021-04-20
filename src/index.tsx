import React from "react";
import ReactDOM from "react-dom";
import ChangeLog from "./objects/change-log";
import User from "./user";

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
    render(): JSX.Element {
        return <User 
            first="Will"
            created={new ChangeLog({initiator: "Will", date: new Date()})}
        />
    }
}

ReactDOM.render(
    <App name="World" />,
    document.getElementById("root")
);