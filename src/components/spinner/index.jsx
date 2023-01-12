import PropTypes from 'prop-types';
import { RiUploadLine, RiDownloadLine } from 'react-icons/ri';
import { Wrapper, Ball } from './style';

const renderBalls = () => {
  const balls = [];

  const amountOfBalls = 7;
  const angle = 360 / amountOfBalls;
  const size = 0.5;
  const offset = size * -1;
  const radius = 1;

  for (let i = 0; i < amountOfBalls; i++) {
    const y = Math.sin(angle * i * (Math.PI / 180)) * radius - offset;
    const x = Math.cos(angle * i * (Math.PI / 180)) * radius - offset;

    balls.push(<Ball key={i} index={i} size={size} x={x} y={y} />);
  }

  return balls;
};

const Spinner = ({ isUploading }) => (
  <Wrapper>
    {isUploading
      ? <RiUploadLine /> : <RiDownloadLine />}
    <div>
      {renderBalls()}
    </div>
  </Wrapper>
);

Spinner.defaultProps = {
  isUploading: false,
};

Spinner.propTypes = {
  isUploading: PropTypes.bool,
};

export default Spinner;
