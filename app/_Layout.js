import { Slot } from "expo-router";
import { View, Text } from "react-native";

export const AuthLayout = () => {
  return (
    <View>
      <View>
        <Text>Header</Text>
      </View>
      <Slot />
      <View>
        <Text>Footer</Text>
      </View>
    </View>
  );
};
