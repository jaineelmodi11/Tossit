import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Dimensions } from 'react-native';

const auth = getAuth();

const SignInScreen = () => {
  const [value, setValue] = React.useState({
    email: '',
    password: '',
    error: ''
  })

  async function signIn() {
    if (value.email === '' || value.password === '') {
      setValue({
        ...value,
        error: 'Email and password are mandatory.'
      })
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, value.email, value.password);
    } catch (error) {
      setValue({
        ...value,
        error: error.message,
      })
    }
  }

  return (
    
      <View style={{flex:2,backgroundColor:'#fff',flexDirection:'column',paddingHorizontal:'3%'}} >
        <View style={{paddingBottom: 35, paddingTop: 15}}>
              <TouchableOpacity style={styles.BackButton} onPress={() => navigation.navigate('Welcome')}>
                <Image style={{ width: 35, height: 30, }} source={require('../../client/assets/BackArrow.png')} />
              </TouchableOpacity>
          </View>
      <View>
        <Text style={styles.title}>Welcome back! Glad to see you, Again!</Text>
      </View>

      {!!value.error && <View style={styles.error}><Text>{value.error}</Text></View>}
      
      <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:'#ededed',width:'100%',borderRadius:10,height:60,paddingLeft:15}} >
        <Icon name="envelope-o" size={22} color="#818181" style={{paddingRight: 10}}/>
        <TextInput onChangeText={(text) => setValue({ ...value, email: text })} style={styles.input} placeholder="Enter Email" placeholderTextColor="#818181" />
      </View>

      <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:'#ededed',width:'100%',borderRadius:10,height:60,paddingLeft:15,marginTop:20, marginBottom: 25}} >
                        <Icon name="lock" size={22} color="#818181" style={{paddingRight: 10}}/>
                        <TextInput onChangeText={(text) => setValue({ ...value, password: text })} style={styles.input} placeholder="Enter Password" secureTextEntry={true} placeholderTextColor="#818181" />
      </View>


        <View style={styles.control_container}>
          <View style={styles.buttons}>

              <TouchableOpacity style={styles.loginButton} onPress={signIn}>
                <Text style={styles.loginButtonText}>Login</Text>
              </TouchableOpacity>

          </View>
          <View style={{width:'95%'}} >
                        <Text style={{fontSize:17,fontFamily:'OpenSans-SemiBold',
                    color:'#818181',alignSelf:'flex-end',paddingTop:10}} >Forgot Password?</Text>
                    </View>
        </View>
        
                <Text style={{fontFamily:"OpenSans-Bold",textAlign:'center',marginVertical:35,color:'#818181',fontSize:20}} >Or</Text>

                <View style={{flexDirection:'column',alignItems:'center',width:'100%'}} >
                    <TouchableOpacity onPress={()=>console.log("google login")} style={styles.social_btn} >
                        <Image style={styles.social_img} source={require('../../client/assets/google.png')} />
                        <Text style={{width:'80%',textAlign:'center',fontSize:16,fontFamily:'OpenSans-Medium'}} >Sign in with Google </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>console.log("facebook login")} style={styles.social_btn} >
                        <Image style={styles.social_img} source={require('../../client/assets/facebook.png')} />
                        <Text style={{width:'80%',textAlign:'center',fontSize:16,fontFamily:'OpenSans-Medium'}} >Sign in with Facebook </Text>
                    </TouchableOpacity>
                </View>
                
                <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:'#fff',marginBottom:40}} >
                    <Text style={{fontFamily:'OpenSans-Medium',fontSize:17,color:'#818181'}} >Don't have a account? </Text>
                    <Text style={{fontSize:18,fontFamily:'OpenSans-SemiBold',color:'#333'}} >Sign Up</Text>
                </View>
                 


            </View>

      
  );
}

const windowWidth = Dimensions.get('window').width; //411
const windowHeight = Dimensions.get('window').height; //865
const styles = StyleSheet.create({
  buttons: {

    width: '100%',
  },
  BackButton: {
    borderRadius:10,
    borderColor:'#ddd',
    width: 55,
  },
  loginButton: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#68ac53",
    width: '100%',
  },
  loginButtonText: {
    fontSize:20,
    letterSpacing:1.5,
    textAlign:'center',
    fontFamily:'OpenSans-Bold',
    color: 'white'
  },
  container: {
    flex: 1,
    
    justifyContent: 'center',
    backgroundColor: '#fff',

  },
  control: {
    fontSize:15,
    letterSpacing:1.5,
    textAlign:'center',
    position:'relative',
    fontFamily:'OpenSans-SemiBold',
    color: 'white'
  },
  control_container: {
    justifyContent:'center',
    width:'100%',
    height:50,
 
    borderRadius:10
  },

  input:{
    position:'relative',
    height:'100%',
    width:'90%',
    fontFamily:'OpenSans-Medium',
},
  title: {
    width : 350,
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontSize: 35,
    fontWeight: '700',
    //letter-spacing: -0.01em,

    color: '#1E232C',
    paddingBottom: 40,
    alignItems: 'stretch',
  },


  error: {
    marginTop: 10,
    padding: 10,
    color: '#fff',
    backgroundColor: '#D54826FF',
  },
  social_btn:{
    height:55,
    width:'100%',
    borderWidth:1,
    borderRadius:10,
    borderColor:'#ddd',
    flexDirection:'row',
    alignItems:'center',
    marginBottom:20
},
social_img:{
    width:25,
    height:25,
    marginLeft:15
}
});

export default SignInScreen;