import * as React from 'react';
import { Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,Alert} from 'react-native';
import * as Speech from 'expo-speech';
import {Header} from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default class App extends React.Component {
  voice=()=>{
    var thingToSay = this.state.text;
    Speech.speak(thingToSay);
  }
  constructor(){
    super();
    this.state={
      text: ''
    }
  }
  render() {
    return (
      <View style={styles.container}>
      <SafeAreaProvider>
        <Header
            backgroundColor={'#FFA500'}
            centerComponent={{
              text: 'Text To Speech Converter App',
              style: { color: '#000', fontSize: 20 },
            }}
          />
        </SafeAreaProvider>
      <Image
          style={styles.imageIcon}
          source={{
            uri:
              'https://static.thenounproject.com/png/753137-200.png',
          }}
        />
        <Text style={styles.textStyles}>Enter a Word</Text>
        <TextInput
          style={styles.inputBox}
          onChangeText={text => {
            this.setState({ text: text });
          }}
          value={this.state.text}
        />
        <TouchableOpacity
          style={styles.goButton}
          onPress={() => {
             this.state.text?(this.voice()):Alert.alert("Please Enter A Word.");
          }}>
          <Text style={styles.buttonText}>Press To Hear Speech</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#DCDCDC',
  },
   imageIcon: {
    width: 150,
    height: 150,
    marginLeft: 565,
  },
  textStyles:{
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,

  },
  inputBox: {
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  goButton: {
    width: '50%',
    height: 55,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor : '#00FF00',
  },
});