import styled from 'styled-components';

const ContainerText = styled.p`
  width: 62%;
  margin: 4.8rem auto;
  padding: 2rem 5.8rem;

  background: ${props => props.theme.color.ternary};
  border-radius: 0.5rem;

  text-align: center;
  font-family: ${props => props.theme.font.roboto};
  font-weight: 400;
  font-size: 1.76rem;
  color: ${props => props.theme.font.color};

  span {
    color: ${props => props.theme.color.primary};
  }
`;

export default ContainerText;
