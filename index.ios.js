/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Container, Content, Tabs, Header, Title } from 'native-base';

export default class uplync extends Component {
  render() {
    return (
        <Container>
          <Header>
            <Title>Header</Title>
          </Header>
            <Content>
              <Tabs>
                  <Text tabLabel="Hello1">Hello world</Text>
                  <Text tabLabel="Hello2">Hello world</Text>
              </Tabs>
          </Content>
        </Container>
    );
  }
}

AppRegistry.registerComponent('uplync', () => uplync);
