import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { theme } from './CommonTheme';
import { Meta } from '../../components';
import Header from '../Header';
import MasterGlobalStyle from './GlobalStyles';

const StyledMaster = styled.div`
  background: ${props => props.theme.grey};
  color: ${props => props.theme.black};
`;

const InnerPage = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 1rem;
`;
 
class Master extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
          <StyledMaster>
            <Meta />
            <Header />
            <InnerPage>
              {this.props.children}
            </InnerPage>
        </StyledMaster>
        <MasterGlobalStyle />
      </ThemeProvider>
    )
  }
}

export default Master;
