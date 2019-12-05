import React from 'react';
import {Image} from 'react-native';
import {
  Container,
  Content,
  View,
  Item,
  Input,
  Tabs,
  Tab,
  TabHeading,
  Text,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
  H3,
  Button,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import appStyle from '../Styles/app';
const styleComponent = appStyle.getStyle();

class SideBarComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
    };
  }

  render() {
    return (
      <Container>
        <Content>
          <View style={styleComponent.bloc1}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              {/* <View style={{width: '10%'}}>
                <Image
                  source={require('../../images/ic2.png')}
                  style={{height: 90, top: 30, left: -5, resizeMode: 'contain'}}
                />
              </View> */}
              <View style={{width: '100%', padding: 10}}>
                <Item style={{color: 'white', borderBottomColor: 'white'}}>
                  <Input
                    placeholderTextColor={'white'}
                    style={{color: 'white', fontSize: 14}}
                    placeholder="Adresse de collecte"
                  />
                </Item>
                <Item style={{color: 'white', borderBottomColor: 'white'}}>
                  <Input
                    style={{color: 'white', fontSize: 14}}
                    placeholderTextColor={'white'}
                    placeholder="Adresse de livraison"
                  />
                </Item>
                <Item style={{color: 'white', borderBottomColor: 'white'}}>
                  <Input
                    style={{color: 'white', fontSize: 14}}
                    placeholderTextColor={'white'}
                    placeholder="Que souhaitez-vous envoyer ?"
                  />
                </Item>
                <Item style={{color: 'white', borderBottomColor: 'white'}}>
                  <Input
                    style={{color: 'white', fontSize: 14}}
                    placeholderTextColor={'white'}
                    placeholder="Contact Telephonique"
                  />
                </Item>
                <View style={{marginTop: 20}}>
                  <Button full style={{backgroundColor: '#CC1D1C'}}>
                    <Text
                      style={{
                        color: '#fff',
                        textAlign: 'center',
                      }}>
                      Confirmer
                    </Text>
                  </Button>
                </View>
              </View>
              {/* <View style={{width: '10%'}}>
                <Image
                  source={require('../../images/ic1.png')}
                  style={{height: 50, top: 50, resizeMode: 'contain'}}
                />
              </View> */}
            </View>
          </View>
          <View style={{backgroundColor: '#FEDEB4'}}>
            <View>
              <Tabs>
                <Tab
                  heading={
                    <TabHeading style={{backgroundColor: '#CE190F'}}>
                      <Icon name="car" style={styleComponent.icon} />
                    </TabHeading>
                  }>
                  <View style={{backgroundColor: '#FEDEB4', height: 90}}>
                    <List>
                      <ListItem noIndent>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                          <View style={{width: '15%'}}>
                            <Icon
                              name="car"
                              style={{color: '#E53D39', fontSize: 22}}
                            />
                          </View>
                          <View style={{width: '60%', left: 20}}>
                            <Text style={{fontSize: 12, fontWeight: 'bold'}}>
                              Glacier Opera
                            </Text>
                            <Text style={{fontSize: 12}}>
                              7 min sans trafic
                            </Text>
                          </View>
                          <View
                            style={{
                              width: '30%',
                              alignItems: 'flex-end',
                              right: 10,
                            }}>
                            <Text
                              style={{
                                fontSize: 12,
                                color: '#25A46A',
                                fontWeight: 'bold',
                              }}>
                              7 min
                            </Text>
                            <Text style={{fontSize: 12}}> 5 km </Text>
                            <Text
                              style={{
                                fontSize: 14,
                                marginTop: 20,
                                fontWeight: 'bold',
                              }}>
                              2500 CFA
                            </Text>
                          </View>
                        </View>
                      </ListItem>
                    </List>
                  </View>
                </Tab>
                <Tab
                  heading={
                    <TabHeading style={{backgroundColor: '#CE190F'}}>
                      <Icon name="motorcycle" style={styleComponent.icon} />
                    </TabHeading>
                  }>
                  <View style={{backgroundColor: '#FEDEB4', height: 90}}>
                    <List>
                      <ListItem noIndent>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                          <View style={{width: '15%'}}>
                            <Icon
                              name="car"
                              style={{color: '#E53D39', fontSize: 22}}
                            />
                          </View>
                          <View style={{width: '60%', left: 20}}>
                            <Text style={{fontSize: 12, fontWeight: 'bold'}}>
                              Glacier Opera
                            </Text>
                            <Text style={{fontSize: 12}}>
                              7 min sans trafic
                            </Text>
                          </View>
                          <View
                            style={{
                              width: '30%',
                              alignItems: 'flex-end',
                              right: 10,
                            }}>
                            <Text
                              style={{
                                fontSize: 12,
                                color: '#25A46A',
                                fontWeight: 'bold',
                              }}>
                              7 min
                            </Text>
                            <Text style={{fontSize: 12}}> 5 km </Text>
                            <Text
                              style={{
                                fontSize: 14,
                                marginTop: 20,
                                fontWeight: 'bold',
                              }}>
                              2500 CFA
                            </Text>
                          </View>
                        </View>
                      </ListItem>
                    </List>
                  </View>
                </Tab>
                <Tab
                  heading={
                    <TabHeading style={{backgroundColor: '#CE190F'}}>
                      <Icon name="bicycle" style={styleComponent.icon} />
                    </TabHeading>
                  }>
                  <View style={{backgroundColor: '#FEDEB4', height: 90}}>
                    <List>
                      <ListItem noIndent>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                          <View style={{width: '15%'}}>
                            <Icon
                              name="car"
                              style={{color: '#E53D39', fontSize: 22}}
                            />
                          </View>
                          <View style={{width: '60%', left: 20}}>
                            <Text style={{fontSize: 12, fontWeight: 'bold'}}>
                              Glacier Opera
                            </Text>
                            <Text style={{fontSize: 12}}>
                              7 min sans trafic
                            </Text>
                          </View>
                          <View
                            style={{
                              width: '30%',
                              alignItems: 'flex-end',
                              right: 10,
                            }}>
                            <Text
                              style={{
                                fontSize: 12,
                                color: '#25A46A',
                                fontWeight: 'bold',
                              }}>
                              7 min
                            </Text>
                            <Text style={{fontSize: 12}}> 5 km </Text>
                            <Text
                              style={{
                                fontSize: 14,
                                marginTop: 20,
                                fontWeight: 'bold',
                              }}>
                              2500 CFA
                            </Text>
                          </View>
                        </View>
                      </ListItem>
                    </List>
                  </View>
                </Tab>
              </Tabs>
            </View>
          </View>
          <View style={{marginTop: 20}}>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 14,
                color: '#CE190F',
              }}>
              MES LIVRAISONS DU JOURS
            </Text>
            <View>
              <List>
                <ListItem noIndent>
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={{width: '15%'}}>
                      <Icon
                        name="car"
                        style={{color: '#CE190F', fontSize: 22}}
                      />
                    </View>
                    <View style={{width: '60%', left: 20}}>
                      <Text style={{fontSize: 12, fontWeight: 'bold'}}>
                        Glacier Opera
                      </Text>
                      <Text style={{fontSize: 12, color: '#51B689'}}>
                        livraison effectuée
                      </Text>
                    </View>
                    <View
                      style={{
                        width: '30%',
                        alignItems: 'flex-end',
                        right: 10,
                      }}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: 'bold',
                        }}>
                        2500 CFA
                      </Text>
                    </View>
                  </View>
                </ListItem>
                <ListItem noIndent>
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={{width: '15%'}}>
                      <Icon
                        name="motorcycle"
                        style={{color: '#CE190F', fontSize: 22}}
                      />
                    </View>
                    <View style={{width: '60%', left: 20}}>
                      <Text style={{fontSize: 12, fontWeight: 'bold'}}>
                        Glacier Opera
                      </Text>
                      <Text style={{fontSize: 12, color: '#FCD5A5'}}>
                        livraison en cours
                      </Text>
                    </View>
                    <View
                      style={{
                        width: '30%',
                        alignItems: 'flex-end',
                        right: 10,
                      }}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: 'bold',
                        }}>
                        2500 CFA
                      </Text>
                    </View>
                  </View>
                </ListItem>
                <ListItem noIndent>
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={{width: '15%'}}>
                      <Icon
                        name="car"
                        style={{color: '#CE190F', fontSize: 22}}
                      />
                    </View>
                    <View style={{width: '60%', left: 20}}>
                      <Text style={{fontSize: 12, fontWeight: 'bold'}}>
                        Glacier Opera
                      </Text>
                      <Text style={{fontSize: 12, color: '#F7959A'}}>
                        client contacté
                      </Text>
                    </View>
                    <View
                      style={{
                        width: '30%',
                        alignItems: 'flex-end',
                        right: 10,
                      }}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: 'bold',
                        }}>
                        2500 CFA
                      </Text>
                    </View>
                  </View>
                </ListItem>
                <ListItem noIndent>
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={{width: '15%'}}>
                      <Icon
                        name="bicycle"
                        style={{color: '#CE190F', fontSize: 22}}
                      />
                    </View>
                    <View style={{width: '60%', left: 20}}>
                      <Text style={{fontSize: 12, fontWeight: 'bold'}}>
                        Glacier Opera
                      </Text>
                      <Text style={{fontSize: 12, color: '#FCC785'}}>
                        livraison en cours
                      </Text>
                    </View>
                    <View
                      style={{
                        width: '30%',
                        alignItems: 'flex-end',
                        right: 10,
                      }}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: 'bold',
                        }}>
                        2500 CFA
                      </Text>
                    </View>
                  </View>
                </ListItem>
              </List>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {};
};
export default connect(mapStateToProps)(SideBarComponent);
