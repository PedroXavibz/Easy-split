import PropTypes from 'prop-types';
import ContainerText from './style';

const Text = ({ children }) => <ContainerText>{children}</ContainerText>;

Text.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Text;
