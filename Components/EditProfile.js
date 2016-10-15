
import React, { Component } from 'react';

import { Container, Content, List, ListItem, Icon, InputGroup, Input, Button, Text } from 'native-base';


export default class EditProfile extends Component { // eslint-disable-line
  constructor(props){
    super(props);
  }

  _UpdateProfile(){
    this.props.navigator.pop();
  }


  render() {
    return (
      <Container>
        <Content padder>
          <List>
            <ListItem>
              <InputGroup>
                <Icon name="ios-person"/>
                <Input placeholder="Name"/>
              </InputGroup>
            </ListItem>
            <ListItem>
              <InputGroup>
                <Input placeholder="Phone"/>
              </InputGroup>
            </ListItem>
            <ListItem>
              <InputGroup>
                <Icon name="ios-mail"/>
                <Input placeholder="Email"/>
              </InputGroup>
            </ListItem>
            <ListItem>
              <InputGroup>
                <Input placeholder="Facebook"/>
              </InputGroup>
            </ListItem>
            <ListItem>
              <InputGroup>
                <Input placeholder="Twitter"/>
              </InputGroup>
            </ListItem>
          </List>
          <Button onPress={this._UpdateProfile.bind(this)}>Back</Button>
        </Content>
      </Container>
    );
  }
}
