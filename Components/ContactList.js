import React, { Component } from 'react';
import {ListView} from 'react-native';

import ContactSchema from '../Models/contact';
const Realm = require('realm');
let realm = new Realm({
    schema: [ContactSchema]
});

import { Container, Content, Text } from 'native-base';

export default class ContactList extends Component { // eslint-disable-line
    constructor(props) {
        super(props);
        let dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        });

        let data = realm.objects('Contact').sorted('name');

        this.state = {
            dataSource: dataSource.cloneWithRows(data),
            items: data,
        };
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(this.state.items),
        });
    }

    renderRow(item) {
        return(
            <Text>{this.getItemDepartmentName(item)}</Text>
        );
    }

    render() {
        return (
            <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderRow.bind(this)}>
            </ListView>
        );
    }
}
