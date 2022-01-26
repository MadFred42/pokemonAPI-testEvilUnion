import { Component, ReactNode } from "react";

interface Props {
    children: ReactNode;
};

interface State {
    error: boolean;
};

export default class ErrorBoundry extends Component<Props, State> {
    state: State = {
        error: false
    };

    componentDidCatch() {
        this.setState({ error: true });
    };

    render() {
        if (this.state.error) {
            return <h1>Error</h1>
        }

        return this.props.children;
    };
};