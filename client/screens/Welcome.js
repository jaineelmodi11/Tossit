import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import { Dimensions } from 'react-native';

export default function WelcomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      
      <LinearGradient
        // Background Linear Gradient
        colors={['#68ac53', 'transparent']}
        style={styles.linearGradient}
      >
        

        <View style={styles.content}>
        <Image 
          style={{ width: 275, height: 90, paddingRight: 200}}
          source={require('../../client/assets/logo.png')} 
        />

          <View style={styles.buttons}>

            <View style={styles.paddingBottom}>
              <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Sign In')}>
                <Text style={styles.loginButtonText}>Login</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.registerButton} onPress={() => navigation.navigate('Sign Up')} >
              <Text style={styles.registerButtonText}>Register</Text>
            </TouchableOpacity>

          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

const windowWidth = Dimensions.get('window').width; //411
const windowHeight = Dimensions.get('window').height; //865

const styles = StyleSheet.create({
  buttons: {
    paddingTop: 25,
  },
  container: {
    //flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',  // horizontal
    //justifyContent: 'center',  // vertical
    bottom: 80 // so there is more white at the bottom of the gradient
  },
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: windowHeight+101,
    width: windowWidth+10,
  },
  content: {
    top: windowHeight/2 - 120,
    alignItems:'center',
    marginBottom : 15,
  },
  paddingBottom: {
    paddingBottom: 15,
  },
  loginButton: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#68ac53",
    width: windowWidth-80,
  },
  loginButtonText: {
      color: "white",
      alignSelf: "center",
      fontWeight: 'bold',
      //fontFamily: '', add font if u can
  },
  registerButton: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: "transparent",
    width: windowWidth-80,
    borderColor: "black",
    borderWidth: 1,
  },
  registerButtonText: {
      color: "black",
      alignSelf: "center",
      fontWeight: 'bold',
  }
});


/*
<Button title="Sign in" buttonStyle={styles.loginButton} onPress={() => navigation.navigate('Sign In')} />
<Button title="Register" type="outline" buttonStyle={styles.registerButton} onPress={() => navigation.navigate('Sign Up')} />

loginButton: {
    //position: 'absolute',
    width: windowWidth-80,
    height: windowHeight-809,
    backgroundColor: "#68ac53",
    // ADD ROUNDED CORNERS AND STUFF
    //left: 22,
    //bottom: 10,
  },
  registerButton: {
    //position: 'absolute',
    width: windowWidth-80,
    height: windowHeight-809,
    //left: 22,
    //bottom: 10,
  },
*/