import React, { Component } from 'react';
import { AppRegistry, ScrollView, View } from 'react-native';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Content,
  Text,
  Card,
  CardItem,
} from 'native-base';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
import { Svg } from 'expo';
import { group } from '/Users/briancurran/personalProjects/nativeProjects/bankApp/seed.json';
import StatsShow from '/Users/briancurran/personalProjects/nativeProjects/bankApp/Screens/StatsShow.js';
const persons = group.account;

export default class AccountShow extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <Container style={{}}>
            <Content>
              <Container
                style={{
                  height: 225,
                  paddingBottom: 20,
                }}
              >
                <Container
                  style={{
                    backgroundColor: '#804fff',
                    borderTopRightRadius: 0,
                    borderTopLeftRadius: 0,
                    borderRadius: 20,
                    borderColor: '#E91E63',
                  }}
                >
                  <Text
                    style={{
                      fontSize: 25,
                      color: 'white',
                      paddingLeft: 30,
                      paddingTop: 30,
                    }}
                  >
                    My Balance
                  </Text>
                  <Text
                    style={{
                      fontSize: 70,
                      color: 'white',
                      paddingLeft: 20,
                      paddingTop: 5,
                    }}
                  >
                    $240,465
                  </Text>
                  <Text
                    style={{
                      fontSize: 15,
                      color: 'white',
                      marginLeft: 30,
                      paddingTop: 2,
                    }}
                  >
                    Thr, April 25, 2019
                  </Text>
                </Container>
              </Container>
              <StatsShow />
            </Content>
          </Container>
        </ScrollView>
      </View>
    );
  }
}
