import React from 'react'
import { StyleSheet,View,Text,Platform } from 'react-native'
import STyless from './STyless'


const Platforms = () => {
  return (
    <View>
        <Text style={{fontSize:20}}>Platform|:{Platform.OS}

            {
                Platform.OS=='ios'?
                <View style={{backgroundColor:'greem',height:100,width:100}}></View>
                :
                <View style={{backgroundColor:'red',height:100,width:100}}></View>
                
            }
            <Text style={styles.tecxt}>hello</Text>
            <Text >{JSON.stringify(Platform.constants.reactNativeVersion.patch)}</Text>

        </Text>
    </View>
    
  )
}

const styles=StyleSheet.create({
    tecxt:{
        color:Platform.OS=='android'?'red':'blue'
    }
})

export default Platforms