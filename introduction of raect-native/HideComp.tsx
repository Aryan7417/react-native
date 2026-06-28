import React, { useState } from 'react'
import {Text,View,Button} from 'react-native'


const HideComp = () => {
    const [show,setShow]=useState(true)
  return (
    <View>
        <Text style={{fontSize:34}}>show and hide COmponent</Text>
        <Button title='Hide componenet' onPress={()=>setShow(!show)}/>
           
            {
                show ? <User/>:null
            }
    </View>
  )
}

const User = ()=>{
    return(
        <View>
            <Text style={{fontSize:40 ,color:'green'}}>User Component</Text>
        </View>
    )
}

export default HideComp