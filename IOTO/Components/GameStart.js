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

export default class Login extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          
      }
  }
    render(){
        return (
          <View style={styles.container}>
            <View style={styles.centerContainer}>
              <Image style={styles.imageLogo} source={{uri: "https://www.ioto.ca/assets/images/ioto-logo-no-bg-alt.png" }}></Image>
              <View style={styles.buttonContainer}>
                {/* Button */}
                <TouchableOpacity style={styles.getStartedButton} onPress={() => this.props.navigation.navigate("Gamification")}><Text style={styles.textStyle}>Play Now!</Text></TouchableOpacity>
                <TouchableOpacity style={styles.signInButton} onPress={() => this.props.navigation.navigate("Leaderboard")}><Text style={styles.textStyle2}>Leaderboard</Text></TouchableOpacity>
                
              </View>
            </View>
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
