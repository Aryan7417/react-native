import React, { Component } from 'react'
import { Text, View } from 'react-native'

class Student extends Component {

    render(){
        return(
            <View>
                <Text style={{fontSize:34,backgroundColor:'red', height:60,width:300}}>{this.props.name}</Text>
            </View>
        )
    }
}

export default Student;