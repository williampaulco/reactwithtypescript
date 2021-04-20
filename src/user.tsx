import React from "react";
import ChangeLog from "./objects/change-log"

interface IProps {
    first?: string;
    mi?: string;
    last?: string;
    title?: string;
    phone?: string;
    printer?: string;
    login?: string;
    leadWorker?: string;
    supervisor?: boolean;
    created?: ChangeLog;
    updated?: ChangeLog;
}

class User extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);
    }

    render(): JSX.Element  {
        return <ul>
            <li>{this.props.first}</li>
            <li>{this.props.created?.render()}</li>
        </ul>
    }
}

export default User;
