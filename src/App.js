import React, { Component } from 'react'
import styled from 'styled-components';

import './App.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import HeaderSection from './components/HeaderSection'
import BackupSection from './containers/BackupSection'
import LearnSection from './components/LearnSection'
import SecuritySection from './components/SecuritySection'
import RestoreSection from './containers/RestoreSection'
import FooterSection from './components/FooterSection'

const MainContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-family: 'Roboto', sans-serif;
`

class App extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <MainContainer>
            <HeaderSection />
            <LearnSection />
            <SecuritySection />
            <BackupSection />
            <RestoreSection />
            <FooterSection />
        </MainContainer>
      </MuiThemeProvider>
    );
  }
}

export default App;
