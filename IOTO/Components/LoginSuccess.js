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
  ImageBackground,
  AsyncStorage,
  Linking
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';;
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import {Banner} from 'react-native-paper';
import Graph from './Home';
import { Icon, CheckBox} from "react-native-elements";

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        console.ignoredYellowBox = [
            'Setting a timer'
            ];
        this.state = {
            username:"",
            password: "",
            guest: false,
            uuid: "",
            IsGuest: false,
            status: true,
            visible: true,
            pickedStateAb: "",
            topics: [],
            usLegislators: [],
            sortedLegislators: [],
            location: "",
            address: "",
            googleofficials: [],
            iotoofficials: [],
            topicsArray: [],
            topicsArraySpliced1: [],
            topicsArraySpliced2: [],
            combinedArray: []
        }
    }

    async componentDidMount(){
        await this.getItem();
        await this.getUserData();
        await this.getNewsItem();
      }

    getNewsItem = async() => {
        for(var i =0; i < this.state.topics.length; i++){
            const selectedTopic = this.state.topics[i]
            const data = await fetch(`http://newsapi.org/v2/everything?q=${selectedTopic}&from=2020-03-11&sortBy=publishedAt&apiKey=f422c089cf0140c69af0b0b791dff718`)
            .then(response => response.json())
            .then(responseJson => {
                this.state.topicsArray.push(responseJson.articles);
            })
        }
        var combinedArrayNew = [];
        if(this.state.topicsArray.length == 1){
            this.setState({
                topicsArraySpliced1 : this.state.topicsArray.splice(0,5)
            })
            combinedArrayNew.push(this.state.topicsArraySpliced1)
        }else{
            this.setState({
                topicsArraySpliced1: this.state.topicsArray[0].splice(0,2),
                topicsArraySpliced2: this.state.topicsArray[1].splice(0,3)
            })
            combinedArrayNew.push(this.state.topicsArraySpliced1);
            combinedArrayNew.push(this.state.topicsArraySpliced2)
        }
         var newArr = [];
        for(var i =0; i< combinedArrayNew.length;i++){
            newArr = newArr.concat(combinedArrayNew[i]);
        }

        this.setState({
            combinedArray: newArr
        })
    }
    
    getUserData = async () => {
        try {
            const location = await AsyncStorage.getItem('location')
            const address = await AsyncStorage.getItem('address')
            const googleofficials = await AsyncStorage.getItem('googleofficials')
            const iotoofficials = await AsyncStorage.getItem('iotoofficials')
            const topics = await AsyncStorage.getItem('topics')
            const pickedStateAb = await AsyncStorage.getItem('pickedStateAb')
            this.setState({
                location: JSON.parse(location),
                address: address,
                googleofficials: JSON.parse(googleofficials),
                iotoofficials: JSON.parse(iotoofficials),
                topics: JSON.parse(topics),
                pickedStateAb: JSON.parse(pickedStateAb)
              })
        }
        catch(e) {
            console.log(e)
      }
    }

    signUpUser = async () => {
        await AsyncStorage.setItem('FromBanner', 'true')
        this.setState({
            visible: false
        })
        this.props.navigation.navigate("Signup")
    }

    getItem = async () => {
            let i=""
            const x = await AsyncStorage.getItem('IsGuest')
            if (x =="true"){
                i=true
            }
            else{
                i=false
            }
            this.setState({
                IsGuest: i
            })
    }



    render() {
        const {combinedArray} = this.state;
        return(
            <View style={styles.container}>
            <ScrollView contentContainerStyle={{paddingBottom: 60}}>
            <View>
                {this.state.IsGuest ?
                    <Banner
                        visible={this.state.visible}
                        actions={[
                            {
                            label: 'Create Account',
                            onPress: () => this.signUpUser()
                            },
                            {
                            label: 'Hide',
                            onPress: () => this.setState({ visible: false }),
                            },
                        ]}
                        >
                        You are currently signed in as a guest. Create an account to save your data.
                    </Banner>: null
                }

                <Graph/>
                
                    <View style={styles.container}>
                    <Text style={styles.titleText} numberOfLines={5}>News Related to Topics</Text>
                    {
                        combinedArray.map((item, id) => {
                            return (
                                <Card  key={id} style={styles.cardContainer}>
                                <TouchableOpacity key={id} onPress={() => Linking.openURL(`${item.url}`)}>
                                    <CardImage style={styles.imgStyle} source={{uri: `${item.urlToImage}`}}/>
                                    <CardContent style={styles.cardContentStyle}><Text style={styles.textStyle}>{item.title}</Text></CardContent>
                                </TouchableOpacity>
                                </Card>
                            )
                        })
                    /* <Card style={styles.cardStyle}>
                        <CardImage style={styles.imgStyle} source={{uri: "https://149382914.v2.pressablecdn.com/wp-content/uploads/2019/10/french-language-debate-canadian-election-composite.jpg"}}/>
                        <CardContent style={styles.cardContentStyle}><Text style={styles.textStyle}>Canadian Politics</Text></CardContent>
                    </Card>
                    <View style={styles.rowfortwocards}>
                        <Card style={styles.cardStyle}>
                            <CardImage style={styles.cardContentStyle}/>
                        </Card>
                        <Card style={styles.cardStyle}>
                            <CardImage style={styles.cardContentStyle}/>
                        </Card>
                    </View>
                    <View style={styles.rowforonecard}>
                        <Card style={styles.cardStyle}>
                            <CardImage style={styles.cardContentStyle} />
                        </Card>
                    </View> */}
                    </View>
                    </View>
                    </ScrollView>
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
    bottomContainer: {
        position: 'absolute',
        flexDirection: 'row',
        width: '100%', 
        height: 50, 
        backgroundColor: '#FF9800', 
        justifyContent: 'center', 
        bottom: 10
    },
    cardContainer: {
        width: "95%",
        backgroundColor: "#7886A3",
        marginBottom: 5,
        marginTop: 10,
        borderRadius: 10,
        overflow: 'hidden'
    
      },
    imgStyle: {
        height: "80%",
    },
    cardContentStyle: {
        width: '100%',
        height: "10%",
        backgroundColor: "#7886A3",
    }, 
    
    textStyle: {
        color: "white",
        fontWeight: "bold",
        fontSize: 18,
    },
    titleText: {
        fontSize: 30,
        alignSelf: 'center',
        fontWeight: 'bold',
        textDecorationLine: 'underline'

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
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#E3E3D7",
    },
    
    rowfortwocards: {
        flexDirection: "row",
        height: 400
    },

    rowforonecard: {
        height: 250
    },

    
    textStyle2: {
        padding: 5
    },
    buttonStyle: {
        width: "73%",
        padding: 10,
        backgroundColor: "#7886A3",
        borderRadius: 8,
        borderWidth: 0.5,
        borderColor: "white"
    },
    textStyle2 : {
        fontWeight: "bold",
        fontSize: 13,
        color: "white",
        flex: 1,
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',
        
    }
})