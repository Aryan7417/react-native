import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


const Hellostyle = () => {
  return (

    <View>
      <Text style={styles.textBox}>thsi is a text</Text>
      <Text style={styles.textBox}>thsi is a text</Text>
      <Text style={styles.textBox}>thsi is a text</Text>
      <Text style={styles.exstle}>thsi is a text</Text>
    </View>



  )
}

const styles = StyleSheet.create({
  textBox: {
    color: 'blue',
    fontSize: 23,
    backgroundColor: 'rgba(182, 34, 14, 0.87)',
    marginBottom: 23,
    textAlign: 'center',
    borderColor: 'red',
    borderWidth: 3,
    padding: 10,

  },
  exstle: {
    color: 'gray',
    padding: 20,
    backgroundColor: 'Blue',
    Border: 3,
    fontSize: 34,
    textAlign: 'center',
    BorderColor: 'red'


  }
})

export default Hellostyle;