import React from 'react'
import styled from 'styled-components';
import { pink400 as pinkColor, grey300 as greyColor } from 'material-ui/styles/colors'

import Section from '../components/Section'
import SectionIntro from '../components/SectionIntro'
import SectionTitle from '../components/SectionTitle'
import SectionContent from '../components/SectionContent'
import securityImg from '../assets/security.png'

const StyledA = styled.a`
  font-weight: 400;
  text-decoration: none;
  color: ${props => pinkColor}
`
const StyledP = styled.p`
  margin: 0 0 22px 0;
`
const StyledB = styled.b`
  font-weight: 400;
`

class SecuritySection extends React.Component {
  render() {
    return (
      <Section backgroundColor={greyColor}>
        <SectionTitle title="Security" iconImg={securityImg}/>
        <SectionContent>
          <SectionIntro>
            <StyledP>
              This tool is built free to use and using <StyledA href="https://github.com/jjott/jjott-web">open-source software</StyledA>. However, you should <StyledB>NEVER</StyledB> input your private keys or seed phrases into any online tool. This website is designed to work even when offline. <StyledB>Before using this be sure to disconnect your computer from the Internet or WiFi, and close the browser's tab after using it.</StyledB>
            </StyledP>
          </SectionIntro>
        </SectionContent>
      </Section>
    )
  }
}

export default SecuritySection
