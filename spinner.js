import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

export default function App() {
  return (
    <View style={[StyleSheet.absoluteFill, justifyContent='center', alignItems='center']}>
      <ActivityIndicator size={200} color={'#00bdcd'} top={350} />
    </View>
  );
};