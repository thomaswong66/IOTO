import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  Image,
  ActivityIndicator,
  ScrollView,
  Alert,
  AsyncStorage,
  KeyboardAvoidingView,
  ImageBackground,
  Linking,
  FlatList,
  Dimensions
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { YellowBox } from "react-native";
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { Icon, CheckBox, ListItem} from "react-native-elements";
import Swiper from 'react-native-swiper';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';



export default class Profile extends React.Component {
    render(){
        return (
            <View style={styles.mainContainer}>
                <Text style={styles.profileBar}>Profile</Text>
                <View style={styles.header}></View>
                <Image style={styles.avatar} source={{uri: 'https://vignette.wikia.nocookie.net/thenhl/images/8/8c/ImagesCAYI3VZA.jpg'}}/>
                <View style={styles.body}>
                    <View style={styles.bodyContent}>
                        <Text style={styles.profileName}>Sahil</Text>
                        <Text style={styles.profileDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pharetra diam eget augue iaculis, sed scelerisque lectus fringilla.</Text>
                    </View>
                </View>
                <View style={{paddingTop: 150}}>
                    <View style={styles.counterContainer}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.counterNum2}> 1092</Text>
                            <Text style={styles.counterNum}> 13 </Text>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <View style={styles.counterSubContainer2}>
                                <Icon style={{textAlign: "center"}} name="gamepad" type="material-community" size={25} color={'green'}/> 
                                <Text style={styles.counterText}>POINTS</Text>
                            </View>
                            <View style={styles.counterSubContainer}>
                                <Icon style={{textAlign: "center"}} name="favorite" type="material" size={25} color={'red'}/> 
                                <Text style={styles.counterText}>CANDIDATES</Text>
                            </View>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.signOut} onPress={() => this.props.navigation.navigate("GetStarted")}>
                                <Text>Sign out</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
                <View style={{ flex: 0.9}}>
                    
                    {/* <View style={{ flex: 0.9, flexDirection: 'column', justifyContent: 'center', padding: 15 }}>
                    <Text style={{fontWeight: 'bold', fontFamily: "sans-serif-medium", fontSize:15}}>YOUR TOPICS</Text>
                        <View style={{ flex: 0.42, flexDirection: 'row', paddingRight: 5 }}>
                            <Icon reverse name="home" color="blue" type="material"/>
                            <Icon reverse name="trees" color="green" type="foundation"/>
                            <Icon reverse name="ios-school" color="black" type="ionicon"/>
                            <Icon reverse name="ios-globe" color="purple" type="ionicon" iconStyle={styles.iconStyle}/>
                            <Icon reverse name="ios-heart" color="#F6EB09" type="ionicon" iconStyle={styles.iconStyle}/>
                            <Icon reverse name="ios-cash" color="red" type="ionicon" iconStyle={styles.iconStyle}/>
                        </View>

                    </View> */}
                </View>

                
                




            
                {/* Navbar */}
                <View style={styles.bottomContainer}>
                    <View style={styles.buttomContainer1}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("Compare")}>
                            <Icon name="playlist-add" type="material" size={35} color={'white'}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttomContainer2}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("CandidateSelection")} >
                            <Icon name="favorite" type="material" size={35} color={'white'}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttomContainer3}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("LoginSuccess")} >
                            <Icon name="home" type="material" size={35} color={'white'}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttomContainer4}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("GameStart")}>
                            <Icon name="gamepad-variant" type="material-community" size={35} color={'white'}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttomContainer5}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("Profile")}>
                            <Icon name="account-circle" type="material" size={35} color={'white'}/>
                        </TouchableOpacity>
                    </View>
                </View>

                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    signOut: {
        height: 30,
        width: "100%",
        // top: 40,
        backgroundColor: "#7886A3",
        alignItems: "center",
        justifyContent: "center",
        // textAlign: "center",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "black",
        // paddingBottom: 50,
        marginBottom: 60,
        marginTop: 20

    },
    mainContainer: {
        flex: 1,
    },
    barContainer: {
        padding: 20
    },
    profileBar:{
        color: '#5c5c5c',
        textAlign: "center",
        fontSize: 20,
        paddingTop: 5,
        fontFamily: "sans-serif-medium",
        backgroundColor: '#dbdbdb', 
    },
    buttonContainer: {
        paddingTop: 50,
    },
    imageLogo: { 
        width: 200, 
        height: 100,
        borderRadius: 5,
        backgroundColor: "black"
    },
    profileImage: { 
        width: 90,
        height: 90,
        borderRadius: 80
    },
    header:{
        backgroundColor: "#c7c7c7",
        height:175,
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom:10,
        alignSelf:'center',
        position: 'absolute',
        marginTop:130
    },
    profileName:{
        fontSize:22,
        color:"#FFFFFF",
        fontWeight:'600',
    },
    body:{
        marginTop:40,
    },
    bodyContent: {
        flex: 1,
        alignItems: 'center',
        padding:10,
    },
    profileName:{
        fontSize:28,
        color: "#696969",
        fontWeight: "600"
    },
    info:{
        fontSize:16,
        color: "#00BFFF",
        marginTop:10
    },
    profileDesc:{
        fontSize:16,
        color: "#696969",
        marginTop:10,
        textAlign: 'center'
    },
    buttonContainer: {
        marginTop:10,
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:250,
        borderRadius:30,
        backgroundColor: "#00BFFF",
    },
    textstyleAnswer: {
        color: '#302727',
        fontSize: 20,
        textAlign: 'center'
    },
    bottomContainer: {
        alignItems: 'flex-end',
        flexDirection: 'row',
        width: '100%', 
        height: 50, 
        backgroundColor: '#FF9800', 
        justifyContent: 'center', 
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        marginTop: 60
    }, 
    buttomContainer1 : {
        flex: 1,
        backgroundColor: '#7886A3',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth: 0.5,
        borderRightColor: 'white',
    },
    buttomContainer2: {
        flex: 1,
        backgroundColor: '#7886A3',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth: 0.5,
        borderRightColor: 'white',
    },
    buttomContainer3: {
        flex: 1,
        backgroundColor: '#7886A3',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth: 0.5,
        borderRightColor: 'white',
    },
    buttomContainer4: {
        flex: 1,
        backgroundColor: '#7886A3',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth: 0.5,
        borderRightColor: 'white',
    },
    buttomContainer5: {
        flex: 1,
        backgroundColor: '#7886A3',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    counterContainer: {
        backgroundColor: 'white', 
        padding: 10
    },
    counterText: { 
        textAlign: "center",
        fontWeight: 'bold',
        fontFamily: "sans-serif-medium",
        paddingLeft: 5
    },
    counterNum: { 
        flex: 1, 
        textAlignVertical: 'center', 
        textAlign: 'center',
        fontFamily: "sans-serif-light",
        borderRightWidth: 1,
        fontSize: 16
    },
    counterNum2: { 
        flex: 1, 
        textAlignVertical: 'center', 
        textAlign: 'center',
        fontFamily: "sans-serif-light",
        borderRightWidth: 1,
        borderLeftWidth: 1,
        fontSize: 16
    },
    counterSubContainer: {
        flex: 1, 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRightWidth: 1
    },
    counterSubContainer2: { 
        flex: 1, 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRightWidth: 1, 
        borderLeftWidth: 1
    },
})
