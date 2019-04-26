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

export default class StatsShow extends Component {
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
                    backgroundColor: '#9377DE',
                    borderTopRightRadius: 0,
                    borderTopLeftRadius: 0,
                    borderRadius: 12,
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
                  />
                  <Text
                    style={{
                      fontSize: 70,
                      color: 'white',
                      paddingLeft: 20,
                      paddingTop: 5,
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 20,
                      color: 'white',
                      paddingLeft: 30,
                      paddingTop: 0,
                    }}
                  />
                  <Container
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      backgroundColor: 'transparent',
                      marginTop: 0,
                    }}
                  >
                    {/* <Card
                    style={{
                      width: 350,
                      height: 100,
                      marginLeft: 10,
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginTop: 20,
                      borderRadius: 4,
                    }}
                  >
                    <Content
                      style={{
                        marginLeft: 35,
                      }}
                    >
                      <CardItem>
                        <Text>Income</Text>
                      </CardItem>
                      <CardItem>
                        <Text
                          style={{
                            color: '#4B37FF',
                            fontSize: 25,
                          }}
                        >
                          $3,349
                        </Text>
                      </CardItem>
                    </Content>
                    <Content style={{}}>
                      <CardItem>
                        <Body>
                          <Text>Spent</Text>
                        </Body>
                      </CardItem>
                      <CardItem>
                        <Body>
                          <Text
                            style={{
                              color: '#4B37FF',
                              fontSize: 25,
                            }}
                          >
                            $2,190
                          </Text>
                        </Body>
                      </CardItem>
                    </Content>
                  </Card> */}
                  </Container>
                </Container>
                {/* <Container
                style={{
                  backgroundColor: 'transparent',
                }}
              >
                <Card
                  style={{
                    width: 350,
                    height: 100,
                    marginLeft: 36,
                    justifyContent: 'center',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginTop: 58,
                    borderRadius: 4,
                  }}
                >
                  <CardItem>
                    <Body>
                      <Text
                        style={{
                          fontSize: 20,
                        }}
                      >
                        Amount You Can Put Into Savings
                      </Text>
                    </Body>
                  </CardItem>
                  <CardItem>
                    <Body>
                      <Text
                        style={{
                          color: '#4B37FF',
                          fontSize: 25,
                        }}
                      >
                        $1,239
                      </Text>
                    </Body>
                  </CardItem>
                </Card>
              </Container> */}
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
                      color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
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
                    // style={graphStyle}
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
                      color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                      style: {
                        borderRadius: 16,
                      },
                    }}
                    style={{
                      marginVertical: 8,
                      borderRadius: 16,
                    }}
                  />
                  {/* <ProgressChart
                    data={[0.4, 0.6, 0.8]}
                    width={300}
                    height={220}
                    chartConfig={{
                      backgroundGradientFrom: '#fff',
                      backgroundGradientTo: '#fff',
                      decimalPlaces: 'none',
                      color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                      style: {
                        borderRadius: 16,
                      },
                    }}
                    style={{
                      marginVertical: 8,
                      borderRadius: 16,
                    }}
                  /> */}
                </Container>
              </Container>
            </Content>
          </Container>
        </ScrollView>
      </View>
    );
  }
}
