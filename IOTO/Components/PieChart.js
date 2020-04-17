import React from 'react';
import { Alert, StyleSheet, Text, View, Dimensions, SafeAreaView, TouchableOpacity, Picker, Scrollview,AsyncStorage  } from 'react-native';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';

import { ScrollView } from 'react-native-gesture-handler';
import {
    PieChart,
    ProgressChart
  } from 'react-native-chart-kit'
const screenWidth = Dimensions.get("window").width;

export default class compare extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      candidates: [],
      total: 0,
      other1:0,
      other2:0,         
      compare:'',
      param1: '',
      param2: '',
      param3: '',
      param4: '',
      param5: '',
      num1: 0,
      num2: 0,
      num3: 0,
      num4: 0,
      num5: 0,
      param6: '',
      param7: '',
      param8: '',
      param9: '',
      param10: '',
      num6: 0,
      num7: 0,
      num8: 0,
      num9: 0,
      num10: 0,
      legislator1:"",
      legislator2: "",
      AllLegislators1: [
        {
          "name": "Pick a Legislator",
          "abbreviation": "Null",
        }
      ],
      AllLegislators2: [
        {
          "name": "Pick a Legislator",
          "abbreviation": "Null",
      },
      {
          "name": "Bernie  Sanders",
          "abbreviation": "shelby",
      },
      {
        "name": "Will Hurd",
        "abbreviation": "aderholt",
    },
      ]
    }
  }
  componentDidMount(){
    this.doIt()
    this.getUserData()
  }

  doIt = async () => {
    if(this.state.legislator1 != ""){
      await fetch(`https://8wa1e0h7sj.execute-api.us-west-2.amazonaws.com/testing/us-legislators?name=${this.state.legislator1}`)
      // await fetch(`https://8wa1e0h7sj.execute-api.us-west-2.amazonaws.com/testing/us-legislators?name=Sanders`)
  
      .then(response => response.json())
      .then((responseJson) =>{
          this.setState({
              compare: responseJson.body[0].bills_policy_area
          })
      })
  
  
      var x = this.state.compare
  
      var total = 0
      for (var i in Object.values(x)){
          total += Object.values(x)[i]
      }
      this.setState({
          total:total
      })
  
      var array = Object.values(x)
      var sorted = array.sort(function(a, b){return b-a})
      var top = sorted.slice(0,5)
      var five=0
      for (var i in top){
        five += sorted[i]
      }
      this.setState({
        other1:parseFloat(((((total-five)/total)*100).toFixed(1)))
      })
        
        
      
      
      for(var p in sorted){
          if (Object.values(x)[p] === sorted[0]){
              var t = parseFloat((((Object.values(x)[p]/this.state.total)*100).toFixed(1)))
              var name = (Object.keys(x)[p].split("_"))[0]
              this.setState({
                  param1: name,
                  num1: t
              })
          }
          if (Object.values(x)[p] === sorted[1]){
              var t = parseFloat((((Object.values(x)[p]/this.state.total)*100).toFixed(1)))
              var name = (Object.keys(x)[p].split("_"))[0]
              this.setState({
                  param2: name,
                  num2: t
              })
          }
          if (Object.values(x)[p] === sorted[2]){
              var t = parseFloat((((Object.values(x)[p]/this.state.total)*100).toFixed(1)))
              var name = (Object.keys(x)[p].split("_"))[0]
              this.setState({
                  param3: name,
                  num3: t
              })
          }
          if (Object.values(x)[p] === sorted[3]){
              var t = parseFloat((((Object.values(x)[p]/this.state.total)*100).toFixed(1)))
              var name = (Object.keys(x)[p].split("_"))[0]
              this.setState({
                  param4: name,
                  num4: t
              })
          }
          if (Object.values(x)[p] === sorted[4]){
              var t = parseFloat((((Object.values(x)[p]/this.state.total)*100).toFixed(1)))
              var name = (Object.keys(x)[p].split("_"))[0]
              this.setState({
                  param5: name,
                  num5: t
              })
          
          }
      }
    }
    
    if(this.state.legislator2 != ""){
      await fetch(`https://8wa1e0h7sj.execute-api.us-west-2.amazonaws.com/testing/us-legislators?name=${this.state.legislator2}`)
      .then(response => response.json())
      .then((responseJson) =>{
          this.setState({
              compare: responseJson.body[0].bills_policy_area
          })
      })
      var x = this.state.compare
      var total = 0
      for (var i in Object.values(x)){
          total += Object.values(x)[i]
      }
      this.setState({
          total:total
      })
  
      var array = Object.values(x)
      var sorted = array.sort(function(a, b){return b-a})
      var top = sorted.slice(0,5)
      var five = 0
      for (var i in top){
        five += sorted[i]
      }
      this.setState({
        other2:parseFloat(((((total-five)/total)*100).toFixed(1)))
      })
      
      
      for(var p in sorted){
          if (Object.values(x)[p] === sorted[0]){
              var t = parseFloat((((Object.values(x)[p]/this.state.total)*100).toFixed(1)))
              var name = (Object.keys(x)[p].split("_"))[0]
              this.setState({
                  param6: name,
                  num6: t
              })
          }
          if (Object.values(x)[p] === sorted[1]){
              var t = parseFloat((((Object.values(x)[p]/this.state.total)*100).toFixed(1)))
              var name = (Object.keys(x)[p].split("_"))[0]
              this.setState({
                  param7: name,
                  num7: t
              })
          }
          if (Object.values(x)[p] === sorted[2]){
              var t = parseFloat((((Object.values(x)[p]/this.state.total)*100).toFixed(1)))
              var name = (Object.keys(x)[p].split("_"))[0]
              this.setState({
                  param8: name,
                  num8: t
              })
          }
          if (Object.values(x)[p] === sorted[3]){
              var t = parseFloat((((Object.values(x)[p]/this.state.total)*100).toFixed(1)))
              var name = (Object.keys(x)[p].split("_"))[0]
              this.setState({
                  param9: name,
                  num9: t
              })
          }
          if (Object.values(x)[p] === sorted[4]){
              var t = parseFloat((((Object.values(x)[p]/this.state.total)*100).toFixed(1)))
              var name = (Object.keys(x)[p].split("_"))[0]
              this.setState({
                  param10: name,
                  num10: t
              })
          
          }
      }

    }
    
  }

  onSubmit = async () => {
    const {AllLegislators1, SetLeg1} = this.state
    const {AllLegislators2, SetLeg2} = this.state
    var count = 0
    if(SetLeg1 == 0 || SetLeg1 == undefined ){
      count += 1

    }else{
      setTimeout(() => {this.setState({legislator1: AllLegislators1[SetLeg1].abbreviation})}, 1);
      this.doIt()
    }

    if( SetLeg2 == 0 ||  SetLeg2 == undefined ){
      count += 1
    }
    else{
      setTimeout(() => {this.setState({legislator2: AllLegislators2[SetLeg2].abbreviation})}, 1);

      this.doIt()
    }
    if(count == 2){
      Alert.alert(
        'Error',
        'Please pick a legislator to continue',
        [
            {text: 'OK', onPress: () => this.props.navigation.navigate("Compare")}
        ]
      )
    }

  }
  
  getUserData = async () => {
    try {
        // const location = await AsyncStorage.getItem('location')
        // const address = await AsyncStorage.getItem('address')
        // const googleofficials = await AsyncStorage.getItem('googleofficials')
        // const iotoofficials = await AsyncStorage.getItem('iotoofficials')
        const candidates = await AsyncStorage.getItem('selectedCandidates')
        this.setState({
            // location: JSON.parse(location),
            // address: address,
            // googleofficials: JSON.parse(googleofficials),
            // iotoofficials: JSON.parse(iotoofficials),
            candidates: JSON.parse(candidates),
          })
        var AllLegislators1 = this.state.AllLegislators1
        var candidates1 = this.state.candidates

        for(var i in candidates1){
          var split = candidates1[i].split(" ")
          var picker = {name: candidates1[i], abbreviation: split[split.length -1].toLowerCase() }
          AllLegislators1.push(picker)
        }
        this.setState({
          AllLegislators1: AllLegislators1,
          AllLegislators2: AllLegislators1
        })
    }
    catch(e) {
        console.log(e)
    }
  }
 //[#abb8c3,grey,#585858,#ffffff,#000000]
  render() {
      const Piedata = [
          {
            name: "% " + this.state.param1,
            bills: this.state.num1,
            color: "#abb8c3",
            legendFontColor: "#abb8c3",
            legendFontSize: 13
          },
          {
            name: "% " + this.state.param2,
            bills: this.state.num2,
            color: "grey",
            legendFontColor: "grey",
            legendFontSize: 13
          },
          {
            name: "% " + this.state.param3,
            bills: this.state.num3,
            color: "#585858",
            legendFontColor: "#585858",
            legendFontSize: 13
          },
          {
            name: "% " + this.state.param4,
            bills: this.state.num4,
            color: "#ffffff",
            legendFontColor: "#ffffff",
            legendFontSize: 13
          },
          {
            name: "% " + this.state.param5,
            bills: this.state.num5,
            color: "#000000",
            legendFontColor: "#000000",
            legendFontSize: 13
          },
          {
            name:"% others",
            bills: this.state.other1,
            color: "#d7d7d7",
            legendFontColor: "#d7d7d7",
            legendFontSize: 13
          }
        ];

        const Piedata2 = [
          {
            name: "% " + this.state.param6,
            bills: this.state.num6,
            color: "#abb8c3",
            legendFontColor: "#abb8c3",
            legendFontSize: 13
          },
          {
            name: "% " + this.state.param7,
            bills: this.state.num7,
            color: "grey",
            legendFontColor: "grey",
            legendFontSize: 13
          },
          {
            name: "% " + this.state.param8,
            bills: this.state.num8,
            color: "#585858",
            legendFontColor: "#585858",
            legendFontSize: 13
          },
          {
            name: "% " + this.state.param9,
            bills: this.state.num9,
            color: "#ffffff",
            legendFontColor: "#ffffff",
            legendFontSize: 13
          },
          {
            name:"% " +  this.state.param10,
            bills: this.state.num10,
            color: "#000000",
            legendFontColor: "#000000",
            legendFontSize: 13
          },
          {
            name:"% others",
            bills: this.state.other2,
            color: "#d7d7d7",
            legendFontColor: "#d7d7d7",
            legendFontSize: 13
          }
        ];
        const{AllLegislators1} = this.state
        const{AllLegislators2} = this.state


      return (
          <ScrollView style={{backgroundColor: "#E3E3D7"}}>
            <View >
              <Text style={styles.ChartHeader}>Top 5 Bill Topics Distribution For {this.state.legislator1}</Text>
              {this.state.legislator1 != "" ?
                           <PieChart
                           data={Piedata}
                           width={screenWidth-10}
                           height={220}
                           
                           chartConfig = {{
                             backgroundGradientFrom: "#E3E3D7",
                             backgroundGradientFromOpacity: 0,
                             backgroundGradientTo: "#E3E3D7",
                             backgroundGradientToOpacity: 0.5,
                             color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                             strokeWidth: 2, // optional, default 3
                             barPercentage: 10
                           }}
                           bezier
                           style={{
                             marginVertical: 8,
                             borderRadius: 20
                           }}
                           accessor="bills"
                           backgroundColor="#E3E3D7"
                           paddingLeft="15"
                           absolute
                       />    
              :
              <View style={{height:220, width:screenWidth-10}}>
              <CardContent style={{ marginLeft: 40, marginRight: 40 }}>
                <Picker
                    style={styles.pickerStyle}
                    mode="dropdown"
                    selectedValue={this.state.SetLeg1}
                    onValueChange={(itemValue, itemIndex)=>this.setState({SetLeg1: itemValue})}>
                    {AllLegislators1.map((item, index) => {
                        return (<Picker.Item label={item.name} value={index} key={index}/>) 
                    })}
                </Picker>
            </CardContent>
              </View>
              }


            <Text style={styles.ChartHeader}>Top 5 Bill Topics Distribution For {this.state.legislator2}</Text>
              {this.state.legislator2 != "" ?
                           <PieChart
                           data={Piedata2}
                           width={screenWidth-10}
                           height={220}
                           
                           chartConfig = {{
                             backgroundGradientFrom: "#E3E3D7",
                             backgroundGradientFromOpacity: 0,
                             backgroundGradientTo: "#E3E3D7",
                             backgroundGradientToOpacity: 0.5,
                             color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                             strokeWidth: 2, // optional, default 3
                             barPercentage: 10
                           }}
                           bezier
                           style={{
                             marginVertical: 8,
                             borderRadius: 20
                           }}
                           accessor="bills"
                           backgroundColor="#E3E3D7"
                           paddingLeft="15"
                           absolute
                       />    
              :
              <View style={{height:220, width:screenWidth-10}}>
              <CardContent style={{ marginLeft: 40, marginRight: 40 }}>
                <Picker
                    style={styles.pickerStyle}
                    mode="dropdown"
                    selectedValue={this.state.SetLeg2}
                    onValueChange={(itemValue, itemIndex)=>this.setState({SetLeg2: itemValue})}>
                    {AllLegislators2.map((item, index) => {
                        return (<Picker.Item label={item.name} value={index} key={index}/>) 
                    })}
                </Picker>
            </CardContent>
              </View>
              }

            <TouchableOpacity style={styles.buttonStyle} onPress={this.onSubmit}>
                  <Text >Compare</Text>
            </TouchableOpacity> 

            <Text style={styles.btnTextStyleTop}>Select First Representative</Text>
            <CardContent style={{ marginLeft: 40, marginRight: 40 }}>
                <Picker
                    style={styles.pickerStyle}
                    mode="dropdown"
                    selectedValue={this.state.SetLeg1}
                    onValueChange={(itemValue, itemIndex)=>this.setState({SetLeg1: itemValue})}>
                    {AllLegislators1.map((item, index) => {
                        return (<Picker.Item label={item.name} value={index} key={index}/>) 
                    })}
                </Picker>
            </CardContent>

            <Text style={styles.btnTextStyle}>Select Second Representative</Text>

            <CardContent style={{ marginLeft: 50, marginRight:50 }}>
              <Picker
                    style={styles.pickerStyle}
                    mode="dropdown"
                    selectedValue={this.state.SetLeg2}
                    onValueChange={(itemValue, itemIndex)=>this.setState({SetLeg2: itemValue})}>
                    {AllLegislators2.map((item, index) => {
                        return (<Picker.Item label={item.name} value={index} key={index}/>) 
                    })}
              </Picker>
            </CardContent>


              </View>
          </ScrollView>   
      )
  }
}



  const styles = StyleSheet.create({
    btnTextStyle: {
      fontWeight: "bold",
      fontSize: 18,
      marginTop:10,
      textAlign: "center",
    },
    btnTextStyleTop: {
      fontWeight: "bold",
      fontSize: 18,
      marginTop:37,
      textAlign: "center",
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
    buttonStyle: {
      height: 60,
      width: "100%",
      top: 40,
      backgroundColor: "#7886A3",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      borderRadius: 10,
      borderWidth: 1,
      borderColor: "black",
      // paddingBottom: 50,
      marginBottom: 60
  },
  ChartHeader: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop:10,
    marginBottom: 10,
    textAlign: "center",
  }
})
