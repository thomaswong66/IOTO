import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, StyleSheet, Text, View, ImageBackground, Alert } from 'react-native';
import { Icon, CheckBox} from "react-native-elements";

export default class Gamification extends Component {
    constructor(props) {
        super(props);
        this.state = { 

        },
        this.wrongAnswer = this.wrongAnswer.bind(this);
        this.TopicSelectionCheck = this.TopicSelectionCheck.bind(this);
        this.CandidateSelectionCheck = this.CandidateSelectionCheck.bind(this);
        this.LoginSuccessCheck = this.LoginSuccessCheck.bind(this);
        this.GameStartCheck = this.GameStartCheck.bind(this);
        this.ProfileCheck = this.ProfileCheck.bind(this);
    }
 wrongAnswer() {
        Alert.alert(
            'Wrong!',
            'Try Again!',
            [
                {text: 'OK', onPress: () => this.props.navigation.navigate("Gamification3")}
            ]
        )
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
                {text: 'Yes', onPress: () => this.props.navigation.navigate("Profile")}
            ]
        )
    }

    render() {
        return(
            <View style={styles.container}>
                    <View style={styles.TopContainer}>
                        <ImageBackground style={{width:'100%', height:'100%'}} source={require('../assets/travel-visa.jpg')} blurRadius={5}>
                            <View style={{justifyContent: 'center', textAlign: 'center'}}>
                                <Text style={{textAlign: 'center', color:'black', fontSize:30,}}>{"\n"}Foreign Policy{"\n"}</Text>
                                <Text style={styles.textstyle}>Which country’s citizens can travel to the most countries and territories without a visa?</Text>
                            </View>
                        </ImageBackground>
                    </View>
                <View style={styles.MiddleContainer}>
                    <TouchableOpacity style={styles.answerOption1} onPress={this.wrongAnswer}>
                        <Text style={styles.textstyleAnswer}>Canada</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.answerOption2} onPress={() => this.props.navigation.navigate("GamificationCorrect3")}>
                        <Text style={styles.textstyleAnswer}>Denmark</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.answerOption3} onPress={this.wrongAnswer}>
                        <Text style={styles.textstyleAnswer}>Vatican City</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.answerOption4} onPress={this.wrongAnswer}>
                        <Text style={styles.textstyleAnswer}>Italy</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.container}>
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
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
    },
    TopContainer: {
        flexDirection: 'row',
        height: '40%',
    },
    MiddleContainer: {
        flexDirection: 'column',
        height: '40%',
        backgroundColor: 'white'
    },
    answerOption1: {
        flex: 1,
        backgroundColor: '#a2b9bc',
        padding: 10,
        marginRight: 10,
        marginLeft: 10,
        marginTop: 10,
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 15/2
    },
    answerOption2: {
        flex: 1,
        backgroundColor: '#878f99',
        padding: 10,
        marginRight: 10,
        marginLeft: 10,
        marginTop: 10,
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 15/2
    },
    answerOption3: {
        flex: 1,
        backgroundColor: '#b2ad7f',
        padding: 10,
        marginRight: 10,
        marginLeft: 10,
        marginTop: 10,
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 15/2
    },
    answerOption4: {
        flex: 1,
        backgroundColor: '#99878f',
        padding: 10,
        marginRight: 10,
        marginLeft: 10,
        marginTop: 10,
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 15/2
    },
    textstyle: {
        color: 'black',
        fontSize: 20,
        textAlign: 'center',
        marginLeft: 5,
        marginRight: 5
    },
    textstyleAnswer: {
        color: '#302727',
        fontSize: 20,
        textAlign: 'center'
    },
    bottomContainer: {
        alignItems: 'flex-end',
        flexDirection: 'row',
        height: '29.75%',
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