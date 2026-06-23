// import React, { use, useState } from 'react'
// import { View, Text,Button } from 'react-native'




// const Props = () => {
//     const [name,setName]=useState('aryan')
//     const [age,setAge]=useState('5')
//     const[message,setMessage]=useState('hey khushi i am aryan yr mai na bahut time se dhoon raa hu pr tun kahi dik he nhi rahi thi !!!')


    
//     return (
//         <View style={{ backgroundColor: "#515EC2" }}>
//             <Text>PROPS and information</Text>
//             <Button title='upade name' onPress={()=>setName("khushi")}></Button>
//              <Button title='update age' onPress={()=>setAge("9")}></Button>
//              <Button title='update message' onPress={()=>setMessage("ARTYAN-koi baat nahi agar tum mujse baat nhi karna chati")}></Button>
//             <User name={name} age={age}  message={message}/>

//         </View>


//     )


// }
// const User = (props) => {

//     return (
//         <View>
//             <Text style={{ fontSize: 45, backgroundColor: '#389256' }}>CHILD name:{props.name}</Text>
//             <Text style={{ fontSize: 20, backgroundColor: '#51c28a' }}>CHILD age:{props.age}</Text>
//             <Text style={{ fontSize: 20, backgroundColor: '#2335be' }}>message:{props.message}</Text>
            
            
//         </View>
//     )
// }


// export default Props