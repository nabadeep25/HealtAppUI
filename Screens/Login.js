import React from 'react';
import { View, Text,Button,TouchableOpacity,StyleSheet,Image} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import { flex } from 'styled-system';
import front from '../assets/front.jpeg'
 const Login=({navigation})=> {
  return (
      
      <View style={{flex:1}}>
           <LinearGradient colors={['#2F80ED','#56CCF2']} style={{flex:1}}>
          <View style={{flex:2, backgroundColor:'white',borderBottomLeftRadius:30,justifyContent:'flex-end'}}>
        <Image source={front} style={{}} resizeMode='cover' width='100%' height='90%' />
       <Text style={{fontSize:22,textAlign:'left',paddingLeft:20,paddingBottom:20,fontFamily:'sans-serif',
    fontWeight:'bold'}}>Help Milions People,{"\n"}everywhere everytime</Text>
          </View>
         
      <View style={{flex:1,paddingTop:20,justifyContent:'space-evenly'}}>
     
      <View style={styles.buttonContainer}>

      <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('dashboard')}>
          <Text style={styles.btn_txt}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn2} onPress={()=>navigation.navigate('dashboard')}>
          <Text style={styles.btn_txt2}>Sign Up</Text>
      </TouchableOpacity>
      </View>
      <Text style={styles.belowText}>Are yoy patient?Get here</Text>
   
      </View>
      </LinearGradient>
     </View>
      
  );
}
const styles=StyleSheet.create({
    buttonContainer:{
        flexDirection:'row',
        justifyContent:"space-evenly"
    },
    btn:{
        borderWidth:2,
        paddingHorizontal:30,
        paddingVertical:10,
       
        borderColor:'white',
       
    },   btn2:{
        borderWidth:2,
        paddingHorizontal:30,
        paddingVertical:10,
       backgroundColor:'white',
        borderColor:'white',
       
    },
    btn_txt:{
   fontSize:20,
   color:'white',
  textAlign:'center'
    }, 
     btn_txt2:{
        fontSize:20,
       color:'blue',
       textAlign:'center'
         },
    belowText:{
        textAlign:'center',
        marginTop:10,
        color:'white',
        fontSize:16,
        fontWeight:'300'
    }
})
export default Login;
