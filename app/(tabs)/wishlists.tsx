import AuthScreen from "@/components/General/AuthScreen";
import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/Styles";
import { AntDesign } from "@expo/vector-icons";
import { Link } from "expo-router";
import { router } from "expo-router";
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function WishlistScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <AuthScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  }, 
});
