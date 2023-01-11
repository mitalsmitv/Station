import React from "react";
import {View,Text,TouchableOpacity, Image,ImageBackground,StyleSheet} from "react-native";

function Details(props){
    return(
        <View style={{
            flex:1
        }}>        
            <ImageBackground style={styles.imagebg}
        source={require('../../src/Images/png/Mask.png')}><View style={{flexDirection:"row",alignItems:"center"}}>
            <TouchableOpacity
    onPress={() => {props.navigation.pop();}}><Image style={{marginLeft:20}} source={require('../../src/Images/png/Backbutton.png')}/></TouchableOpacity>
        <Text style={styles.text1}>Details</Text></View>
    </ImageBackground>
    <View style={styles.viewm}>
    <Text style={styles.text0}>Station Subscribed</Text>
    <View style={styles.view2}>
        <Text style={styles.text2}>ACTIVE FROM</Text>
        <View style={{flexDirection:"row"}}><Text style={styles.text3}>9</Text><Text style={styles.text4}>seconds</Text>
        <TouchableOpacity style={styles.button}><Text style={styles.text5}>Stop</Text></TouchableOpacity>
        </View>
      <View style={{flexDirection:"row",marginBottom:20}}><Text style={styles.text6}>MORE INFO</Text>
       <TouchableOpacity><Image style={{marginLeft:10}} source={require('../Images/png/Btn.png')}/></TouchableOpacity></View>
    </View>
    </View>

        </View>
    )
}
export default Details

const styles = StyleSheet.create({
    imagebg:{
justifyContent:"center",
height:170,
    },
    text0:{
        fontSize: 20,
        color: "#000000",
        fontFamily:"Poppins-Bold",
        marginLeft:33,
        marginTop:30
    },
    text1: {
        fontSize: 20,
        color: "#000000",
        fontFamily:"Poppins-Bold",
        marginLeft:120
    },
    viewm: {
        borderWidth: .5,
        backgroundColor: "#ffffff",
        borderRadius: 30,
        marginTop: 3,
        borderColor: "#ffffff",
        flex:1
    },
    view2:{
        borderWidth:2,
        borderColor:"#f0f4f5",
        backgroundColor:"#fFFFFF",
        marginTop:15,
        marginLeft:30,
        marginRight:30,
        borderRadius:15
    },
    text2:{
        fontSize:16,
        marginLeft:15,
        marginTop:15,
        color:"#000000",
        fontFamily:"Poppins-SemiBold"
    },
    text3:{
        fontSize:35,
        fontFamily:"Poppins-ExtraBold",
        marginLeft:15,
        color:"#000000"
    },
    text4:{
        fontSize:11,
        color:"#000000",
        marginTop:7,
        marginLeft:5,
        fontFamily:"Poppins-SemiBold"
    },
    button:{
        borderWidth:1,
        padding:1,
        alignItems:"center",
        borderRadius:60,
        borderColor:"#DD1D21",
        backgroundColor:"#DD1D21",
        marginLeft:115,
        width:"32%",
        alignSelf:"center"
    },
    text5:{
        fontSize:12,
        color:"#ffffff",
        fontFamily:"Poppins-Medium"
    },
    text6:{
        fontSize:11,
        color:"#000000",
        marginLeft:15,
        fontFamily:"Poppins-SemiBold"
    }
})