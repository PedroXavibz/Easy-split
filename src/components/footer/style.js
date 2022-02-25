import styled from 'styled-components';

const ContainerFooter = styled.footer`
  background: ${props => props.theme.color.primary};
  height: 4.6rem;

  div {
    height: 100%;
    display: flex;
    align-items: center;

    h4 {
      font-family: ${props => props.theme.font.roboto};
      font-weight: 600;
      font-size: 1.7rem;
      color: #fff;
    }
  }
`;

export default ContainerFooter;
