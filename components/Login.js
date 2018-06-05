import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  Button,
  View,
  ImageBackground
} from 'react-native';
import { Card } from 'react-native-elements';
import { connect } from 'react-redux';
import { Header } from './index';

import { login } from '../store';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error:
        '' ||
        (this.props.navigation.state.params &&
          this.props.navigation.state.params.error)
    };
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeEmail(value) {
    this.setState({ email: value });
  }

  handleChangePassword(value) {
    this.setState({ password: value });
  }

  handleSubmit() {
    const email = this.state.email;
    const password = this.state.password;
    this.props.login(
      {
        email,
        password
      },
      this.props.navigation
    );
    // clear the state after login for security
    this.setState({
      email: '',
      password: '',
      error: ''
    });
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Header headerNavigation={navigation} />
        {/* <ImageBackground
          defaultSource={require('../images/drink3.jpg')}
          style={{
            width: '100%',
            height: '100%',
            flex: 1,
            // flexDirection: 'column',
            // justifyContent: 'space-between',
            alignItems: 'center'
          }}
        > */}
          <KeyboardAvoidingView behavior="position">
            <ScrollView>
              <Text style={styles.text}>Log In</Text>
              <Card containerStyle={{ backgroundColor: 'wheat', borderColor: 'black', borderWidth: 3, borderRadius: 5 }}>
                <Text style={styles.error}>{this.state.error}</Text>
                <TextInput
                  style={styles.textInput}
                  autoCapitalize="none"
                  autoCorrect={false}
                  maxLength={15}
                  placeholder="Enter email address"
                  placeholderTextColor="teal"
                  value={this.state.email}
                  onChangeText={email => this.handleChangeEmail(email)}
                />
                <TextInput
                  style={styles.textInput}
                  secureTextEntry={true}
                  autoCapitalize="none"
                  autoCorrect={false}
                  maxLength={15}
                  placeholder="Enter password"
                  placeholderTextColor="teal"
                  value={this.state.password}
                  onChangeText={password => this.handleChangePassword(password)}
                />
                <Button
                  buttonStyle={styles.button}
                  title="Login"
                  color="black"
                  onPress={this.handleSubmit}
                />
                <Button
                  buttonStyle={styles.button}
                  title="Sign up with email"
                  color="black"
                  onPress={() => {
                    this.props.navigation.navigate('Signup');
                    this.setState({
                      email: '',
                      password: '',
                      error: ''
                    });
                  }}
                />
              </Card>
            </ScrollView>
          </KeyboardAvoidingView>
        {/* </ImageBackground> */}
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  login: (credentials, navigation) => dispatch(login(credentials, navigation))
});

export default connect(null, mapDispatchToProps)(Login);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: 'teal',
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
    marginTop: 75,
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
    color: 'blue',
    marginVertical: 0,
    paddingLeft: 10,
    fontWeight: 'bold'
  }
});
