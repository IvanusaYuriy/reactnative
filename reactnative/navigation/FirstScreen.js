import React from 'react'
import { View, Text, StyleSheet,Image } from 'react-native'

const FirstScreen = () => (
    <View style={styles.container}>
    <Text>image-01</Text>
    <Image
        style={{width: 406,height: 170}}
        source={{uri:'https://images.unsplash.com/1/apple-gear-looking-pretty.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'}}/>
    </View>
)

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      
    }
})
export default FirstScreen