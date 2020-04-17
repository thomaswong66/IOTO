import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  Alert,
  KeyboardAvoidingView,
  ImageBackground,
  AsyncStorage
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import firebase from 'firebase';
import firebaseConfig from '../backend/config/config'
import { v4 as uuidv4 } from 'uuid';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import * as Crypto from 'expo-crypto';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname:"",
            username:"",
            age:"",
            password:"",
            email:"",
            message: "",
        }
        this.SignUp = this.SignUp.bind(this);
        // this.pushUser = this.pushUser.bind(this);

        if (!firebase.apps.length){
            firebase.initializeApp(firebaseConfig);
        }
    }

    componentDidMount() {
        this.setState({
            firstname: this.state.firstname,
            username: this.state.username,
            age: this.state.age,
            password: this.state.password,
            email: this.state.email
        })
    }

    writeUserData(uuid, name) {
        firebase.database().ref('users/' + uuid).update({
          topics: name,
        });
    }

    doIt = async() => {
        let response = await fetch('https://ioto-10242.firebaseio.com/users.json');
        let responseJSON = await response.json();
        let users = Object.values(responseJSON);
    }


    pushUser = (uuid, firstname, username, age, password, email) => {
        firebase.database().ref(`/users/${uuid}`).set({
            firstname,
            username,
            age,
            password,
            email,
            topics:''
            })
        this.doIt()
    }

    SignUp = async () => {
        var uuid = uuidv4()
        await AsyncStorage.setItem('uuid', uuid)
        await AsyncStorage.setItem('topics', '')
        await AsyncStorage.setItem('IsGuest', 'false')
        var banner = await AsyncStorage.getItem('FromBanner')


        var empty = ''
        let response = await fetch('https://ioto-10242.firebaseio.com/users.json');
        let responseJSON = await response.json();
        let users = Object.values(responseJSON);
        let usersArray = [];
        let emailArray = [];
        for (var i = 0; i < users.length;i++) {
            if(users[i].username !== null || users[i].username !== empty){
                usersArray.push(users[i].username)
            }
        }

        for (var i = 0; i < users.length;i++) {
            if(users[i].email !== null || users[i].email !== empty){
                emailArray.push(users[i].email)
            }
        }
        if(this.state.firstname == null || this.state.firstname == '' ){
            Alert.alert(
                'Error',
                'Firstname cannot be empty',
                [
                    {text: 'OK', onPress: () => this.props.navigation.navigate("Signup")}
                ]
            )
        }else if(this.state.username == null || this.state.username == empty){
            Alert.alert(
                'Error',
                'Username cannot be empty',
                [
                    {text: 'OK', onPress: () => this.props.navigation.navigate("Signup")}
                ]
            )
        }else if(usersArray.includes(this.state.username)){
            Alert.alert(
                'Error',
                'Username is already taken',
                [
                    {text: 'OK', onPress: () => this.props.navigation.navigate("Signup")}
                ]
            )

        }else if(this.state.age == null || this.state.age == empty) {
            Alert.alert(
                'Error',
                'Age cannot be empty',
                [
                    {text: 'OK', onPress: () => this.props.navigation.navigate("Signup")}
                ]
            ) 
        }else if(this.state.password == null || this.state.password == empty) {
            Alert.alert(
                'Error',
                'Password cannot be empty',
                [
                    {text: 'OK', onPress: () => this.props.navigation.navigate("Signup")}
                ]
            )
        }else if(this.state.email == null || this.state.email == empty){
            Alert.alert(
                'Error',
                'Email cannot be empty',
                [
                    {text: 'OK', onPress: () => this.props.navigation.navigate("Signup")}
                ]
            )
        }
        else if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email))) {
            Alert.alert(
                'Error',
                'Wrong Email format. Please use the format abc@example.com',
                [
                    {text: 'OK', onPress: () => this.props.navigation.navigate("Signup")}
                ]
            )
        }
        else if(emailArray.includes(this.state.email)){
            Alert.alert(
                'Error',
                'Email is already taken',
                [
                    {text: 'OK', onPress: () => this.props.navigation.navigate("Signup")}
                ]
            )
        }else{
            const hashedPassword = await Crypto.digestStringAsync(
                Crypto.CryptoDigestAlgorithm.SHA256,
                this.state.password
              );

            this.pushUser(uuid, this.state.firstname, this.state.username,this.state.age,hashedPassword,this.state.email)
            const { status } = await Permissions.getAsync(Permissions.LOCATION);
                    if(banner == 'true'){
                        this.props.navigation.navigate("LoginSuccess")
                    }
                    else if(status !== 'granted'){
                        console.log('Permission not provided');
                        this.props.navigation.navigate("LocationServices")
                    }                      
                    else {
                        const userlocation = await Location.getCurrentPositionAsync();
                        this.setState({
                                location: userlocation
                            })
                        AsyncStorage.setItem('location', JSON.stringify(userlocation))
                        this.props.navigation.navigate("TopicSelection")
                        
                    }
            }
        
    }
    
    
    render(){
        return (
            <ImageBackground style={{width: '100%', height: '100%'}}source={require("../assets/bg.jpg")}>
            
            <View style={styles.container}>
            <KeyboardAvoidingView style={styles.container} behavior="padding">
                <View style={styles.row}>
                    <Text style={styles.textStyle}>Firstname:</Text>
                    <TextInput
                    style={styles.textBox}
                    placeholder=" Firstname"
                    onChangeText={(firstname) => this.setState({ firstname })}
                    value={this.state.firstname}
                    />
                </View>
                <View style={styles.row}>
                    <Text style={styles.textStyle}>Username:</Text>
                    <TextInput
                    style={styles.textBox}
                    placeholder=" Username"
                    onChangeText={(username) => this.setState({ username })}
                    value={this.state.username}/>
                </View>
                <View style={styles.row}>
                    <Text style={styles.textStyle}>Age:</Text>
                    <TextInput
                    style={styles.textBox}
                    placeholder=" Age"
                    onChangeText={(age) => this.setState({ age })}
                    value={this.state.age}
                    keyboardType="numeric"
                    maxLength={2}/>
                </View>
                <View style={styles.row}>
                    <Text style={styles.textStyle}>Password:</Text>
                    <TextInput
                    secureTextEntry={true}
                    style={styles.textBox}
                    placeholder=" Password"
                    onChangeText={(password) => this.setState({ password })}
                    value={this.state.password}/>
                </View>
                <View style={styles.row}>
                    <Text style={styles.textStyle}>Email:</Text>
                    <TextInput
                    style={styles.textBox}
                    placeholder=" Email"
                    onChangeText={(email) => this.setState({ email })}
                    value={this.state.email}/>
                </View>
                <View style={styles.btnRow}>
                    <TouchableOpacity onPress={this.SignUp} style={styles.btn}>
                        <Text style={styles.btnTextColor}>Submit</Text>
                    </TouchableOpacity>
                </View>
                </KeyboardAvoidingView>
            </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'stretch',
      justifyContent: 'center',
      backgroundColor: '#E3E3D7'
    },
    textStyle: {
        padding: 10,
        alignItems: 'flex-start',
        color: "#7886A3",
        fontWeight: "bold"
    },
    textBox: {
        height: 40,
        borderColor: "#7886A3",
        borderWidth: 1,
        color: "#7886A3",
        width: "60%",
        borderRadius: 8,
        alignItems: 'flex-start',
        padding: 4,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
    },
    btnRow : {
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "flex-end",
        top: 20,
        right: 30,
    },
    messageStyle: {
        color: "red",
        fontWeight: "bold",
        textAlign: "center"
    },
    btn: {
        backgroundColor: "#7886A3",
        borderWidth: 1,
        borderColor: "white",
        borderWidth: 0.5,
        borderRadius: 8,
        
    },
    btnTextColor: {
        color: "white",
        padding: 10,
    }
})