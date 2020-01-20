import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const Default = () => (
    <View style={[styles.container,styles.scene,styles.card]}>
      
      <Image
        style={{width: 405,height: 150}}
        source={{uri:'https://images.unsplash.com/1/apple-gear-looking-pretty.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'}}/>

      <Image
      style={{width: 405, height: 290}}
      source={{uri:'https://images.unsplash.com/1/type-away-numero-dos.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'}}/>
      <Image
      style={{width:405, height: 200}}
      source={{uri:'https://images.unsplash.com/photo-1438979315413-de5df30042a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'}}/>
    </View>  
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      scene:{
        flex: 1,
        justifyContent: 'space-between',
        
      },
      card:{
        paddingBottom:'-1%',
        marginTop:'-3%',
        paddingTop: '1%',
        
      },
      
})
export default Default