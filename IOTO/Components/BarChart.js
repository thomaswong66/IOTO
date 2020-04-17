import React from 'react';
import {
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  StyleSheet,
  TouchableHighlight,
  View,
  Text,
  Alert,
  AsyncStorage,
  Picker,
  Button
} from 'react-native';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import { ScrollView } from 'react-native-gesture-handler';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from 'react-native-chart-kit'
import { Modal } from 'react-native-paper';
const screenWidth = Dimensions.get("window").width;


export default class BarChart1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            compare:0,
            compare2:0,
            param:"",
            param2:"",
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
              }
            ]
        }
    }


    
    // async componentDidMount(){
    //     this.setState({
    //       pickedState: this.state.pickedState
    //     })
    //     // await this.getUSLegislatorData();
    //     // await this.getUserData();
    //   }

    async getUSLegislatorData(param, param2){
        await fetch(`https://8wa1e0h7sj.execute-api.us-west-2.amazonaws.com/testing/us-legislators?state=ut&party=${param}`)
        .then(response => response.json())
        .then((responseJson) =>{
            this.setState({
                compare: responseJson.body[0].bills_total,
                param: param
            })
        })
        await fetch(`https://8wa1e0h7sj.execute-api.us-west-2.amazonaws.com/testing/us-legislators?state=ut&party=${param2}`)
        .then(response => response.json())
        .then((responseJson) =>{
            this.setState({
                compare2: responseJson.body[0].bills_total,
                param2: param2
            })
        })
    }

    render() {
       const barData = {
            labels: [this.state.param, this.state.param2],
            datasets: [
              {
                data: [this.state.compare, this.state.compare2],
              },
            ],
          };
        const {states, usState} = this.state

        return (
          <ScrollView>
            <SafeAreaView style={styles.container}>
                <Text>Number of Medical Bills passed</Text>
                <BarChart
                    data={barData}
                    width={screenWidth-10}
                    height={220}
                    yAxisLabel={''}
                    fromZero={true}
                    chartConfig={{
                        backgroundColor: '#E3E3D7',
                        backgroundGradientFrom: '#E3E3D7',
                        backgroundGradientTo: '#E3E3D7',
                        decimalPlaces: 0, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                        style: {
                        borderRadius: 16,                  
                        }
                    }}
                    bezier
                    style={{
                      marginVertical: 8,
                      borderRadius: 20
                    }}
                />
                {/* <Button
                    style={{fontSize: 20, color: 'green'}}
                    // styleDisabled={{color: 'red'}}
                    onPress={() => this.getUSLegislatorData("democrat", "republican")}
                    title="Compare"
                >
                </Button> */}

                <TouchableOpacity style={styles.buttonStyle} onPress={() => this.getUSLegislatorData("democrat", "republican")}>
                            <Text >Compare</Text>
                        </TouchableOpacity>
              <Modal >
                <Card  visible={false}>
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
              </Modal>
            </SafeAreaView>   
            </ScrollView>
        )

    }
}

const styles = StyleSheet.create({
  rowCardStyle: {
      top: 35,
      paddingBottom: 0,
      paddingTop: 10,
      borderRadius: 10,
      backgroundColor: "#7886A3",
      justifyContent: "center",
      alignItems: "center",
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
