import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableNativeFeedback,
  ScrollView,
} from 'react-native';

class Login extends React.Component {
  login = () => {
    this.props.navigation.replace('MainScreens');
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scroll}>
          <View style={styles.boxLogo}>
            <Image source={require('../../assets/images/desapintar.png')} />
          </View>
          <View style={styles.boxInput}>
            <View style={styles.childBoxInput}>
              <Text style={styles.label}>NIK</Text>
              <TextInput style={styles.textInput} />
            </View>
          </View>
          <View style={styles.boxInput}>
            <View style={styles.childBoxInput}>
              <Text style={styles.label}>Password</Text>
              <TextInput style={styles.textInput} secureTextEntry={true} />
            </View>
          </View>
          <View style={styles.boxButton}>
            <TouchableNativeFeedback onPress={() => this.login()}>
              <View style={styles.button}>
                <Text style={styles.textButton}>LOGIN</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
          <View style={[styles.boxLogo, styles.boxLogoBottom]}>
            <Image source={require('../../assets/images/ilu_login.png')} />
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scroll: {
    flex: 1,
  },
  boxLogo: {
    width: '100%',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxLogoBottom: {
    height: 200,
  },
  boxInput: {
    width: '100%',
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  childBoxInput: {
    width: '90%',
  },
  label: {
    marginBottom: 5,
    color: 'grey',
  },
  textInput: {
    height: 45,
    width: '100%',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'grey',
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  boxButton: {
    width: '100%',
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  textButton: {
    color: 'white',
  },
  button: {
    height: 45,
    width: '90%',
    borderRadius: 5,
    borderColor: 'grey',
    backgroundColor: '#19D2BA',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
