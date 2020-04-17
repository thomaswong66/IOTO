import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  TouchableHighlight,
  View,
  Text,
  ScrollView,
  Alert,
  AsyncStorage,
  Picker,
} from 'react-native';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import firebase from 'firebase';
import firebaseConfig from '../backend/config/config'
import { Icon, CheckBox } from 'react-native-elements'

export default class TopicSelection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username:"",
            password: "",
            guest: false,
            uuid: "",
            IsGuest: "",
            status: true,
            visible: true,
            states: [
                {
                    "name": "Pick a State",
                    "abbreviation": "None",
                    "image": "../assets/none.png"
                },
                {
                    "name": "Alabama",
                    "abbreviation": "AL",
                    "image": "../assets/alabama_al.png"
                },
                {
                    "name": "Alaska",
                    "abbreviation": "AK",
                    "image": "../assets/alaska_ak.png"
                },
                {
                    "name": "American Samoa",
                    "abbreviation": "AS",
                    "image": "../assets/none.png"

                },
                {
                    "name": "Arizona",
                    "abbreviation": "AZ",
                    "image": "../assets/arizona_az.png"
                },
                {
                    "name": "Arkansas",
                    "abbreviation": "AR",
                    "image": "../assets/arkansas_ar.png"
                },
                {
                    "name": "California",
                    "abbreviation": "CA",
                    "image": "../assets/california_ca.png"
                },
                {
                    "name": "Colorado",
                    "abbreviation": "CO",
                    "image": "../assets/colorado_co.png"
                },
                {
                    "name": "Connecticut",
                    "abbreviation": "CT",
                    "image": "../assets/connecticut_ct.png"
                },
                {
                    "name": "Delaware",
                    "abbreviation": "DE",
                    "image": "../assets/delaware_de.png"
                },
                {
                    "name": "District Of Columbia",
                    "abbreviation": "DC",
                    "image": "../assets/washington_d.c..png"
                },
                {
                    "name": "Federated States Of Micronesia",
                    "abbreviation": "FM",
                    "image": "../assets/none.png"
                    
                },
                {
                    "name": "Florida",
                    "abbreviation": "FL",
                    "image": "../assets/florida_fl.png"
                },
                {
                    "name": "Georgia",
                    "abbreviation": "GA",
                    "image": "../assets/georgia_ga.png"
                },
                {
                    "name": "Guam",
                    "abbreviation": "GU",
                    "image": "../assets/none.png"
                },
                {
                    "name": "Hawaii",
                    "abbreviation": "HI",
                    "image": "../assets/hawaii_hi.png"
                },
                {
                    "name": "Idaho",
                    "abbreviation": "ID",
                    "image": "../assets/idaho_id.png"
                },
                {
                    "name": "Illinois",
                    "abbreviation": "IL",
                    "image": "../assets/illinois_il.png"
                },
                {
                    "name": "Indiana",
                    "abbreviation": "IN",
                    "image": "../assets/indiana_in.png"
                },
                {
                    "name": "Iowa",
                    "abbreviation": "IA",
                    "image": "../assets/iowa_ia.png"
                },
                {
                    "name": "Kansas",
                    "abbreviation": "KS",
                    "image": "../assets/kansas_ks.png"
                },
                {
                    "name": "Kentucky",
                    "abbreviation": "KY",
                    "image": "../assets/kentuckey_ky.png"
                },
                {
                    "name": "Louisiana",
                    "abbreviation": "LA",
                    "image": "../assets/louisiana_la.png"
                },
                {
                    "name": "Maine",
                    "abbreviation": "ME",
                    "image": "../assets/maine_me.png"

                },
                {
                    "name": "Marshall Islands",
                    "abbreviation": "MH",
                    "image": "../assets/none.png"
                },
                {
                    "name": "Maryland",
                    "abbreviation": "MD",
                    "image": "../assets/maryland_md.png"
                },
                {
                    "name": "Massachusetts",
                    "abbreviation": "MA",
                    "image": "../assets/massachusetts_ma.png"
                },
                {
                    "name": "Michigan",
                    "abbreviation": "MI",
                    "image": "../assets/michigan_mi.png"
                },
                {
                    "name": "Minnesota",
                    "abbreviation": "MN",
                    "image": "../assets/minnesota_mn.png"
                },
                {
                    "name": "Mississippi",
                    "abbreviation": "MS",
                    "image": "../assets/mississippi_ms.png"
                },
                {
                    "name": "Missouri",
                    "abbreviation": "MO",
                    "image": "../assets/missouri_mo.png"
                },
                {
                    "name": "Montana",
                    "abbreviation": "MT",
                    "image": "../assets/montana_mt.png"
                },
                {
                    "name": "Nebraska",
                    "abbreviation": "NE",
                    "image": "../assets/nebraska_ne.png"
                },
                {
                    "name": "Nevada",
                    "abbreviation": "NV",
                    "image": "../assets/nevada_nv.png"
                },
                {
                    "name": "New Hampshire",
                    "abbreviation": "NH",
                    "image": "../assets/new_hampshure.png"
                },
                {
                    "name": "New Jersey",
                    "abbreviation": "NJ",
                    "image": "../assets/new_jersey.png"
                },
                {
                    "name": "New Mexico",
                    "abbreviation": "NM",
                    "image": "../assets/new_mexico.png"
                },
                {
                    "name": "New York",
                    "abbreviation": "NY",
                    "image": "../assets/new_york.png"
                },
                {
                    "name": "North Carolina",
                    "abbreviation": "NC",
                    "image": "../assets/north_carolina.png"
                },
                {
                    "name": "North Dakota",
                    "abbreviation": "ND",
                    "image": "../assets/north_dakota.png"
                },
                {
                    "name": "Northern Mariana Islands",
                    "abbreviation": "MP",
                    "image": "../assets/none.png"
                },
                {
                    "name": "Ohio",
                    "abbreviation": "OH",
                    "image": "../assets/ohaio_oh.png"
                },
                {
                    "name": "Oklahoma",
                    "abbreviation": "OK",
                    "image": "../assets/oklahoma_ok.png"
                },
                {
                    "name": "Oregon",
                    "abbreviation": "OR",
                    "image": "../assets/oregon_or.png"
                },
                {
                    "name": "Palau",
                    "abbreviation": "PW",
                    "image": "../assets/none.png"
                },
                {
                    "name": "Pennsylvania",
                    "abbreviation": "PA",
                    "image": "../assets/pennsylvania_pa.png"
                },
                {
                    "name": "Puerto Rico",
                    "abbreviation": "PR",
                    "image": "../assets/puerto_rico.png"
                },
                {
                    "name": "Rhode Island",
                    "abbreviation": "RI",
                    "image": "../assets/rhode_island.png"
                },
                {
                    "name": "South Carolina",
                    "abbreviation": "SC",
                    "image": "../assets/south_carolina.png"
                },
                {
                    "name": "South Dakota",
                    "abbreviation": "SD",
                    "image": "../assets/south_dakota.png"
                },
                {
                    "name": "Tennessee",
                    "abbreviation": "TN",
                    "image": "../assets/tennessee_tn.png"
                },
                {
                    "name": "Texas",
                    "abbreviation": "TX",
                    "image": "../assets/texas_tx.png"
                },
                {
                    "name": "Utah",
                    "abbreviation": "UT",
                    "image": "../assets/utah_ut.png"
                },
                {
                    "name": "Vermont",
                    "abbreviation": "VT",
                    "image": "../assets/vermont_vt.png"
                },
                {
                    "name": "Virgin Islands",
                    "abbreviation": "VI",
                    "image": "../assets/none.png"
                },
                {
                    "name": "Virginia",
                    "abbreviation": "VA",
                    "image": "../assets/virginia_va.png"
                },
                {
                    "name": "Washington",
                    "abbreviation": "WA",
                    "image": "../assets/washington_wa.png"
                },
                {
                    "name": "West Virginia",
                    "abbreviation": "WV",
                    "image": "../assets/west_virginia.png"
                },
                {
                    "name": "Wisconsin",
                    "abbreviation": "WI",
                    "image": "../assets/wisconsin_wi.png"
                },
                {
                    "name": "Wyoming",
                    "abbreviation": "WY",
                    "image": "../assets/wyoming_wy.png"
                }
            ],
            usState: "",
            checkbox1: false,
            checkbox2: false,
            checkbox3: false,
            checkbox4: false,
            checkbox5: false,
            checkbox6: false,
            checkbox7: false,
            checkbox8: false,
            checkbox9: false,
            checkbox10: false,
            checkbox11: false,
            checkbox12: false,
            checkbox13: false,
            checkbox14: false,
            checkbox15: false,
            checkbox16: false,
            checkbox17: false,
            checkbox18: false,
            checkbox19: false,
            checkbox20: false,
            checkbox21: false,
            pickedStateAb: "",
        }
        this.onSubmit = this.onSubmit.bind(this);
    }


    getStateOfficials = async () => {
        const source = 'https://www.googleapis.com/civicinfo/v2/representatives?address=' + this.state.address + '&key=AIzaSyAY-PIZkP-MlZSL0K7pPszQjxLRZS8vJLg'
        try{
            var response = await fetch(source)
            let responseJSON = await response.json();
            let data = Object.values(responseJSON)
            const officials = data[4].map(function(official) {
                return {
                    name: official.name,
                    photourl: official.photoUrl
                }
            })
            this.setState({
                stateofficials: officials
            })
        }
        catch (err){
            console.log(err)
        }
    }

    storeData = async () => {
        try {
          AsyncStorage.setItem('address', JSON.stringify(this.state.address))
          AsyncStorage.setItem('googleofficials', JSON.stringify(this.state.stateofficials))
        } catch (e) {
          // saving error
        }
      }

    onSubmit = async () => {
        const {states, usState} = this.state
        let topics= [];
        if(usState == 0 || usState == undefined){
            Alert.alert(
                'Error',
                'Please pick a state to continue',
                [
                    {text: 'OK', onPress: () => this.props.navigation.navigate("TopicSelection")}
                ]
            )
        }else{
            var pickedStateAb = states[usState].abbreviation;
            if(this.state.checkbox1 == false && this.state.checkbox2 ==false && this.state.checkbox3 ==false && this.state.checkbox4 ==false && this.state.checkbox5 ==false && this.state.checkbox6 ==false && this.state.checkbox7 ==false && this.state.checkbox8 ==false && this.state.checkbox9 ==false && this.state.checkbox10 ==false && this.state.checkbox11 ==false &&
                this.state.checkbox12 ==false && this.state.checkbox13 ==false && this.state.checkbox14 ==false && this.state.checkbox15 ==false && this.state.checkbox16 ==false && this.state.checkbox17 ==false && this.state.checkbox18 ==false && this.state.checkbox19 ==false && this.state.checkbox20 ==false && this.state.checkbox21 ==false){
                Alert.alert(
                    'Error',
                    'Pick atleast one topic to continue',
                    [
                        {text: 'OK', onPress: () => this.props.navigation.navigate("TopicSelection")}
                    ]
                )
            }else{  
                if(this.state.checkbox1 == true){
                    topics.push("Housing")
                }
                if(this.state.checkbox2 == true){
                    topics.push("Health")
                }
                if(this.state.checkbox3 == true){
                    topics.push("Environment")
                }
                if(this.state.checkbox4 == true){
                    topics.push("Education")
                }
                if(this.state.checkbox5 == true){
                    topics.push("Civil Rights")
                }
                if(this.state.checkbox6 == true){
                    topics.push("Social Welfare")
                }
                if(this.state.checkbox7 == true){
                    topics.push("International Affairs")
                }
                if(this.state.checkbox8 == true){
                    topics.push("Labor")
                }
                if(this.state.checkbox9 == true){
                    topics.push("Culture")
                }
                if(this.state.checkbox10 == true){
                    topics.push("Transportation")
                }
                if(this.state.checkbox12 == true){
                    topics.push("Macroeconomics")
                }
                if(this.state.checkbox13 == true){
                    topics.push("Agriculture")
                }
                if(this.state.checkbox14 == true){
                    topics.push("Public Lands")
                }
                if(this.state.checkbox15 == true){
                    topics.push("Immigration")
                }
                if(this.state.checkbox16 == true){
                    topics.push("Law and Crime")
                }
                if(this.state.checkbox17 == true){
                    topics.push("Domestic Commerce")
                }
                if(this.state.checkbox18 == true){
                    topics.push("Defense")
                }
                if(this.state.checkbox19 == true){
                    topics.push("Technology")
                }
                if(this.state.checkbox20 == true){
                    topics.push("Foreign Trade")
                }
                if(this.state.checkbox21 == true){
                    topics.push("Government Operations")
                }
                try {
                    await AsyncStorage.setItem('topics', JSON.stringify(topics))
                    await AsyncStorage.setItem('pickedStateAb', JSON.stringify(pickedStateAb)) 
                  } catch (e) {
                    console.log(e,)
                  }
                this.props.navigation.navigate("CandidateSelection", {pickedStateAb})
            }
        }
                var uuid = await AsyncStorage.getItem('uuid')
                var topics1 = await AsyncStorage.getItem('topics')
                firebase.database().ref('users/' + uuid).update({
                    topics: topics1
                });
            }


    render() {
        const {states} = this.state 
        return(
            <ScrollView>
                <View style={styles.container}>
                    <View>
                        <Card style={styles.rowCardStyle}>
                            <CardContent>
                                <Picker
                                    style={styles.pickerStyle}
                                    mode="dropdown"
                                    selectedValue={this.state.usState}
                                    onValueChange={(itemValue, itemIndex)=>this.setState({usState: itemValue})}>
                                    {states.map((item, index) => {
                                        return (<Picker.Item label={item.name} value={index} key={index}/>) 
                                    })}
                                </Picker>
                            </CardContent>
                        </Card>
                    </View>
                    <View style={styles.columnCards}>
                        <TouchableHighlight style={styles.touchableHighlightStyle} underlayColor="#E3E3D7" onPress={() => this.setState({ checkbox1: !this.state.checkbox1 })}>
                            <Card style={styles.columnCardStyle}>
                                <Icon reverse name="home" color="blue" type="material"/>
                                <CardContent><Text style={styles.cardTextStyle}> Housing</Text></CardContent>
                                <CheckBox value={this.state.checkbox1} checked={this.state.checkbox1} onPress={() => this.setState({ checkbox1: !this.state.checkbox1 })}/>
                            </Card>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.touchableHighlightStyle} underlayColor="#E3E3D7" onPress={() => this.setState({ checkbox2: !this.state.checkbox2 })}>
                            <Card style={styles.columnCardStyle}>
                                <Icon reverse name="ios-medkit" color="red" type="ionicon"/>
                                <CardContent><Text style={styles.cardTextStyle}> Health</Text></CardContent>
                                <CheckBox value={this.state.checkbox2} checked={this.state.checkbox2} onPress={() => this.setState({ checkbox2: !this.state.checkbox2 })}/>    
                            </Card>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.touchableHighlightStyle} underlayColor="#E3E3D7" onPress={() => this.setState({ checkbox3: !this.state.checkbox3 })}>
                            <Card style={styles.columnCardStyle}>
                                <Icon reverse name="trees" color="green" type="foundation"/>
                                <CardContent><Text style={styles.cardTextStyle}> Environment</Text></CardContent>
                                <CheckBox value={this.state.checkbox3} checked={this.state.checkbox3} onPress={() => this.setState({ checkbox3: !this.state.checkbox3 })}/> 
                            </Card>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.touchableHighlightStyle} underlayColor="#E3E3D7" onPress={() => this.setState({ checkbox4: !this.state.checkbox4 })}>
                            <Card style={styles.columnCardStyle}>
                                <Icon reverse name="ios-school" color="black" type="ionicon"/>
                                <CardContent><Text style={styles.cardTextStyle}> Education</Text></CardContent>
                                <CheckBox value={this.state.checkbox4} checked={this.state.checkbox4} onPress={() => this.setState({ checkbox4: !this.state.checkbox4 })}/>
                            </Card>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.touchableHighlightStyle} underlayColor="#E3E3D7" onPress={() => this.setState({ checkbox5: !this.state.checkbox5 })}>
                            <Card style={styles.columnCardStyle}>
                                <Icon reverse name="ios-body" color="red" type="ionicon" iconStyle={styles.iconStyle}/>
                                <CardContent><Text style={styles.cardTextStyle}> Civil Rights</Text></CardContent>
                                <CheckBox value={this.state.checkbox5} checked={this.state.checkbox5} onPress={() => this.setState({ checkbox5: !this.state.checkbox5 })}/>
                            </Card>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.touchableHighlightStyle} underlayColor="#E3E3D7" onPress={() => this.setState({ checkbox6: !this.state.checkbox6 })}>
                            <Card style={styles.columnCardStyle}>
                                <Icon reverse name="ios-thumbs-up" color="#D86B0F" type="ionicon" iconStyle={styles.iconStyle}/>
                                <CardContent><Text style={styles.cardTextStyle}> Social Welfare</Text></CardContent>
                                <CheckBox value={this.state.checkbox6} checked={this.state.checkbox6} onPress={() => this.setState({ checkbox6: !this.state.checkbox6 })}/>
                            </Card>
                            </TouchableHighlight>
                        <TouchableHighlight style={styles.touchableHighlightStyle} underlayColor="#E3E3D7" onPress={() => this.setState({ checkbox7: !this.state.checkbox7 })}>
                            <Card style={styles.columnCardStyle}>
                                <Icon reverse name="ios-globe" color="purple" type="ionicon" iconStyle={styles.iconStyle}/>
                                <CardContent><Text style={styles.cardTextStyle}> International Affairs</Text></CardContent>
                                <CheckBox value={this.state.checkbox7} checked={this.state.checkbox7} onPress={() => this.setState({ checkbox7: !this.state.checkbox7 })}/>
                            </Card>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.touchableHighlightStyle} underlayColor="#E3E3D7" onPress={() => this.setState({ checkbox8: !this.state.checkbox8 })}>
                            <Card style={styles.columnCardStyle}>
                                <Icon reverse name="ios-hammer" color="#259BB1" type="ionicon" iconStyle={styles.iconStyle}/>
                                <CardContent><Text style={styles.cardTextStyle}> Labor</Text></CardContent>
                                <CheckBox value={this.state.checkbox8} checked={this.state.checkbox8} onPress={() => this.setState({ checkbox8: !this.state.checkbox8 })}/>
                            </Card>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.touchableHighlightStyle} underlayColor="#E3E3D7" onPress={() => this.setState({ checkbox9: !this.state.checkbox9 })}>
                            <Card style={styles.columnCardStyle}>
                                <Icon reverse name="ios-heart" color="#F6EB09" type="ionicon" iconStyle={styles.iconStyle}/>
                                <CardContent><Text style={styles.cardTextStyle}> Culture</Text></CardContent>
                                <CheckBox value={this.state.checkbox9} checked={this.state.checkbox9} onPress={() => this.setState({ checkbox9: !this.state.checkbox9})}/>
                            </Card>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.touchableHighlightStyle} underlayColor="#E3E3D7" onPress={() => this.setState({ checkbox10: !this.state.checkbox10 })}>
                            <Card style={styles.columnCardStyle}>
                                <Icon reverse name="ios-subway" color="#6BEEB3" type="ionicon" iconStyle={styles.iconStyle}/>
                                <CardContent><Text style={styles.cardTextStyle}> Transportation</Text></CardContent>
                                <CheckBox value={this.state.checkbox10} checked={this.state.checkbox10} onPress={() => this.setState({ checkbox10: !this.state.checkbox10 })}/>
                            </Card>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.touchableHighlightStyle} underlayColor="#E3E3D7" onPress={() => this.setState({ checkbox11: !this.state.checkbox11})}>
                            <Card style={styles.columnCardStyle}>
                                <Icon reverse name="ios-flash" color="#1038F3" type="ionicon" iconStyle={styles.iconStyle}/>
                                <CardContent><Text style={styles.cardTextStyle}> Energy</Text></CardContent>
                                <CheckBox value={this.state.checkbox11}  checked={this.state.checkbox11} onPress={() => this.setState({ checkbox11: !this.state.checkbox11 })}/>
                            </Card>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.touchableHighlightStyle} underlayColor="#E3E3D7" onPress={() => this.setState({ checkbox12: !this.state.checkbox12})}>
                            <Card style={styles.columnCardStyle}>
                                <Icon reverse name="ios-cash" color="red" type="ionicon" iconStyle={styles.iconStyle}/>
                                <CardContent><Text style={styles.cardTextStyle}> Macroeconomics</Text></CardContent>
                                <CheckBox value={this.state.checkbox12}  checked={this.state.checkbox12} onPress={() => this.setState({ checkbox12: !this.state.checkbox12 })}/>
                            </Card>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.touchableHighlightStyle} underlayColor="#E3E3D7" onPress={() => this.setState({ checkbox13: !this.state.checkbox13})}>
                            <Card style={styles.columnCardStyle}>
                                <Icon reverse name="ios-leaf" color="green" type="ionicon" iconStyle={styles.iconStyle}/>
                                <CardContent><Text style={styles.cardTextStyle}> Agriculture</Text></CardContent>
                                <CheckBox value={this.state.checkbox13}  checked={this.state.checkbox13} onPress={() => this.setState({ checkbox13: !this.state.checkbox13 })}/>
                            </Card>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.touchableHighlightStyle} underlayColor="#E3E3D7" onPress={() => this.setState({ checkbox14: !this.state.checkbox14})}>
                            <Card style={styles.columnCardStyle}>
                                <Icon reverse name="mountains" color="black" type="foundation" iconStyle={styles.iconStyle}/>
                                <CardContent><Text style={styles.cardTextStyle}> Public Lands</Text></CardContent>
                                <CheckBox value={this.state.checkbox14}  checked={this.state.checkbox14} onPress={() => this.setState({ checkbox14: !this.state.checkbox14 })}/>
                            </Card>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.touchableHighlightStyle} underlayColor="#E3E3D7" onPress={() => this.setState({ checkbox15: !this.state.checkbox15})}>
                            <Card style={styles.columnCardStyle}>
                                <Icon reverse name="ios-airplane" color="red" type="ionicon" iconStyle={styles.iconStyle}/>
                                <CardContent><Text style={styles.cardTextStyle}> Immigration</Text></CardContent>
                                <CheckBox value={this.state.checkbox15}  checked={this.state.checkbox15} onPress={() => this.setState({ checkbox15: !this.state.checkbox15 })}/>
                            </Card>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.touchableHighlightStyle} underlayColor="#E3E3D7" onPress={() => this.setState({ checkbox16: !this.state.checkbox16})}>
                            <Card style={styles.columnCardStyle}>
                                <Icon reverse name="sheriff-badge" color="#D86B0F" type="foundation" iconStyle={styles.iconStyle}/>
                                <CardContent><Text style={styles.cardTextStyle}> Law and Crime</Text></CardContent>
                                <CheckBox value={this.state.checkbox16}  checked={this.state.checkbox16} onPress={() => this.setState({ checkbox16: !this.state.checkbox16 })}/>
                            </Card>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.touchableHighlightStyle} underlayColor="#E3E3D7" onPress={() => this.setState({ checkbox17: !this.state.checkbox17})}>
                            <Card style={styles.columnCardStyle}>
                                <Icon reverse name="arrows-out" color="purple" type="foundation" iconStyle={styles.iconStyle}/>
                                <CardContent><Text style={styles.cardTextStyle}> Domestic Commerce</Text></CardContent>
                                <CheckBox value={this.state.checkbox17}  checked={this.state.checkbox17} onPress={() => this.setState({ checkbox17: !this.state.checkbox17})}/>
                            </Card>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.touchableHighlightStyle} underlayColor="#E3E3D7" onPress={() => this.setState({ checkbox18: !this.state.checkbox18})}>
                            <Card style={styles.columnCardStyle}>
                                <Icon reverse name="shield" color="#259BB1" type="foundation" iconStyle={styles.iconStyle}/>
                                <CardContent><Text style={styles.cardTextStyle}> Defense</Text></CardContent>
                                <CheckBox value={this.state.checkbox18}  checked={this.state.checkbox18} onPress={() => this.setState({ checkbox18: !this.state.checkbox18})}/>
                            </Card>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.touchableHighlightStyle} underlayColor="#E3E3D7" onPress={() => this.setState({ checkbox19: !this.state.checkbox19})}>
                            <Card style={styles.columnCardStyle}>
                                <Icon reverse name="laptop" color="#1038F3" type="foundation" iconStyle={styles.iconStyle}/>
                                <CardContent><Text style={styles.cardTextStyle}> Technology</Text></CardContent>
                                <CheckBox value={this.state.checkbox19}  checked={this.state.checkbox19} onPress={() => this.setState({ checkbox19: !this.state.checkbox19})}/>
                            </Card>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.touchableHighlightStyle} underlayColor="#E3E3D7" onPress={() => this.setState({ checkbox20: !this.state.checkbox20})}>
                            <Card style={styles.columnCardStyle}>
                                <Icon reverse name="check" color="#F6EB09" type="foundation" iconStyle={styles.iconStyle}/>
                                <CardContent><Text style={styles.cardTextStyle}> Foreign Trade</Text></CardContent>
                                <CheckBox value={this.state.checkbox20}  checked={this.state.checkbox20} onPress={() => this.setState({ checkbox20: !this.state.checkbox20})}/>
                            </Card>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.touchableHighlightStyle} underlayColor="#E3E3D7" onPress={() => this.setState({ checkbox21: !this.state.checkbox21})}>
                            <Card style={styles.columnCardStyle}>
                                <Icon reverse name="crown" color="#6BEEB3" type="foundation" iconStyle={styles.iconStyle}/>
                                <CardContent><Text style={styles.cardTextStyle}>Government</Text></CardContent>
                                <CheckBox value={this.state.checkbox21}  checked={this.state.checkbox21} onPress={() => this.setState({ checkbox21: !this.state.checkbox21})}/>
                            </Card>
                        </TouchableHighlight>
                        
                        <TouchableOpacity style={styles.buttonStyle}  onPress={this.onSubmit}>
                            <Text style={styles.btnTextStyle}>Next</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{paddingBottom: 150}}></View>
                </View>
                </ScrollView>
            
        )
                        
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: "#E3E3D7"
    },
    rowCardStyle: {
        paddingTop: 10,
        borderRadius: 10,
        backgroundColor: "#7886A3",
        justifyContent: "center",
        alignItems: "center",
    },
    touchableHighlightStyle: {
        borderRadius: 10,
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
    },
    columnCardStyle: {
        // height: "100%",
        // width: "100%",
        borderRadius: 10,
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
        
    },
    rowforonecard: {
        height: "10%",
        width: "95%",
        flexDirection: "row",
    },
    textStyle: {
        color: "white",
        paddingTop: 3,
        fontWeight: "bold",
        fontSize: 14
    },
    btnTextStyle: {
        color: "white",
        paddingTop: 3,
        fontWeight: "bold",
        fontSize: 20
    },
    pickerStyle: {
        color: "white",
        fontWeight: "bold",
        fontSize: 14
    },
    columnCards: {
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center"
    },
    cardContentStyle: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    cardTextStyle: {
        fontSize: 20,
        paddingTop: 10,
        paddingLeft: 15
    },
    btnRow: {
        flexDirection: "row",
        justifyContent: "flex-end",
        top:50
    },
    buttonStyle: {
        height: 90,
        width: "100%",
        top: 40,
        backgroundColor: "#7886A3",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "white"
    }
})