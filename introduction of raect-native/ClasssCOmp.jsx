import React,{Component} from 'react'
import {View ,Text, TextInput, Button} from 'react-native'



class ClasssCOmp extends Component{
     fguit=()=>{
        console.warn("hey khusi")
        
     }

    render(){
        return(
            <View>
                <Text>class compeney</Text>
                <TextInput placeholder='enter your name'/>
                <Button title='on press' onPress={this.fguit} />
            </View>
        )
    }
}
export default ClasssCOmp