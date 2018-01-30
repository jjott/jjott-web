import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components';
import { grey300 as greyColor } from 'material-ui/styles/colors'

import Section from '../components/Section'
import SectionIntro from '../components/SectionIntro'
import SectionTitle from '../components/SectionTitle'
import SectionContent from '../components/SectionContent'
import ShareScannerPane from './ShareScannerPane'
import ShareListPane from './ShareListPane'
import ResolvedSecretPane from './ResolvedSecretPane'
import media from '../utils/styledMediaQueries'
import restoreImg from '../assets/restore.png'

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  width: 100%;
	${media.tabletAndDown`
    flex-flow: column nowrap;
  `}
`;

const mapStateToProps = (state, ownProps) => {
  return {
  }
}

class BackupSectionContainer extends React.Component {
  render() {
    return (
      <Section backgroundColor={greyColor}>
        <SectionTitle title="Restore" iconImg={restoreImg}/>
        <SectionContent>
          <SectionIntro>
            If you have previously created a shared secret here, use the scanner below to scan your shares and reveal your seed phrase.
          </SectionIntro>
          <Container>
            <ShareScannerPane />
            <ShareListPane />
            <ResolvedSecretPane />
          </Container>
        </SectionContent>
      </Section>
    )
  }
}

const BackupSection = connect(
  mapStateToProps
)(BackupSectionContainer)

export default BackupSection
