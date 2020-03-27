import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './src/Containers/Home';
import Order from './src/Containers/Order';
import LoginRegister from './src/Containers/LoginRegister';
import HomeTourGuide from './src/Containers/HomeTourGuide';

const FirstRoute = createStackNavigator({
  Login:{screen:LoginRegister, navigationOptions:{headerShown:false}}
})

const MainRoute = createStackNavigator({
  Home:{screen:Home, navigationOptions:{headerShown:false}},
  Order:{screen:Order, navigationOptions:{headerShown:false}},
  HomeTourGuide:{screen:HomeTourGuide, navigationOptions:{headerShown:false}}
});

const route = createStackNavigator({
  First:{screen:FirstRoute, navigationOptions:{headerShown:false}},
  Main:{screen:MainRoute, navigationOptions:{headerShown:false}}
});

const Main = createAppContainer(route);

export default Main;