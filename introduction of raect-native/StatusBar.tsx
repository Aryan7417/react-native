import React, { useState } from 'react'
import {View,Button,StyleSheet,StatusBar} from 'react-native'

const Statusbar = () => {

    const [hide,sethide]=useState(false)


  return (
    <View style={styels.main}>
        <StatusBar
        
        backgroundColor='blue'
      
    
        />
        <Button title='Toggle status bar' onPress={()=>sethide(!hide)}/>
        <Button title='update styles'/>
    
    </View>
    
  )
}

const styels = StyleSheet.create({
    main:{
        justifyContent:'center'
    },
   
})

export default Statusbar