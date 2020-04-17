import React, { Component } from "react";
import {
    Platform,
    TouchableOpacity,
    StyleSheet,
    View,
    Text,
    Image,
    ActivityIndicator,
    ScrollView,
    Alert,
    ImageBackground
  } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack'
import { YellowBox } from "react-native";
import {Banner} from 'react-native-paper'
import ActionBarImage from '../pages/ActionBarImage';
import {retrieveData, storeData} from './index.js'

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      IsGuest: "",
      status: true,
      visible: true,
    };
  }
  componentDidMount(){
    this.setState({
      IsGuest: retrieveData("IsGuest")
    })
  }
    // Adding header title, color and font weight
    static navigationOptions = {
        title: "",
        headerLeft: <ActionBarImage />,
        headerStyle: {
        backgroundColor: "#121212"
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
        fontWeight: "bold"
        }
    };
    render() {
      console.log(this.state.IsGuest)

        return (
        <ImageBackground source={{uri: 'https://i.imgur.com/or0M2Fb.jpg'}} style={{width: '100%', height: '100%'}}>
          <ScrollView style={styles.container}>
        
            {this.state.IsGuest ?
            <Banner
          visible={this.state.visible}
          actions={[
            {
              label: 'Create Account',
              onPress: () => this.props.navigation.navigate("Signup")
            },
            {
              label: 'Hide',
              onPress: () => this.setState({ visible: false }),
            },
          ]}
        >
          You are currently signed in as a guest. Create an account to save your data.
          </Banner>: null}
                <View style={{justifyContent: "center", alignItems: "center", flex: 1}}>
                    <TouchableOpacity style={styles.getStartedButton} onPress={() => this.props.navigation.navigate("GetStarted")}><Text style={styles.textStyle}>Get Started</Text></TouchableOpacity>
                </View>
          </ScrollView>
        </ImageBackground>

        );
    }
}

// Adding Header Bar In React Native
export default createStackNavigator({
  Home: {
    screen: LandingPage
  }
});

YellowBox.ignoreWarnings([
  "Warning: isMounted(...) is deprecated",
  "Module RCTImageLoader"
]);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
  },
  getStartedButton: {
    width: "30%",
    padding: 15,
    backgroundColor: "#3E46CF",
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center"
  },
  textStyle : {
    fontWeight: "bold",
    fontSize: 13,
    color: "white"
 }
});