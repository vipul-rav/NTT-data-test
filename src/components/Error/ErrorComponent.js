import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
    // eslint-disable-next-line no-console
    console.log(error);
    // eslint-disable-next-line no-console
    console.log(info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>There is technical error.</h2>
        </div>
      );
    }
    return this.props.children;
  }
}

ErrorComponent.propTypes = {
  children: PropTypes.any
};

export { ErrorComponent };
