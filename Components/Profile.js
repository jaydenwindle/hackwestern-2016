
import React, { Component } from 'react';

import { Container, Content, List, ListItem, Icon, Text, Button, Grid, Row } from 'native-base';


export default class Profile extends Component { // eslint-disable-line
  constructor(props){
    super(props);
    this._EditProfile=this._EditProfile.bind(this);
  }

  _EditProfile(){
      this.props.navigator.push({id: 3});
  }

  render() {
    return (
      <Container>
        <Content padder>
            <List>
            <Row style={style.form}>
            <Icon name="ios-person"/>
              <ListItem>
                <Text>John Doe</Text>
              </ListItem>
              </Row>
              <Row style={style.form}>
              <Icon name="ios-call"/>
              <ListItem>
                <Text>964-222-1112</Text>
              </ListItem>
              </Row>
              <Row style={style.form}>
              <Icon name="ios-mail"/>
              <ListItem>
                <Text>johndoe@gmail.com</Text>
              </ListItem>
              </Row>
              <Row style={style.form}>
              <Icon name="logo-facebook"/>
              <ListItem>
                <Text>facebook.com/john.doe</Text>
              </ListItem>
              </Row>
              <Row style={style.form}>
              <ListItem>
                <Text>@johnDoe</Text>
              </ListItem>
              </Row>

            </List>
            <Button onPress={this._EditProfile}>Edit Profile</Button>
        </Content>
      </Container>
    );
  }
}

const style = {
  form: {
    margin: 20
  }
}
