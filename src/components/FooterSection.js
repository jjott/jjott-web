import React from 'react'
import styled from 'styled-components';
import { grey400 as lightGreyColor, grey800 as darkGreyColor } from 'material-ui/styles/colors'
import media from '../utils/styledMediaQueries'

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  background: ${darkGreyColor};
`;
const Inner = styled.div`
  margin: 16px 16px 16px 212px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  ${media.phoneAndDown`
    margin: 16px;
    justify-content: center;
  `}
`;
const StyledSpan = styled.span`
  margin: 0 0 0 0px;
  font-size: 0.9rem;
  font-weight: 300;
  line-height: 1.3rem;
  color: ${lightGreyColor};
`
const StyledA = styled.a`
  font-weight: 400;
  text-decoration: none;
  color: ${lightGreyColor};
`

class FooterSection extends React.Component {
  render() {
    return (
      <Container>
        <Inner>
          <StyledSpan>Free to use under the MIT license &bull; Icons designed by <StyledA href="https://www.flaticon.com/authors/freepik"
>Freepik</StyledA>, <StyledA href="https://www.flaticon.com/authors/dave-gandy"
>Dave Gandy</StyledA>, <StyledA href="https://www.flaticon.com/authors/kiranshastry"
>Kiranshastry</StyledA> from <StyledA href="https://www.flaticon.com"
>flaticon</StyledA></StyledSpan>
        </Inner>
      </Container>
    )
  }
}

export default FooterSection
