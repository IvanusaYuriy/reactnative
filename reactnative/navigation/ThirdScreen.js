import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const ThirdScreen = () => (
    <View style={styles.container}>
    <Text>image-03</Text>
    <Image
      style={{width:405, height: 200}}
      source={{uri:'https://images.unsplash.com/photo-1438979315413-de5df30042a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'}}/>
    </View>  
)

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    }
})
export default ThirdScreen