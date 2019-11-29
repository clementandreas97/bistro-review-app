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
    padding: 36
  },
  homeContent: {
    paddingHorizontal: 36
  },
  banner: {
    width: width - (36 * 2),
    height: width * 0.6,
    borderRadius: 16,
    backgroundColor: 'pink',
    marginHorizontal: 36
  }
});

export { styles };