import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components';
import { grey200 as greyColor } from 'material-ui/styles/colors'
import invariant from 'invariant'

import backupImg from '../assets/backup.png'
import { createShares } from '../utils/sharesUtil'
import { createSharesPDF } from '../utils/sharesPDFDocumentUtil'

import Section from '../components/Section'
import SectionIntro from '../components/SectionIntro'
import SectionTitle from '../components/SectionTitle'
import SectionContent from '../components/SectionContent'
import SecretConfigForm from './SecretConfigForm'
import { RaisedButton } from 'material-ui'

const StyledRaisedButton = styled(RaisedButton)`
  max-width: 300px;
`

const createAndDownloadSharesPDFShares = async (secretConfig) => {
  const { shareCount, threshold, phrase, name="" } = secretConfig
  invariant(typeof shareCount !== 'undefined' && shareCount !== null, "Expecting valid shareCount!")
  invariant(typeof threshold !== 'undefined' && threshold !== null, "Expecting valid threshold!")
  invariant(typeof phrase !== 'undefined' && phrase, "Expecting valid phrase!")
  const shareCountInt = parseInt(shareCount, 10)
  const thresholdInt = parseInt(threshold, 10)
  const shares = await createShares(name, phrase, shareCountInt, thresholdInt)
  const sharesPDF = createSharesPDF(shares, name, shareCountInt, thresholdInt)
  sharesPDF.download('SecretShares.pdf')
}

const mapStateToProps = (state, ownProps) => {
  return {
    secretConfig: state.form.secretConfig,
    secretConfigForm: state.form.forms.secretConfig.$form,
  }
}

class BackupSectionContainer extends React.Component {
  render() {
    var { secretConfig, secretConfigForm } = this.props
    return (
      <Section backgroundColor={greyColor}>
        <SectionTitle title="Backup" iconImg={backupImg}/>
        <SectionContent>
          <SectionIntro>
            To split your seed phrase into sharable secrets, use the form below. Give the secret a name so that you can easily know what the shares relate to. Then, enter your seed phrase and choose how many shares to split it into and how many of those are necessary for recovery.
          </SectionIntro>
          <SecretConfigForm />
          <StyledRaisedButton
            onClick={(event) => createAndDownloadSharesPDFShares(secretConfig)}
            disabled={!secretConfigForm.valid}
            primary
            label="Download Printable Shares"
          />
        </SectionContent>
      </Section>
    )
  }
}

const BackupSection = connect(
  mapStateToProps
)(BackupSectionContainer)

export default BackupSection
