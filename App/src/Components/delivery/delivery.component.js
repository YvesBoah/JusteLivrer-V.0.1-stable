import React from 'react';
import {Image, Alert, StatusBar, View, TouchableOpacity} from 'react-native';
import {
  Container,
  Content,
  Button,
  Text,
  Form,
  Item,
  Input,
  Label,
  Header,
  Left,
  Body,
  Right,
  Icon,
  Title,
  Footer,
  FooterTab,
} from 'native-base';
import {DeliveryComponentStyle} from './delivery.style';
import {connect} from 'react-redux';
import {AkilIcon} from '../../Shared/AkilModule';

const styleComponent = DeliveryComponentStyle.getStyle();
const logo = require('../../images/logo.png');

class DeliveryComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
    };
  }

  delivery() {
    this.props.navigation.navigate('recieve');
  }

  recevied() {
    this.props.navigation.navigate('main');
  }

  render() {
    return (
      <Container>
        <Header style={{backgroundColor: '#fff'}}>
          <StatusBar backgroundColor={'#CC1D1C'} barStyle="light-content" />
          <Body>
            <Image
              resizeMode={'contain'}
              style={{height: 40, width: 96}}
              source={require('../../images/logo.png')}
            />
          </Body>
          <Right>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Right>
        </Header>
        <Content style={{backgroundColor: '#F0F3F8'}}>
          <View style={{padding: 15}}>
            <Text>Livrer un collis</Text>
            <TouchableOpacity
              onPress={() => this.delivery()}
              style={{
                backgroundColor: '#fff',
                height: 200,
                borderRadius: 8,
                borderColor: '#DDE1E5',
                borderWidth: 1,
              }}>
              <Image
                resizeMode={'contain'}
                style={{height: 160, width: '100%'}}
                source={require('../../images/delivery.png')}
              />
              <Button
                onPress={() => this.delivery()}
                full
                style={{
                  borderBottomStartRadius: 8,
                  borderBottomEndRadius: 8,
                  backgroundColor: '#CC1D1C',
                }}>
                <Text
                  style={{
                    color: '#fff',
                    textAlign: 'center',
                    fontWeight: 'bold',
                  }}>
                  Livrer un collis
                </Text>
              </Button>
            </TouchableOpacity>
          </View>
          <View style={{padding: 15}}>
            <Text>Recevoir un colis</Text>
            <TouchableOpacity
              onPress={() => this.recevied()}
              style={{
                backgroundColor: '#fff',
                height: 200,
                borderRadius: 8,
                borderColor: '#DDE1E5',
                borderWidth: 1,
              }}>
              <Image
                resizeMode={'contain'}
                style={{height: 160, width: '100%'}}
                source={require('../../images/recieve.png')}
              />
              <Button
                onPress={() => this.recevied()}
                full
                style={{
                  borderBottomStartRadius: 8,
                  borderBottomEndRadius: 8,
                  backgroundColor: '#E33F3F',
                }}>
                <Text
                  style={{
                    color: '#fff',
                    textAlign: 'center',
                    fontWeight: 'bold',
                  }}>
                  Recevoir un colis
                </Text>
              </Button>
            </TouchableOpacity>
          </View>
        </Content>
        <Footer>
          <FooterTab style={{backgroundColor: '#E53D39'}}>
            <Button vertical>
              <Icon name="paper" style={{color: '#fff'}} />
              <Text style={{color: '#fff', fontWeight: 'bold'}}>Livrer</Text>
            </Button>
            <Button vertical>
              <Icon name="gift" style={{color: '#fff'}} />
              <Text style={{color: '#fff', fontWeight: 'bold'}}>
                Se faire Livrer
              </Text>
            </Button>
            <Button vertical>
              <Icon name="person" style={{color: '#fff'}} />
              <Text style={{color: '#fff', fontWeight: 'bold'}}>Compte</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
const mapStateToProps = state => {
  return {};
};
export default connect(mapStateToProps)(DeliveryComponent);
