import React from 'react';
import {Image, Alert, StatusBar, View} from 'react-native';
import {
  Container,
  Content,
  Button,
  Text,
  Form,
  Item,
  Input,
  Label,
} from 'native-base';
import {AuthComponentStyle} from './auth.style';
import {connect} from 'react-redux';

const styleComponent = AuthComponentStyle.getStyle();
const logo = require('../../images/logo.png');

class AuthComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
    };
  }

  validate() {
    if (this.state.email === 'deliver' && this.state.password === 'deliver') {
      this.props.navigation.navigate('app');
    } else {
      alert('email ou mot de passe incorrect');
    }
  }

  render() {
    return (
      <Container>
        <StatusBar backgroundColor={'#CC1D1C'} barStyle="light-content" />
        <Content style={{backgroundColor: '#E33F3F'}}>
          <View style={{alignItems: 'center'}}>
            <Image
              resizeMode={'contain'}
              style={{height: 80, width: 192, marginTop: 100}}
              source={logo}
            />
          </View>
          <View style={{padding: 20}}>
            <Form>
              <Item
                floatingLabel
                style={{borderBottomColor: '#fff', borderBottomWidth: 2}}>
                <Label style={{color: '#fff'}}>Email</Label>
                <Input
                  value={this.state.email}
                  onChangeText={val => this.setState({email: val})}
                />
              </Item>
              <Item
                floatingLabel
                style={{borderBottomColor: '#fff', borderBottomWidth: 2}}>
                <Label style={{color: '#fff'}}>Mot de passe</Label>
                <Input
                  value={this.state.password}
                  secureTextEntry={true}
                  onChangeText={val => this.setState({password: val})}
                />
              </Item>
            </Form>
          </View>
          <View style={{padding: 20}}>
            <Button
              onPress={() => this.validate()}
              full
              style={{backgroundColor: '#CC1D1C'}}>
              <Text style={{color: '#fff', textAlign: 'center'}}>
                Connexion
              </Text>
            </Button>
          </View>
          <View style={{padding: 20}}>
            <Button full transparent>
              <Text
                uppercase={false}
                style={{color: '#F7C6C5', textAlign: 'center'}}>
                Creer un nouveau compte
              </Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}
const mapStateToProps = state => {
  return {};
};
export default connect(mapStateToProps)(AuthComponent);
