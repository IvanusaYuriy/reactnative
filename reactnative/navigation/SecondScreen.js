import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const SecondScreen = () => (
    <View style={styles.container}>
    <Text>image-02</Text>
    <Image
      style={{width: 405, height: 290}}
      source={{uri:'https://images.unsplash.com/1/type-away-numero-dos.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'}}/>
    </View>
)

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    }
})
export default SecondScreen