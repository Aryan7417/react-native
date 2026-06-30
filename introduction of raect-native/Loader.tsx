import React, { useState } from 'react'
import {View , StyleSheet,ActivityIndicator, Button} from 'react-native'


const Loader = () => {

    const [show ,setShow]=useState(false)
    const Distaple=()=>{
        setShow(true)
        setTimeout(()=>{
            setShow(false)
        },3000)

    }

    return(
        <View style={styles.main}>
            <ActivityIndicator size={200} color='blue' animating={show} />
            <Button title='check activity' onPress={Distaple} />

        </View>
    )
}


const styles=StyleSheet.create({
    main:{
        alignItems:'center',
        textAlign:'center',
    }
})


export default Loader