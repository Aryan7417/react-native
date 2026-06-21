import React from 'react'
import { Text,View,Button } from 'react-native'
const name='Aryan';
let Age=343;
var email='he3@gah.com'

function fruit(){
    return 'appkle'
}


export const hello = () => {
  return (
    <View style={{
        paddingTop:110,
        backgroundColor:"red"
    }}
    
    >
        <Text style={{fontSize:40}}>{name}</Text>
        <Text style={{fontSize:30}}>{Age}</Text>
        <Text>{email}</Text>
        <Text>{fruit()}</Text>
        <Text>{Age===39?"above":"unkone age"}</Text>
        <Button title='submit'></Button>
    </View>

  )
}

export default hello
