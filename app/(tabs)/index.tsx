import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import Header from "@/components/homeScreen/Header";
import { defaultStyles } from "@/constants/Styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { useMemo } from "react";
import ListingData from "@/assets/data/listings.json";
import ListingsMap from "@/components/homeScreen/ListingsMap";
import ListingsBottomSheet from "@/components/homeScreen/ListingsBottomSheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function IndexScreen() {
  const listings = useMemo(() => ListingData as [], []);
  return (
    <SafeAreaView style={[defaultStyles.container]}>
      <GestureHandlerRootView>
        <StatusBar style="dark" />
        <Header />        
        <ListingsMap />
        <ListingsBottomSheet listings={listings} />
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
