import React from "react";
import { View, Text } from "react-native";
import { useTailwind } from "tailwind-rn/dist";

export default function Test() {
  const tailwind = useTailwind();
  return (
    <View>
      <Text style={tailwind("text-red-400")}>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
      <Text>Hello</Text>
    </View>
  );
}
