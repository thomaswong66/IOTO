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
  ImageBackground,
  SafeAreaView
} from 'react-native';
import firebase from 'firebase'
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import firebaseConfig from '../backend/config/config'
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import { Icon } from 'react-native-elements'


export default class LocationServices extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
          status: true,
          username:"",
          password: "",
          message:"",
          loading: true,
          errorMessage: "",
          address: "",
          location: "",
          userstate: "",
          googleofficials: [],
          iotoofficials: []
        };
        if (firebase.apps.length === 0){
            firebase.initializeApp(firebaseConfig);
        }
    }

    storeData = async () => {
        try {
          AsyncStorage.setItem('location', JSON.stringify(this.state.location))
          AsyncStorage.setItem('address', JSON.stringify(this.state.address))
          AsyncStorage.setItem('userstate', JSON.stringify(this.state.userstate))
          AsyncStorage.setItem('googleofficials', JSON.stringify(this.state.googleofficials))
          AsyncStorage.setItem('iotoofficials', JSON.stringify(this.state.iotoofficials))
        } catch (e) {
          // saving error
        }
      }

    allowlocation = async () => {
        await this.getLocation();
        // console.log('Your Location:', this.state.location)
        if(this.state.location !== ""){
            await this.getAddress();
            // console.log('Your Address:', this.state.address)
            await this.getCivicRep();
            // console.log('Your Google Reps:', this.state.googleofficials)
            await this.getIOTORep();
            // console.log('Your IOTO Reps:', this.state.iotoofficials)
            await this.storeData();
            this.props.navigation.navigate("TopicSelectionWithoutPicker")
        }

        if(this.state.location == ""){
            this.props.navigation.navigate("TopicSelection")
        }
    }

    getCivicRep = async () => {
        const source = 'https://www.googleapis.com/civicinfo/v2/representatives?address=' + this.state.address + '&key=AIzaSyAY-PIZkP-MlZSL0K7pPszQjxLRZS8vJLg'
        // console.log(source)
        try{
            var response = await fetch(source)
            let responseJSON = await response.json();
            let data = Object.values(responseJSON)
            const officials = data[4].map(function(official) {
                // console.log(official)
                return {
                    name: official.name,
                    photourl: official.photoUrl
                }
            })
            this.setState({
                googleofficials: officials
            })
        }
        catch (err){
            console.log(err)
        }
    }

    getIOTORep = async () => {
        const source = 'https://8wa1e0h7sj.execute-api.us-west-2.amazonaws.com/testing/us-legislators?state=' + this.state.userstate
        try{
            var response = await fetch(source)
            let responseJSON = await response.json();
            let data = Object.values(responseJSON)
            const officials = data[4].map(function(official) {
                return {
                    name: official.full_name
                }
            })
            this.setState({
                iotoofficials: officials
            })
        }
        catch (err){
            console.log(err)
        }
    }

    getAddress = async () => {
        const source = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + this.state.location.coords.latitude + ',' + this.state.location.coords.longitude + '&key=AIzaSyAY-PIZkP-MlZSL0K7pPszQjxLRZS8vJLg'
        try{
            var response = await fetch(source)
            let responseJSON = await response.json();
            let data = Object.values(responseJSON)
            let address_components_data = data[1][0].address_components
            let stateindex = -1
            for (var i=0; i<address_components_data.length; i++) {
                let types = address_components_data[i].types
                if(types.includes("administrative_area_level_1")){
                    stateindex = i
                }
            }
            const userstate = data[1][0].address_components[stateindex].short_name
            const useraddress = data[1][0].formatted_address
                this.setState({
                loading: false,
                userstate: userstate,
                address: useraddress
                })
            }

        catch(err) {
            console.log(err) //to catch the errors if any
        }
    }

    getLocation = async() => {
        const { status } = await Permissions.askAsync(Permissions.LOCATION);
        console.log(status)

        AsyncStorage.setItem('status', JSON.stringify(status));
        if(status !== 'granted'){
            console.log('Permission denied!');
            this.setState({
                errorMessage: 'Permission denied'
            })
        }
        if(status == 'granted') {
            const userlocation = await Location.getCurrentPositionAsync();
            this.setState({
                    location: userlocation
                })
        }
    }

    tryAsGuest = () => {
        storeData("IsGuest", true)
        storeData("UUID", uuidv4())
        this.props.navigation.navigate("loginSuccess")
    }

    onSubmit =  async () => {
        this.props.navigation.navigate("LocationServices")
    }

    onSubmit2 = async () => {
        this.props.navigation.navigate("TopicSelection")
    }
    
    render(){
        return (
            <View style={styles.container}>
                <Card style={styles.cardStyle}>
                    <CardContent>
                        <View style={styles.iconStyle}>
                        <Icon reverse name="ios-pin" color="#7886A3" size={100} type="ionicon"/>
                        </View>
                        <View style={styles.heading}>
                            <Text style={styles.textStyle}>The IOTO app would like to access and use your location. The location will help us gather personalized data for you to view.</Text>
                        </View>
                        <View style={styles.bottom}>
                            <TouchableOpacity onPress={this.allowlocation} style={styles.buttonStyle}>
                                <Text style={styles.textStyle}>Grant Access</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.textUnderStyle}>
                            <TouchableOpacity onPress={this.onSubmit2}>
                                <Text style={styles.textStyle}>No, I will choose location manually.</Text>
                            </TouchableOpacity>
                        </View>
                    </CardContent>
                </Card>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      alignItems: 'center',
      backgroundColor: "#E3E3D7",
      justifyContent: 'center',
    },

    buttonStyle: {
        width: "40%",
        padding: 10,
        backgroundColor: "#00D971",
        borderRadius: 8,
        borderWidth: 0.5,
        borderColor: "white",
        alignSelf: "center",
        position: "absolute",
        bottom: 90
    },
    cardStyle: {
        height: "80%",
        width: "90%",
        justifyContent: "flex-end",
        borderRadius: 15,
        backgroundColor: "#2877E0"
    },
    iconStyle: {
        flex: 1,
        top: 50,
        justifyContent: "center",
        alignSelf: "center",
        alignItems: "center"
    },
    heading: {
        top: 30
    },
    textStyle : {
        color: "white",
        textAlign: "center"
    },
    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 36
      },
    
    textUnderStyle: {
        justifyContent: "center",
        alignSelf: "center",
        bottom: 110
    }
  });