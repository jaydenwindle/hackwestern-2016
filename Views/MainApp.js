import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Container, Content, Tabs, Header, Title, Grid, Row, Button } from 'native-base';

import Timeline from '../Components/Timeline';
import Contacts from '../Components/Contacts';
// import Profile from '../Components/Profile';
import uplyncTheme from '../Themes/uplyncTheme';

import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

export default class MainApp extends Component {
  _addContact() {
      this.props.navigator.push({id: 2});
  }

    render() {
        return(
            <Container>
                <Header backgroundColor="#44486C">
                    <Title style={{color: '#FFF'}}>UpLink</Title>
                    <Button onPress={this._addContact.bind(this)} backgroundColor="#25C8AE">
                      <Text style={{color: "#FFF"}}>Add</Text>
                    </Button>
                </Header>
                <Content theme={ uplyncTheme } style={style.background}>
                    <Tabs backgroundColor="#6A6E91">
                        <Timeline tabLabel="Timeline"/>
                        <Contacts tabLabel="Contacts"/>
                    </Tabs>
                </Content>
            </Container>
        )
    }
}

const style = {
  button: {
    color: "#FFF"
  },
  background: {
    backgroundColor: "#989BAF"
  }
}
