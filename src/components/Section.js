import styled from 'styled-components';
import media from '../utils/styledMediaQueries'

const Section = styled.div`
  padding: 1.3rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  background: ${props => props.backgroundColor};
  ${media.phoneAndDown`
    flex-flow: column nowrap;
  `}
`;

export default Section
