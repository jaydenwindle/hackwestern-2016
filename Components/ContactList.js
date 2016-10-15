import React, { Component } from 'react';

import { Container, Content, Text } from 'native-base';

export default class Contacts extends Component { // eslint-disable-line
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
            renderRow={this.renderRow.bind(this);}>
            </ListView>
        );
    }
}
