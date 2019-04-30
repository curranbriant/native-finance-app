import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import ByDay from '/Users/briancurran/personalProjects/nativeProjects/bankApp/Charts/byDay.js';
import ByWeek from '/Users/briancurran/personalProjects/nativeProjects/bankApp/Charts/byMonth.js';
import ByMonth from '/Users/briancurran/personalProjects/nativeProjects/bankApp/Charts/byWeek.js';
export default class StatsShow extends Component {
  render() {
    return (
      <Container>
        <Tabs locked={true}>
          <Tab heading='Stats by day'>
            <ByDay />
          </Tab>
          <Tab heading='Stats by week'>
            <ByMonth />
          </Tab>
          <Tab heading='Stats by month'>
            <ByWeek />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
