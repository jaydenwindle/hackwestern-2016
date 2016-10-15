
import React, { Component } from 'react';

import { Container, Content, List, ListItem, Icon, Text, Button } from 'native-base';


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
            <ListItem>
              <Icon name="ios-person"/>
              <Text>  Name</Text>
            </ListItem>
            <ListItem>
              <Text>  Phone</Text>
            </ListItem>
            <ListItem>
              <Icon name="ios-mail"/>
              <Text>  Email</Text>
            </ListItem>
            <ListItem>
              <Text>  Facebook</Text>
            </ListItem>
            <ListItem>
              <Text>  Twitter</Text>
            </ListItem>
          </List>
          <Button onPress={this._EditProfile}>Edit Profile</Button>
        </Content>
      </Container>
    );
  }
}
