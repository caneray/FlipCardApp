import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  imageContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  baslik: {
    textAlign: 'center',
    color: "#0c6a86",
    fontFamily: 'Montserrat-ExtraBold',
    fontSize: 40,
    marginBottom: 20
  },
  container: {
    flex: 1,
    backgroundColor: '#FFF9E9',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16
  },
  noPadding: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "red"
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
    marginVertical: 4,
  },
  fillSpace: {
    flex: 1
  },
  rightAligned: {
    justifyContent: "flex-end"
  },
  loginButton: {
    width : 153,
    height: 38,
    borderRadius: 20,
    backgroundColor: '#0c6a86',
    alignItems: "center", 
    justifyContent: 'center',
    
  },
  topMargin: {
    marginTop: 15
  },
  bottomMargin: {
    marginBottom: 30
  },
  rightMargin: {
    marginRight: 30
  },
  leftMargin: {
    marginLeft: 30
  },
  backgroundCover: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
    opacity: 0.7,
    padding: 16
  },
  lightText: {
    color: "#fff",
    fontFamily: 'MontSerrat-Medium',
  },
  buttonField:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorText: {
    color: "#ff0000",
    justifyContent: 'flex-start',
  },
  header: {
    fontSize: 20,
    alignSelf: "center"
  },
  textInput: {
    alignSelf: 'stretch',
    padding: 8,
    borderWidth: 2,
    marginVertical: 8,
    borderRadius: 20,
    width: 281,
    height: 38,
    borderColor: "#0C6A86",
  },
  lightTextInput: {
    
  },
  darkTextInput: {
    borderBottomColor: "#000000"
  },
  inlineTextButton: {
    color: "#0c6a86"
  },
  pressedInlineTextButton: {
    color: "#87F1FF",
    
    opacity: 0.6
  },
  placeholder: {
    color: "#000000",
    opacity: 0.7,
    fontFamily: 'MontSerrat-Medium',
  }
});