import React from 'react'
import { Text,View,StyleSheet,TouchableHighlight } from 'react-native'

const STyless = () => {
  return (
    <View style={styles.main}>
      <TouchableHighlight>
        <Text style={styles.botton}>Button</Text>
      </TouchableHighlight>

      <TouchableHighlight>
        <Text style={[styles.botton,styles.success]}>success</Text>
      </TouchableHighlight>

      <TouchableHighlight>
        <Text style={[styles.botton,styles.error]}>primary</Text>
      </TouchableHighlight>


      <TouchableHighlight>
        <Text style={[styles.botton,styles.primary]}>error</Text>
      </TouchableHighlight>

      <TouchableHighlight>
        <Text style={[styles.botton,styles.warning]}>warning</Text>
      </TouchableHighlight>

    </View>
  )
}


const styles= StyleSheet.create({
  main :{
    flex:0
  },
  botton:{
    backgroundColor:'#bbb',
    color:"",
    fontSize:24,
    textAlign:'center',
    padding:20,
    margin:10,
    borderRadius:10,
    shadowColor:"green",
    elevation:10,
    shadowOpacity:2
    
  },
  success:{backgroundColor:'green'},


   error:{
    backgroundColor:'red'
   },
   primary:{
    backgroundColor:'orange'

   },
   warning:{
    backgroundColor:'blue'
   }



  
})





export default STyless