import React, { Component } from 'react';
import { Text, Modal, View, TouchableHighlight } from 'react-native';
import { Card, CardItem, Thumbnail, Grid, Row, Button } from 'native-base';

export default class ContactCard extends Component {

  constructor(props) {
    super(props)
    this.state = {
      modalVisible: false
    }
  }


  render() {
    return(
      <View>
      <Card>
        <CardItem>
            <Thumbnail size={80} source={this.props.source} />
            <Grid>
              <Row>
                <Text style={style.name}>{this.props.name}</Text>
                <Text style={style.description}>{`"${this.props.description}"`}</Text>
              </Row>
              <Row>
                <Text style={style.lastMet}>Last interaction: Christmas</Text>
              </Row>
              <Row>
                <Button style = {style.connectButton} small={true} rounded={true} onPress = {() => {
                    this.setState({modalVisible: !this.state.modalVisible});
                }}>
                  Connect
                </Button>
              </Row>
            </Grid>
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
      </View>
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
