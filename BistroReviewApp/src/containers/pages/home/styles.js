import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('screen');

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
    padding: 36,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  homeContent: {
    paddingHorizontal: 36
  },
  banner: {
    width: width - (36 * 2),
    height: width * 0.6,
    borderRadius: 16,
    backgroundColor: 'pink',
    marginHorizontal: 36,
    padding: 36,
    position: 'relative'
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
    fontSize: 24
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
  }
});

export { styles };