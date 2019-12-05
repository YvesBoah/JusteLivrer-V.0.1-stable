import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';

import MainComponent from './Components/main.component';
import AuthComponent from './Components/Auth/auth.component';
import DeliveryComponent from './Components/delivery/delivery.component';
import DeliverComponent from './Components/delivery/delivery/delivery.component';
import RecieveComponent from './Components/delivery/recieve/recieve.component';
import SideBarComponent from './Shared/Components/SideBar';

const Main = createDrawerNavigator(
  {
    deliver: {
      screen: DeliverComponent,
    },
  },
  {
    navigationOptions: {},
    contentComponent: props => <SideBarComponent {...props} />,
  },
);

const App = createStackNavigator(
  {
    delivery: DeliveryComponent,
    recieve: RecieveComponent,
    deliver: DeliverComponent,
    main: Main,
  },
  {
    headerMode: 'none',
  },
);

const Delivery = createStackNavigator(
  {
    delivery: DeliveryComponent,
  },
  {
    headerMode: 'none',
  },
);

const Auth = createStackNavigator(
  {
    login: AuthComponent,
  },
  {
    headerMode: 'none',
  },
);

const navigation = createSwitchNavigator(
  {
    auth: Auth,
    app: App,
  },
  {
    initialRouteName: 'auth',
  },
);
const AppContainer = createAppContainer(navigation);
export default AppContainer;
