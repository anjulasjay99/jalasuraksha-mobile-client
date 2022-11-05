import React from 'react'
import { View,StyleSheet,Image, Text } from 'react-native'

const AddDonar = () => {
  return (
    <View style={styles.container}>
        <Image style={styles.imagecontainer} source={require("../assets/donar.png")}/>  
        <Text>Donar Info</Text>
    </View>   
  )
}
const styles = StyleSheet.create({
    container: {
      padding: 0,
      backgroundColor: "#fff",
      flex: 1,
      justifyContent: "center",
      flexDirection: "column",
     
    },
    imagecontainer:{
        width:100,
        height:100,
        position:"absolute",
        top:70
    }
}
)  
export default AddDonar