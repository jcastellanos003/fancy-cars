import App from 'next/app';
import { ThemeProvider } from 'styled-components';

import { Master, Meta, Header, InnerPage } from '../components';
import { theme, MasterGlobalStyle } from '../theme';
import { StateProvider } from '../state';
import { vehicleReducer } from '../state/store';

class FancyCarsApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    const initialState = {
      vehicle: {
        selected: {}
      }
    };
    const mainReducer = (state, action) => ({
        vehicle: vehicleReducer(state.vehicle, action)
    });

    return (
      <ThemeProvider theme={theme}>
        <Master>
          <Meta />
          <Header />

          <InnerPage>
            <StateProvider initialState={initialState} reducer={mainReducer}>
              <Component {...pageProps} />
            </StateProvider>
          </InnerPage>
        </Master>

        <MasterGlobalStyle />
      </ThemeProvider>
    );
  }
}

export default FancyCarsApp;
