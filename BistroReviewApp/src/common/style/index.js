import { Dimensions, StyleSheet, Platform } from 'react-native';

const { width, height } = Dimensions.get('screen');

const colors = {
  gray: '#DCE0E9',
  darkGray: '#4B5058',
  caption: '#BCCCD4',
  active: '#007BFA',
};

const sizes = {
  base: 16,
  font: 14,
  padding: 36,
  margin: 36,
  title: 24,
  radius: 12,
  width: width,
  height: height
};

const styles = StyleSheet.create({
  flex: {
    flex: 1
  },
  column: {
    flexDirection: 'column'
  },
  row: {
    flexDirection: 'row'
  },
  header: {
    backgroundColor: 'white',
    marginTop: 44,
    padding: 24,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  homeContent: {
    paddingHorizontal: 36
  },
  bannerContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 30
  },
  banner: {
    width: width - (sizes.margin * 2),
    height: width - (sizes.margin * 2),
    borderRadius: 16,
    backgroundColor: 'pink',
    marginHorizontal: 36,
    padding: 36,
    alignItems: 'center'
  },
  bannerCard: {
    position: 'absolute',
    padding: 24,
    bottom: -36,
    left: 36,
    right: 36,
    borderRadius: 16,
    backgroundColor: 'white'
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'pink'
  },
  rating: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  },
  title24: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  title18: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  title14: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  text14: {
    fontSize: 14
  },
  text12: {
    fontSize: 12
  },
  cardShadow: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 6
    },
    shadowOpacity: 0.1,
    shadowRadius: 4
  },
  pageControl: {
    width: 10,
    height: 10,
    borderWidth: 1.5,
    borderRadius: 5,
    marginHorizontal: 6,
    backgroundColor: colors.gray,
    borderColor: 'transparent',
  },
  activePageControl: {
    borderColor: colors.active
  },
  pageControlMarginTop: {
    marginTop: 64
  },
  recommendedContainer: {

  },
  recommendation: {
    width: (width - (36 * 2)) / 2,
    height: (width - (36 * 2)) / 2
  },
  detailAvatar: {
    position: 'absolute',
    top: -32,
    right: 36,
    width: 64,
    height: 64,
    borderRadius: 32
  }
});

export { styles, colors, sizes };