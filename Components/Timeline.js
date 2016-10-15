import React, { Component } from 'react';
import { ListView } from 'react-native';

import { Container, Content, Text} from 'native-base';

import ContactCard from './ContactCard';

var contact = require('../Models/contact.js');

export default class Timeline extends Component {


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
