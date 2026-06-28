import React, { useEffect, useState } from 'react' 
import { View ,Text, Button } from 'react-native'

const Hooks = () => {

    const [count,setCount]=useState(0)
    const [data, setData]=useState(100)
    useEffect(()=>{
        console.warn("khaa ho yr");
        

    },[count])

    useEffect(()=>{
        console.warn("hey khushi");
        

    },[data])
    

    return(
        <View>
           <Text style={{fontSize:53 ,backgroundColor:"red" ,color:"white"}} >{data} AASHU ek bafkoof ladka haii {count}</Text>
           <Button title='bafkoof' onPress={()=>setCount(count+1)}/>
            <Button title='updayte data' onPress={()=>setData(data+1)}/>
                <User info={{data,count}}/>
           </View>
    )

}

const User=(props)=>{
    useEffect(()=>{
        console.warn("run the code")
    },[props.info.data])
    return(
        <View>
        <Text>data:{props.info.data}</Text>
        <Text>count:{props.info.count}</Text>
    </View>
)

}

export default Hooks