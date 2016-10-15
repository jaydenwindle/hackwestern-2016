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
        this._goBack();
    }

    _goBack() {
        this.props.navigator.pop();
    }

    render() {
        return(
            <Container>
                <Header>
                    <Button transparent onPress={this._goBack.bind(this)}>
                        <Icon name='ios-arrow-back' ></Icon>
                    </Button>
                    
                    <Title>Add Contact</Title>
                    
                    <Button transparent 
                    onPress={this._addContact.bind(this)}>
                        <Icon name='md-checkmark' ></Icon>
                    </Button>
                </Header>

                <Content theme={ uplyncTheme }>
                    <Form ref="form">
                        <TextInput type="TextInput" name="fname" placeholder="First Name"/>
                        <TextInput type="TextInput" name="lname" placeholder="Last Name"/>
                        <TextInput type="TextInput" name="email" placeholder="Email"/>
                    </Form>
                </Content>

            </Container>
        )
    }

}
