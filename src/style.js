import styled from 'styled-components';

const Context = styled.div`
  width: 90%;
  max-width: 150rem;

  margin: 0 auto;

	@media (max-width: 768px) {
		& {
      width: 95%;
	}
`;

export default Context;
