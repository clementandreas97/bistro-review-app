import React, { Component } from 'react';
import { Animated, Image, ImageBackground, View, SafeAreaView, StatusBar, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { withNavigation } from 'react-navigation';

import { mockUser } from '../../../configs/mocks';
import { colors, sizes, styles } from '../../../common';
import { ScrollView } from 'react-native-gesture-handler';

class Bistro extends Component {
  horizontalOffset = new Animated.Value(0);
  state = {
    isExpanded: false
  }

  onTapExpand() {
    this.setState({isExpanded: !this.state.isExpanded})
  }

  static navigationOptions = ({ navigation }) => {
    return {
      header: (
        <View style={[styles.row, styles.header, {backgroundColor: 'transparent'}]}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name='chevron-left' color='white' size={18}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name='ellipsis-h' color='white' size={24}/>
          </TouchableOpacity>
        </View>
      ),
      headerTransparent: true
    }
  }

  renderImages(image, idx) {
    return (
      <Image key={`img-${idx}`}style={{width: sizes.width, height: sizes.width * 1.25}} source={{uri: image}} resizeMode='cover'></Image>
    )
  }

  renderPageControl() {
    const { navigation } = this.props;
    const pageControlPos = Animated.divide(this.horizontalOffset, sizes.width);
    const bistro = navigation.getParam('bistro');
    return (
      <View style={[styles.row, {justifyContent: 'center', position: 'absolute', bottom: 24, right: 0, left: 0}]}>
          {bistro.images.map((currentImage, index) => {
            const opacity = pageControlPos.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [0.5, 1, 0.5],
              extrapolate: 'clamp'
            });
            return (
              <Animated.View key={`image-${index}`} style={[styles.pageControl, {opacity: opacity}]}></Animated.View>
            )
        })}
      </View>
    )
  }

  renderRatings(rating) {
    const stars = new Array(5).fill(0);
    return (
      stars.map((val, idx) => {
        const isFill = idx + 1 < rating
        return <Icon name='star' style={{marginRight: 8}} key={idx} size ={12} color={colors[isFill ? 'active' : 'gray']}/>
      })
    )
  }

  render() {
    const { navigation } = this.props;
    const bistro = navigation.getParam('bistro');
    return (
      <View style={[styles.flex, {backgroundColor: 'white'}]}>
        <StatusBar translucent backgroundColor='transparent' barStyle='light-content'></StatusBar>
        <View style={[styles.flex, {marginBottom: -8}]}>
          <ScrollView 
            horizontal
            pagingEnabled
            scrollEnabled
            showsHorizontalScrollIndicator = {false}
            decelerationRate={0}
            scrollEventThrottle={16}
            snapToAlignment='center'
            onScroll={Animated.event([{nativeEvent: {contentOffset: {x: this.horizontalOffset}}}])}
            style={{}}>
            {
              bistro.images.map((img, idx) => {
                return this.renderImages(img, idx)
              })
            }
          </ScrollView>
          {this.renderPageControl()}
        </View>
        <View style={[{overflow: 'visible'}, styles.flex, {borderTopLeftRadius: 16, borderTopRightRadius: 16, padding: 36, backgroundColor: 'white'}]}>
          <Image source={{uri: mockUser.image}} style={[styles.detailAvatar, styles.cardShadow]}></Image>
          <Text style={[styles.title24]}>{bistro.title}</Text>
          <View style={[styles.row, {alignItems: 'center', marginTop: 16}]}>
            {this.renderRatings(bistro.rating)}
            <Text style={[{color: colors.active, fontWeight: '500', marginRight: 12}, styles.text14]}>{bistro.rating}</Text>
            <Text style={[styles.text12, {color: colors.caption}]}>{`(${bistro.totalReview} Reviews)`}</Text>
          </View>
          <TouchableOpacity style={{marginTop: 16}} onPress={() => this.onTapExpand()}>
            <Text style={[styles.text14, {color: colors.caption, lineHeight: 28}]}>
              {this.state.isExpanded ? `${bistro.description}  ` : `${bistro.description.slice(0, 180)}...  `}
            <Text style={[{color: colors.active}, styles.text14]}>{this.state.isExpanded ? 'Hide' : 'Read more'}</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default withNavigation(Bistro);