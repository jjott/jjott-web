import styled from 'styled-components';
import media from '../utils/styledMediaQueries'

const SectionIntro = styled.div`
  font-size: 1.1rem;
  font-weight: 300;
  width: 70%;
  margin-bottom: 20px;
  margin-top: 20px;
  line-height: 1.5rem;
  ${media.tabletAndDown`
    width: inherit;
    padding-right: 100px;
  `}
  ${media.phoneAndDown`
    padding-right: 10px;
  `}

`;

export default SectionIntro
