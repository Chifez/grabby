import { Tabs } from "expo-router";
import { Octicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export default TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "green", // Set the color for active tab
        tabBarInactiveTintColor: "gray", // Set the color for inactive tabs
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: "Inter-Reg",
          fontWeight: "400",
        },
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Octicons
              name="home"
              size={24}
              color={focused ? "green" : "gray"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Category"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="appstore-o"
              size={24}
              color={focused ? "green" : "gray"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Wishlist"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="hearto"
              size={24}
              color={focused ? "green" : "gray"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Cart"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="shoppingcart"
              size={24}
              color={focused ? "green" : "gray"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="user"
              size={24}
              color={focused ? "green" : "gray"}
            />
          ),
        }}
      />
    </Tabs>
  );
};
