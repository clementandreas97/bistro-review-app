import React, { Component } from 'react';
import { FlatList, SafeAreaView, Text, View } from 'react-native';

import { styles } from './styles.js';
import { ScrollView } from 'react-native-gesture-handler';

class Home extends Component {
  static navigationOptions = {
    header: (
      <View style={[styles.flex, styles.row, styles.header, {justifyContent: 'space-between', alignItems: 'center'}]}>
        <View>
          <Text>Search for bistro</Text>
          <Text style={{fontSize: 24}}>Area</Text>
        </View>
        <View>
          <Text>User</Text>
        </View>
      </View>
    )
  }

  renderPopulars = () => {
    return(
      <ScrollView 
      horizontal 
      pagingEnabled
      scrollEnabled
      showsHorizontalScrollIndicator={false}
      scrollEventThrottl={16}
      snapToAlignment='center'
      style={[styles.flex, styles.row]}>
        {this.renderPopularItem()}
        <View style={[styles.banner]}>
          <Text>Popular 1</Text>
        </View>
        <View style={[styles.banner]}>
          <Text>Popular 2</Text>
        </View>
        <View style={[styles.banner]}>
          <Text>Popular 3</Text>
        </View>
      </ScrollView>
    )
  }

  renderPopularItem = (item) => {
    return (
      <View style={[styles.flex, styles.column, styles.banner]}>
        {/* Image Background */}
        <View style={{height: '75%', backgroundColor: 'white'}}>

        </View>
        {/* Floating Card */}
        <View>
          
        </View>
      </View>
    )
  }

  renderRecommendations = () => {
    return(
      <View style={[styles.flex, styles.column, styles.homeContent]}>
        <Text>Recommended</Text>
      </View>
    )
  }

  render() {
    return (
      <View style={[styles.flex]}>
        <Text>Home Screen</Text>
        {this.renderPopulars()}
        {this.renderRecommendations()}
      </View>
    )
  }
}

export default Home