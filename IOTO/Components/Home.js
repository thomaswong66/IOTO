import React from 'react';
import { Platform, StyleSheet, Text, View, Dimensions, SafeAreaView, Button, TouchableOpacity  } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Icon, CheckBox} from "react-native-elements";
import {
    PieChart,
    ProgressChart
  } from 'react-native-chart-kit'
const screenWidth = Dimensions.get("window").width;

export default class Home1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 1,        
      compare:'',
      Piedata:[],
      param1: '',
      param2: '',
      param3: '',
      param4: '',
      param5: '',
      num1: 0,
      num2: 0,
      num3: 0,
      num4: 0,
      num5: 0
    }
  }
  componentDidMount = async () => {
    await fetch(`https://8wa1e0h7sj.execute-api.us-west-2.amazonaws.com/testing/us-bills?topics=armed_forces_national_security,law,energy,health,animals,commerce,congress,families,taxation,education,immigration,social_welfare,agriculture_food,labor_employment,native_americans,sports_recreation,emergency_management,arts_culture_religion,crime_law_enforcement,international_affairs,social_sciences_history,economics_public_finance,environmental_protection,finance_financial_sector,public_ls_natural_resources,transportation_public_works,water_resources_development,housing_community_development,armed_forces_national_security,government_operations_politics,science_technology_communications,foreign_trade_international_finance,civil_rights_liberties_minority_issues`)
    .then(response => response.json())
    .then((responseJson) =>{
        this.setState({
            compare: responseJson.body[0]
        })
    })


    var x = this.state.compare

    var total = 1
    for (var i in Object.values(x)){
        total += Object.values(x)[i]
    }
    this.setState({
        total:total
    })

    var array = Object.values(x)
    var sorted = array.sort(function(a, b){return b-a})
    var top = sorted.slice(0,5)
    
    
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
          }
        ];

      return (
          <SafeAreaView style={styles.container}>
              <Text style={styles.titleText}>U.S.A Top 5 Bill Topics Distribution</Text>
              <PieChart
                  data={Piedata}
                  width={screenWidth-10}
                  height={220}
                  
                  chartConfig = {{
                    yAxisSuffix:"k",
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
          </SafeAreaView>
      )
  }
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E3E3D7',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    },
    titleText: {
      fontSize: 30,
      alignSelf: 'center',
      fontWeight: 'bold',
      justifyContent: 'center',
      textAlign: 'center',
      textDecorationLine: 'underline'

  },
  });
