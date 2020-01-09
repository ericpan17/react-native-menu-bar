import React from 'react';
import { Text, View, TextInput } from 'react-native';

import CommonDrawer from '../components/CommonDrawer'
import styles from '../styles/styles'
import Footer from '../components/Footer';
import { WebView } from 'react-native-webview';
import { Icon, Button, ThemeProvider, Input} from 'react-native-elements';
import { WIDTH } from '../lib';

export default class ContactScreen extends React.Component {
  constructor() {
    super()
    this.firstname = React.createRef();
    this.lastname = React.createRef();
    this.email = React.createRef();
    this.phone = React.createRef();
    this.comment = React.createRef();
    this.state = 
    {
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      comment: '',
      message: ''
    }
  }
  submitContactForm() {
    console.log(this.state)
    console.log(this.firstname)
    const url = '???'
    fetch(url, {
      method: 'POST', // or 'PUT'
      mode: "cors", // no-cors, cors, *same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      body: JSON.stringify({ from: 'app-contact', ...this.state}),
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
        .then(response =>  {
          this.setState({message: 'We have received your message, thanks.'})
          this.firstname.current.clear();
          this.lastname.current.clear();
          this.email.current.clear();
          this.phone.current.clear();
          this.comment.current.clear();

        console.log (response);
    })
    .catch(e => {
        console.log(e);
    });

  }
  render() {
    const { navigation, screenProps } = this.props
    return (
      <View style={styles.container}>
        <CommonDrawer style={styles.header} navigation={this.props.navigation} />
        <View style={styles.content}>

          <ThemeProvider
            theme={{
              Input: {
                containerStyle: {
                  width: WIDTH - 50,
                },
                inputContainerStyle: {
                  borderRadius: 40,
                  borderWidth: 1,
                  borderColor: 'rgba(110, 120, 170, 1)',
                  height: 50,
                  marginVertical: 10,
                },
                placeholderTextColor: 'rgba(110, 120, 170, 1)',
                inputStyle: {
                  marginLeft: 10,
                  color: 'rgba(110, 120, 170, 1)',
                },
                keyboardAppearance: 'light',
                blurOnSubmit: false,
              },
            }}
          >
            <View
              style={{
                // backgroundColor: 'rgba(46, 50, 72, 1)',
                width: WIDTH,
                alignItems: 'center',
                paddingBottom: 30,
              }}
            >
              <Text
                style={{
                  color: 'black',
                  fontSize: 30,
                  marginVertical: 10,
                  fontWeight: '300',
                }}
              >
                Contact Us
              </Text>
              <Input
                leftIcon={
                  <Icon
                    name="account"
                    type="material-community"
                    color="rgba(110, 120, 170, 1)"
                    size={25}
                  />
                }
                placeholder="First Name"
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyType="next"
                ref={this.firstname}
                onChangeText = { v => this.setState({firstname: v})}
                onSubmitEditing={() => {
                  this.email2Input.focus();
                }}
              />

              <Input
                leftIcon={
                  <Icon
                    name="account"
                    type="material-community"
                    color="rgba(110, 120, 170, 1)"
                    size={25}
                  />
                }
                placeholder="Last name"
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyType="next"
                ref={this.lastname}
                onChangeText = { v => this.setState({lastname: v})}
                onSubmitEditing={() => {
                  this.email2Input.focus();
                }}
              />

              <Input
                leftIcon={
                  <Icon
                    name="email"
                    type="material-community"
                    color="rgba(110, 120, 170, 1)"
                    size={25}
                  />
                }
                placeholder="Email"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                returnKeyType="next"
                ref={this.email}
                onChangeText = { v => this.setState({email: v})}
                onSubmitEditing={() => {
                  this.password2Input.focus();
                }}
              />

              <Input
                leftIcon={
                  <Icon
                    name="phone-classic"
                    type="material-community"
                    color="rgba(110, 120, 170, 1)"
                    size={25}
                  />
                }
                placeholder="Phone"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="phone-pad"
                returnKeyType="next"
                ref={this.phone}
                onChangeText = { v => this.setState({phone: v})}
                onSubmitEditing={() => {
                  this.password2Input.focus();
                }}
              />
                <TextInput
                  style={{ padding: 10, height: 80, width: '80%', borderRadius: 40,  borderWidth: 1, borderColor: 'rgba(110, 120, 170, 1)' }}
                  multiline = {true}
                  placeholder="Comment"
                  ref={this.comment}
                  placeholderTextColor="rgba(110, 120, 170, 1)"
                  onChangeText = { v => this.setState({comment: v})}
                />
                <View>
                  <Text>{this.state.message}</Text>
                </View>
                <View style={styles.buttonsContainer}>
                  <Button
                    title="Submit"
                    containerStyle={{ height: 40, top: 40 }}
                    buttonStyle={{ backgroundColor: 'rgba(78, 116, 289, 1)', borderRadius: 20 }}
                    titleStyle={{ color: 'white', fontSize: 30, marginHorizontal: 20 }}
                    onPress={() => {this.submitContactForm()}}
                  />
              </View>
            </View>
          </ThemeProvider>
        </View>
        <Footer navigation={this.props.navigation} style={styles.footer} />
      </View>
    );
  }
}
