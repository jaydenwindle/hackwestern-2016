import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card, CardItem, Thumbnail } from 'native-base';

export default class ContactCard extends Component {
  render() {
    return(
      <Card>
        <CardItem>
            <Thumbnail size={80} source={this.props.source} />
            <Text>{this.props.text}</Text>
            <Text>{this.props.description}</Text>
        </CardItem>
      </Card>
    );
  }
}
