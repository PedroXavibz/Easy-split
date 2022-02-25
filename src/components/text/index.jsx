import parse from 'html-react-parser';
import ContainerText from './style';

const Text = ({ children, wordsToHighligth }) => {
  let textReplaced = children;

  wordsToHighligth.forEach(word => {
    textReplaced = textReplaced.replaceAll(word, match => `<span>${match}</span>`);
  });

  return <ContainerText>{parse(textReplaced)}</ContainerText>;
};

export default Text;
