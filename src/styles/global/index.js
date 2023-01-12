import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
	*::before,
	*::after {
  		margin: 0;
  		padding: 0;
  		box-sizing: border-box;
	}

	:root {
		font-size: 62.5%;
  		scroll-behavior: smooth;
	}

	body {
		background: ${props => props.theme.color.background};
		line-height: 1.8;
	}

	ul{
		list-style: none;
		list-style-position: inside;
	}

	a,
	a:active{
		color: #ffff;
		text-decoration: none;
	}

	@media (max-width: 768px) {
		:root {
			font-size: 40%;
		}
}
`;

export default GlobalStyle;
