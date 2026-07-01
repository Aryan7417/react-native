import React from 'react'
import {View,StyleSheet,Text,Pressable} from 'react-native'

const LongPress = () => {
  return (
    <View style={styles.main}>
        <Pressable
        onPress={()=>console.warn('hey khushis')}
        onLongPress={()=>console.warn("i realy like you")}
        onPressIn={()=>console.warn('press in')}
        onPressOut={()=>console.warn('press out')}
        >
            on
            <Text style={styles.pressTest}>
                press on this box
            </Text>
        </Pressable>
    </View>
    
  )
}

const styles=StyleSheet.create({
    main:{
        justifyContent:'center'
    },
    pressTest:{
        backgroundColor:'blue',
        color:'#fff',
        borderRadius:10,
        margin:10,
        padding:10,

    }
})

export default LongPress