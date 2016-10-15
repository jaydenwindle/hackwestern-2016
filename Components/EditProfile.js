
import React, { Component } from 'react';

import { Container, Content, List, ListItem, Icon, InputGroup, Input, Button, Text, Grid, Row } from 'native-base';


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
          <Grid>
            <Row style={style.form}>
            <ListItem>
              <InputGroup>
                <Icon name="ios-person"/>
                <Input placeholder="Name"/>
              </InputGroup>
            </ListItem>
            </Row>
            <Row style={style.form}>
            <ListItem>
              <InputGroup>
                <Input placeholder="Phone"/>
              </InputGroup>
            </ListItem>
            </Row>
            <Row style={style.form}>
            <ListItem>
              <InputGroup>
                <Icon name="ios-mail"/>
                <Input placeholder="Email"/>
              </InputGroup>
            </ListItem>
            </Row>
            <Row style={style.form}>
            <ListItem>
              <InputGroup>
                <Input placeholder="Facebook"/>
              </InputGroup>
            </ListItem>
            </Row>
            <Row style={style.form}>
            <ListItem>
              <InputGroup>
                <Input placeholder="Twitter"/>
              </InputGroup>
            </ListItem>
            </Row>
          </Grid>
          <Button onPress={this._UpdateProfile.bind(this)}>Back</Button>
        </Content>
      </Container>
    );
  }
}

const style = {
  form: {
    margin: 30
  }
}
