import React from 'react';
import {Provider} from 'react-redux';
import Store from '../App/src/Store/configureStore';
import AppContainer from './src/navigation';
navigator.geolocation = require('@react-native-community/geolocation');

type Props = {};
export default class AppComponent extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      load: false,
    };
  }

  render() {
    return (
      <Provider store={Store}>
        <AppContainer />
      </Provider>
    );
  }
}
