import React, { Component } from 'react';

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

import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

export default class MainApp extends Component {
  _onFabButtonClick() {
    this.props.navigator.push({id: 2});
  }

  render() {
    return(
      <Container>
        <Header>
          <Title>Header</Title>
        </Header>
          <Content theme={ uplyncTheme }>
            <Tabs>
                <Timeline tabLabel="Timeline"/>
                <Contacts tabLabel="Contacts"/>
            </Tabs>
            <ActionButton buttonColor="rgba(231,76,60,1)" onPress={this._onFabButtonClick.bind(this)} offsetY={0}>
            </ActionButton>
        </Content>
      </Container>
    )
  }
}
