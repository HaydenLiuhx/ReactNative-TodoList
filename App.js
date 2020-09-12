import * as React from "react";
import { StyleSheet, View, TextInput, Text, TouchableOpacity, TouchableWithoutFeedback, ScrollView, FlatList } from "react-native";
import { Button, Flex } from '@ant-design/react-native';
import { AppRegistry } from 'react-native';
export default class App extends React.Component {
  state = {
    inputValue: "",
    list: ["First", "Second", "Third"],
  };
  componentDidMount = () => {
    this.getListInfo();
  };
  getListInfo() {
    //fetch("http://www.abc.com/list.json")
      // .then((res) => res.json())
      // .then((res) => {
        // this.setState({
        //   list: res.data.list,
        // });
      //})
      // .catch((err) => {
      //   alert(err);
      // });
  }
  handleChangeText = (value) => {
    this.setState({inputValue: value})
  }
  handleButtonPress = () => {
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }))
    // this.setState({
    //   list: [...this.state.list, this.state.inputValue],
    //   inputValue: ''
    // })
  }
  handleDelte = (index) => {
    const list = this.state.list
    list.splice(index,1)
    this.setState({
      list
    })
  }
  render() {
    return (
      <View
        style={{
          display: 'flex',
          flex: 1,
        }}
      >
        <View style={styles.topArea}>
          <TextInput onChangeText={this.handleChangeText} value={this.state.inputValue} style={styles.input} placeholder="Please Input Sth" />
          <TouchableOpacity >
          <Button type="primary"  style={{ backgroundColor:'#9254de',borderRadius:10,borderColor:'#9254de', margin: 5, paddingLeft: 4, paddingRight: 4 }} onPress={()=>this.handleButtonPress()} >Submit</Button>
          </TouchableOpacity>
        </View>
        <FlatList style={styles.list} keyExtractor={(item,index)=>index.toString()} data={this.state.list} 
        renderItem={({item, index})=>{
          return (
                <TouchableWithoutFeedback 
                onPress={() => this.handleDelte(index)} >
                  <View>
                    <Text style={[styles.item, styles.itemActivated]} 
                    >
                      {item}
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              );
            }}
            
        >
        </FlatList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    marginLeft: 20,
    lineHeight: 30,
    
  },
  itemActivated: {
    textAlign: 'left'
  },
  topArea: {
    height: 60,
    display: 'flex',
    flexDirection: 'row'
  },
  list: {
    backgroundColor: '#eee',
    height:60,
  },
  input: {
    lineHeight: 20,
    color: '#333',
    paddingLeft: 10,
    fontSize: 12,
    flex: 1,
  },
});
AppRegistry.registerComponent('App', () => App);