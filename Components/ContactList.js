import React, { Component } from 'react';
import {ListView} from 'react-native';

import ContactCard from './ContactCard';
import { Container, Content, Text} from 'native-base';

var contact = require('../Models/contact.js');

export default class ContactList extends Component { // eslint-disable-line
    _generateCards() {
      var cards = [];
      var img1 = require(`../img/face1.jpg`);
      var img2 = require(`../img/face2.jpg`);
      var img3 = require(`../img/face3.jpg`);
      var names = ['Guy Gartner ', 'Iris West', 'Martha Stewart'];
      var desc = ['Cool guy', 'Even cooler guy', 'The coolest guy'];
      cards.push(<ContactCard source={img1} name={names[0]} description={desc[0]} lastInt="2 months ago"/>);
      cards.push(<ContactCard source={img2} name={names[1]} description={desc[1]} lastInt="1 week ago"/>);
      cards.push(<ContactCard source={img3} name={names[2]} description={desc[2]} lastInt="2 hours ago"/>);
      return cards;
    }

     constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        let con = contact.db.objects("Contact");
        this.state = {
          dataSource: ds.cloneWithRows(con)
        };
        console.log(this.state.dataSource);
      }

      _renderContactCard(rowData, rowId) {
        return (
          <ContactCard key={rowId} source={rowData.img} name={rowData.name} description={rowData.desc} lastInt={rowData.lastContact.toDateString()}></ContactCard>
        )
      }


  render() {
    return (
      <Container>
        <Content padder>
          <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData, sectionId, rowId) => this._renderContactCard(rowData, rowId)}
          enableEmptySections={true}
          />
        </Content>
      </Container>
    );
  }

}
