import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Button from "./src/components/button";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>Count : {count}</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 10,
          }}
        >
          <Button name="-" onPressChange={() => setCount(count - 1)} />
          <Button name="+" onPressChange={() => setCount(count + 1)} />
        </View>
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
