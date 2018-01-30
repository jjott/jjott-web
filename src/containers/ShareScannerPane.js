import React, { Component } from 'react'
import secrets from 'secrets.js-grempe'
import styled from 'styled-components';
import { connect } from 'react-redux'
import { addShare, activateScanner } from '../actions'
import media from '../utils/styledMediaQueries'

import QrReader from 'react-qr-reader'
import RestorePaneTitle from '../components/RestorePaneTitle'
import { RaisedButton } from 'material-ui'

const StyledRaisedButton = styled(RaisedButton)`
  max-width: 300px;
`

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  width: 250px;
  margin-right: 40px;
  ${media.tabletAndDown`
    width: 450px;
    margin-bottom: 40px;
  `}
  ${media.phoneAndDown`
    width: 90%;
  `}
`;
const StyledQRReader = styled(QrReader)`
  width: 300px;
  ${media.tabletAndDown`
    width: 350px;
  `}
  ${media.phoneAndDown`
    width: 250px;
  `}
`

const mapStateToProps = (state, ownProps) => {
  return {
    scannerActive: state.scanner.active
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleShareScanned: (shareID, shareData) => {
      dispatch(addShare(shareID, shareData))
    },
    handleStartScanner: () => {
      dispatch(activateScanner())
    },
  }
}

class ShareScannerPaneContainer extends Component {

  constructor(props) {
    super(props);
    this.handleScan = this.handleScan.bind(this);
  }

  handleScan(scanResult) {
    try {
      var { id } = secrets.extractShareComponents(scanResult)
      this.props.handleShareScanned(id, scanResult)
    }
    catch (e) {
    }
  }

  handleScannerError(err){
    console.error(err)
  }

  render() {
    return (
      <Container>
        <RestorePaneTitle>
          Scan a Share
        </RestorePaneTitle>
        {this.props.scannerActive
          ? <StyledQRReader
              delay={300}
              onError={this.handleScannerError}
              onScan={this.handleScan}
              style={{ width: '100%' }}
          />
          : <StyledRaisedButton
              onClick={(event) => this.props.handleStartScanner()}
              primary
              label="Start Scanner"
            />
        }
      </Container>
    )
  }
}

const ShareScannerPane = connect(
  mapStateToProps,
  mapDispatchToProps
)(ShareScannerPaneContainer)

export default ShareScannerPane
