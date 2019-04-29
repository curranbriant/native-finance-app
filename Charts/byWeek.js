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
  ListItem,
  List,
  Tab,
  Tabs,
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

export default class ByWeek extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
        }}
      >
        <ScrollView>
          <Container style={{}}>
            <Content>
              <Container
                style={{
                  height: 550,
                  paddingBottom: 20,
                }}
              >
                <Container
                  style={{
                    marginLeft: 7,
                    marginTop: 70,
                    height: 500,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 30,
                      marginLeft: 20,
                      paddingRight: 10,
                      color: '#9377DE',
                    }}
                  >
                    Stats
                    <Text
                      style={{
                        fontSize: 13,
                        color: '#9377DE',
                      }}
                    >
                      {'   '}since last pay period
                    </Text>
                  </Text>
                  <LineChart
                    data={{
                      labels: ['3/22', '3/29', '4/5', '4/12', '4/19'],
                      datasets: [
                        {
                          data: [4329, 3000, 2114, 1830, 1630, 859],
                        },
                      ],
                    }}
                    width={400}
                    height={220}
                    yAxisLabel={'$'}
                    fromZero={'True'}
                    withDots={'True'}
                    chartConfig={{
                      backgroundGradientFrom: '#fff',
                      backgroundGradientTo: '#fff',
                      decimalPlaces: 'none',
                      color: (opacity = 1) => `rgba(0,
                                0,
                                0, ${opacity})`,
                      style: {
                        borderRadius: 16,
                      },
                    }}
                    bezier
                    style={{
                      marginVertical: 8,
                      borderRadius: 16,
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 13,
                      color: '#9377DE',
                    }}
                  >
                    {'   '}money spent by week
                  </Text>
                  <BarChart
                    data={{
                      labels: ['3/22', '3/29', '4/5', '4/12', '4/19'],
                      datasets: [
                        {
                          data: [1329, 200, 800, 200, 359, 898],
                        },
                      ],
                    }}
                    width={350}
                    height={220}
                    yAxisLabel={'$'}
                    fromZero={'True'}
                    chartConfig={{
                      backgroundGradientFrom: '#fff',
                      backgroundGradientTo: '#fff',
                      decimalPlaces: 'none',
                      color: (opacity = 1) => `rgba(0,
                                0,
                                0, ${opacity})`,
                      style: {
                        borderRadius: 16,
                      },
                    }}
                    style={{
                      marginVertical: 8,
                      borderRadius: 16,
                    }}
                  />
                </Container>
              </Container>
            </Content>
          </Container>
        </ScrollView>
      </View>
    );
  }
}
