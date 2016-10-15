import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Container, Content, Tabs, Header, Title, Grid, Row } from 'native-base';

import Timeline from '../Components/Timeline';
import Contacts from '../Components/Contacts';
import Profile from '../Components/Profile';
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
            <Grid>
              <Row style = {{height: 500}}>
                <Tabs>
                    <Timeline tabLabel="Timeline"/>
                    <Contacts tabLabel="Contacts"/>
                    <Profile tabLabel="Profile" navigator={this.props.navigator}/>
                </Tabs>
                <ActionButton buttonColor="rgba(231,76,60,1)" onPress={this._onFabButtonClick.bind(this)} offsetY={0}>
                </ActionButton>
              </Row>
            </Grid>
        </Content>
      </Container>
    )
  }
}
