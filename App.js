import React from 'react';
import {AppNav} from './App/Navigation';
import {LoginScreen} from './App/Screens';
import * as Font from 'expo-font';
import firebase from 'firebase';

import { AppLoading } from 'expo';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      debug: false,

      fontsLoaded: false,
      loggedIn: null,
      unsubscribe: null
    }
  }

  async componentWillMount(){
    await Font.loadAsync({
      'lato-regular': require('./assets/fonts/Lato2OFL/Lato2OFL/Lato-Regular.ttf'),
      'lato-medium': require('./assets/fonts/Lato2OFL/Lato2OFL/Lato-Medium.ttf'),
      'lato-italic': require('./assets/fonts/Lato2OFL/Lato2OFL/Lato-MediumItalic.ttf'),
    });

    this.setState({ fontsLoaded: true });
  }


  componentDidMount() {
    // auto detects whether or not user is signed in.
    let unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });

    this.setState({ unsubscribe });
  }

  componentWillUnmount() {
    this.state.unsubscribe();
  }

  render() {
    if(this.state.debug) {
      return <JobSearchScreen/>
    }

    if (this.state.fontsLoaded) {
      if (this.state.loggedIn) {
        return <AppNav />;
      } else {
        return <LoginScreen />;
      }
    } else {
      return <AppLoading />;
    }
  }
}
