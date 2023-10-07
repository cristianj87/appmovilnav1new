import React from "react";
import { View, StyleSheet, Text, StatusBar } from "react-native";
import WebView from 'react-native-webview';

const HomeScreen2 = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <WebView source={{ uri: 'http://sii.cdjuarez.tecnm.mx/' }} style={styles.webView}/>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight || 10, // Aseguramos espacio para la barra de estado
  },
  webView: {
    flex: 1,
  },
});

export default HomeScreen2;
