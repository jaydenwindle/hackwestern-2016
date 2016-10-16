import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet, Text,
  View,
  TextInput,
} from 'react-native';

import { Container, Content, Tabs, Header, Title, Button, Icon } from 'native-base';
import Form from 'react-native-form'

var contact = require('../Models/contact.js');

import Timeline from '../Components/Timeline';
import Contacts from '../Components/Contacts';
import uplyncTheme from '../Themes/uplyncTheme';

export default class AddContact extends Component {

    _addContact() {
        var data = this.refs.form.getValues();
        console.log(data);

        contact.add(data.fname + " " + data.lname, data.email, data.source);
        this._goBack();
    }

    _goBack() {
        this.props.navigator.pop();
    }

    render() {
        return(
            <Container>
                <Header backgroundColor="#44486C">
                    <Button transparent onPress={this._goBack.bind(this)}>
                        <Icon name='ios-arrow-back' ></Icon>
                    </Button>

                    <Title>Add Contact</Title>

                    <Button transparent
                    onPress={this._addContact.bind(this)}>
                        <Icon name='md-checkmark' ></Icon>
                    </Button>
                </Header>

                <Content theme={ uplyncTheme } style = {style.bcg}>
                    <Form ref="form">
                        <TextInput type="TextInput" name="fname" placeholder="First Name" placeholderTextColor= "#FFF" style={style.input}/>
                        <TextInput type="TextInput" name="lname" placeholder="Last Name" placeholderTextColor = "#FFF" style={style.input}/>
                        <TextInput type="TextInput" name="email" placeholder="Email" placeholderTextColor= "#FFF" style={style.input}/>
                    </Form>
                </Content>

            </Container>
        )
    }

}

const style = {
  bcg: {
    backgroundColor: "#6A6E91"
  },

  input: {
    color: "#FFFFFF",
  }
}
