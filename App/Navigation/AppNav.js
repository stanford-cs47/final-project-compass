import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Metrics, Colors, Images } from '../Themes';
import {Image} from 'react-native';

import { FontAwesome } from '@expo/vector-icons';

import * as screens from '../Screens';

const HomeStack = createStackNavigator({
  Home: { screen: screens.HomeScreen },
  Mail: { screen: screens.MailScreen },
  Community: { screen: screens.CommunityScreen },
  Search: { screen: screens.SearchScreen },
  firstJobEvent: {screen:screens.firstJobEvent}
}, {
  initialRouteName: 'Home',
  headerMode: 'float',
  cardStyle: { backgroundColor: Colors.white },
});

const MailStack = createStackNavigator({
  Home: { screen: screens.HomeScreen },
  Mail: { screen: screens.MailScreen },
  Community: { screen: screens.CommunityScreen },
  Search: { screen: screens.SearchScreen },
}, {
  initialRouteName: 'Mail',
  headerMode: 'float',
  cardStyle: { backgroundColor: Colors.white },
});

const CommunityStack = createStackNavigator({
  Home: { screen: screens.HomeScreen },
  Mail: { screen: screens.MailScreen },
  Community: { screen: screens.CommunityScreen },
  Search: { screen: screens.SearchScreen },
}, {
  initialRouteName: 'Community',
  headerMode: 'float',
  cardStyle: { backgroundColor: Colors.white },
});

const SearchStack = createStackNavigator({
  Home: { screen: screens.HomeScreen },
  Mail: { screen: screens.MailScreen },
  Community: { screen: screens.CommunityScreen },
  Search: { screen: screens.SearchScreen },
  JobSearch: { screen: screens.JobSearchScreen },
  SkillSearch: { screen: screens.SkillSearchScreen },
  NameSearch: { screen: screens.NameSearchScreen },
  OtherProfile: { screen: screens.OtherProfileScreen },
}, {
  initialRouteName: 'Search',
  headerMode: 'float',
  cardStyle: { backgroundColor: Colors.white },
});


HomeStack.navigationOptions = ({ navigation }) => {
  return {
    tabBarLabel: 'Home',
    tabBarIcon: () => (
      <Image
        source={Images.HomeIcon}
        style = {{width: '80%', height: '80%', tintColor: Colors.white}}
        resizeMode = {'contain'}
      />
    ),
  };
};

MailStack.navigationOptions = ({ navigation }) => {
  return {
    tabBarLabel: 'Mail',
    tabBarIcon: () => (
      <Image
        source={Images.MailIcon}
        style = {{width: '80%', height: '80%', tintColor: Colors.white}}
        resizeMode = {'contain'}
      />
    )
  };
};

CommunityStack.navigationOptions = ({ navigation }) => {
  return {
    tabBarLabel: 'Community',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={Images.GroupIcon}
        style = {{width: '80%', height: '80%', tintColor: Colors.white}}
        resizeMode = {'contain'}
      />
    ),
  };
};

SearchStack.navigationOptions = ({ navigation }) => {
  return {
    tabBarLabel: 'Search',
    tabBarIcon: ({ tintColor }) => (
      <FontAwesome
        name="search"
        size={36}
        color={Colors.white}
      />
    ),
  };
};


// Manifest of possible screens
const TabNav = createBottomTabNavigator({
  HomeScreen: { screen: HomeStack },
  MailScreen: { screen: MailStack },
  CommunityScreen: { screen: CommunityStack },
  SearchScreen: { screen: SearchStack },
},
{
  initialRouteName: 'HomeScreen',
  tabBarOptions: {
    activeTintColor: Colors.white,
    inactiveTintColor: Colors.gray,
    showLabel: true,
    style: {
      height: 75,
      backgroundColor: Colors.salmon,
      fontFamily: 'lato-regular',
    },
    labelStyle: {
      fontSize: 18
    }
  },
});


const AppContainer = createAppContainer(TabNav);

export default AppContainer
