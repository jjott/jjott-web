import React from 'react'
import styled from 'styled-components';
import media from '../utils/styledMediaQueries'

const Image = styled.img`
  width: 100px;
  margin-top: 20px;
  ${media.phoneAndDown`
    margin-top: 0px;
  `}
`;

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  margin: 0 10px 0px 0;
  flex: 0 0 180px;
  ${media.phoneAndDown`
    margin: 20px 0px 20px 0;
    flex: 0 0;
  `}
`;

const SectionTitle = ({ title, iconImg, color }) => (
    <Container>
      {iconImg ? <Image alt={title} src={iconImg}/> : null}
    </Container>
);

export default SectionTitle
