import React, { Component } from 'react';
import {ListView} from 'react-native';

import { Container, Content, Text} from 'native-base';

export default class ContactList extends Component { // eslint-disable-line
    _generateCards() {
      var cards = [];
      var img1 = require(`../img/face1.jpg`);
      var img2 = require(`../img/face2.jpg`);
      var img3 = require(`../img/face3.jpg`);
      var names = ['John James', 'Barry Allen', 'Clark Kent'];
      var desc = ['Cool guy', 'Even cooler guy', 'The coolest guy'];
      cards.push(<ContactCard source={img1} name={names[0]} description={desc[0]} />);
      cards.push(<ContactCard source={img2} name={names[1]} description={desc[1]} />);
      cards.push(<ContactCard source={img3} name={names[2]} description={desc[2]} />);
      return cards;
    }

    render() {
        return (
          <Container>
            <Content padder>
              {this._generateCards()}
            </Content>
          </Container>
        );
    }
}
