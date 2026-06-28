import React, { useEffect, useState } from 'react' 
import { View ,Text, Button } from 'react-native'

const Hooks = () => {

    const [count,setCount]=useState(0)
    useEffect(()=>{
        console.warn("bafkoof ladka haii");
        

    })

    return(
        <View>
           <Text style={{fontSize:53 ,backgroundColor:"red" ,color:"white"}} > AASHU ek bafkoof ladka haii {count}</Text>
           <Button title='bafkoof' onPress={()=>setCount(count+1)}/>
           </View>
    )



}

export default Hooks