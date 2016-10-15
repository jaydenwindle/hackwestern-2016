import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card, CardItem, Thumbnail, Grid, Row } from 'native-base';

export default class ContactCard extends Component {
  render() {
    return(
      <Card style={style.card}>
        <CardItem>
            <Thumbnail size={80} source={this.props.source} />
            <Grid>
              <Row>
                <Text style={style.name}>{this.props.name}</Text>
              </Row>
              <Row>
                <Text style={style.lastMet}>Last interaction: {this.props.lastInt}</Text>
              </Row>
            </Grid>
        </CardItem>
      </Card>
    );
  }
}

const style = {
  name: {
    alignSelf: 'flex-start',
    fontSize: 14,
    marginBottom: 5,
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
    card: {
        marginBottom: 10,
    }
}
