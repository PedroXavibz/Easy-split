import styled, { keyframes } from 'styled-components';

const move = props => keyframes`
  0% {
    transform: translateX(${props.x}rem) translateY(${props.y}rem) scale(1.25);
  }
  5% {
    transform: translateX(${props.x}rem) translateY(${props.y}rem) scale(1.75);
  }
  50% {
    transform: translateX(${props.x}rem) translateY(${props.y}rem) scale(.25);
  }
  55% {
    transform: translateX(${props.x}rem) translateY(${props.y}rem) scale(1);
  }
`;

export const Wrapper = styled.div`
  position: relative;
  text-align: center;
  width: 2rem;

  span {
    font-size: 1.1rem;
    font-weight: 900;
  }

  div {
    position: absolute;

    top: 10%;
    left: 10%;

    width: 0.5rem;
    height: 0.5rem;

    transform: translateX(-50%) translateY(-50%);
  }
`;

export const Ball = styled.span`
  position: absolute;
  top: ${props => `${props.size / 2}rem`};
  left: ${props => `${props.size / 2}rem`};

  width: ${props => `${props.size}rem`};
  height: ${props => `${props.size}rem`};

  background: ${props => props.theme.color.primary};
  border-radius: 50%;
  transform: translateX(${props => `${props.x}rem`}) translateY(${props => `${props.y}rem`});

  animation: ${props => move(props)} 2.5s cubic-bezier(0.075, 0.82, 0.165, 1) infinite;
  animation-delay: ${props => props.index * 0.2}s;
`;
