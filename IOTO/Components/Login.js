import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  Alert,
  AsyncStorage,
  KeyboardAvoidingView,
  
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { YellowBox } from "react-native";
import ActionBarImage from '../pages/ActionBarImage';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import * as Crypto from 'expo-crypto';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username:"",
            password: "",
            message:"",
            location: "",
            topics: ""
        }
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit =  async () => {
        await AsyncStorage.setItem("IsGuest", 'false')
        await AsyncStorage.setItem("topics", '')

        if(this.state.username != null && this.state.password != null) {
            let response = await fetch('https://ioto-10242.firebaseio.com/users.json');             
            let responseJSON = await response.json();
            let users = Object.values(responseJSON)
            let usersUuid = Object.keys(responseJSON);
            const hashedPassword = await Crypto.digestStringAsync(
                Crypto.CryptoDigestAlgorithm.SHA256,
                this.state.password
              );

            for (var i in users){                
                if (users[i].username == this.state.username & users[i].password == hashedPassword){
                    await AsyncStorage.setItem('uuid', usersUuid[i])
                    const { status } = await Permissions.getAsync(Permissions.LOCATION);
                    if(status !== 'granted'){
                        console.log('Permission not provided');
                        this.props.navigation.navigate("LocationServices")
                    } else if(users[i].topics){
                        await AsyncStorage.setItem("topics", JSON.stringify(users[i].topics))
                        const userlocation = await Location.getCurrentPositionAsync();
                        this.setState({
                                location: userlocation
                            })
                        await AsyncStorage.setItem('location', JSON.stringify(userlocation))
                        this.props.navigation.navigate("LoginSuccess")                       
                    } else if(!users[i].topics){
                        const userlocation = await Location.getCurrentPositionAsync();
                        this.setState({
                                location: userlocation
                            })
                        await AsyncStorage.setItem('location', JSON.stringify(userlocation))
                        this.props.navigation.navigate("TopicSelection")
                    } else{
                        Alert.alert("Wrong credentials")
                    }
                };
            };
            // console.log('Not matched')
        }

        
        ;
    };
    render(){

        let logo1 = {
            uri: "https://www.ioto.ca/assets/images/ioto-logo-no-bg-alt.png"
        };
        return (
            <View style={styles.container}>
            <KeyboardAvoidingView style={styles.container} behavior="padding">
                <View>
                    <Text>{this.state.message}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.textStyle}>Username: </Text>
                    <TextInput 
                    style={styles.textBox}
                    placeholder=" Username"
                    onChangeText={(username) => this.setState({username})}
                    value={this.state.username}/>
                </View>
                <View style={styles.row}>
                    <Text style={styles.textStyle}>Password: </Text>
                    <TextInput 
                    secureTextEntry={true}
                    style={styles.textBox}
                    placeholder=" Password"
                    onChangeText={(password) => this.setState({password})}
                    value={this.state.password}/>
                </View>
                <View style={styles.btnRow}>
                    <TouchableOpacity onPress={this.onSubmit} style={styles.btn}>
                        <Text style={styles.btnTextStyle}>Login</Text>
                    </TouchableOpacity>
                </View>

                <View style={{width: 150}}>
                    <TouchableOpacity  onPress={() => this.props.navigation.navigate("Signup")}><Text style={styles.txt}>Create Account </Text></TouchableOpacity>
                </View>

            </KeyboardAvoidingView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'stretch',
      justifyContent: 'center',
      backgroundColor: "#E3E3D7"
    },
    textStyle: {
        padding: 10,
        color: "#7886A3",
        fontWeight: "bold"
    },
    btnTextStyle: {
        padding: 10,
        color: "white",
        fontWeight: "bold"
    },
    textBox: {
        height: 40,
        borderColor: "#7886A3",
        borderWidth: 1,
        color: "#7886A3",
        width: "60%",
        borderRadius: 8,
        padding: 5
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10
    },
    btnRow : {
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "flex-end",
        top: 20,
        
        right: 30,
    },
    btn: {
        backgroundColor: "#7886A3",
        borderRadius: 8,
        borderWidth: 0.5,
        color: "white",
        borderColor: "white",
        paddingHorizontal: 5
    },
    txt: {
        fontStyle: "italic",
        color: "#7886A3",
        marginLeft: 20,
        borderColor: "white",
        width: 200

    }
})
