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
  Image
} from 'react-native';
import { Icon, CheckBox } from 'react-native-elements';

export default class CustomCheckbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
  }

  toggleChange(){
    this.setState({checked: !this.state.checked});
    // console.log(this.props.value)
}

  render() {
    return (
      <View>
        <CheckBox
          checked={this.state.checked}
          onPress={() =>  this.toggleChange()}
        />
      </View>
    );
  }
}
