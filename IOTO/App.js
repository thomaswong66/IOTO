import React from 'react';
import { Platform, StyleSheet, Text, View, Dimensions, SafeAreaView  } from 'react-native';
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import TopicSelection from "./Components/TopicSelection";
import TopicSelectionWithoutPicker from "./Components/TopicSelectionWithoutPicker";
import firebase from 'firebase';
import firebaseConfig from './backend/config/config';
import LoginSuccess from "./Components/LoginSuccess";
import LocationServices from "./Components/LocationServices";
import CandidateSelection from "./Components/CandidateSelection";
import GetStarted from "./Components/GetStarted"
import Gamification from "./Components/Gamification"
import Gamification2 from "./Components/Gamification2"
import Gamification3 from "./Components/Gamification3"
import GameStart from "./Components/GameStart"
import Leaderboard from "./Components/Leaderboard"
import GamificationCorrect2 from "./Components/GamificationCorrect2"
import GamificationCorrect1 from "./Components/GamificationCorrect1"
import GamificationCorrect3 from "./Components/GamificationCorrect3"
import Profile from "./Components/Profile"

import Compare from './Components/PieChart'
import BarChart from './Components/BarChart'

import ActionBarImage from './pages/ActionBarImage';
import { ScrollView } from 'react-native-gesture-handler';

const RootStack = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        title: "",
        headerLeft: <ActionBarImage />,
        headerStyle: {
        backgroundColor: "#7886A3"
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  },

    Signup: {
      screen: Signup,
      navigationOptions: {
          title: "",
          headerLeft: <ActionBarImage />,
          headerStyle: {
          backgroundColor: "#7886A3"
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
          fontWeight: "bold"
          }
      }
    },


    LoginSuccess: {
      screen: LoginSuccess,
      navigationOptions: {
        gesturesEnabled: false,
        title: "",
        headerLeft: <ActionBarImage />,
        headerStyle: {
        backgroundColor: "#7886A3"
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
        fontWeight: "bold"
        },
      }
    },
     Gamification: {
      screen: Gamification,
      navigationOptions: {
        header: null,
        title: "",
      }
    },
        Gamification2: {
      screen: Gamification2,
      navigationOptions: {
        header: null,
        title: "",
      }
    },
        Gamification3: {
      screen: Gamification3,
      navigationOptions: {
        header: null,
        title: "",
      }
    },
    GamificationCorrect2: {
      screen: GamificationCorrect2,
      navigationOptions: {
        header: null,
        title: "",
      }
    },
    GamificationCorrect1: {
      screen: GamificationCorrect1,
      navigationOptions: {
        header: null,
        title: "",
      }
    },
     GamificationCorrect3: {
      screen: GamificationCorrect3,
      navigationOptions: {
        header: null,
        title: "",
      }
    },
        GameStart: {
      screen: GameStart,
      navigationOptions: {
        header: null,
        title: "",
      }
    },

    LocationServices: {
      screen: LocationServices,
      navigationOptions: {

        title: "",
        headerLeft: <ActionBarImage />,
        headerStyle: {
        backgroundColor: "#7886A3"
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
        fontWeight: "bold"
        }
      }
    },
    TopicSelection: {
      screen: TopicSelection,
      navigationOptions: {
        title: "",
        headerLeft: <ActionBarImage />,
        headerStyle: {
        backgroundColor: "#7886A3"
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
        fontWeight: "bold"
        }
      }
    },
    TopicSelectionWithoutPicker: {
      screen: TopicSelectionWithoutPicker,
      navigationOptions: {

        title: "",
        headerLeft: <ActionBarImage />,
        headerStyle: {
        backgroundColor: "#7886A3"
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
        fontWeight: "bold"
          }
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        title: "",
        headerLeft: <ActionBarImage />,
        headerStyle: {
        backgroundColor: "#7886A3"
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
        fontWeight: "bold"
          }
      }
    },
    GetStarted: {
      screen: GetStarted,
      navigationOptions: {
        header: null,
        title: "",
      }
    },
    Leaderboard: {
      screen: Leaderboard,
      navigationOptions: {
        header: null,
        title: "",
      }
    },
    CandidateSelection: {
      screen: CandidateSelection,
      navigationOptions: {

        title: "",
        headerLeft: <ActionBarImage />,
        headerStyle: {
        backgroundColor: "#7886A3"
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
        fontWeight: "bold"
        }
      }
    },
    Compare: {
      screen: Compare,
      navigationOptions: {
        title: "",
        headerLeft: <ActionBarImage />,
        headerStyle: {
        backgroundColor: "#7886A3"
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
        fontWeight: "bold"
        }
      }
    },
    BarChart: {
      screen: BarChart,
      navigationOptions: {
        title: "",
        headerLeft: <ActionBarImage />,
        headerStyle: {
        backgroundColor: "#7886A3"
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
        fontWeight: "bold"
        }
      }
    },
},

  {
    // initialRouteName: "Compare",
    initialRouteName: "GetStarted",

  }
)

const AppContainer = createAppContainer(RootStack);


export default class App extends React.Component {
  render() {
    return(

      <AppContainer />

    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});