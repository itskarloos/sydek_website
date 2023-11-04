import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    // You can log the error or perform other error handling tasks here
    console.error(error, info);
  }

  render() {
    if (this.state.hasError) {
      // You can render a custom error message or component here
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired, // Validate children prop
};

export default ErrorBoundary;