import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Link } from "expo-router";
import Colors from "@/constants/Colors";
import { StatusBar } from "expo-status-bar";

export default function AuthScreen() {
  return (
    <View>
      <StatusBar style="dark" />
      <Link href={"/(modals)/login"} asChild>
        <TouchableOpacity>
          <View
            style={{
              backgroundColor: Colors.primary,
              width: 100,
              height: 40,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 5,
            }}
          >
            <Text style={{ fontFamily: "PoppinsSemiBold", color: "white" }}>
              Login
            </Text>
          </View>
        </TouchableOpacity>
      </Link>
    </View>
  );
}
