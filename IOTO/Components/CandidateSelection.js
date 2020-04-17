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
  ActivityIndicator,
  Picker,
  Linking,
  Button,
  Image,
  List
} from 'react-native';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import { Icon, CheckBox } from 'react-native-elements';
import { Searchbar } from 'react-native-paper';
import CardFlip from 'react-native-card-flip';
import CustomCheckbox from './CustomCheckbox.js';
export default class TopicSelection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        titleText: "Select Candidates",
        titleText2: "Suggested Candidates",
        bodyText: 'Based on Your State and Chosen Topics',
        bodyText2: 'Suggested Representatives based on Topics',
        location: "",
        usLegislators: [],
        _selectedTopic: "",
        newTopic: [],
        legislatorsData: [],
        suggestedUSLegislators:[],
        suggestedLegislatorsData: [],
        loading: false,
        checkedDefault: {},
        checkedDefault2: {},
        selectedCandidates: [],
        splicedArray: [],
        selectedCandidatesCheck: {}
        };
    };

    state = {
        firstQuery: '',
    };

    async componentDidMount () {
        this.setState({
            location: this.state.location,
        })

        await this.getTopicData();
        await this.suggestedLegislators();
       
    }

    getTopicData = async () => {
        await this.getUSLegislators();
        let topicsJson = await AsyncStorage.getItem('topics');
        var topicsArray = JSON.parse(topicsJson)
    
        for(var i=0; i < topicsArray.length; i++){
            if(topicsArray[i] == "Housing"){
                this.state.legislatorsData.sort((a,b) => {
                if(a.Housing > b.Housing) return -1;
                if(a.Housing < b.Housing) return 1;
            })
            }
            if(topicsArray[i] == "Macroeconomics"){
                this.state.legislatorsData.sort((a,b) => {
                if(a.Macroeconomics > b.Macroeconomics) return -1;
                if(a.Macroeconomics < b.Macroeconomics) return 1;
            })
            }
            if(topicsArray[i] == "Agriculture"){
                this.state.legislatorsData.sort((a,b) => {
                if(a.Agriculture > b.Agriculture) return -1;
                if(a.Agriculture < b.Agriculture) return 1;
            })
            }
            if(topicsArray[i] == "Health"){
                this.state.legislatorsData.sort((a,b) => {
                if(a.Health > b.Health) return -1;
                if(a.Health < b.Health) return 1;
            })
            }
            if(topicsArray[i] == "Civil Rights"){
                this.state.legislatorsData.sort((a,b) => {
                if(a.Civil_Rights > b.Civil_Rights ) return -1;
                if(a.Civil_Rights < b.Civil_Rights ) return 1;
            })
            }
            if(topicsArray[i] == "Labor"){
                this.state.legislatorsData.sort((a,b) => {
                if(a.Labor > b.Labor) return -1;
                if(a.Labor < b.Labor) return 1;
            })
            }
            if(topicsArray[i] == "Education"){
                this.state.legislatorsData.sort((a,b) => {
                if(a.Education > b.Education) return -1;
                if(a.Education < b.Education) return 1;
            })
            }
            if(topicsArray[i] == "Environment"){
                this.state.legislatorsData.sort((a,b) => {
                if(a.Environment > b.Environment) return -1;
                if(a.Environment < b.Environment) return 1;
            })
            }
            if(topicsArray[i] == "Energy"){
                this.state.legislatorsData.sort((a,b) => {
                if(a.Energy > b.Energy) return -1;
                if(a.Energy < b.Energy) return 1;
            })
            }
            if(topicsArray[i] == "Immigration"){
                this.state.legislatorsData.sort((a,b) => {
                if(a.Immigration > b.Immigration) return -1;
                if(a.Immigration < b.Immigration) return 1;
            })
            }
            if(topicsArray[i] == "Transportation"){
                this.state.legislatorsData.sort((a,b) => {
                if(a.Transportation > b.Transportation) return -1;
                if(a.Transportation < b.Transportation) return 1;
            })
            }
            if(topicsArray[i] == "Law and Crime"){
                this.state.legislatorsData.sort((a,b) => {
                if(a.Law_and_Crime > b.Law_and_Crime) return -1;
                if(a.Law_and_Crime < b.Law_and_Crime) return 1;
            })
            }
            if(topicsArray[i] == "Social Welfare"){
                this.state.legislatorsData.sort((a,b) => {
                if(a.Social_Welfare > b.Social_Welfare) return -1;
                if(a.Social_Welfare < b.Social_Welfare) return 1;
            })
            }
            if(topicsArray[i] == "Domestic Commerce"){
                this.state.legislatorsData.sort((a,b) => {
                if(a.Domestic_Commerce > b.Domestic_Commerce) return -1;
                if(a.Domestic_Commerce < b.Domestic_Commerce) return 1;
            })
            }
            if(topicsArray[i] == "Defense"){
                this.state.legislatorsData.sort((a,b) => {
                if(a.Defense > b.Defense) return -1;
                if(a.Defense < b.Defense) return 1;
            })
            }
            if(topicsArray[i] == "Technology"){
                this.state.legislatorsData.sort((a,b) => {
                if(a.Technology> b.Technology) return -1;
                if(a.Technology < b.Technology) return 1;
            })
            }
            if(topicsArray[i] == "Foreign Trade"){
                this.state.legislatorsData.sort((a,b) => {
                if(a.Foreign_Trade > b.Foreign_Trade) return -1;
                if(a.Foreign_Trade < b.Foreign_Trade) return 1;
            })
            }
            if(topicsArray[i] == "International Affairs"){
                this.state.legislatorsData.sort((a,b) => {
                if(a.International_Affairs > b.International_Affairs) return -1;
                if(a.International_Affairs < b.International_Affairs) return 1;
            })
            }
            if(topicsArray[i] == "Government Operations"){
                this.state.legislatorsData.sort((a,b) => {
                if(a.Government_Operations > b.Government_Operations) return -1;
                if(a.Government_Operations < b.Government_Operations) return 1;
            })
            }
            if(topicsArray[i] == "Public Lands"){
                this.state.legislatorsData.sort((a,b) => {
                if(a.Public_Lands > b.Public_Lands) return -1;
                if(a.Public_Lands < b.Public_Lands) return 1;
            })
            }
            if(topicsArray[i] == "Culture"){
                this.state.legislatorsData.sort((a,b) => {
                if(a.Culture > b.Culture) return -1;
                if(a.Culture < b.Culture) return 1;
            })
    }
}
};


    getUSLegislators = async () => {
        let userstateJson = await AsyncStorage.getItem("userstate")
        let userstate = JSON.parse(userstateJson)
        let pickedStateAbJson = await AsyncStorage.getItem("pickedStateAb");
        let pickedStateAb = JSON.parse(pickedStateAbJson)
        let newArray= []
        var status = await AsyncStorage.getItem('status');

        if(status !== 'granted'){
            var data = await fetch(`https://8wa1e0h7sj.execute-api.us-west-2.amazonaws.com/testing/us-legislators?state=${pickedStateAb}&cap-topics=true`)
            .then(response => response.json())
            .then(responseJson => {
            this.setState({ usLegislators: responseJson});            
            })
        }
        if(status == 'granted'){
            var data = await fetch(`https://8wa1e0h7sj.execute-api.us-west-2.amazonaws.com/testing/us-legislators?state=${userstate}&cap-topics=true`)
            .then(response => response.json())
            .then(responseJson => {
            this.setState({ usLegislators: responseJson});            
            })
        }

        

        
        for(var i = 0; i < this.state.usLegislators.body.length; i++){
            newArray.push({
                    'full_name': this.state.usLegislators.body[i].full_name,
                    'Health': this.state.usLegislators.body[i].bills_policy_area.Health,
                    'Civil_Rights': this.state.usLegislators.body[i].bills_policy_area["Civil Rights"],
                    'Macroeconomics': this.state.usLegislators.body[i].bills_policy_area.Macroeconomics,
                    'Agriculture': this.state.usLegislators.body[i].bills_policy_area.Agriculture,
                    'Labor': this.state.usLegislators.body[i].bills_policy_area.Labor,
                    'Education': this.state.usLegislators.body[i].bills_policy_area.Education,
                    'Environment': this.state.usLegislators.body[i].bills_policy_area.Environment,
                    'Energy': this.state.usLegislators.body[i].bills_policy_area.Energy,
                    'Immigration': this.state.usLegislators.body[i].bills_policy_area.Immigration,
                    'Transportation': this.state.usLegislators.body[i].bills_policy_area.Transportation,
                    'Law_and_Crime': this.state.usLegislators.body[i].bills_policy_area["Law and Crime"],
                    'Social_Welfare': this.state.usLegislators.body[i].bills_policy_area["Social Welfare"],
                    'Housing': this.state.usLegislators.body[i].bills_policy_area.Housing,
                    'Domestic_Commerce': this.state.usLegislators.body[i].bills_policy_area["Domestic Commerce"],
                    'Defense': this.state.usLegislators.body[i].bills_policy_area.Defense,
                    'Technology': this.state.usLegislators.body[i].bills_policy_area.Technology,
                    'Foreign_Trade': this.state.usLegislators.body[i].bills_policy_area["Foreign Trade"],
                    'International_Affairs': this.state.usLegislators.body[i].bills_policy_area["International Affairs"],
                    'Government_Operations': this.state.usLegislators.body[i].bills_policy_area["Government Operations"],
                    'Public_Lands': this.state.usLegislators.body[i].bills_policy_area["Public Lands"],
                    'Culture': this.state.usLegislators.body[i].bills_policy_area.Culture,
                    'party': this.state.usLegislators.body[i].party,
                    'introduced': this.state.usLegislators.body[i].bills_legislation_status.introduced,
                    'became_law': this.state.usLegislators.body[i].bills_legislation_status.became_law,
                    'bioguideid': this.state.usLegislators.body[i].legislator_id
            })
        }
            this.setState({
                legislatorsData: newArray
            })
        


    }

    suggestedLegislators = async() =>{

        var newArray= [];

        var data = await fetch(`https://8wa1e0h7sj.execute-api.us-west-2.amazonaws.com/testing/us-legislators?cap-topics=true`)
            .then(response => response.json())
            .then(responseJson => {
            this.setState({ suggestedUSLegislators: responseJson});            
            })
        
            for(var i = 0; i < this.state.suggestedUSLegislators.body.length; i++){
                newArray.push({
                        'full_name': this.state.suggestedUSLegislators.body[i].full_name,
                        'Health': this.state.suggestedUSLegislators.body[i].bills_policy_area.Health,
                        'Civil_Rights': this.state.suggestedUSLegislators.body[i].bills_policy_area["Civil Rights"],
                        'Macroeconomics': this.state.suggestedUSLegislators.body[i].bills_policy_area.Macroeconomics,
                        'Agriculture': this.state.suggestedUSLegislators.body[i].bills_policy_area.Agriculture,
                        'Labor': this.state.suggestedUSLegislators.body[i].bills_policy_area.Labor,
                        'Education': this.state.suggestedUSLegislators.body[i].bills_policy_area.Education,
                        'Environment': this.state.suggestedUSLegislators.body[i].bills_policy_area.Environment,
                        'Energy': this.state.suggestedUSLegislators.body[i].bills_policy_area.Energy,
                        'Immigration': this.state.suggestedUSLegislators.body[i].bills_policy_area.Immigration,
                        'Transportation': this.state.suggestedUSLegislators.body[i].bills_policy_area.Transportation,
                        'Law_and_Crime': this.state.suggestedUSLegislators.body[i].bills_policy_area["Law and Crime"],
                        'Social_Welfare': this.state.suggestedUSLegislators.body[i].bills_policy_area["Social Welfare"],
                        'Housing': this.state.suggestedUSLegislators.body[i].bills_policy_area.Housing,
                        'Domestic_Commerce': this.state.suggestedUSLegislators.body[i].bills_policy_area["Domestic Commerce"],
                        'Defense': this.state.suggestedUSLegislators.body[i].bills_policy_area.Defense,
                        'Technology': this.state.suggestedUSLegislators.body[i].bills_policy_area.Technology,
                        'Foreign_Trade': this.state.suggestedUSLegislators.body[i].bills_policy_area["Foreign Trade"],
                        'International_Affairs': this.state.suggestedUSLegislators.body[i].bills_policy_area["International Affairs"],
                        'Government_Operations': this.state.suggestedUSLegislators.body[i].bills_policy_area["Government Operations"],
                        'Public_Lands': this.state.suggestedUSLegislators.body[i].bills_policy_area["Public Lands"],
                        'Culture': this.state.suggestedUSLegislators.body[i].bills_policy_area.Culture,
                        'party': this.state.suggestedUSLegislators.body[i].party,
                        'introduced': this.state.suggestedUSLegislators.body[i].bills_legislation_status.introduced,
                        'became_law': this.state.suggestedUSLegislators.body[i].bills_legislation_status.became_law,
                        'bioguideid': this.state.suggestedUSLegislators.body[i].legislator_id
                })
            }

            this.setState({
                suggestedLegislatorsData: newArray
            })

        let topicsJson = await AsyncStorage.getItem('topics');
        var topicsArray = JSON.parse(topicsJson)
    
        for(var i=0; i < topicsArray.length; i++){
            if(topicsArray[i] == "Housing"){
                this.state.suggestedLegislatorsData.sort((a,b) => {
                if(a.Housing > b.Housing) return -1;
                if(a.Housing < b.Housing) return 1;
            })
            }
            if(topicsArray[i] == "Macroeconomics"){
                this.state.suggestedLegislatorsData.sort((a,b) => {
                if(a.Macroeconomics > b.Macroeconomics) return -1;
                if(a.Macroeconomics < b.Macroeconomics) return 1;
            })
            }
            if(topicsArray[i] == "Agriculture"){
                this.state.suggestedLegislatorsData.sort((a,b) => {
                if(a.Agriculture > b.Agriculture) return -1;
                if(a.Agriculture < b.Agriculture) return 1;
            })
            }
            if(topicsArray[i] == "Health"){
                this.state.suggestedLegislatorsData.sort((a,b) => {
                if(a.Health > b.Health) return -1;
                if(a.Health < b.Health) return 1;
            })
            }
            if(topicsArray[i] == "Civil Rights"){
                this.state.suggestedLegislatorsData.sort((a,b) => {
                if(a.Civil_Rights > b.Civil_Rights ) return -1;
                if(a.Civil_Rights < b.Civil_Rights ) return 1;
            })
            }
            if(topicsArray[i] == "Labor"){
                this.state.suggestedLegislatorsData.sort((a,b) => {
                if(a.Labor > b.Labor) return -1;
                if(a.Labor < b.Labor) return 1;
            })
            }
            if(topicsArray[i] == "Education"){
                this.state.suggestedLegislatorsData.sort((a,b) => {
                if(a.Education > b.Education) return -1;
                if(a.Education < b.Education) return 1;
            })
            }
            if(topicsArray[i] == "Environment"){
                this.state.suggestedLegislatorsData.sort((a,b) => {
                if(a.Environment > b.Environment) return -1;
                if(a.Environment < b.Environment) return 1;
            })
            }
            if(topicsArray[i] == "Energy"){
                this.state.suggestedLegislatorsData.sort((a,b) => {
                if(a.Energy > b.Energy) return -1;
                if(a.Energy < b.Energy) return 1;
            })
            }
            if(topicsArray[i] == "Immigration"){
                this.state.suggestedLegislatorsData.sort((a,b) => {
                if(a.Immigration > b.Immigration) return -1;
                if(a.Immigration < b.Immigration) return 1;
            })
            }
            if(topicsArray[i] == "Transportation"){
                this.state.suggestedLegislatorsData.sort((a,b) => {
                if(a.Transportation > b.Transportation) return -1;
                if(a.Transportation < b.Transportation) return 1;
            })
            }
            if(topicsArray[i] == "Law and Crime"){
                this.state.suggestedLegislatorsData.sort((a,b) => {
                if(a.Law_and_Crime > b.Law_and_Crime) return -1;
                if(a.Law_and_Crime < b.Law_and_Crime) return 1;
            })
            }
            if(topicsArray[i] == "Social Welfare"){
                this.state.suggestedLegislatorsData.sort((a,b) => {
                if(a.Social_Welfare > b.Social_Welfare) return -1;
                if(a.Social_Welfare < b.Social_Welfare) return 1;
            })
            }
            if(topicsArray[i] == "Domestic Commerce"){
                this.state.suggestedLegislatorsData.sort((a,b) => {
                if(a.Domestic_Commerce > b.Domestic_Commerce) return -1;
                if(a.Domestic_Commerce < b.Domestic_Commerce) return 1;
            })
            }
            if(topicsArray[i] == "Defense"){
                this.state.suggestedLegislatorsData.sort((a,b) => {
                if(a.Defense > b.Defense) return -1;
                if(a.Defense < b.Defense) return 1;
            })
            }
            if(topicsArray[i] == "Technology"){
                this.state.suggestedLegislatorsData.sort((a,b) => {
                if(a.Technology> b.Technology) return -1;
                if(a.Technology < b.Technology) return 1;
            })
            }
            if(topicsArray[i] == "Foreign Trade"){
                this.state.suggestedLegislatorsData.sort((a,b) => {
                if(a.Foreign_Trade > b.Foreign_Trade) return -1;
                if(a.Foreign_Trade < b.Foreign_Trade) return 1;
            })
            }
            if(topicsArray[i] == "International Affairs"){
                this.state.suggestedLegislatorsData.sort((a,b) => {
                if(a.International_Affairs > b.International_Affairs) return -1;
                if(a.International_Affairs < b.International_Affairs) return 1;
            })
            }
            if(topicsArray[i] == "Government Operations"){
                this.state.suggestedLegislatorsData.sort((a,b) => {
                if(a.Government_Operations > b.Government_Operations) return -1;
                if(a.Government_Operations < b.Government_Operations) return 1;
            })
            }
            if(topicsArray[i] == "Public Lands"){
                this.state.suggestedLegislatorsData.sort((a,b) => {
                if(a.Public_Lands > b.Public_Lands) return -1;
                if(a.Public_Lands < b.Public_Lands) return 1;
            })
            }
            if(topicsArray[i] == "Culture"){
                this.state.suggestedLegislatorsData.sort((a,b) => {
                if(a.Culture > b.Culture) return -1;
                if(a.Culture < b.Culture) return 1;
            })
            }
        }

        var suggestedLegislatorsDataSpliced = this.state.suggestedLegislatorsData.slice(0,5)
                this.setState({
                    splicedArray: suggestedLegislatorsDataSpliced
                })
    }

        onSubmit = async() => {
            var newArray = [];
            var keys = Object.keys(this.state.checkedDefault);
            var newArray2 = [];
            var keys2 = Object.keys(this.state.checkedDefault2);
          
            for(var i=0; i< keys.length; i++){
                if(this.state.checkedDefault[keys[i]] == true){
                    if(!keys.includes(this.state.legislatorsData[keys[i]].full_name)){
                        newArray.push(this.state.legislatorsData[keys[i]].full_name)
                    }
                }
            }

            
            for(var i=0; i< keys2.length; i++){
                if(this.state.checkedDefault2[keys[i]] == true){
                    if(!keys2.includes(this.state.suggestedLegislatorsData[keys2[i]].full_name)){
                        newArray2.push(this.state.suggestedLegislatorsData[keys2[i]].full_name)
                    }
                }
            }

            var combinedArray = newArray.concat(newArray2);

            AsyncStorage.setItem('selectedCandidates', JSON.stringify(combinedArray))

            var selCandidates = await AsyncStorage.getItem('selectedCandidates');
            this.setState({
                selectedCandidatesCheck: selCandidates
            })
            var selCandidatesArray = JSON.parse(this.state.selectedCandidatesCheck)
            if(selCandidatesArray.length < 1 ){
                Alert.alert(
                    'Error',
                    'Please pick at least 2 Candidates from the list.',
                    [
                        {text: 'OK', onPress: () => this.props.navigation.navigate("CandidateSelection")}
                    ]
                )
            }else{
                this.props.navigation.navigate("LoginSuccess")
            }


        }

        render(){
            const { legislatorsData, loading, firstQuery, splicedArray} = this.state;
            if(!loading){
              return(
                <ScrollView>
                <View style={styles.container}>
                    <Text {...this.props} onPress={this._handlePress}>
                        {this.props.children}
                    </Text>
                    <Text style={styles.titleText} numberOfLines={5}>{this.state.titleText}</Text>
                    <Text style={styles.subText} numberOfLines={5}>{this.state.bodyText}</Text>

                    {/* Search Bar */}
                    {/* <Searchbar
                    placeholder="Type Here..."
                    onChangeText={query => { this.setState({ firstQuery: query }); }}
                    value={firstQuery}/> */}
                    <View style={styles.columnCards}>
                
                    {
                        legislatorsData.map((item, id) => {       
                            return (
                    
                                        
                                        <CardFlip style={styles.cardContainer} key={id} ref={ (card) => this['card' + id] = card }>
                                            <TouchableOpacity key={id} style={styles.cardStyle} onPress={() => this['card' + id].flip()}>
                                                <Image
                                                    style={{ position:'absolute',width: 50, height: 50, borderRadius: 50, left:15}}
                                                    source={{uri:`https://theunitedstates.io/images/congress/original/${item.bioguideid}.jpg`}}
                                                />
                                                <Text style={styles.cardTextStyle}>{item.full_name}</Text>
                                                <CheckBox value={item.full_name} checked={!!this.state.checkedDefault[id]}
                                                    onPress={
                                                        () => this.setState(state => {
                                                            const checkedDefault = {...state.checkedDefault};
                                                            checkedDefault[id] = !checkedDefault[id];
                                                            return { checkedDefault }
                                                        })
                                                    } />
                                                
                                            </TouchableOpacity>
                                            <TouchableOpacity key={id} style={styles.cardStyle} onPress={() => this['card' + id].flip()}>
                                                <View style={styles.cardBackStyle}>
                                                <Text style={styles.cardBackTextStyle}>Party: {item.party}</Text>
                                                <Text style={styles.cardBackTextStyle}>Bills Introduced: {item.introduced}</Text>
                                                <Text style={styles.cardBackTextStyle}>Became Law: {item.became_law}</Text>
                                                </View>
                                            </TouchableOpacity>
                                        </CardFlip>
                            
                                    
                                        
                     
                                
                            )
                        })
                    }
                    <View style={{paddingTop: 15}}></View>
                    <Text style={styles.titleText2} numberOfLines={5}>{this.state.titleText2}</Text>
                    <Text style={styles.subText} numberOfLines={5}>{this.state.bodyText2}</Text>

                    {
                        splicedArray.map((item, id) => {       
                            return (
                                
                    
                                        
                                        <CardFlip style={styles.cardContainer} key={id} ref={ (card) => this['card_2' + id] = card }>
                                            <TouchableOpacity key={id} style={styles.cardStyle} onPress={() => this['card_2' + id].flip()}>
                                                <Image
                                                    style={{ position:'absolute',width: 50, height: 50, borderRadius: 50, left:15}}
                                                    source={{uri:`https://theunitedstates.io/images/congress/original/${item.bioguideid}.jpg`}}
                                                />
                                                <Text style={styles.cardTextStyle}>{item.full_name}</Text>
                                                <CheckBox checked={!!this.state.checkedDefault2[id]}
                                                    onPress={
                                                        () => this.setState(state => {
                                                            const checkedDefault2 = {...state.checkedDefault2};
                                                            checkedDefault2[id] = !checkedDefault2[id];
                                                            return { checkedDefault2 }
                                                        })
                                                    } />
                                            </TouchableOpacity>
                                            <TouchableOpacity key={id} style={styles.cardStyle} key={id} onPress={() => this['card_2' + id].flip()}>
                                            <View style={styles.cardBackStyle}>
                                                <Text style={styles.cardBackTextStyle}>Party: {item.party}</Text>
                                                <Text style={styles.cardBackTextStyle}>Bills Introduced: {item.introduced}</Text>
                                                <Text style={styles.cardBackTextStyle}>Became Law: {item.became_law}</Text>
                                            </View>
                                            </TouchableOpacity>
                                        </CardFlip>
                                        
                     
                            )
                        })
                    }
                     <TouchableOpacity style={styles.buttonStyle}  onPress={() => this.onSubmit()}>
                            <Text style={styles.btnTextStyle}>Next</Text>
                        </TouchableOpacity>
                    <View style={{paddingBottom: 150}}></View>
                    
              </View>
              </View>
              </ScrollView>
              )}else {
              return (
              <View style={{flex: 1, justifyContent: "center", alignItems: "center", alignSelf: "center"}}>
                {
                  this.state.showMe ?
                  <Bubbles size={10} color="#6ED2F2"/>
                  :
                  <View style={this.onTimeOutEvent()}>
                    
                  </View>
                }
                
              </View>
              )}
            };
        }
        
        const styles = StyleSheet.create({
            container: {
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                backgroundColor: '#E3E3D7',
            },
            cardContainer: {
                width: "95%",
                height: 75,
                left: 10,
                // top:55,
                backgroundColor: "white",
                flexDirection : 'column',
                justifyContent: 'center',
                alignItems: 'center',
                borderBottomLeftRadius: 80,
                borderTopLeftRadius: 80,
                borderBottomRightRadius: 10,
                borderTopRightRadius: 10,
                justifyContent: "center",
                marginBottom: 5,
                marginTop: 10
            
              },
            cardStyle:{
                width: "100%",
                height: 75,
                
                justifyContent: "space-between",
                flexDirection: "row",
                alignItems: "center",
                textAlign: "center"
            },
            btnTextStyle: {
                color: "white",
                padding: 25,
                fontWeight: "bold",
                fontSize: 20
            },
            buttonStyle: {
                top: 30,
                backgroundColor: "#7886A3",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                borderRadius: 10,
                borderWidth: 1,
                borderColor: "white"
            },
            titleText: {
                fontSize: 30,
                alignSelf: 'center',
                fontWeight: 'bold',
    
            },
            titleText2: {
                fontSize: 30,
                alignSelf: 'center',
                fontWeight: 'bold',
    
            },
            subText: {
                fontSize: 15,
                paddingBottom: 10,
                alignSelf: 'center'

            },
            cardTextStyle: {
                fontSize: 20,
                paddingLeft: 90,
            },
            ImageIconStyle: {
                padding: 10,
                margin: 5,
                height: 25,
                width: 25,
                resizeMode: 'stretch',
            },
            checkboxStyle:{
                right: 5
            },
            selectImage: { 
                width: 45,
                height: 45, 
                borderRadius: 50 
            },
            selectImageHighlight: { 
                width: 45, 
                height: 45, 
                borderRadius: 50, 
                left:5 
            },
            cardBackStyle:{
                justifyContent: 'center',
                flexDirection: 'column'
            },
            cardBackTextStyle:{
                fontWeight: 'bold',
                paddingLeft: 40
            }
        })