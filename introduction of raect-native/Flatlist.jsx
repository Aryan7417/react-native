import React from 'react'
import { Text  ,View,StyleSheet,FlatList} from "react-native"

const Flatlist = () => {
    const userData = [
  { id: 1, name: "Aarav Sharma", email: "aarav.sharma@example.com" },
  { id: 2, name: "Ananya Iyer", email: "ananya.iyer@example.com" },
  { id: 3, name: "Vivaan Verma", email: "vivaan.verma@example.com" },
  { id: 4, name: "Diya Patel", email: "diya.patel@example.com" },
  { id: 5, name: "Kabir Singh", email: "kabir.singh@example.com" },
  { id: 6, name: "Isha Gupta", email: "isha.gupta@example.com" },
  { id: 7, name: "Arjun Reddy", email: "arjun.reddy@example.com" },
  { id: 8, name: "Meera Nair", email: "meera.nair@example.com" },
  { id: 9, name: "Rohan Das", email: "rohan.das@example.com" }
]

  return (
    <View>
        <Text style={{fontSize:27}}>componet in loop with fdlatlist</Text>
        <FlatList
        data={userData}
        renderItem={({item}) =><View style={styles.box}>
            <Text style={styles.item}>{item.name}</Text>
            <Text style={styles.item}>{item.email}</Text>
            </View>
    }

        />

    </View>
    
  )
}
const styles =StyleSheet.create({
    item:{
        fontSize:20,
        color:"red",
        flex:1,
        margin:2

    },
    box:{
        flexDirection:"row",
        borderWidth:2,
        borderColor:"white",
        marginBottom:10        
    }
})

export default Flatlist