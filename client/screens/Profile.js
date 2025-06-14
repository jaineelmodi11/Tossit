import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import { useAuthentication } from '../utils/hooks/useAuthentication';
import { Button, Tab } from 'react-native-elements';
import { getAuth, signOut } from 'firebase/auth';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Dimensions } from 'react-native';
function Profile() {
    const { user } = useAuthentication();
  const auth = getAuth();
  return (
    <View>
    <ImageBackground source={require('../../client/assets/background.jpg')}  style= {{height: 125, width: undefined, padding: 16, paddingTop: 48}}
    >
   </ImageBackground>
   <Text style={styles.title}>Manage Your Waste Like never before</Text>
    <Text>Welcome {user?.email}!</Text>

      <Button title="Sign Out" onPress={() => signOut(auth)}/>
      


    </View>
  )
}
const styles = StyleSheet.create({

  title: {
    width : 350,
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontSize: 35,
    fontWeight: '700',
    //letter-spacing: -0.01em,
    color: '#1E232C',
    paddingBottom: 40,
    paddingLeft: 35,
  },
});
export default Profile