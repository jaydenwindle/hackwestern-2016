import React, { Component } from 'react';
import { Navigator } from 'react-native';

import ContactSchema from '../Models/contact';

// Database setup
const Realm = require('realm');
let realm = new Realm({
    schema: [ContactSchema]
});
realm.write(() => {
    let contacts = realm.objects('Contact');
    realm.delete(contacts);
});

import MainApp from '../Views/MainApp';
import AddContact from '../Views/AddContact';


export default class uplync extends Component {
  _renderScene(route, navigator) {
        if (route.id === 1) {
          return <MainApp navigator = {navigator} />
        } else if (route.id === 2) {
          return <AddContact navigator = {navigator} />
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
