import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

/**
 * withSEO component
 *
 * @param {elementType} [WrappedComponent] - Component to wrap to include the SEO tags
 *
 * @returns {ReactElement} <></>
 */
const withSEO = (WrappedComponent) => {
  const SEO = (props) => {
    const { title } = props;
    if (!title) return null;
    return (
      <>
        <Helmet>
          <title>{`Single Dice Betting Game | ${title}`}</title>
        </Helmet>
        <WrappedComponent {...props} />
      </>
    );
  };

  SEO.displayName = `withLogger(${
    WrappedComponent.displayName || WrappedComponent.name
  })`;

  return SEO;
};

withSEO.propTypes = {
  WrappedComponent: PropTypes.elementType.isRequired,
};

withSEO.defaultProps = {};

export default withSEO;
