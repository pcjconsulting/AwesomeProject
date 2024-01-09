//  TODO
//    FontFamily
//    use POST in fetch
//    decouple logic from UI code and UX messages
//      invalid
//        empty usr/pwd
//        invalid pwd len
//        prevent re-entry
//      fail
//        no net cnx available
//        net error - unreachable
//        proxy request timed out
//        service error - 500's
//        service warning - 400's
//        service timed out - 408
//        login failed, not authorized
//      abort
//        user cancel
//        auto canceo in proxy dtor
//        dropped net cnx
//      succeed
//        service respose - 200's
//        login success, authorized
//  DONE 
//    text entry
//    move spinner between pwd and btn
//    btn clickable area depends on...

import { React, Component, useState } from "react";
import { Text, StyleSheet, View, TouchableHighligh } from "react-native";
import { FontFamily, Color, FontSize, Border, Padding } from "./GlobalStyles";
import { ActivityIndicator, Alert, TextInput, TouchableNativeFeedback, ScrollView } from 'react-native';

async function sleep(msec) {
  return new Promise(resolve => setTimeout(resolve, msec));
}

class Movie {
  id = '0';
  title = 'movie title';
  releaseYear ='releaseYear';
};


class Response  {
  description = 'description';
  title = 'title';
  movies = new Movie();
};


const LoginFrame = () => {
  const [status, setStatus] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState(new Response());
  const [usrText, setUsrText] = useState('def usr');
  const [pwdText, setPwdText] = useState('def pwd');

  class LoginButton extends Component {
    async  _onPressButton() {

      // get the vars for POST
      let username = usrText ?? 'empty';
      let password = pwdText ?? 'empty';

      // display status
      msg = 'Logging in ' + username  + '...';
      setStatus(msg);
      await sleep(500);

      try {
        // display the spinner
        setLoading(true);
        await sleep(500);

        // request/response
        const response = await fetch('https://reactnative.dev/movies.json');
        responseCode = response?.status?? 0;

        // error response
        if(responseCode  >= 500){
          setData(new Response());
          setStatus('ERROR ' + responseCode + ' ' + response.status);
        }
        // warning response
        else if(responseCode >= 300){
          setData(new Response());
          setStatus('ERROR ' + responseCode + ' ' + response.status);
        }
        // OK, get data
        else if(responseCode >= 200){
          const json = await response.json();
          setData(json?? new Response());
          setStatus('OK ' + responseCode);
        }

      } catch (error) {
        setStatus('Caught ' + error);
        // console.error(error);
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
            <Text style={styles.logIn}>Log In</Text>
          </View>
        </TouchableNativeFeedback>
      );
    }
  }

  return (
    <View style={styles.loginframe}>
      <View style={styles.androidSmall1}>
        <Text style={styles.welcomeToCrisprmaestro}>Welcome to CrisprMaestro.</Text>
        <Text style={styles.pleaseLogIn}>Please Log in.</Text>

        {/* username */}
        <View style={[styles.username, styles.textPosition]}>
          <Text style={[styles.label, styles.labelTypo]}>User name</Text>
          <View style={styles.textbox}>
            <TextInput  placeholder="Type username here." onChangeText={(t) => setUsrText(t)} defaultValue={data[0]?.title} />
          </View>
        </View>

        {/* password */}
        <View style={[styles.password, styles.textPosition]}>
          <Text style={[styles.label, styles.labelTypo]}>password</Text>
          <View style={styles.textbox}>
            <TextInput  placeholder="Type password here." onChangeText={(t) => setPwdText(t)} defaultValue={pwdText} />
          </View>
        </View>

        {/* progress/status */}
        <>
        {isLoading ? (
          <View style={[StyleSheet.absoluteFill, justifyContent='center', alignItems='center']}>
            <ActivityIndicator size={100} color={'#426b1f'} top={400} />
          </View>
          ):(
          <ScrollView style={[styles.status, styles.textPosition]}>
            <Text style={[styles.labelTypo]}>{status}</Text>
          </ScrollView>
          )}
        </>

        {/* login button */}
        <View style={[styles.button, styles.buttonPosition]}>
          <LoginButton >
          </LoginButton>
        </View>

      </View>
    </View>);
  };

const styles = StyleSheet.create({
  buttonPosition: {
    left: "50%",
    position: "absolute",
  },
  textPosition: {
    width: 200,
    left: 80,
    position: "absolute",
  },
  labelTypo: {
    // fontFamily: FontFamily.inputFieldLabel,
    textAlign: "left",
  },
  welcomeToCrisprmaestro: {
    // marginLeft: -142,
    top: 33,
    fontSize: 22,
    textAlign: "center",
    height: 33,
    // fontFamily: FontFamily.interLight,
    height: 33,
    fontWeight: "400",
    color: Color.black,
  },
  logIn: {
    textAlign: "center",
    fontSize: 32,
    marginTop: 16,
    marginBottom: 16,
    lineHeight: 30,
    fontWeight: "600",
    // fontFamily: FontFamily.interSemiBold,
    color: Color.white,
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
    top: 80,
    height: 33,
    // fontFamily: FontFamily.interLight,
    fontWeight: "300",
    color: Color.black,
    fontSize: 22,
    textAlign: "center",
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
  status: {
    top: 400,
    height: 100
  },
  password: {
    top: 300,
  },
  username: {
    top: 200,
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
