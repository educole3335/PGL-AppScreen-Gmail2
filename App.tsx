import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";
import Header from "./components/header/Header";


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Header />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#121212",
    alignItems: "center",
    justifyContent: "center",
   },
});