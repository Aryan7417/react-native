import React from 'react'
import { View ,Text} from 'react-native' 


const componet = () => {
  return (
    <View>
        <CompneyNAme/>
        <Text style={{fontSize:79,
            textAlign:'center',
            paddingTop:50
        }}>componet</Text>
        <Appdata/>
        <Appdata/>
        <Appdata/>
        <Appdata/>
        <Appdata/>
        
        
    </View>
  )
}


const Appdata=()=>{
    return(
        <View>
            <Text style={{fontSize:30, color:'red'}}>Name:Anil</Text>
            <Text style={{fontSize:30}}>Age:34</Text>
            <Text style={{fontSize:30}}>Email:aryan89@gamil.com</Text>
        </View>
    )

}

const CompneyNAme=()=>{
    return(

        <View>
        <Text style={{
            fontSize:34
        }}>compney Name:xyz compney</Text>


        <Text style={{
            
        }}>employ numbert:223</Text>


    </View>
    )
}

export default componet