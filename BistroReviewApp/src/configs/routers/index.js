import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { Bistro, Home } from '../../containers/pages'

const Router = createStackNavigator(
  {
    Home: {
      screen: Home
    },
    Bistro: {
      screen: Bistro
    }
  },
  {
    initialRouteName: 'Home',
  }
)

export default createAppContainer(Router);