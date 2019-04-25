import React, { Component } from 'react';
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

export default class HeaderExample extends Component {
  render() {
    return (
      <Container>
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
              height: 290,
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
                  fontSize: 20,
                  color: 'white',
                  paddingLeft: 30,
                  paddingTop: 0,
                }}
              >
                Thr, April 25, 2019
              </Text>
              <Container
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  backgroundColor: 'transparent',
                  marginTop: 85,
                }}
              >
                <Card
                  style={{
                    width: 350,
                    height: 100,
                    marginLeft: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingTop: 0,
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
                </Card>
              </Container>
            </Container>
          </Container>
        </Content>
        <Container
          style={{
            marginLeft: 7,
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
              labels: ['3/22', '3/26', '3/29', '4/2', '4/15'],
              datasets: [
                {
                  data: [3349, 2000, 2200, 1400, 1600, 1159],
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
        </Container>
      </Container>
    );
  }
}
