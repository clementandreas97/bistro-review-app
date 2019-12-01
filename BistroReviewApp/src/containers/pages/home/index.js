import React, { Component } from 'react';
import { Animated, FlatList, Image, ImageBackground, SafeAreaView, ScrollView, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

import { styles, colors, sizes } from './styles.js';
import { mockBannerData, mockUser, mockRecommendationData } from '../../../configs/mocks'

class Home extends Component {
  horizontalOffset = new Animated.Value(0);

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
          decelerationRate={0}
          scrollEventThrottl={16}
          snapToAlignment='center'
          style={[{overflow: 'visible'}]}
          data={mockBannerData}
          keyExtractor={(item, index) => `${item.id}`}
          onScroll={Animated.event([{nativeEvent: {contentOffset: {x: this.horizontalOffset}}}])}
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
        style={[styles.banner, styles.cardShadow]}
        imageStyle={{borderRadius: 12}}
        source={{uri: item.thumbnail}}>
        <View style={[styles.row, {justifyContent: 'space-between'}]}>
          <View>
            <Image source={{uri: item.user.image}} style={styles.avatar}></Image>
          </View>
          <View style={[styles.flex, styles.column, {marginHorizontal: 16}]}>
            <Text style={[{color: 'white'}, styles.title14]}>{item.user.name}</Text>
            <View style={[styles.row, {alignItems: 'center'}]}>
              <Icon name='map-marker' color='white' style={{marginRight: 4}}/>
              <Text style={{color: 'white'}}>{item.location}</Text>
            </View>
          </View>
          <View>
            <Text style={styles.rating}>{item.rating}</Text>
          </View>
        </View>
        <View style={[styles.bannerCard, styles.cardShadow]}>
          <Text style={[styles.title14, {marginBottom: 8}]}>{item.title}</Text>
          <View style={[styles.row, {justifyContent: 'space-between', alignItems: 'flex-end'}]}>
            <Text style={[styles.text12, {color: 'grey'}]}>{item.description.split('').slice(0, 75)}</Text>
            <Icon name='chevron-right' size={12} color='grey' style={{marginLeft: 4}}></Icon>
          </View>
          
        </View>
      </ImageBackground>  
    )
  }

  renderPageControl() {
    const pageControlPos = Animated.divide(this.horizontalOffset, sizes.width);
    return (
      <View style={[styles.row, {justifyContent: 'center'}, styles.pageControlMarginTop]}>
          {mockBannerData.map((popularDestination, index) => {
            const borderWidth = pageControlPos.interpolate({
              inputRange: [index-1, index, index + 1],
              outputRange: [0, 1.5, 0],
              extrapolate: 'clamp'
            });
            return (
              <Animated.View key={popularDestination.id} style={[styles.pageControl, styles.activePageControl, {borderWidth: borderWidth}]}>
              
              </Animated.View>
            )
        })}
      </View>
    )
  }

  renderRecommendations = () => {
    return(
      <View style={[styles.flex, styles.column, styles.homeContent, {marginBottom: 16}]}>
        <View style={[styles.row, {justifyContent: 'space-between'}]}>
          <Text style={[styles.title18]}>Recommended</Text>
          <Text style={[styles.text14, {color: colors.caption}]}>More</Text>
        </View>
        <View style={[styles.column, styles.recommendedContainer]}>
          <FlatList 
            horizontal 
            pagingEnabled
            scrollEnabled
            showsHorizontalScrollIndicator={false}
            scrollEventThrottl={16}
            snapToAlignment='end'
            style={[{overflow: 'visible'}]}
            data={mockRecommendationData}
            keyExtractor={(item, index) => `${item.id}`}
            renderItem={({item, index}) => this.renderRecommendationItem(item, index)}
          />
        </View>
      </View>
    )
  }

  renderRecommendationItem(item, index) {
    return (
      <View style={[styles.column, {marginTop: 12, marginRight: 8, width: (sizes.width - (36 * 2)) / 2}]}>
        <View style={{flex: 1, overflow: 'hidden', borderTopLeftRadius: 12, borderTopRightRadius: 12, backgroundColor: 'white'}}>
          <Image
            style={[styles.recommendation, styles.cardShadow]}
            source={{uri: item.thumbnail}}>

          </Image>
          <View style={[styles.flex, styles.cardShadow, {marginBottom: 4, paddingHorizontal: 8, paddingVertical: 16, borderBottomLeftRadius: 12, borderBottomRightRadius: 12, backgroundColor: 'white', justifyContent: 'space-evenly', marginHorizontal: 2}]}>
            <Text style={[styles.text14]}>{item.title}</Text>
            <Text style={[styles.text12, {color: colors.caption}]}>{item.location}</Text>
            <View style={[styles.row, {alignItems: 'center', justifyContent: 'space-between', marginTop: 4}]}>
              {this.renderRatings(item.rating)}
              <Text style={[{color: colors.active}]}>{item.rating}</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }

  renderRatings(rating) {
    const stars = new Array(5).fill(0);
    return (
      stars.map((val, idx) => {
        const isFill = idx + 1 < rating
        return <Icon name='star' key={idx} size ={12} color={colors[isFill ? 'active' : 'gray']}/>
      })
    )
  }

  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false} style={[styles.flex]} contentContainerStyle={[{paddingBottom: 36}]}>
        {this.renderPopulars()}
        {this.renderRecommendations()}
      </ScrollView>
    )
  }
}

export default Home