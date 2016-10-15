import React, { Component } from 'react';

import ContactList from './ContactList';
import { Container, Content, Text } from 'native-base';

export default class Contacts extends Component { // eslint-disable-line
  render() {
    return (
      <Container>
        <Content>
          <ContactList/>
        </Content>
      </Container>
    );
  }
}
