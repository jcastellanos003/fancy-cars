import App from 'next/app';
import { ThemeProvider } from 'styled-components';

import { Master, Meta, Header, InnerPage } from '../components';
import { theme, MasterGlobalStyle } from '../theme';

class MyApp extends App {
  render() {
    const { Component } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <Master>
          <Meta />
          <Header />

          <InnerPage>
            <Component />
          </InnerPage>
        </Master>

        <MasterGlobalStyle />
      </ThemeProvider>
    );
  }
}

export default MyApp;
