import React, { Component } from 'react';
import { Text, Modal, View, TouchableHighlight } from 'react-native';
import { Card, CardItem, Thumbnail, Grid, Row, Button, Container, Content } from 'native-base';

export default class ContactCard extends Component {

  constructor(props) {
    super(props)
    this.state = {
      modalVisible: false
    }
  }

  render() {
    return(
      <Container>
        <Content>
          <Card style={style.card}>
            <CardItem>
                <Thumbnail size={60} source={this.props.source} />
                <Text>Instrumental Songs</Text>
                <Text note>Guitar</Text>

            </CardItem>
          </Card>
      <Modal
        animationType={"slide"}
        transparent={false}
        visible={this.state.modalVisible}
        onRequestClose={() => {alert("Modal has been closed.")}}
        >
       <View style={{marginTop: 22}}>
        <View>
          <Text>Hello World!</Text>
          <TouchableHighlight onPress={() => {
            this.setState({modalVisible: !this.state.modalVisible})
          }}>
            <Text>Hide Modal</Text>
          </TouchableHighlight>

        </View>
       </View>
      </Modal>
      </Content>
    </Container>
    );
  }
}

const style = {
  name: {
    alignSelf: 'flex-start',
    fontSize: 12,
    marginRight: 75
  },
  description: {
    alignSelf: 'flex-end',
    marginBottom: 10
  },
  lastMet: {
    alignSelf: 'flex-start',
    color: '#7e7e7e',
    fontSize: 10
  },
  connectButton: {
    marginLeft: 150,
    marginBottom: 45
  },
  onConnect: {
    height: 200,
    width: 300,
    backgroundColor: '#E6E6E6'
  }
}
