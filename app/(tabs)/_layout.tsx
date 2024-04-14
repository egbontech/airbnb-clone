import React from "react";
import { Tabs, router } from "expo-router";
import Colors from "@/constants/Colors";
import {
  AntDesign,
  EvilIcons,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: Colors.primary,
        tabBarLabelStyle: {
          fontFamily: "PoppinsSemiBold",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Explore",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="wishlists"
        options={{
          title: "Wishlists",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart-outline" color={color} size={size} />
          ),
          headerLeft: () => (
            <AntDesign
              name="arrowleft"
              size={24}
              onPress={() => router.back()}
              style={{ marginLeft: 10 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="trips"
        options={{
          title: "Trips",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="airbnb" color={color} size={size} />
          ),
          headerLeft: () => (
            <AntDesign
              name="arrowleft"
              size={24}
              onPress={() => router.back()}
              style={{ marginLeft: 10 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="inbox"
        options={{
          title: "Inbox",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="message-outline"
              color={color}
              size={size}
            />
          ),
          headerLeft: () => (
            <AntDesign
              name="arrowleft"
              size={24}
              onPress={() => router.back()}
              style={{ marginLeft: 10 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <EvilIcons name="user" color={color} size={30} />
          ),
          headerLeft: () => (
            <AntDesign
              name="arrowleft"
              size={24}
              onPress={() => router.back()}
              style={{ marginLeft: 10 }}
            />
          ),
        }}
      />
    </Tabs>
  );
}
