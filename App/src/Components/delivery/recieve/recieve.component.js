import React from 'react';
import {Alert, Dimensions, Text} from 'react-native';
import {RecieveComponentStyle} from './recieve.style';
import {connect} from 'react-redux';
import {Container, Content, Fab, Icon, View, Button} from 'native-base';
import MapView from 'react-native-maps';
import {MapStyle} from '../../../Shared/Styles/map.style';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';

const styleComponent = RecieveComponentStyle.getStyle();
const {width, height} = Dimensions.get('window');

const homePlace = {
  description: 'Home',
  geometry: {location: {lat: 48.8152937, lng: 2.4597668}},
};
const workPlace = {
  description: 'Work',
  geometry: {location: {lat: 48.8496818, lng: 2.2940881}},
};

class RecieveComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      load: false,
      location: false,
      latitude: 5.3462453,
      longitude: -3.9795282,
    };
  }

  componentDidMount() {
    this.checkLocation();
  }

  search() {
    alert('okay');
  }

  checkLocation() {
    RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
      interval: 10000,
      fastInterval: 5000,
    })
      .then(data => {
        this.setState({location: true});
      })
      .catch(err => {});
  }

  render() {
    return (
      <Container>
        <Content>
          <View
            style={{
              flex: 0.4,
            }}>
            <GooglePlacesAutocomplete
              placeholder="Rechercher des livraisons par zones"
              minLength={2}
              autoFocus={false}
              returnKeyType={'search'}
              keyboardAppearance={'light'}
              listViewDisplayed="auto"
              fetchDetails={true}
              renderDescription={row => row.description || row.vicinity}
              onPress={(data, details = null) => {
                this.setState({
                  latitude: details.geometry.location.lat,
                  longitude: details.geometry.location.lng,
                });
              }}
              getDefaultValue={() => ''}
              query={{
                key: 'AIzaSyA0i-SDbym_Iq6H2yD3jL1xRUGI4n13F0o',
                language: 'fr',
                components: 'country:ci',
              }}
              styles={{
                textInputContainer: {
                  width: '100%',
                  backgroundColor: '#CE190F',
                  borderTopWidth: 0,
                },
                description: {
                  fontWeight: 'bold',
                },
                predefinedPlacesDescription: {
                  color: '#CE190F',
                },
              }}
              currentLocation={this.state.location}
              currentLocationLabel="Votre position actuelle"
              nearbyPlacesAPI="GooglePlacesSearch"
              GooglePlacesDetailsQuery={{
                fields: 'formatted_address',
              }}
              debounce={200}
              renderRightButton={() => (
                <Button
                  transparent
                  style={{width: 50}}
                  iconLeft
                  onPress={() => this.search()}>
                  <Icon
                    style={{right: 5, color: '#fff', fontSize: 30}}
                    name="search"
                  />
                </Button>
              )}
            />
          </View>
          <View style={{height}}>
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
export default connect(mapStateToProps)(RecieveComponent);
