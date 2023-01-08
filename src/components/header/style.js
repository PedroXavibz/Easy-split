import styled, { css } from 'styled-components';

const logo = css`
  img {
    height: 4rem;
  }
`;

const dropDownMenu = css`
  ul {
    position: absolute;
    top: 100%;
    rigth: 0%;

    transform: translateX(-20%);

    display: flex;
    flex-direction: column;

    background: #ffffff;
    box-shadow: -0.1rem 0 2.4rem -1.3rem rgba(74, 70, 74, 1);
    border-radius: 0.3rem;

    li {
      padding: 0.7rem;
      text-align: center;
      text-transform: uppercase;

      a {
        display: flex;
        align-items: center;
        position: relative;
        font-size: 1rem;

        &:after,
        &:before {
          content: '';
          width: 0%;
          height: 0.2rem;

          position: absolute;
          top: 100%;

          background: ${props => props.theme.color.secondary};
          border-radius: 1rem;

          transition: width 0.56s;
          transform: translateX(10);
        }

        :after {
          background: ${props => props.theme.color.ternary};
        }

        &:hover {
          color: ${props => props.theme.color.secondary};
          :after {
            width: 100%;
          }

          :before {
            z-index: 1;
            width: 75%;
          }
        }
      }
    }
  }
`;

const headerNav = css`
  ul {
    display: flex;

    li {
      list-style-type: none;
      list-style-position: 'inside';

      &.item-spacing {
        position: relative;
        margin-left: 4.1rem;
      }

      a {
        font-family: ${props => props.theme.font.roboto};
        font-weight: 700;
        font-size: 1.3rem;
        color: ${props => props.theme.font.color};

        transition: color 0.35s;

        &:hover {
          color: #ffffff;
        }
      }

      ${dropDownMenu}
    }
  }
`;

const ContainerHeader = styled.header`
  width: 100%;
  height: 4.6rem;

  background: ${props => props.theme.color.primary};

  div {
    height: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    ${logo}

    ${headerNav}
  }
`;

export default ContainerHeader;
