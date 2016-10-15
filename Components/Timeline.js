import React, { Component } from 'react';
import { ListView } from 'react-native';

import { Container, Content, Text} from 'native-base';

import ContactCard from './ContactCard';

var data = [
    {
        img: require(`../img/face1.jpg`),
        name:'John James',
        desc: "cool guy",
    },
    {
        img: require(`../img/face2.jpg`),
        name:'Barry Allen',
        desc: "even cooler guy",
    },
    {
        img: require(`../img/face3.jpg`),
        name:'Clark Kent',
        desc: "the coolest guy",
    }
]

export default class Timeline extends Component {


 constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(data)
    };
    console.log(this.state.dataSource);
  }

  render() {
    return (
      <Container>
        <Content padder>
          <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <ContactCard source={rowData.img} name={rowData.name} description={rowData.desc}></ContactCard>}
          />
        </Content>
      </Container>
    );
  }
}
