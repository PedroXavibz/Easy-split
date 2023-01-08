import styled from 'styled-components';

const ContainerAboutSection = styled.section`
  min-height: 80vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-family: ${props => props.theme.font.roboto};
    font-weight: 800;
    font-size: 2.8rem;
    color: ${props => props.theme.color.primary};
  }

  & > a {
    position: fixed;
    left: 90%;
    top: 84%;

    font-size: 3.1rem;
    color: ${props => props.theme.color.primary};

    cursor: pointer;
  }
`;

export default ContainerAboutSection;
