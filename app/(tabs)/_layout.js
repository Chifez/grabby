import { Tabs } from "expo-router";

export default TabLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="Home"
        options={{
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="Category"
        options={{
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="Wishlist"
        options={{
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="Cart"
        options={{
          headerShown: false,
        }}
      />
      {/* <Tabs.Screen
        name="Profile"
        options={{
          headerShown: false,
        }}
      /> */}
    </Tabs>
  );
};
