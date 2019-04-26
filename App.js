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
const persons = group.account;

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <Container style={{}}>
            <Header transparent>
              <Left>
                <Button transparent>
                  <Icon name='arrow-back' />
                </Button>
              </Left>
              <Body>
                <Title transparent />
              </Body>
            </Header>
            <Content>
              <Container
                style={{
                  height: 550,
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
                </Container>
              </Container>
            </Content>
          </Container>
        </ScrollView>
      </View>
    );
  }
}
