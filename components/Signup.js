import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  Button
} from 'react-native';
import { Card } from 'react-native-elements';
import { connect } from 'react-redux';
import Header from './Header';

import { signup } from '../store';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password1: '',
      password2: '',
      error: ''
    };
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword1 = this.handleChangePassword1.bind(this);
    this.handleChangePassword2 = this.handleChangePassword2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeEmail(value) {
    this.setState({ email: value });
  }

  handleChangePassword1(value) {
    this.setState({ password1: value });
  }

  handleChangePassword2(value) {
    this.setState({ password2: value });
  }

  handleSubmit() {
    if (
      this.state.email &&
      this.state.password1 &&
      this.state.password1 === this.state.password2
    ) {
      const email = this.state.email;
      const password = this.state.password1;
      this.props.signupFunc(
        {
          email,
          password
        },
        this.props.navigation
      );
      // clear the state after signup for security
      this.setState({
        email: '',
        password1: '',
        password2: '',
        error: ''
      });
    } else {
      this.setState({
        password1: '',
        password2: '',
        error: 'Email and password cannot be empty.  Passwords must also match.'
      });
    }
  }

  render() {
    const { navigation } = this.props;
    return (
      <KeyboardAvoidingView behavior="position" style={styles.container}>
        <Header headerNavigation={navigation} />
        <ScrollView>
          <Text style={styles.text}>Sign Up</Text>
          <Card containerStyle={styles.card}>
            <Text style={styles.error}>{this.state.error}</Text>
            <TextInput
              style={styles.textInput}
              autoCapitalize="none"
              autoCorrect={false}
              maxLength={30}
              placeholder="Enter an email address"
              placeholderTextColor="teal"
              value={this.state.email}
              onChangeText={email => this.handleChangeEmail(email)}
            />
            <TextInput
              style={styles.textInput}
              secureTextEntry={true}
              autoCapitalize="none"
              autoCorrect={false}
              maxLength={30}
              placeholder="Enter a password"
              placeholderTextColor="teal"
              value={this.state.password1}
              onChangeText={password1 => this.handleChangePassword1(password1)}
            />
            <TextInput
              style={styles.textInput}
              secureTextEntry={true}
              autoCapitalize="none"
              autoCorrect={false}
              maxLength={30}
              placeholder="Re-enter password"
              placeholderTextColor="teal"
              value={this.state.password2}
              onChangeText={password2 => this.handleChangePassword2(password2)}
            />
            <Button
              buttonStyle={styles.button}
              title="Sign Up"
              color="black"
              onPress={this.handleSubmit}
            />
          </Card>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  signupFunc: (credentials, navigation) =>
    dispatch(signup(credentials, navigation))
});

export default connect(null, mapDispatchToProps)(Signup);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: 'teal'
  },
  card: {
    backgroundColor: 'wheat',
    borderColor: 'black',
    borderWidth: 3,
    borderRadius: 10
  },
  textInput: {
    height: 40,
    width: 300,
    margin: 10,
    backgroundColor: 'white',
    color: 'teal',
    fontSize: 15,
    borderWidth: 2,
    borderRadius: 5,
    paddingHorizontal: 5
  },
  text: {
    color: 'wheat',
    fontSize: 50,
    textShadowColor: 'white',
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 40,
    textAlign: 'center',
    fontFamily: 'SavoyeLetPlain'
  },
  button: {
    backgroundColor: 'gray',
    color: 'white',
    width: 150,
    height: 40,
    borderRadius: 5,
    alignSelf: 'center'
  },
  error: {
    fontSize: 15,
    color: 'red',
    marginVertical: 0,
    paddingLeft: 10,
    fontWeight: 'bold'
  }
});
