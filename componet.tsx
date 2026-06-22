import React from 'react'
import { View,Text } from 'react-native' 
//import ButtonOnPress from './ButtonOnPress.jsx'
import Props from './Props.tsx'



const componet = () => {
  return (
    <View style={{backgroundColor:'#C2B551'}}>
        <Text style={{fontSize:23 ,padding:45,color:"red"}}>------Testing the code--------</Text>\
        <Props/>
    </View>
  )
}


// const Appdata=()=>{
//     return(
//         <View>
//             <Text style={{fontSize:30, color:'red'}}>Name:Anil</Text>
//             <Text style={{fontSize:30}}>Age:34</Text>
//             <Text style={{fontSize:30}}>Email:aryan89@gamil.com</Text>
//         </View>
//     )

// }

// const CompneyNAme=()=>{
//     return(

//         <View>
//         <Text style={{
//             fontSize:34
//         }}>compney Name:xyz compney</Text>


//         <Text style={{
            
//         }}>employ numbert:223</Text>


//     </View>
//     )
// }

export default componet