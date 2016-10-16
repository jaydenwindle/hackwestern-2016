import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import { Container, Content, Tabs, Header, Title, Grid, Row, Button, Thumbnail } from 'native-base';

import Timeline from '../Components/Timeline';
import Contacts from '../Components/Contacts';
import App from '../app/App';
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
                    <View style={style.flexRow}>
                    <Button onPress={this._addContact.bind(this)} backgroundColor="#25C8AE" style={style.addBtn}>
                      <Text style={{color: "#FFF"}}>Add</Text>
                    </Button>
                      <Image style = {style.navLogo} source={require('../img/logo.png')} />
                    </View>
                </Header>
                <Content theme={ uplyncTheme } style={style.background}>
                    <Tabs backgroundColor="#6A6E91">
                        <Timeline tabLabel="Timeline"/>
                        <Contacts tabLabel="Contacts"/>
                    </Tabs>
                    <App/>
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
  },
  navLogo: {
    width: 100,
    height: 40,
    alignSelf: 'flex-end',
    marginLeft: 75
  },
  addBtn: {
    alignSelf: 'flex-start',
    marginLeft: -120
  },
  flexRow: {
    flexDirection: 'row',
  }
}
