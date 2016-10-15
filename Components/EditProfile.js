
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
        <Content>
          <Grid style={style.gridWidth}>
            <Row style={style.form}>
            <ListItem>
              <InputGroup>
                <Icon name="ios-person"/>
                <Input placeholder="Name" style={style.input}/>
              </InputGroup>
            </ListItem>
            </Row>
            <Row style={style.form}>
            <ListItem>
              <InputGroup>
                <Icon name="ios-call"/>
                <Input placeholder="Phone" style={style.input}/>
              </InputGroup>
            </ListItem>
            </Row>
            <Row style={style.form}>
            <ListItem>
              <InputGroup>
                <Icon name="ios-mail"/>
                <Input placeholder="Email" style={style.input}/>
              </InputGroup>
            </ListItem>
            </Row>
            <Row style={style.form}>
            <ListItem>
              <InputGroup>
                <Icon name="logo-facebook"/>
                <Input placeholder="Facebook" style={style.input}/>
              </InputGroup>
            </ListItem>
            </Row>
            <Row style={style.form}>
            <ListItem>
              <InputGroup>
                <Icon name="logo-twitter"/>
                <Input placeholder="Twitter" style={style.input}/>
              </InputGroup>
            </ListItem>
            </Row>
          </Grid>
          <Button onPress={this._UpdateProfile.bind(this)} style={style.backButton}>Back</Button>
        </Content>
      </Container>
    );
  }
}

const style = {
  form: {
    margin: 30
  },
  input: {
    width: 300
  },
  backButton: {
    marginLeft: 325
  }
}
