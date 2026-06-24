import React from 'react'
import {View,Text,Button,FlatList, StyleSheet} from 'react-native'
import { Color } from 'react-native/types_generated/Libraries/Animated/AnimatedExports'



function ListAndFlatList() {

    const user=[
        {
            id:1,
            name:"Anil"
        },
        {
            id:2,
            name:"peter"
        },
        {
            id:3,
            name:'ARYAN',
        },
        {
            id:4,
            name:'khushi'
        }
    ]




  return (
    <View>

        <Text style={{fontSize:30}} >List with Flat Componet</Text>
        <FlatList
        data={user}
        renderItem={({item})=><Text style={Styles.itemsty}>{item.name}</Text>}
        keyExtractor={item=>item.id}

        />
    </View>

)
}

const Styles=StyleSheet.create({
    itemsty:{
        fontSize:30,
        padding:10,
        color:'white',
        backgroundColor:'blue',
        borderColor:'black',
        margin:10

    }
})





export default ListAndFlatList