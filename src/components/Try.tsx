import React from "react";

class Try extends React.Component<{ onError: any }, { isError: boolean }> {
  state = {
    isError: false,
  };

  componentDidCatch() {
    this.setState({ isError: true });
  }

  render() {
    if (this.state.isError) return this.props.onError;
    return this.props.children;
  }
}

export default Try;
