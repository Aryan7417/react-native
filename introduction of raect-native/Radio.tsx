import React, { useState } from 'react'
import {View,Text,StyleSheet,TouchableOpacity } from 'react-native'


const Radio = () => {


    const [radio,setRadio]=useState(1)



  return (
    <View style={styles.main}>
        <TouchableOpacity onPress={()=>setRadio(1)}>
        <View style={styles.radioWrapper}>
            <View style={styles.radio}>
                {
                    radio===1? <View style={styles.radiobg}></View>:null
                }
                
            </View>
            
                <Text style={styles.ratioText}> Radio 1</Text>

        </View>

        </TouchableOpacity>
        

        <TouchableOpacity onPress={()=>setRadio(2)}>
        <View style={styles.radioWrapper}>
            <View style={styles.radio}>
                {
                    radio===2? <View style={styles.radiobg}></View>:null
                }
            </View>
            
                <Text style={styles.ratioText}> Radio 2</Text>

        </View>

        </TouchableOpacity>



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
        fontSize:30,
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