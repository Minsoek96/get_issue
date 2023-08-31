import React, { Component } from "react";
import ErrorScreen from "./ErrorScreen";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      errorMessage: "",
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, errorMessage: error.message };
  }

  render() {
    if (this.state.hasError) {
      return <ErrorScreen message={this.state.errorMessage} />; // 여기에 fallback UI를 추가하세요.
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
