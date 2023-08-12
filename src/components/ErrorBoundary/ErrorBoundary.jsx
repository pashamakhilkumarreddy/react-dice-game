import { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * ErrorBoundary component
 *
 * @param {object} [children] - React children
 * @param {object} [fallback] - Fallback UI to display on error
 *
 * @returns {ReactElement} <div>
 */
class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  static propTypes = {
    children: PropTypes.any,
    fallback: PropTypes.any,
  };

  static getDerivedStateFromError(err) {
    return { hasError: true };
  }

  componentDidCatch(err, info) {
    console.error(err, info.componentStack);
  }

  render() {
    const { hasError } = this.state;
    const { children, fallback } = this.props;
    if (hasError) {
      return fallback;
    }

    return children;
  }
}

export default ErrorBoundary;
