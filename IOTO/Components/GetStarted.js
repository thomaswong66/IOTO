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
  ImageBackground
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { YellowBox } from "react-native";
import ActionBarImage from '../pages/ActionBarImage';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

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
      await AsyncStorage.setItem("IsGuest", 'true')
      // if(this.state.username != null && this.state.password != null) {
      //     let response = await fetch('https://ioto-674a4.firebaseio.com/users.json');             
      //     let responseJSON = await response.json();
      //     let users = Object.values(responseJSON)
      //     const topics = await AsyncStorage.getItem('topics')

      //     let usersUuid = Object.keys(responseJSON);
      //     for ( var i in users){
              
      //         if (users[i].username == this.state.username & users[i].password == this.state.password){

      const { status } = await Permissions.getAsync(Permissions.LOCATION);
      if(status !== 'granted'){
          console.log('Permission not provided');
          this.props.navigation.navigate("LocationServices")
      }
      else {
          const userlocation = await Location.getCurrentPositionAsync();
          this.setState({
                  location: userlocation
              })
          AsyncStorage.setItem('location', JSON.stringify(userlocation))
          this.props.navigation.navigate("TopicSelectionWithoutPicker")
      }
  };
    render(){
        return (
          <View style={styles.container}>
            <View style={styles.centerContainer}>
              <Image style={styles.imageLogo} source={{uri: "https://www.ioto.ca/assets/images/ioto-logo-no-bg-alt.png" }}></Image>
              <Text style={styles.textStyle3}>{"\n"}{"\n"}The perfect political app to keep track of news, schedules and results for your favourite parties, and candidates{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}</Text>
              <View style={styles.buttonContainer}>
                {/* Button */}
                <TouchableOpacity style={styles.getStartedButton} onPress={this.onSubmit}><Text style={styles.textStyle}>Let's Get Started</Text></TouchableOpacity>
                <TouchableOpacity style={styles.signInButton} onPress={() => this.props.navigation.navigate("Login")}><Text style={styles.textStyle2}>Sign In</Text></TouchableOpacity>
                
              </View>
            </View>
            {/* <Text style={styles.textStyle5}>{"\n"}{"\n"}Join <Text style={{fontWeight: "bold"}}>1,7000,000</Text> other political fans</Text> */}
            <Text style={styles.textStyle4}>{"\n"}By using this service you accept <Text style={{textDecorationLine: "underline", fontWeight: 'bold'}} onPress={() => Linking.openURL('https://www.ioto.ca/legal.html#terms-and-conditions-text')}>Terms & Conditions</Text> and <Text style={{textDecorationLine: "underline", fontWeight: 'bold'}} onPress={() => Linking.openURL('https://www.ioto.ca/legal.html')}>Privacy Policy</Text></Text>
        
          </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: "#E3E3D7"
  },
  buttonContainer: {
    paddingTop: 50,
  },
  getStartedButton: {
    paddingHorizontal: 100,
    paddingVertical: 20,
    backgroundColor: "#7886A3",
    borderRadius: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  textStyle: {
    color: '#FFFFFF'
  },
  textStyle2: {
    paddingTop: 10,
    color: '#5c5c5c',
    textAlign: "center"
  },
  textStyle3: {
    textAlign: "center",
    width: 325,
    // fontFamily: "sans-serif-medium",
  },
  textStyle4: {
    textAlign: "center",
    width: 325,
    // fontFamily: "sans-serif-light",
  },
  textStyle5:{
    textAlign: "center",
    // fontFamily: "sans-serif-medium",/
    fontSize: 20
  },
  centerContainer: {
    justifyContent: "center", 
    alignItems: "center",
    flex: 0.8
  },
  imageLogo: { 
    width: 200, 
    height: 100,
    borderRadius: 5,
    backgroundColor: "#7886A3"
  }
})
