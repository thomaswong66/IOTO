import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, StyleSheet, Text, View, ImageBackground, Alert } from 'react-native';
import { Icon, CheckBox} from "react-native-elements";

export default class GamificationCorrect2 extends Component {
    constructor(props) {
        super(props);
        this.state = { 

        },
        this.TopicSelectionCheck = this.TopicSelectionCheck.bind(this);
        this.CandidateSelectionCheck = this.CandidateSelectionCheck.bind(this);
        this.LoginSuccessCheck = this.LoginSuccessCheck.bind(this);
        this.GameStartCheck = this.GameStartCheck.bind(this);
        this.ProfileCheck = this.ProfileCheck.bind(this);
    }

    TopicSelectionCheck() {
        Alert.alert(
            'Are you sure that you want to leave the page?!',
            'Your Game will not be saved and you points will be lost!',
            [
                {text: 'Cancel'},
                {text: 'Yes', onPress: () => this.props.navigation.navigate("TopicSelection")}
            ]
        )
    }

    CandidateSelectionCheck() {
        Alert.alert(
            'Are you sure that you want to leave the page?!',
            'Your Game will not be saved and you points will be lost!',
            [
                {text: 'Cancel'},
                {text: 'Yes', onPress: () => this.props.navigation.navigate("CandidateSelection")}
            ]
        )
    }

    LoginSuccessCheck() {
        Alert.alert(
            'Are you sure that you want to leave the page?!',
            'Your Game will not be saved and you points will be lost!',
            [
                {text: 'Cancel'},
                {text: 'Yes', onPress: () => this.props.navigation.navigate("LoginSuccess")}
            ]
        )
    }

    GameStartCheck() {
        Alert.alert(
            'Are you sure that you want to leave the page?!',
            'Your Game will not be saved and you points will be lost!',
            [
                {text: 'Cancel'},
                {text: 'Yes', onPress: () => this.props.navigation.navigate("GameStart")}
            ]
        )
    }

    ProfileCheck() {
        Alert.alert(
            'Are you sure that you want to leave the page?!',
            'Your Game will not be saved and you points will be lost!',
            [
                {text: 'Cancel'},
                {text: 'Yes', onPress: () => this.props.navigation.navigate("")}
            ]
        )
    }

    render() {
        return(
            <View>
                <ImageBackground style={{width:'100%', height:'100%'}} source={require('../assets/dark-ocean.jpg')} blurRadius={10}>
                <View style={styles.topContainer}>
                    <Text style={{fontSize:40, color:'limegreen'}}>Correct!</Text>
                    <Text style={{fontSize:20,marginLeft:30,marginRight:20,color:'white',lineHeight:30}}>{"\n"}As emerging economies growth has outpaced their ability to manage waste, an estimated of 8 million tons of plastic enters ocean each year. Command and Control regulation sets limits the pollution emissions or mandates the pollution-control technologies that must be used for industries.</Text>
                </View>
                <View style={styles.middleContainer}>
                    <TouchableOpacity style={styles.next} onPress={() => this.props.navigation.navigate("Gamification3")}>
                        <Text style={styles.textstyle}>Next Question</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.bottomContainer}>
                    <View style={styles.buttomContainer1}>
                        <TouchableOpacity onPress={this.TopicSelectionCheck}>
                            <Icon name="playlist-add" type="material" size={35} color={'white'}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttomContainer2}>
                        <TouchableOpacity onPress={this.CandidateSelectionCheck}>
                            <Icon name="favorite" type="material" size={35} color={'white'}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttomContainer3}>
                        <TouchableOpacity onPress={this.LoginSuccessCheck}>
                            <Icon name="home" type="material" size={35} color={'white'}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttomContainer4}>
                        <TouchableOpacity onPress={this.GameStartCheck}>
                            <Icon name="gamepad-variant" type="material-community" size={35} color={'white'}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttomContainer5}>
                        <TouchableOpacity onPress={this.ProfileCheck}>
                            <Icon name="account-circle" type="material" size={35} color={'white'}/>
                        </TouchableOpacity>
                    </View>
                </View>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    topContainer: {
        height: '75%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    middleContainer: {
        height: '15%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textstyle: {
        color: 'white'
    },
    next: {
        backgroundColor: '#7886A3',
        height: 50,
        width: 120,
        borderRadius: 25/2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottomContainer: {
        alignItems: 'flex-end',
        flexDirection: 'row',
        height: '10%',
        color: 'grey',
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
})