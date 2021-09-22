import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NativeRouter, Route } from 'react-router-native';
import About from './views/About';
import Home from './views/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <NativeRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </NativeRouter>
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
