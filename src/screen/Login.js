import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";

function Login(props) {
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    function validation() {
        if (Email.length == 0) {
            alert("enter the email")
        }
        else if (Password.length == 0) {
            alert("enter the password")
        }

        else if (Password.length < 6) {
            alert("Password Length Should Be more then 6 ")
        }
        else {
            Loginapicall()

        }
    }
    function Loginapicall() {
        fetch("https://reqres.in/api/login",
            {
                method: 'post',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "email": Email,
                    "password": Password
                })
            })
            .then(response => response.json())
            .then(response => {
                console.log(response)
                if (response?.error) {
                    alert(response?.error)

                } else {

                    props.navigation.navigate('Disclaimer')

                }


            })
    }
    return (
        <View style={{
            flex: 1, justifyContent: "center",
            backgroundColor: "white"
        }}>
            <Image style={{ marginTop: 250, alignSelf: "center" }} source={require('../../src/Images/png/Logo.png')} />
            <Text style={styles.textLabel}>Login</Text>
            <View style={{
                flexDirection: "row",
                borderBottomWidth: 2,
                borderBottomColor: "#F0F4F5",
                marginTop: 30,
                justifyContent: "center",
                width: "80%",
                alignSelf: "center"
            }}><Image style={{ alignSelf: "center" }} source={require('../../src/Images/png/S.png')} />
                <TextInput
                    value={Email}
                    placeholder="Your Email address"
                    onChangeText={(value) => { setEmail(value) }}
                    style={styles.textinput} />
            </View>
            <View style={{
                flexDirection: "row",
                borderBottomWidth: 2,
                borderBottomColor: "#F0F4F5",
                marginTop: 20,
                justifyContent: "center",
                width: "80%",
                alignSelf: "center"
            }}><Image style={{ alignSelf: "center" }} source={require('../../src/Images/png/Lock.png')} />
                <TextInput
                    value={Password}
                    placeholder="Enter password"
                    secureTextEntry={true}
                    onChangeText={(value) => { setPassword(value) }}
                    style={styles.textinput} /></View>

            <ImageBackground style={styles.imagebg}
                source={require('../../src/Images/png/Mask.png')}>
                <TouchableOpacity style={styles.touch}
                    onPress={() => { validation() }}
                ><Text style={styles.touchtext}>
                        Login</Text>
                    <Image style={{
                        marginLeft: 7,
                        alignSelf: "center"
                    }} source={require('../../src/Images/png/Errow.png')} />
                </TouchableOpacity>
                <TouchableOpacity><Text style={styles.text2}>Forgot Password?</Text></TouchableOpacity>
            </ImageBackground>
        </View>
    )
}
export default Login


const styles = StyleSheet.create({
    textLabel: {
        color: "#000000",
        fontSize: 22,
        marginTop: 35,
        alignSelf: "center",
        fontFamily: "Poppins-Bold"
    },
    textbox: {
        borderBottomWidth: 2,
        borderBottomColor: "#f0f4f5",

        marginRight: 50,
        marginLeft: 50,
    },
    textinput: {
        color: "#000000",
        fontSize: 16,
        marginLeft: 30,
        width: "80%",
        fontFamily: "Poppins-Bold"
    },
    touch: {
        borderWidth: 2,
        borderColor: "#DD1D21",
        borderRadius: 60,
        alignSelf: "center",
        backgroundColor: "#DD1D21",
        flexDirection: "row",
        padding: 10,
        marginTop: 35,
        alignItems: "center",
        width: "29%",
        justifyContent: "center"
    },
    touchtext: {
        color: "#FFFFFF",
        fontSize: 15,
        fontFamily: "Poppins-Medium"
    },
    text2: {
        fontSize: 12,
        color: "#000000",
        alignSelf: "center",
        marginTop: 20,
        fontFamily: "Poppins-Bold"
    },
    imagebg: {
        height: "75%",
        backgroundColor: "#000000c5"
    }
})