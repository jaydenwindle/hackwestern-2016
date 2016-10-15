/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
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


import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Container, Content, Tabs, Header, Title } from 'native-base';

import Timeline from '../Components/Timeline';
import Contacts from '../Components/Contacts';

import uplyncTheme from '../Themes/uplyncTheme';

export default class uplync extends Component {
  render() {
    return (
        <Container>
          <Header>
            <Title>Header</Title>
          </Header>
            <Content theme={ uplyncTheme }>
              <Tabs>
                  <Timeline tabLabel="Timeline"/>
                  <Contacts tabLabel="Contacts"/>
              </Tabs>
          </Content>
        </Container>
    );
  }
}

AppRegistry.registerComponent('uplync', () => uplync);
