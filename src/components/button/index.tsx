import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

type Props = {
  name: string;
  onPressChange?: () => void;
};

const Button: React.FC<Props> = ({ name, onPressChange }) => {
  return (
    <TouchableOpacity
      onPress={onPressChange && onPressChange}
      style={{
        backgroundColor: "orange",
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
        height: 40,
        width: 40,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>{name}</Text>
    </TouchableOpacity>
  );
};

export default Button;
