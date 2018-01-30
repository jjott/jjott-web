import React from 'react'
import styled from 'styled-components';
import { lightWhite as whiteColor } from 'material-ui/styles/colors'
import media from '../utils/styledMediaQueries'

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  background: ${whiteColor};
`;
const Inner = styled.div`
  margin: 20px 20px 20px 212px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  ${media.phoneAndDown`
    margin: 20px 20px 20px 20px;
    justify-content: center;
  `}
`;
const StyledH1 = styled.h1`
  margin: 0 0 0 0px;
  font-size: 2.2rem;
  font-weight: 400;
`
const StyledH2 = styled.h2`
  margin: 12px 0 0 0px;
  font-size: 1.2rem;
  font-weight: 400;
`

class HeaderSection extends React.Component {
  render() {
    return (
      <Container>
        <Inner>
          <StyledH1>jjott</StyledH1>
          <StyledH2>The best way to secure your crypto</StyledH2>
        </Inner>
      </Container>
    )
  }
}

export default HeaderSection
