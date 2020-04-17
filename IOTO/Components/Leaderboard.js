import React, { Component } from "react";
import { View, Alert, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Icon, CheckBox} from "react-native-elements";

import Leaderboard from "react-native-leaderboard";

export default class LeaderboardIoto extends Component {
  state = {
    data: PLAYERS
  };

   componentDidMount() {
    // simulate new users being added to leaderboard
    setInterval(() => {
      const newData = {
        name: "Sahil",
        score: Math.floor(Math.random() * 100).toString(),
        iconUrl:
          "https://image.flaticon.com/icons/svg/10/10679.svg"
      };
      this.setState({ data: this.state.data.concat(newData) });
    }, 10000);
  }

  alert = (title, body) => {
    Alert.alert(title, body, [{ text: "View Profile", onPress: () => {} }], {
      cancelable: true
    });
  };

  render() {
    const props = {
      labelBy: "name",
      sortBy: "score",
      data: this.state.data,
      icon: "iconUrl",
      onRowPress: (item, index) => {
        this.alert(item.icon);
      },
      oddRowColor: "#7886A3"
    };

    return (
      <View style={{ flex: 1 }}>
        {}
        <View
          style={{
            paddingTop: 50,
            backgroundColor: "#E3E3D7",
            alignItems: "center"
          }}
        >
          <Text style={{ fontSize: 30, color: "#7886A3", paddingBottom: 10 }}>
            Leaderboard
          </Text>
        </View>
        <Leaderboard {...props} />
        <View style={styles.bottomContainer}>
          <View style={styles.buttomContainer1}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate("TopicSelection")}>
                  <Icon name="playlist-add" type="material" size={35} color={'white'}/>
              </TouchableOpacity>
          </View>
          <View style={styles.buttomContainer2}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate("CandidateSelection")}>
                  <Icon name="favorite" type="material" size={35} color={'white'}/>
              </TouchableOpacity>
          </View>
          <View style={styles.buttomContainer3}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate("LoginSuccess")}>
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
    );
  }
}

const PLAYERS = [
  {
    name: "Sahil",
    score: 700,
    iconUrl:
      "https://pbs.twimg.com/profile_images/1229244361033932800/yg4NQmr3_400x400.jpg"
  },
  {
    name: "Thomas",
    score: 150,
    iconUrl:
      "https://cdn2.iconfinder.com/data/icons/businessmen-being-various-characters/316/worker-006-512.png"
  },
  {
    name: "Sukh",
    score: 150,
    iconUrl:
      "https://cdn1.iconfinder.com/data/icons/unigrid-bluetone-human-vol-3/60/011_136_human_work_medium_workplace_sitting_computer_laptop-512.png"
  },
  
  
];
const styles = StyleSheet.create({
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