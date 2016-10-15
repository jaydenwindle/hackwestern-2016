import React, { Component } from 'react';
import { Navigator, AppRegistry } from 'react-native';

import ContactSchema from '../Models/contact';

import MainApp from '../Views/MainApp';
import AddContact from '../Views/AddContact';
import EditProfile from '../Components/EditProfile';

database = []; // simple database for now

export default class uplync extends Component {

  _renderScene(route, navigator) {
        if (route.id === 1) {
          return <MainApp navigator = {navigator} />
        } else if (route.id === 2) {
          return <AddContact navigator = {navigator} />
        } else if (route.id === 3) {
          return <EditProfile navigator = {navigator} />
        }
  }

  render() {
    return (
      <Navigator
        initialRoute={{id: 1, }}
        renderScene={this._renderScene} />
    );
  }
}



AppRegistry.registerComponent('uplync', () => uplync);
