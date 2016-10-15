import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';

import { Container, Content, Tabs, Header, Title, Button, Icon } from 'native-base';
import Form from 'react-native-form'

import Timeline from '../Components/Timeline';
import Contacts from '../Components/Contacts';
import uplyncTheme from '../Themes/uplyncTheme';


export default class AddContact extends Component {

    _addContact() {
        console.log(this.refs.form.getValues());
    }

    render() {
        return(
            <Container>
                <Header>
                    <Button transparent>
                        <Icon name='ios-arrow-back' />
                    </Button>
                    
                    <Title>Header</Title>
                    
                    <Button transparent>
                        <Icon name='ios-checkmark' />
                    </Button>
                </Header>
                <Content theme={ uplyncTheme }>
                    <Form ref="form">
                        <TextInput type="TextInput" name="fname" placeholder="First Name"/>
                        <TextInput type="TextInput" name="lname" placeholder="Last Name"/>
                        <TextInput type="TextInput" name="email" placeholder="Email"/>
                    </Form>
                    <Button block onPress={this._addContact.bind(this)}>Submit</Button>
                </Content>
            </Container>
        )
    }

}
