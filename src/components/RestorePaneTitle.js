import React from 'react'
import styled from 'styled-components';
import { green400 as greenColor, grey600 as greyColor } from 'material-ui/styles/colors'

const Title = styled.h1`
  font-size: 0.9rem;
  font-weight: 300;
  text-align: left;
  color: ${greyColor};
  margin: 10px 0 3px 0;
`;

const Container = styled.div`
  width: 100%;
  border-bottom: 1px solid ${greenColor};
  margin-bottom: 10px;
`;

const RestorePaneTitle = ({children}) => (
    <Container>
      <Title>{children}</Title>
    </Container>
);

export default RestorePaneTitle
