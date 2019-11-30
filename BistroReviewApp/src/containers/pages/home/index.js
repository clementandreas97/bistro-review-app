import React, { Component } from 'react';
import { FlatList, Image, ImageBackground, SafeAreaView, Text, View } from 'react-native';

import { styles, colors, sizes } from './styles.js';
import { ScrollView } from 'react-native-gesture-handler';

import { mockBannerData, mockUser } from '../../../configs/mocks'

class Home extends Component {
  static navigationOptions = {
    header: (
      <View style={[styles.flex, styles.row, styles.header]}>
        <View>
          <Text style={[{color: colors.caption}, styles.text12]}>Search for bistro</Text>
          <Text style={{fontSize: 24}}>Area</Text>
        </View>
        <View>
          <Image style={styles.avatar} source={{uri: mockUser.image}}></Image>
        </View>
      </View>
    )
  }

  renderPopulars = () => {
    return(
      <View style={[styles.column, styles.bannerContainer]}>
        <FlatList 
          horizontal 
          pagingEnabled
          scrollEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottl={16}
          snapToAlignment='center'
          style={[{overflow: 'visible'}]}
          data={mockBannerData}
          keyExtractor={(item, index) => `${item.id}`}
          renderItem={({item}) => this.renderPopularItem(item)}
          />
        {this.renderPageControl()}
      </View>
    )
  }

  renderPopularItem = item => {
    if (item === undefined) {
      return
    }
    return (
      <ImageBackground
        style={[styles.flex, styles.banner, styles.cardShadow]}
        imageStyle={{borderRadius: 12}}
        source={{uri: item.thumbnail}}>
        <View style={[styles.row, {justifyContent: 'space-between'}]}>
          <View>
            <Image source={{uri: item.user.image}} style={styles.avatar}></Image>
          </View>
          <View style={[styles.flex, styles.column, {marginHorizontal: 16}]}>
            <Text style={[{color: 'white'}, styles.title14]}>{item.user.name}</Text>
            <Text style={{color: 'white'}}>{item.location}</Text>
          </View>
          <View>
            <Text style={styles.rating}>{item.rating}</Text>
          </View>
        </View>
        <View style={[styles.bannerCard, styles.cardShadow]}>
          <Text style={[styles.title14, {marginBottom: 8}]}>{item.title}</Text>
          <Text style={[styles.text12, {color: 'grey'}]}>{item.description.split('').slice(0, 75)}</Text>
        </View>
      </ImageBackground>  
    )
  }

  renderPageControl() {
    return (
      <View style={[styles.flex, styles.row, {justifyContent: 'center'}, styles.pageControlMarginTop]}>
          {mockBannerData.map(popularDestination => {
            return (
              <View key={popularDestination.id} style={[styles.pageControl, popularDestination.id === 1 ? styles.activePageControl : null]}>
              
              </View>
            )
        })}
      </View>
    )
  }

  renderRecommendations = () => {
    return(
      <View style={[styles.flex, styles.column, styles.homeContent]}>
        <View style={[styles.row, {justifyContent: 'space-between'}]}>
          <Text style={[styles.title18]}>Recommended</Text>
          <Text style={[styles.text14, {color: colors.caption}]}>More</Text>
        </View>
      </View>
    )
  }

  render() {
    return (
      <ScrollView style={[styles.flex]}>
        {this.renderPopulars()}
        {this.renderRecommendations()}
      </ScrollView>
    )
  }
}

export default Home