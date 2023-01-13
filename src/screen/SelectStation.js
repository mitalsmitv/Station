import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, Image, TouchableOpacity, StyleSheet, TextInput, FlatList } from "react-native";

function SelectStation(props) {
    const[data,setdata]=useState([])
    const[Search,setSearch]=useState('')
    useEffect(()=>{
getStations()
    },[])
    function getStations() {
        fetch("https://reqres.in/api/unknown",
            {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            }
        )
        .then(response=>response.json())
        .then(response=>{
            console.log(response)
            setdata(response.data)
        })
    }
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
                    <TextInput style={styles.textinput}
                    placeholder="Search by ID, Name, City"
                    value={Search}
                    onChangeText={(value)=>{setSearch(value)}}

                    />
                    </View>
                <FlatList
                    data={data.filter(e=>e?.pantone_value.includes(Search))}
                    renderItem={({ item, index }) => {
                        console.log(item)
                        return (
                            <TouchableOpacity style={styles.viewf}
                                onPress={() => {
                                    props.navigation.navigate('Details')
                                }}
                            >
                                <Image source={require('../Images/png/Pump.png')} />
                                <View><Text style={[styles.textn,{color:item.color}]}>{item?.pantone_value}</Text><Text style={styles.textt}>{item.name}</Text></View>
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
        fontFamily: "Poppins-Bold"
    },
    textinput: {
        color: "#ADB7C6",
        fontSize: 14,
        marginLeft: 10,
        width: "80%",
        fontFamily: "Poppins-Medium",
        marginTop: 5
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
        marginBottom: 15,
        alignItems: "center"
    },
    viewm: {
        borderWidth: .5,
        backgroundColor: "#ffffff",
        borderRadius: 30,
        marginTop: 3,
        borderColor: "#ffffff",
        flex: 1
    },
    textn: {
        fontSize: 16,
        fontFamily: "Poppins-Bold",
        color: "#000000",
        marginLeft: 30
    },
    textt: {
        fontSize: 13,
        color: "#ADB7C6",
        marginLeft: 30,
        marginBottom: 10,
        fontFamily: "Poppins-Medium"
    },
    viewf: {
        borderBottomWidth: 1,
        borderColor: "#f0f4f5",
        flexDirection: "row",
        marginRight: 30,
        marginLeft: 30,
        marginTop: 10,
        marginBottom: 15
    }
})