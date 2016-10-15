import React, { Component } from 'react';
var Form = require('react-native-form');

import { Container, Content, Text, TextInput, Switch, Slider, Picker } from 'native-base';

export default class AddContact extends Component { // eslint-disable-line

  render() {
    return (
      <Container>
        <Content padder>
            <Form ref="form">
            </Form>
        </Content>
      </Container>
    );
  }
}
