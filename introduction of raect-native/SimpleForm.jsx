import React, { useState } from 'react'
import { View, Text, Button, TextInput, StyleSheet } from 'react-native'

const SimpleForm = () => {
    const [name, setname] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [display, setDisplay] = useState('')

    const clearform =()=>{
        setname(false)
        setPassword('')
        setEmail('')
        setDisplay('')

    }

    return (


        <View>
            <TextInput
                style={styless.textinput}
                onChangeText={(text) => setname(text)}
                placeholder='Enter your name:'
            />


            <TextInput
                style={styless.textinput}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={true}
                placeholder='Enter your password'
            />

            <TextInput
                style={styless.textinput}
                onChangeText={(text) => setEmail(text)}
                placeholder='Enter your Email'
            />

            <View style={{ marginBottom: 20 }}>



            <Button title="Display form"  onPress={()=>setDisplay(true)}/>
            </View>
                <Button color={'red'} title="clear form" onPress={clearform} />
            <View>
                {
                    display ?
                    <View >
                        <Text style={{fontSize:23}}>
                            User Name is :{name}
                        </Text>
                        <Text style={{fontSize:23}}>
                            Password is :{password}
                        </Text>
                        <Text style={{fontSize:23}}>
                            email is :{email}
                        </Text>

                    </View>:null
                    
                }
            </View>

        </View>



            )
}

            const styless=StyleSheet.create({
                textinput:{

                fontSize:30,
            color:'#ffff',
            border:4,
            borderColor:'#1B5452',
            borderWidth:2,
            backgroundColor:'#0DD4D4',
            marginBottom:30
    }
})



            export default SimpleForm