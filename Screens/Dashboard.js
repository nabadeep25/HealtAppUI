import React,{useState,useEffect} from 'react';
import { View, Text,Image,StyleSheet,TouchableOpacity} from 'react-native';
import doctor from '../assets/doctor.png'
import woman from '../assets/woman.png'
import { Badge,Input,Card,BottomSheet,Avatar} from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { alignContent, alignItems, marginLeft } from 'styled-system';
import LinearGradient from 'react-native-linear-gradient';

const Dashboard=()=> {
    
   const [isVisible, setisVisible] = useState(false);
   useEffect(() => {
    setTimeout(()=>{setisVisible(true)},500)
   }, [])
  return (
    <View style={{backgroundColor:'white'}}>
     
      <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:10,paddingTop:5}}>
          <View style={{flexDirection:'row' }}>
          <Image source={doctor} style={{width:50,height:50,borderRadius:5,
        }}/>
        <View style={{paddingLeft:10,flexDirection:'column'}}>

         <Text  style={{fontSize:20}}>Hi, Dr </Text>
         <Text > How're you today</Text>
        </View>
         </View>
         <View style={{flexDirection:'row' }}>
         <Icon name='bell-outline' size={30} color='red'
         style={{elevation:10,padding:5,backgroundColor:'white',borderRadius:5,alignSelf:'center'}} />
          <Badge value='4' status='error' containerStyle={{position:'relative',top:-5,left:-5,}}  />
         </View>
          
            
      </View>
      <View style={{backgroundColor:'#c2d4ed',borderRadius:10,marginHorizontal:20,marginVertical:20}}>
      <Input  placeholder='Search patients ,health issue' 
       leftIcon={ <Icon name='magnify'  size={24}  color='black' />  }
       
       />
      </View>
      {/*  */}
      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
          <View style={{paddingLeft:10}}>
              <View style={{flexDirection:'row'}}>
               <Text style={{fontSize:30,fontFamily:'sanserif',fontWeight:'bold'}}>Task</Text>
              <Text style={{fontSize:30,fontFamily:'sanserif'}}> for Today</Text>
              </View>
             <Text>{5} out of {9} completed</Text>
         </View>
        <Card containerStyle={{height:80,width:80,elevation:10,justifyContent:'center',alignItems:'center'}}>
       <Text style={{fontSize:30,padding:5,color:'blue',textDecorationLine:'underline'}}>{5}</Text>
        </Card>
      </View>
      {/*  */}
      <View style={styles.cardviewer}>
          <Card containerStyle={styles.card}>
          <View style={styles.iconcontainer}>
              <Icon name='calendar-month' color='blue' size={30}/>
              </View>
              <Text style={styles.centertext}>Schedule</Text>
          </Card>
          <Card containerStyle={styles.card}>
          <View style={styles.iconcontainer}>
              <Icon name='history' color='blue' size={30}/>
              </View>
              <Text style={styles.centertext}>Consult history</Text>
          </Card>
          <Card containerStyle={styles.card}>
          <View style={styles.iconcontainer}>
              <Icon name='folder-account' color='blue' size={30}/>
              <Text style={styles.centertext}>Patient Management</Text>
              </View>
          </Card>
          <Card containerStyle={styles.card}>
              <View style={styles.iconcontainer}>

              <Icon name='cellphone-message' color='blue' size={30} />
              <Text style={styles.centertext}>Free consult</Text>
              </View>
          </Card>
      </View>
      {/* Bottomsheet */}
      <BottomSheet isVisible={isVisible} containerStyle={{}}>
      <View style={styles.bottomsheet}>
          <Text style={styles.bsheader}>Private Video call request</Text>
          <Card containerStyle={styles.cardstyle}>
          <View style={styles.callinfo}>
          <Avatar  
           source={woman}/>
              <View style={{padding:5}}>
                  <Text>Ethel Howard</Text>
                  <Text>Female 28 years old</Text>
                  <View style={{flexDirection:'row',alignItems:'center'}}>
                      <Icon name='phone' color='red' />
                  <Text>12345678</Text>
                  </View>
              </View>
          </View>
          </Card>
          <View style={styles.circled}>
           <Text style={{fontSize:30}}>{56}</Text>
          </View>
       
          <Badge status="success"  value=' '
            containerStyle={{position:'relative',top:-105,left:50}}  />
          <View style={{flexDirection:'row'}}>
          <Text>I'm not ready to consult.</Text>
          <Text style={{textDecorationLine:'underline'}}>Cancel now</Text>
          </View>
       <View style={styles.btngrp}>
           <TouchableOpacity style={styles.btn1} onPress={()=>setisVisible(false)}>
               <Text>View Details</Text>
           </TouchableOpacity>
           <LinearGradient colors={['#56CCF2','#2F80ED']}  start={{x: .5, y: 0}} end={{x: 0, y: .5}}style={styles.btn2}>
           <TouchableOpacity style={{}}onPress={()=>setisVisible(false)} >
               <Text style={{color:'white'}}>Call Now</Text>
           </TouchableOpacity>
           </LinearGradient>
       </View>
        

      </View>
      </BottomSheet>

     </View>
  );
}
export default Dashboard;
const styles=StyleSheet.create({
    cardviewer:{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-evenly',
        
    },
    card:{
        width:'40%',
        aspectRatio:.8,
        justifyContent:'center',
        alignItems:'center',
        elevation:5,
        borderRadius:10
    },
    iconcontainer:{
        alignItems:'center'
},
    centertext:{
        textAlign:'center',fontSize:16
},
    bottomsheet:{
       backgroundColor:'white',
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        padding:5,
        
        justifyContent:'center',
        alignItems:'center'
    },
    callinfo:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',
        
    },
    cardstyle:{
        backgroundColor:'#e6e5e3',
        width:'80%'
    },
    bsheader:{
        fontSize:20,
        fontWeight:'900',
        paddingLeft:10,
        alignSelf:'flex-start'
    },
circled:{
    borderColor:'blue',
    borderWidth:8,
    borderRadius:50,
    width:100,
    aspectRatio:1,
    justifyContent:'center',
    alignItems:'center',
    marginVertical:10
    },
    btngrp:{
        flexDirection:'row',
       justifyContent:'space-evenly',
       marginVertical:20
       
    },
    btn1:{
     borderColor:'grey',
     borderWidth:2,
     borderRadius:5,
     paddingVertical:10,
     width:'35%',
     alignItems:'center'
    },
    btn2:{
        
        paddingVertical:10,
        width:'35%',
        marginLeft:30,
        alignItems:'center'
    }
 
})