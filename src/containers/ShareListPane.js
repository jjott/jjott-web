import React from 'react'
import { connect } from 'react-redux'
import { clearShares } from '../actions'
import styled from 'styled-components';
import media from '../utils/styledMediaQueries'

import ShareList from '../components/ShareList'
import PaneNullStateP from '../components/PaneNullStateP'
import RaisedButton from 'material-ui/RaisedButton'
import RestorePaneTitle from '../components/RestorePaneTitle'

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  width: 350px;
  margin-right: 40px;
  ${media.tabletAndDown`
    width: 450px;
    margin-bottom: 40px;
  `}
  ${media.phoneAndDown`
    width: 90%;
  `}
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
`;

const Button = ({ shouldShow, onClick }) => {
  if (shouldShow) {
    return (
      <ButtonContainer>
        <RaisedButton
          onClick={onClick}
          style={{
          }}
          label="Start Over"
        />
      </ButtonContainer>
    )
  }
  return null;
}

const mapStateToProps = (state, ownProps) => {
  return {
    shares: state.shares
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(clearShares())
    }
  }
}

const ShareListPaneContainer = ({shares, onClick}) => (
    <Container>
      <RestorePaneTitle>
        Scanned Shares
      </RestorePaneTitle>
      {shares.length > 0 ? (
        <ShareList shares={shares}/>
      ) : (
        <PaneNullStateP>
          No shares scanned yet
        </PaneNullStateP>
      )}
      <Button
        shouldShow={shares.length > 0}
        onClick={onClick}
      />
    </Container>
);

const ShareListPane = connect(
  mapStateToProps,
  mapDispatchToProps
)(ShareListPaneContainer)

export default ShareListPane
