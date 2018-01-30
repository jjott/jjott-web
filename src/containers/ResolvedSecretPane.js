import React from 'react'
import { connect } from 'react-redux'
import shareableSeed from 'shareable-seed'
import _ from 'lodash'
import styled from 'styled-components';
import media from '../utils/styledMediaQueries'

import RestorePaneTitle from '../components/RestorePaneTitle'
import PaneNullStateP from '../components/PaneNullStateP'

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  width: 350px;
  ${media.tabletAndDown`
    width: 450px;
  `}
  ${media.phoneAndDown`
    width: 90%;
  `}
`;

const getResultFromShares = (shares) => {
  const shareList = _.map(shares, (share) => {return share.shareData})
  const result = shareableSeed.shareListToMnemonic(shareList)
  if (shareList.length < 2 || !result) {
    return "Scan enough shares to reveal seed phrase"
  }
  return result
}

const mapStateToProps = (state, ownProps) => {
  return {
    shares: state.shares
  }
}

class ResolvedSecretPaneContainer extends React.Component {
  render() {
    var { shares } = this.props
    return (
      <Container>
        <RestorePaneTitle>
          Revealed Seed Phrase
        </RestorePaneTitle>
        {shares.length >= 2 ?
          getResultFromShares(shares)
        : (
          <PaneNullStateP>
            Scan enough shares to reveal seed phrase
          </PaneNullStateP>
        )}
      </Container>
    )
  }
}

const ResolvedSecretPane = connect(
  mapStateToProps
)(ResolvedSecretPaneContainer)

export default ResolvedSecretPane
