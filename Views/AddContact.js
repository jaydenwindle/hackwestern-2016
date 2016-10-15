import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';

import { Container, Content, Tabs, Header, Title } from 'native-base';
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
              <TextInput type="TextInput" name="myTextInput" />
            </Form>
          </Content>
      </Container>
    )
  }
}
