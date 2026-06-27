import React,{Component} from 'react'
import {View ,Text, TextInput, Button} from 'react-native'
import Student from './student.jsx'



class ClasssCOmp extends Component{


    constructor(){
        super()
        this.state={

            name:"aryan"
        }
    }
    updatdate(val){
        this.setState({name:val})
    }



    render(){
        return(
            <View>
                <Text style={{fontSize:43 ,color:'blue' ,backgroundColor:'green' ,margin:34}}>{this.state.name}</Text>
                <TextInput placeholder='enter your name'
                onChangeText={(text)=>this.updatdate(text)}
                />



                <Button title='on press' onPress={this.fguit} />
                <Student name={this.state.name}/>
            </View>
        )
    }
}
export default ClasssCOmp