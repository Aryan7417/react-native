

import React, { useState } from 'react'
import {Text,View,Modal, Button, StyleSheet} from 'react-native'


const Moodal = () => {
  const [shwo,setShow]=useState(true)



  return (    
    <View style={styles.main}> 
    
        <Modal 
        transparent={true}
        visible={shwo}
        animationType='slide'
        
        >
            <View style={styles.centerView}>
                <View style={styles.modalView}>
                    <Text>hello khusii!!😊😊</Text>
                    <Button title='close message' onPress={()=>setShow(false)}/>
                </View>
                
            </View>
        </Modal>

      
                     <Button title='open message' onPress={()=>setShow(true)}/>
            

    </View>
           
        
        
  
    

  )
}

const styles=StyleSheet.create({
  main:{
    
  },
    buttonView:{
      flex:1,
      justifyContent:'flex-end',
      color:'black',
      padding:40
        
    },
    centerView:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    },
    modalView:{
      backgroundColor:'skyblue',
      padding:40,
      borderRadius:20,
      shadowColor:'black',
      elevation:10
      
    },
    ModalText:{
      fontSize:49
    }
})

export default Moodal