import styled from 'styled-components';

const ContainerMain = styled.section`
  width: 100%;
  min-height: 100vh;

  display: flex;
  align-items: center;
  flex-direction: column;

  form {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;

    label {
      background: ${props => props.theme.color.secondary};
      padding: 0.83rem;

      font-family: ${props => props.theme.font.roboto};
      font-size: 1.4rem;
      font-weight: 800;
      letter-spacing: 0.07rem;
      color: #fff;

      border-radius: 0.3rem;

      cursor: pointer;

      transition: 0.35s ease-in;

      &:hover {
        box-shadow: 0 0 0.9rem 0 rgba(138, 136, 138, 1);
      }

      input {
        opacity: 0;
        width: 0.1px;
        height: 0.1px;
        position: absolute;
      }
    }

    button,
    span {
      display: flex;
      align-items: center;
      padding: 0.83rem;

      background: ${props => props.theme.color.primary};
      border: none;
      border-radius: 0.3rem;

      font-family: ${props => props.theme.font.roboto};
      font-size: 1.4rem;
      font-weight: 800;
      letter-spacing: 0.07rem;
      color: #fff;

      transition: 0.35s ease-in;

      opacity: 0.5;

      user-select: none;
      cursor: not-allowed;

      svg {
        margin-left: 0.3rem;
      }
    }

    button {
      opacity: 1;
      cursor: pointer;
      &:hover {
        box-shadow: 0 0 0.9rem 0 rgba(138, 136, 138, 1);
      }
    }
  }

  div {
    width: 75%;
    height: 30.5rem;
    padding: 1.2rem 0;
    overflow-y: auto;

    margin-top: 3.6rem;
    background: #ffffff;
    box-shadow: -0.1rem 0 2.4rem -1.3rem rgba(74, 70, 74, 1);

    border-radius: 0.5rem;
    text-align: center;

    h1 {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 4.8rem;
      font-family: ${props => props.theme.font.roboto};
      color: ${props => props.theme.color.primary};
    }
  }
`;

export const ContainerFiles = styled.ul`
  width: 100%;

  display: grid;
  grid-template-columns: auto auto;
  gap: 3rem;

  padding: 1.2rem;

  li {
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.7rem;

    border-radius: 0.5rem;
    background: ${props => props.theme.color.ternary};
    border: 0.2rem solid ${props => props.theme.font.color};

    font-family: ${props => props.theme.font.roboto};
    color: ${props => props.theme.font.color};
    font-size: 1.2rem;
    font-weight: 500;

    user-select: none;

    button {
      border: none;
      background: none;
      outline: none;

      cursor: pointer;
    }
  }
`;

export default ContainerMain;
