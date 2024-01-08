import { StatusBar } from 'expo-status-bar';
import { React, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Please Login.</Text>
      <StatusBar style="auto" />

      <div className="login-frame">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="android-small">
            <div className="text-wrapper-3">Welcome to CrisprMaestro.</div>
            <button className="button">
              <div className="text-wrapper-4">Log In</div>
            </button>
            <div className="text-wrapper-5">Please Log in.</div>
            <Input className="password" state="selected" text="PASSWORD" type="text" />
            <TypeTextStateWrapper className="username" state="selected" text="USER NAME" type="text" />
          </div>
          <LoaderAnim
            className="loader-anim-instance"
            ellipseStroke="ellipse-8-stroke-3.svg"
            ellipseStrokeClassName="design-component-instance-node"
            state="one"
          />
        </div>
      </div>
    </div>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
