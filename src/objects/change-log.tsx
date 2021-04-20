import React from "react";

interface IProps {
    initiator: string;
    date: Date;
}

class ChangeLog extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);
    }

    render(): JSX.Element {
        return <div>{this.props.initiator + " " + this.props.date.toString()}</div>
    }
}

export default ChangeLog;