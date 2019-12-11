import React from 'react';
import { Image, StyleSheet, Text, SafeAreaView, View, TextInput, Button, KeyboardAvoidingView } from 'react-native';
import firestore from '../../firebase';
import firebase from 'firebase';
import { Metrics, Colors, Images } from '../Themes';
import { grey } from 'ansi-colors';

export default class LoginScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return { 
      headerTitle: (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text>Compass</Text>
          <Text style={{fontSize: 10}}>Login</Text>
        </View>
      )
    };
  };

  constructor(props) {
    super(props);

    this.state = {
      signUpName: '',
      signUpEmail: '',
      signUpPassword: '',
      loginEmail: 'kim12341234@gmail.com',
      loginPassword: 'password',
      errorMessageLogin: '',
    }
  }

  signUp = async () => {
    try {
      const response = await firebase.auth().createUserWithEmailAndPassword(this.state.signUpEmail, this.state.signUpPassword);
      if(response.user) {
        const user = firebase.auth().currentUser;

        //adds full name to firestore database as 'name'
        var userDocRef = firestore.doc('users/' + user.uid);
        userDocRef.set({
          name: this.state.signUpName
        });

        this.props.updateStatus();
      }
    } catch (err) {
      console.log(err);
    }
  }
  
  login = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(this.state.loginEmail, this.state.loginPassword)
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
        <KeyboardAvoidingView behavior={'padding'} style={styles.container}>

          <Image source={Images.logo} style={{ width:200, height: 200, marginBottom: 30}} />
          
          <TextInput
            style={styles.input}
            value={this.state.signUpName}
            onChangeText={(signUpName) => this.setState({ signUpName })}
            placeholder="Name" 
          />
          <TextInput
            style={styles.input}
            value={this.state.signUpEmail}
            onChangeText={(signUpEmail) => this.setState({ signUpEmail })}
            placeholder="Email" 
          />
          <TextInput
            style={styles.input}
            value={this.state.signUpPassword}
            secureTextEntry={true}
            onChangeText={(signUpPassword) => this.setState({ signUpPassword })}
            placeholder="Password" 
          />
          <Button 
            title="Sign Up"
            onPress={()=> this.signUp()}
            color={Colors.salmon}
          />


          <TextInput
            style={[styles.input, {marginTop: 50}]}
            value={this.state.loginEmail}
            onChangeText={(loginEmail) => this.setState({ loginEmail })}
            placeholder="Email" 
          />
          <TextInput
            style={styles.input}
            value={this.state.loginPassword}
            secureTextEntry={true}
            onChangeText={(loginPassword) => this.setState({ loginPassword })}
            placeholder="Password" 
          />
          <Button 
            title='Login'
            onPress={()=> this.login()}
            color={Colors.salmon}
          />

        </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '90%',
    fontSize: 20,
    marginBottom: 10,
    backgroundColor: 'whitesmoke',
    padding: 5,
    borderRadius: 5,
  },
  button: {
    marginBottom: 50
  }
});