import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{ width: 50, height: 50, backgroundColor: "red" }} />
        <View style={{ width: 100, height: 100, backgroundColor: "blue" }} />
        <View style={{ width: 150, height: 150, backgroundColor: "green" }} />
        <View style={{ width: 200, height: 200, backgroundColor: "yellow" }} />
        <View style={{ width: 250, height: 250, backgroundColor: "orange" }} />
        <View style={{ width: 300, height: 300, backgroundColor: "pink" }} />
      </View>
      {/* <StatusBar style="auto" /> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 50,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
