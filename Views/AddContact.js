import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput, Slider, DatePickerIOS, Picker, PickerIOS, Switch
} from 'react-native';

import { Container, Content, Tabs, Header, Title} from 'native-base';
import Form from 'react-native-form'

import Timeline from '../Components/Timeline';
import Contacts from '../Components/Contacts';
import uplyncTheme from '../Themes/uplyncTheme';


export default class AddContact extends Component {
  render() {
    return(
      <Container>
        <Header>
          <Title>Add Contact</Title>
        </Header>
          <Content theme={ uplyncTheme }>
            <Form ref="form">
              <Switch type="Switch" name="mySwitch" />
              <Slider type="Slider" name="mySlider" />
            </Form>
          </Content>
      </Container>
    )
  }
}
