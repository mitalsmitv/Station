import React from "react";
import { View, Text, ImageBackground, Image, TouchableOpacity, StyleSheet, TextInput, FlatList } from "react-native";

function SelectStation(props) {
    return (
        <View style={{
            flex: 1
        }}>
            <ImageBackground style={styles.imagebg}
                source={require('../../src/Images/png/Mask.png')}>
                <Text style={styles.text}>Select Station</Text>
            </ImageBackground>
            <View style={styles.viewm}>
                <View style={styles.views}><Image style={{ alignSelf: "center" }} source={require('../../src/Images/png/Search.png')} />
                    <TextInput style={styles.textinput}>
                        Search by ID, Name, City
                    </TextInput></View>
                <FlatList
                    data={[1, 2, 3, 4, 5]}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity style={styles.viewf}
                            onPress={() => {
                                props.navigation.navigate('Details')
                              }}
                            >
                                <Image source={require('../Images/png/Pump.png')} />
<View><Text style={styles.textn}>1041700</Text><Text style={styles.textt}>ISLAND_LAKE_BP</Text></View>
                            </TouchableOpacity>
                        )
                    }}
                />

            </View>

        </View>
    )
}
export default SelectStation
const styles = StyleSheet.create({
    imagebg: {
        justifyContent: "center",
        height: 170,
    },
    text: {
        fontSize: 20,
        color: "#000000",
        alignSelf: "center",
        marginTop: 24,
        fontFamily:"Poppins-Bold"
    },
    textinput: {
        color: "#ADB7C6",
        fontSize: 14,
        marginLeft: 10,
        width: "80%",
        fontFamily:"Poppins-Medium",
        marginTop:5
    },
    views: {
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "#f0f4f5",
        marginTop: 30,
        justifyContent: "center",
        width: "85%",
        alignSelf: "center",
        backgroundColor: "#f0f4f5",
        borderRadius: 12,
        marginBottom:15,
        alignItems:"center"
    },
    viewm: {
        borderWidth: .5,
        backgroundColor: "#ffffff",
        borderRadius: 30,
        marginTop: 3,
        borderColor: "#ffffff",
        flex:1
    },
    textn:{
        fontSize:16,
        fontFamily:"Poppins-Bold",
        color:"#000000",
        marginLeft:30
    },
    textt:{
        fontSize:13,
        color:"#ADB7C6",
        marginLeft:30,
        marginBottom:10,
        fontFamily:"Poppins-Medium"
    },
    viewf:{
        borderBottomWidth:1,
        borderColor:"#f0f4f5",
        flexDirection:"row",
    marginRight:30,
    marginLeft:30,
    marginTop:10,
    marginBottom:15
    }
})