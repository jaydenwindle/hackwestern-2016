import React, { Component } from 'react';
import { Text, Modal, View, TouchableHighlight, TextInput } from 'react-native';
import { Card, CardItem, Thumbnail, Grid, Row, Button, Container, Content, List, ListItem, Icon } from 'native-base';

export default class ContactCard extends Component {

  constructor(props) {
    super(props)
    this.state = {
      modalVisible: false,
      greeting: "Hey John! It's been a while. How are things?"
    }
  }

  render() {
    return(
      <Container>
        <Content>
          <Card style={style.card}>
            <CardItem onPress={() => {
                    this.setState({modalVisible: true})
                }}>
                <Thumbnail size={60} source={this.props.source} />
                <Text>{this.props.name}</Text>
                <Text note>{this.props.lastInt}</Text>
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
            <TextInput value={this.state.greeting}></TextInput>
            <Text style={{marginBottom: 10, alignSelf: 'center'}}>Reach out via:</Text>
            <Button onPress={() => {
              this.setState({modalVisible: !this.state.modalVisible})}
            } style={{marginBottom: 10, alignSelf: 'center'}}>
              <Icon name="ios-call"/>
              Text Message
            </Button>
            <Button onPress={() => {
              this.setState({modalVisible: !this.state.modalVisible})}}
              style={{marginBottom: 10, alignSelf: 'center'}}>
              <Icon name="ios-mail"/>
              Email
            </Button>
            <Button disabled onPress={() => {
              this.setState({modalVisible: !this.state.modalVisible})}}
              style={{marginBottom: 10, alignSelf: 'center'}}>
              <Icon name="logo-facebook"/>
              Facebook
            </Button>
            <Button disabled onPress={() => {
              this.setState({modalVisible: !this.state.modalVisible})}}
              style={{marginBottom: 10, alignSelf: 'center'}}>
              <Icon name="logo-twitter"/>
              Twitter
            </Button>
            <TouchableHighlight onPress={() => {
              this.setState({modalVisible: !this.state.modalVisible})}}
              style={{marginBottom: 10, alignSelf: 'center'}}>
              <Text>Back</Text>
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
