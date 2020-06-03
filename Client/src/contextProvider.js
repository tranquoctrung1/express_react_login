import React, { Component } from "react";

import Context from "./context";

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogin: false,
    };

    this.setIsLogin = this.setIsLogin.bind(this);
  }

  setIsLogin(status) {
    this.setState({
      isLogin: status,
    });
  }

  render() {
    const { children } = this.props;
    return (
      <Context.Provider
        value={{
          isLogin: this.state.isLogin,
          setIsLogin: this.setIsLogin,
        }}
      >
        {children}
      </Context.Provider>
    );
  }
}
