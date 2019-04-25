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
            <Title transparent>Header</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right>
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
                Tue, April 22, 2019
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
                        $4,349
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
                          $3,345
                        </Text>
                      </Body>
                    </CardItem>
                  </Content>
                </Card>
              </Container>
            </Container>
          </Container>
        </Content>
      </Container>
    );
  }
}
