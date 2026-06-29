import React, { useState } from 'react'
import {View,Text,StyleSheet,TouchableOpacity } from 'react-native'


const Radio = () => {

    const skils=[
        {
            id:1,
            name:'java'
        },

        {
            id:2,
            name:'IOT'
        },

        {
            id:3,
            name:'Rob'
        },

        {
            id:4,
            name:'SQL'
        },
    ]

    

    const [radio,setRadio]=useState(1)



  return (
    <View style={styles.main}>
        {
            skils.map((item,index)=> <TouchableOpacity
            key={index}
            onPress={()=>setRadio(item.id)}>
        <View style={styles.radioWrapper}>
            <View style={styles.radio}>
                {
                    radio===item.id? <View style={styles.radiobg}></View>:null
                }
                
            </View>
            
                <Text style={styles.ratioText}> {item.name}</Text>

        </View>

        </TouchableOpacity>)
        }
       

    </View>
  )
}

const styles = StyleSheet.create({
    main:{
        flex:0,
        alignItems:'center',
        justifyContent:'center'
    },
    ratioText:{
        fontSize:30, color:'rgb(163, 44, 8)'
    },
    radio:{
        height:40,
        width:40,
        borderWidth:2,
        borderRadius:20,
        margin:10
    },

    radioWrapper:{
        flexDirection:"row",alignItems:'center'
    },
    radiobg:{
        backgroundColor:'red',
        height:30,
        width:30,
        borderRadius:20,
        margin:3
    }


})


export default Radio


{/* 
        <TouchableOpacity onPress={()=>setRadio(2)}>
        <View style={styles.radioWrapper}>
            <View style={styles.radio}>
                {
                    radio===2? <View style={styles.radiobg}></View>:null
                }
            </View>
            
                <Text style={styles.ratioText}> Radio 2</Text>

        </View>

        </TouchableOpacity> */}


