import React from 'react'
import styled from 'styled-components';
import { blue400 as blueColor, grey200 as greyColor } from 'material-ui/styles/colors'

import learnImg from '../assets/learn.png'
import Section from '../components/Section'
import SectionIntro from '../components/SectionIntro'
import SectionTitle from '../components/SectionTitle'
import SectionContent from '../components/SectionContent'

const StyledA = styled.a`
  font-weight: 400;
  text-decoration: none;
  color: ${props => blueColor}
`
const StyledP = styled.p`
  margin: 0 0 22px 0;
`
const StyledB = styled.b`
  font-weight: 400;
`

class LearnSection extends React.Component {
  render() {
    return (
      <Section backgroundColor={greyColor}>
        <SectionTitle title="Learn" iconImg={learnImg}/>
        <SectionContent>
          <SectionIntro>
            <StyledP>
              Owning Crypto-Currencies such as Bitcoin requires storing many numbers known as "Addresses" and "Private Keys" which represent our coins. It's risky to trust online wallets with these numbers because these are hacked all the time, and currency is stolen.
            </StyledP>
            <StyledP>
              Luckily, technologies (such as <StyledA href="https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki">BIP32</StyledA> and <StyledA href="https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki">BIP39</StyledA>) have been created to allow us to consolidate all of these numbers into a single mnemonic (referred to as <StyledB>"Seed Phrase"</StyledB>). Many online and hardware wallets create that seed phrase for us, but we still need to remember it and secure it. <StyledB>If a seed phrase is stolen or lost, all of your coins are gone.</StyledB>
            </StyledP>
            <StyledP>
              The best way to secure your <StyledB>"Seed Phrase"</StyledB> is by breaking it up into a number of <StyledB>Secret Shares</StyledB>. These shares can be printed and trusted with friends or family. Each share means nothing on its own, but when combined together, shares will reveal the <StyledB>"Seed Phrase"</StyledB>. Think of it as keys for a safe, one key alone can't open the safe, you need them all.
            </StyledP>
            <StyledP>
              <StyledA href="https://jjott.com">JJOTT.COM</StyledA> allows you to back-up your seed phrase into printable shares. Later on, use this tool to scan the shares and reveal the original seed phrase.
            </StyledP>
          </SectionIntro>
        </SectionContent>
      </Section>
    )
  }
}

export default LearnSection
