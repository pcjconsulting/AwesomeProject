// issues
//  move spinner between pwd and btn
//  fonts
//  btn clickable area is elusive or very small 

import { React, Component, useState } from "react";
import { Text, StyleSheet, View, TouchableHighligh } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color, FontSize, Border, Padding } from "./GlobalStyles";
import { ActivityIndicator, Alert, TouchableNativeFeedback } from 'react-native';

async function sleep(msec) {
  return new Promise(resolve => setTimeout(resolve, msec));
}


const LoginFrame = () => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  class LoginButton extends Component {
    async  _onPressButton() {
      setLoading(true);
      // Alert.alert('You tapped the button!');
      try {
        const response = await fetch('https://reactnative.dev/movies.json');
        const json = await response.json();

        // display the spinner
        await sleep(2000);

        setData(json.movies);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    render() {
      return (
        <TouchableNativeFeedback
        onPress={this._onPressButton}
        background={ TouchableNativeFeedback.SelectableBackground()}>
        <View style={styles.container} >
          <Text style={[styles.logIn, styles.logTypo]}>Log In</Text>
        </View>
        </TouchableNativeFeedback>
      );
    }
  }

  
  function ParseMovie(json){
    return JSON.parse(json);
  }

  return (
    <View style={styles.loginframe}>
      <View style={styles.androidSmall1}>
        <Text style={[styles.welcomeToCrisprmaestro, styles.pleaseLogInTypo]}>
          {`Welcome to CrisprMaestro.`}
        </Text>
        <View style={[styles.button, styles.buttonPosition]}>
          <LoginButton >
          </LoginButton>
        </View>
        <Text style={[styles.pleaseLogIn, styles.logTypo]}>Please Log in.</Text>
        <View style={[styles.password, styles.passwordPosition]}>
        <Text style={[styles.label, styles.labelTypo]}>password</Text>
        <View style={styles.textbox}>
          <Text style={[styles.textFieldData, styles.labelTypo]}>
            {data[0]?.title } 
          </Text>
          <View style={styles.textboxChild} />
        </View>
        </View>
        <View style={[styles.username, styles.passwordPosition]}>
          <Text style={[styles.label, styles.labelTypo]}>User name</Text>
          <View style={styles.textbox}>
            <Text style={[styles.textFieldData, styles.labelTypo]}>
              Text field data 
            </Text>
            <View style={styles.textboxChild} />
          </View>
        </View>
        <View style={[styles.passwordPosition]}>
          {!isLoading ? (<ActivityIndicator size="large" color="#00ff00" />) : <></>}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pleaseLogInTypo: {
    height: 33,
    // fontFamily: FontFamily.interLight,
    fontWeight: "300",
    color: Color.black,
  },
  buttonPosition: {
    left: "50%",
    position: "absolute",
  },
  logTypo: {
    fontSize: FontSize.size_xl,
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
  passwordPosition: {
    width: 200,
    left: 80,
    position: "absolute",
  },
  labelTypo: {
    // fontFamily: FontFamily.inputFieldLabel,
    textAlign: "left",
  },
  welcomeToCrisprmaestro: {
    marginLeft: -142,
    top: 33,
    fontSize: 22,
    width: 360,
    textAlign: "left",
    height: 33,
    // fontFamily: FontFamily.interLight,
    fontWeight: "300",
    left: "50%",
    position: "absolute",
  },
  logIn: {
    marginTop: 13,
    marginLeft: -30.5,
    lineHeight: 26,
    fontWeight: "600",
    // fontFamily: FontFamily.interSemiBold,
    color: Color.white,
    top: "50%",
  },
  button: {
    marginTop: 202,
    marginLeft: -71,
    borderRadius: 8,
    backgroundColor: "#426b1f",
    width: 141,
    height: 64,
    top: "50%",
    overflow: "hidden",
  },
  pleaseLogIn: {
    marginLeft: -67,
    top: 103,
    width: 150,
    height: 33,
    // fontFamily: FontFamily.interLight,
    fontWeight: "300",
    color: Color.black,
    fontSize: FontSize.size_xl,
  },
  label: {
    // fontSize: FontSize.inputFieldLabel_size,
    letterSpacing: 1.8,
    textTransform: "uppercase",
    color: Color.black,
    // fontFamily: FontFamily.inputFieldLabel,
  },
  textFieldData: {
    fontSize: FontSize.size_xs,
    color: Color.falseBlack,
  },
  textboxChild: {
    backgroundColor: Color.falseBlack,
    width: 2,
    height: 16,
    marginLeft: 1,
  },
  textbox: {
    alignSelf: "stretch",
    borderRadius: Border.br_9xs,
    borderStyle: "solid",
    borderColor: Color.colorCornflowerblue,
    borderWidth: 2,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_6xs,
    marginTop: 4,
    backgroundColor: Color.white,
  },
  password: {
    top: 297,
  },
  username: {
    top: 193,
  },
  androidSmall1: {
    top: 0,
    left: 0,
    width: 360,
    overflow: "hidden",
    backgroundColor: Color.white,
    position: "absolute",
    height: 640,
  },
  loaderAnimIcon: {
    marginLeft: -10,
    top: 434,
    width: 57,
    height: 50,
  },
  loginframe: {
    marginLeft: -20,
    flex: 1,
    width: "100%",
    height: 640,
  },
});

export default LoginFrame;
