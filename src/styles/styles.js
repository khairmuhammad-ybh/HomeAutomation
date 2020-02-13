import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
  horizontalContainer: {
    flexDirection: 'row',
  },
  button: {
    width: 72,
    margin: 5,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
  countText: {
    color: '#FF00FF',
  },
  image: {
    margin: 10,
  },
  header: {
    position: 'absolute',
    width: 207,
    height: 56,
    textAlign: 'center',
    top: 110,
    fontSize: 24,
    fontWeight: 'bold',
  },
  footer: {
    position: 'absolute',
    width: 120,
    height: 28,
    top: 519,
    fontWeight: 'bold',
    fontSize: 12,
  },
  touchLink: {
    position: 'absolute',
    top: 444,
  },
  textLink: {
    color: 'blue',
    margin: 10,
  },
  fontStyle: {
    lineHeight: 14,
    textAlign: 'center',
  },
  input: {
    margin: 15,
    marginBottom: 0,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1,
    paddingLeft: 20,
    width: '80%',
    borderRadius: 5,
  },
  card: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
  },
  cardHeader: {
    margin: 15,
    marginBottom: 0,
    fontSize: 15,
    fontWeight: 'bold',
  },
  textStyle: {
    fontFamily: 'Roboto',
  },
  cardButton: {
    margin: 15,
    width: '50%',
    backgroundColor: '#7a42f4',
    alignItems: 'center',
    borderRadius: 10,
  },
  cardButtonText: {
    margin: 10,
    color: '#fff',
  },
});

export default styles;
