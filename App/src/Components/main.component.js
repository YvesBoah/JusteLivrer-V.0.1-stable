import React from 'react';
import {Alert, Dimensions} from 'react-native';
import {MainComponentStyle} from './main.style';
import {connect} from 'react-redux';
import {Container, Content, Fab, Icon, View} from 'native-base';
import MapView from 'react-native-maps';
import {MapStyle} from '../Shared/Styles/map.style';

const styleComponent = MainComponentStyle.getStyle();
const {width, height} = Dimensions.get('window');

class MainComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      load: false,
      latitude: 5.3462453,
      longitude: -3.9795282,
    };
  }

  componentDidMount() {
    this.props.navigation.openDrawer();
  }

  render() {
    return (
      <Container>
        <Content>
          <View style={{height}}>
            <Fab
              style={{
                zIndex: 1,
                backgroundColor: '#FD9302',
              }}
              direction="up"
              containerStyle={{}}
              position="topLeft"
              onPress={() => this.props.navigation.openDrawer()}>
              <Icon name="menu" style={{fontWeight: 'bold'}} />
            </Fab>
            <Fab
              style={{
                zIndex: 1,
                backgroundColor: '#FD9302',
                bottom: 20,
              }}
              direction="up"
              containerStyle={{}}
              position="bottomRight">
              <Icon name="mail" style={{fontWeight: 'bold'}} />
            </Fab>
            <MapView.Animated
              ref={el => {
                this.animatedMap = el;
              }}
              style={styleComponent.map}
              region={{
                latitude: this.state.latitude,
                longitude: this.state.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
              customMapStyle={MapStyle}
              followsUserLocation={true}
              showsUserLocation={true}
              showsCompass={true}
              loadingEnabled={true}
              toolbarEnabled={true}
              zoomEnabled={true}
              rotateEnabled={true}></MapView.Animated>
          </View>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {delivery: state.delivery};
};
export default connect(mapStateToProps)(MainComponent);
