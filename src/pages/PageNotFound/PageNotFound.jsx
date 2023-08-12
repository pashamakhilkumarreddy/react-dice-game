import { PageNotFoundWrapper } from './styles';
import dice from '../../images/dice.jpg';
import withSEO from '../../hocs/withSEO/withSEO';

/**
 * PageNotFound component
 *
 * @returns {ReactElement} <div>
 */
const PageNotFound = () => {
  return (
    <PageNotFoundWrapper className='container'>
      <div className='columns is-mobile is-centered is-vcentered is-multiline mx-2 mb-4'>
        <div className='column is-10-mobile is-10-tablet is-10-desktop is-10-widescreen is-10-fullhd'>
          <h2 className='is-size-1'>Page Not Found</h2>
          <img
            src={dice}
            width='112'
            height='28'
            alt='Logo'
            loading='lazy'
            decoding='async'
          />
        </div>
      </div>
    </PageNotFoundWrapper>
  );
};

export default withSEO(PageNotFound);
