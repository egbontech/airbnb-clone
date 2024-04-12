import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { defaultStyles } from "@/constants/Styles";
import Colors from "@/constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  AntDesign,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { router } from "expo-router";

export default function InboxScreen() {
  
  return (
    <SafeAreaView style={[defaultStyles.container]}>
      <View style={[defaultStyles.header]}>
        <SimpleLineIcons
          name="arrow-left"
          style={[defaultStyles.btnIcon]}
          size={18}
          onPress={() => router.back()}
        />
        <Text style={[defaultStyles.headerText]}>Log in or Sign up</Text>
      </View>
      <View style={styles.container}>
        <StatusBar style="dark" />
        <TextInput
          placeholder="Email"
          style={[
            defaultStyles.inputField,
            { fontFamily: "PoppinsRegular", marginBottom: 20 },
          ]}
          selectionColor={Colors.primary}
        />
        <Pressable style={[defaultStyles.btn]}>
          <Text style={[defaultStyles.btnText]}>Continue</Text>
        </Pressable>
        <View style={[defaultStyles.seperatorView]}>
          <View style={styles.line}></View>
          <Text style={{ fontFamily: "PoppinsRegular" }}>or</Text>
          <View style={styles.line}></View>
        </View>
        <View style={{ gap: 20 }}>
          <TouchableOpacity style={styles.btnnOutline}>
            <FontAwesome
              name="google"
              style={[defaultStyles.btnIcon]}
              size={18}
            />
            <Text style={styles.btnOutlineText}>Continue with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnnOutline}>
            <AntDesign
              name="facebook-square"
              style={[defaultStyles.btnIcon]}
              size={18}
            />
            <Text style={styles.btnOutlineText}>Continue with Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnnOutline}>
            <Ionicons
              name="logo-apple"
              style={[defaultStyles.btnIcon]}
              size={20}
            />
            <Text style={styles.btnOutlineText}>Continue with Apple</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnnOutline}>
            <MaterialCommunityIcons
              name="email-outline"
              style={[defaultStyles.btnIcon]}
              size={18}
            />
            <Text style={styles.btnOutlineText}>Continue with Email</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 26,
  },
  line: {
    borderBottomColor: "#ccc",
    borderBottomWidth: StyleSheet.hairlineWidth,
    flex: 1,
  },
  btnnOutline: {
    justifyContent: "center",
    alignItems: "center",
    borderColor: "rgba(0,0,0,0.3)",
    borderWidth: 1,
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 8,
    flexDirection: "row",
  },
  btnOutlineText: {
    fontFamily: "PoppinsSemiBold",
  },
});
