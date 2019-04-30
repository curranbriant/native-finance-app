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

export default class ByDay extends Component {
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
                  <ScrollView>
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
                        labels: [
                          '3/22',
                          '3/24',
                          '3/25',
                          '3/26',
                          '3/27',
                          '3/28',
                          '3/29',
                        ],
                        datasets: [
                          {
                            data: [141, 83, 35, 87, 45, 101],
                          },
                        ],
                      }}
                      width={350}
                      height={220}
                      yAxisLabel={'$'}
                      fromZero={'True'}
                      withDots={false}
                      withInnerLines={false}
                      withOuterLines={false}
                      chartConfig={{
                        backgroundGradientFrom: '#fff',
                        backgroundGradientTo: '#fff',
                        decimalPlaces: 'none',

                        strokeWidth: 5,
                        color: (opacity = 1) => `rgba(0,
                                0,
                                0, ${opacity})`,
                        style: {
                          borderRadius: 16,
                        },
                      }}
                      bezier
                      withOuterLines={'False'}
                      style={{
                        marginVertical: 3,
                        borderRadius: 16,
                      }}
                    />
                    <BarChart
                      data={{
                        labels: [
                          '3/22',
                          '3/24',
                          '3/25',
                          '3/26',
                          '3/27',
                          '3/28',
                          '3/29',
                        ],
                        datasets: [
                          {
                            data: [141, 83, 35, 87, 45, 101],
                          },
                        ],
                      }}
                      width={350}
                      height={220}
                      yAxisLabel={'$'}
                      fromZero={'True'}
                      withInnerLines={false}
                      withOuterLines={false}
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
                        marginVertical: 3,
                        borderRadius: 16,
                      }}
                    />
                    <PieChart
                      data={[
                        {
                          name: '3/22',
                          population: 141,
                          color: 'rgba(131, 167, 234, 1)',
                          legendFontColor: '#7F7F7F',
                          legendFontSize: 15,
                        },
                        {
                          name: '3/23',
                          population: 83,
                          color: '#F00',
                          legendFontColor: '#7F7F7F',
                          legendFontSize: 15,
                        },
                        {
                          name: '3/24',
                          population: 35,
                          color: 'red',
                          legendFontColor: '#7F7F7F',
                          legendFontSize: 15,
                        },
                        {
                          name: '3/25',
                          population: 84,
                          color: '#000',
                          legendFontColor: '#7F7F7F',
                          legendFontSize: 15,
                        },
                        {
                          name: '3/26',
                          population: 45,
                          color: 'rgb(0, 0, 255)',
                          legendFontColor: '#7F7F7F',
                          legendFontSize: 15,
                        },
                      ]}
                      width={350}
                      height={220}
                      yAxisLabel={'$'}
                      fromZero={'True'}
                      backgroundColor={'transparent'}
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
                      accessor='population'
                      style={{
                        borderRadius: 16,
                        marginLeft: 30,
                      }}
                    />
                  </ScrollView>
                </Container>
              </Container>
            </Content>
          </Container>
        </ScrollView>
      </View>
    );
  }
}
