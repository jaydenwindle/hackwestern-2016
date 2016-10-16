import React, { Component } from 'react';
import { ListView } from 'react-native';

import { Container, Content, Text} from 'native-base';

import ContactCard from './ContactCard';
import TimelineCard from './TimelineCard';

var contact = require('../Models/contact.js');

export default class Timeline extends Component {

 constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    let con = contact.db.objects("Contact");
    this.state = {
      dataSource: ds.cloneWithRows(con),
      datas: [
        {
          name: 'Tim',
          phone_number: 200,
          fb_account: 'tim.drake@yours.ca',
          date: '20161002'
        },
        {
          name: 'Drake',
          phone_number: 300,
          fb_account: 'drake.lee@yours.ca',
          date: '20151015'
        },
        {
          name: 'Tom',
          phone_number: 800,
          fb_account: 'tome.jerry@yours.ca',
          date: '20160921'
        }
      ]
    };
    console.log(this.state.dataSource);
    this._renderTimelineCard=this._renderTimelineCard.bind(this);
  }

  _renderContactCard(rowData, rowId) {
    return (
      <ContactCard key={rowId} source={rowData.img} name={rowData.name} description={rowData.desc} lastInt={rowData.lastContact.toDateString()}></ContactCard>
    )
  }

  _renderTimelineCard(){
    var timecards = [];
    var names =['Tim', 'Drake', 'Tom'];
    var phone_numbers=['(416) 556 9986','(647) 557 7878','(289) 556 8897'];
    var fb_accounts=['tim.drake@yours.ca', 'drake.lee@yours.ca', 'tom.jerry@yours.ca'];
    var dates=['Mon Oct 5 2016', 'Tue Sept 27 2016', 'Wed Sept 28 2016'];
    timecards.push(<TimelineCard key={0} name={names[0]} phone_number={phone_numbers[0]}
      fb_account={fb_accounts[0]} date={dates[0]}/>);
    timecards.push(<TimelineCard key={1} name={names[1]} phone_number={phone_numbers[1]}
      fb_account={fb_accounts[1]} date={dates[1]}/>);
    timecards.push(<TimelineCard key={2} name={names[2]} phone_number={phone_numbers[2]}
      fb_account={fb_accounts[2]} date={dates[2]}/>);
    return timecards;

    // return (this.state.datas.map((element)=>{
    //   <TimelineCard name={element.name} phone_number={element.phone_number} lastContacted={element.date}
    //   fb_account={element.fb_account}/>}))
  }

  render() {
    return (
      <Container>
        <Content padder>
          {this._renderTimelineCard()}
        </Content>
      </Container>
    );
  }
}
