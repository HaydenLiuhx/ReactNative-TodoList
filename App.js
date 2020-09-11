import * as React from "react";
import { StyleSheet, View, Text } from "react-native";

export default class App extends React.Component {
  state = {
    inputValue: "",
    list: [1, 2, 3],
  };
  componentDidMount = () => {
    this.getListInfo()
  };
  getListInfo() {
    fetch('http://www.abc.com/list.json')
      .then((res) => res.json())
      .then((res) => {
       this.setState({
         list:res.data.list
       })
      })
      
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View>
          {this.state.list.map((item, index) => {
            return (
              <Text style={styles.item} key={index}>
                {item}
              </Text>
            );
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    textAlign: "center",
    lineHeight: 30,
  },
});
