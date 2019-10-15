import App from 'next/app';
import Master from '../containers/Master';

class MyApp extends App {
  render() {
    const { Component } = this.props;

    return (
        <Master>
          <Component />
        </Master>
    );
  }
}

export default MyApp;
