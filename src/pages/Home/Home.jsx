import Dices from '../../components/Dices';
import withSEO from '../../hocs/withSEO/withSEO';
import { HomeWrapper } from './styles';

/**
 * Home component
 *
 * @returns {ReactElement} <div>
 */
const Home = () => {
  return (
    <HomeWrapper>
      <Dices totalDices={6} />
    </HomeWrapper>
  );
};

export default withSEO(Home);
