// import React from 'react'
// import { Text,View,StyleSheet } from 'react-native'

// const grid = () => {
//     const userData = [
//   { id: 1, name: "Aarav Sharma" },
//   { id: 2, name: "Ananya Iyer" },
//   { id: 3, name: "Vivaan Verma" },
//   { id: 4, name: "Diya Patel" },
//   { id: 5, name: "Kabir Singh" },
//   { id: 6, name: "Isha Gupta" },
//   { id: 7, name: "Arjun Reddy" },
//   { id: 8, name: "Meera Nair" },
//   { id: 9, name: "Rohan Das" }
// ];

// // Example: Data ko console par check karne ke liye
// console.log(userData);
//   return (
//     <View>
//         <Text style={{fontSize:34}}>Grid and layout</Text>

//         <View style={{flex:1,flexDirection:'row',flexWrap:'wrap'}}>
//             {/* <Text style={styles.item} >khushi</Text>
//             <Text style={styles.item}>khushi</Text>
//             <Text style={styles.item}>khushi</Text>
//             <Text style={styles.item}>khushi</Text>
//             <Text style={styles.item}>khushi</Text>
//             <Text style={styles.item} >khushi</Text>
//             <Text style={styles.item}>khushi</Text>
//             <Text style={styles.item}>khushi</Text>
//             <Text style={styles.item}>khushi</Text>
//             <Text style={styles.item}>khushi</Text>
//             <Text style={styles.item}>khushi</Text>
//             <Text style={styles.item}>khushi</Text>
//             <Text style={styles.item}>khushi</Text>
//             <Text style={styles.item}>khushi</Text> */}
//             {
//                 userData.map((item)=><Text style={styless.item}>{item.name}</Text>)
//             }


//         </View>
//     </View>
//   )
// }

// const styless=StyleSheet.create({
//     item:{
//         fontSize:25,
//         backgroundColor:"blue",
//         margin:5,
//         padding:5,
//         width:120,
//         height:120,
//         textAlignVertical:'center',
//         textAlign:'center'

//     }
// })

// export default grid