import React, { useEffect ,useState} from 'react'
import { View,Text ,Button } from 'react-native'


const CompUnmount = () => {
    const[show,setShow]=useState(true)
  return (
    <View>

    <Text style={{fontSize:43,color:'red',backgroundColor:'green'}}>usereddfevt  for the componet </Text>
    <Button title='Toggle' onPress={()=>setShow(!show)}/>
    {
        show ? <Student/> :null
    }
    </View>
    
  )
}

const Student =()=>{
    let timer = setInterval(()=>{
        console.warn("Timer called");
    },2000)
    useEffect(()=>{
        return() =>clearInterval(timer)
    })
    return(
        <View>
            <Text style={{color:'red',fontSize:30}}>
                this is a studnet
            </Text>
        </View>
    )
}

export default CompUnmount