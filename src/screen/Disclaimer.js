import React from "react";
import {View,Text,TouchableOpacity, Image,ImageBackground,StyleSheet} from "react-native";

function Disclaimer(props){
    return(
        <View style={{
            flex:1
        }}>
<ImageBackground style={styles.imagebg}
            source={require('../../src/Images/png/Mask.png')}>
        <Image style={{alignSelf:"center"}} source={require('../../src/Images/png/Logo.png')} />
        </ImageBackground>
            <View style={styles.viewm}>
                <Text style={styles.text}>Disclaimer</Text>
                <Text style={styles.text2}>The information provided by the Zdaly Fuel{'\n'}Network Optimizer app is based on historical data.{'\n'}Data on Zdaly Light is updated once daily at 8:00{'\n'}a.m. eastern time. Any prospective information is{'\n'}based on that data and should not be relied on as{'\n'}a estimation of future performance. Any future{'\n'}product prices are the manufacturer's suggested{'\n'}retail price (MSRP) only. Sites are independent{'\n'}operators free to set their retail{'\n'}price.</Text>
<TouchableOpacity style={styles.touch}
             onPress={() => {
                props.navigation.navigate('SelectStation')
              }}
            ><Text style={styles.touchtext}>
                I Accept</Text>

           </TouchableOpacity>
            </View>
            
        </View>
    )
}
export default Disclaimer

const styles = StyleSheet.create({
    imagebg:{
justifyContent:"center",
height:170,
    },
    text:{
        fontSize:20,
        color:"#000000",
        alignSelf:"center",
marginTop:20,
fontFamily:"Poppins-Bold",
    },
    text2:{
        fontSize:13,
        alignSelf:"center",
        color:"#000000",
        marginTop:15,
        fontFamily:"Poppins-Regular",
        lineHeight:25

    },
    touchtext:{
        color:"#FFFFFF",
        fontSize:15,
        fontFamily:"Poppins-Medium"
    },
    touch:{
        borderWidth:2,
        borderColor:"#DD1D21",
        borderRadius:40,
        alignSelf:"center",
        backgroundColor:"#DD1D21",
        padding:12,
        marginTop:30,
        alignItems:"center",
        width:"52%",
        justifyContent:"center"
    },
    viewm:{
        borderWidth: .5,
        backgroundColor: "#ffffff",
        borderRadius: 30,
        marginTop: 3,
        borderColor: "#ffffff",
        flex:1
    }
})