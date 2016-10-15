import React, { Component } from 'react';
import ReactNative, { TouchableHighlight } from 'react-native'
import { Card } from 'native-base';

export default class SlideCard extends Component {
  render() {
    <Card>
      <List>
        <ListItem>
          <TouchableHighlight>
            <Icon name="logo-facebook"/>
          </TouchableHighlight>
        </ListItem>
        <ListItem>
          <TouchableHighlight>
            <Icon name="logo-facebook"/>
          </TouchableHighlight>
        </ListItem>
        <ListItem>
          <TouchableHighlight>
            <Icon name="logo-facebook"/>
          </TouchableHighlight>
        </ListItem>
        <ListItem>
          <TouchableHighlight>
            <Icon name="logo-facebook"/>
          </TouchableHighlight>
        </ListItem>
      </List>
    </Card>
  }
}
