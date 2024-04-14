import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from "react-native";
import React, { useState } from "react";
import { AntDesign, Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { defaultStyles } from "@/constants/Styles";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "@/constants/Colors";
import Animated, {
  FadeIn,
  FadeOut,
  SlideInDown,
} from "react-native-reanimated";
import { places } from "@/assets/data/places";

const guestsGroups = [
  {
    name: "Adults",
    text: "Ages 13 or above",
    count: 0,
  },
  {
    name: "Children",
    text: "Ages 2-12",
    count: 0,
  },
  {
    name: "Infants",
    text: "Under 2",
    count: 0,
  },
];

const AnimatedTouchableOpacity =
  Animated.createAnimatedComponent(TouchableOpacity);

export default function booking() {
  const [openCard, setOpenCard] = useState(0);
  const [selectedPlace, setSelectedPlace] = useState(0);
  const [groups, setGroups] = useState(guestsGroups);

  const onClearAll = () => {
    setOpenCard(0);
    setSelectedPlace(0);
  };

  return (
    <SafeAreaView style={defaultStyles.container}>
      {/* header */}
      <View style={[defaultStyles.header]}>
        <AntDesign
          name="closecircleo"
          style={[defaultStyles.btnIcon]}
          size={25}
          onPress={() => router.back()}
        />
        <Text style={[defaultStyles.headerText]}>Bookings</Text>
      </View>
      <ScrollView style={{ paddingBottom: 50 }}>
        {/* where */}
        <View style={styles.card}>
          {openCard != 0 && (
            <AnimatedTouchableOpacity
              onPress={() => setOpenCard(0)}
              style={styles.cardPreview}
              entering={FadeIn.duration(200)}
              exiting={FadeOut.duration(200)}
            >
              <Text style={styles.previewText}>Where</Text>
              <Text style={styles.previewdData}>I'm flexible</Text>
            </AnimatedTouchableOpacity>
          )}
          {openCard === 0 && (
            <>
              <Animated.Text style={styles.cardHeader} entering={FadeIn}>
                Where to?
              </Animated.Text>
              <Animated.View style={styles.cardBody}>
                <View style={styles.searchSection}>
                  <Ionicons
                    style={styles.searchIcon}
                    name="search"
                    size={20}
                    color="#000"
                  />
                  <TextInput
                    style={styles.inputField}
                    placeholder="Search destinations"
                    placeholderTextColor={Colors.grey}
                    selectionColor={Colors.primary}
                  />
                </View>
              </Animated.View>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  gap: 25,
                  paddingLeft: 20,
                  marginBottom: 30,
                }}
              >
                {places.map((item, index) => (
                  <TouchableOpacity
                    onPress={() => setSelectedPlace(index)}
                    key={index}
                  >
                    <Image
                      source={item.img}
                      style={
                        selectedPlace == index
                          ? styles.placeSelected
                          : styles.place
                      }
                    />
                    <Text
                      style={[
                        { fontFamily: "PoppinsRegular", paddingTop: 6 },
                        selectedPlace === index && {
                          fontFamily: "PoppinsSemiBold",
                        },
                      ]}
                    >
                      {item.title}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </>
          )}
        </View>

        {/* when */}
        <View style={styles.card}>
          {openCard != 1 && (
            <AnimatedTouchableOpacity
              onPress={() => setOpenCard(1)}
              style={styles.cardPreview}
              entering={FadeIn.duration(200)}
              exiting={FadeOut.duration(200)}
            >
              <Text style={styles.previewText}>When</Text>
              <Text style={styles.previewdData}>Any week</Text>
            </AnimatedTouchableOpacity>
          )}
          {openCard === 1 && (
            <>
              <Animated.Text style={styles.cardHeader} entering={FadeIn}>
                When is your trip?
              </Animated.Text>

              <Animated.View style={styles.cardBody}></Animated.View>
            </>
          )}
        </View>
        {/* who */}
        <View style={styles.card}>
          {openCard != 2 && (
            <AnimatedTouchableOpacity
              onPress={() => setOpenCard(2)}
              style={styles.cardPreview}
              entering={FadeIn.duration(200)}
              exiting={FadeOut.duration(200)}
            >
              <Text style={styles.previewText}>Who</Text>
              <Text style={styles.previewdData}>Add quests</Text>
            </AnimatedTouchableOpacity>
          )}
          {openCard === 2 && (
            <>
              <Animated.Text style={styles.cardHeader} entering={FadeIn}>
                Who's coming
              </Animated.Text>
              <Animated.View style={styles.cardBody}>
                {groups.map((item, index) => (
                  <View key={index} style={styles.guestItem}>
                    <View>
                      <Text
                        style={{ fontSize: 14, fontFamily: "PoppinsRegular" }}
                      >
                        {item.name}
                      </Text>
                      <Text
                        style={{
                          fontSize: 14,
                          fontFamily: "PoppinsRegular",
                          color: Colors.grey,
                        }}
                      >
                        {item.text}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        gap: 10,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <TouchableOpacity
                        onPress={() => {
                          const newGroups = [...groups];
                          if (newGroups[index].count > 0) {
                            newGroups[index].count--;
                            setGroups(newGroups);
                          }
                        }}
                      >
                        <Ionicons
                          name="remove-circle-outline"
                          size={26}
                          color={
                            groups[index].count > 0 ? Colors.grey : "#cdcdcd"
                          }
                        />
                      </TouchableOpacity>
                      <Text
                        style={{
                          fontFamily: "PoppinsRegular",
                          fontSize: 16,
                          textAlign: "center",
                          marginTop: 5,
                          minWidth: 18,
                        }}
                      >
                        {item.count}
                      </Text>
                      <TouchableOpacity
                        onPress={() => {
                          const newGroups = [...groups];
                          if (newGroups[index].count < 20) {
                            newGroups[index].count++;
                            setGroups(newGroups);
                          }
                        }}
                      >
                        <Ionicons
                          name="add-circle-outline"
                          size={26}
                          color={
                            groups[index].count < 20 ? Colors.grey : "#cdcdcd"
                          }
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                ))}
              </Animated.View>
            </>
          )}
        </View>
      </ScrollView>
      {/* footer */}
      <Animated.View
        style={defaultStyles.footer}
        entering={SlideInDown.delay(500)}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={onClearAll}>
            <Text
              style={{
                fontSize: 18,
                fontFamily: "PoppinsSemiBold",
                textDecorationLine: "underline",
              }}
            >
              Clear all
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[defaultStyles.btn, { paddingRight: 20, paddingLeft: 50 }]}
          >
            <Ionicons
              name="search-outline"
              size={24}
              style={defaultStyles.btnIcon}
              color={"#fff"}
            />
            <Text
              style={{
                fontSize: 18,
                fontFamily: "PoppinsSemiBold",
                color: "white",
                textAlign: "center",
              }}
            >
              Search
            </Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 14,
    margin: 10,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    gap: 20,
  },
  cardHeader: {
    fontFamily: "PoppinsBold",
    fontSize: 24,
    padding: 20,
  },
  cardBody: {
    paddingHorizontal: 20,
  },
  cardPreview: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },

  searchSection: {
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ABABAB",
    borderRadius: 8,
    marginBottom: 4,
  },
  searchIcon: {
    padding: 10,
  },
  inputField: {
    flex: 1,
    padding: 5,
    backgroundColor: "#fff",
    fontFamily: "PoppinsRegular",
  },
  placesContainer: {
    flexDirection: "row",
    gap: 25,
  },
  place: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  placeSelected: {
    borderColor: Colors.grey,
    borderWidth: 2,
    borderRadius: 10,
    width: 120,
    height: 120,
  },
  previewText: {
    fontFamily: "PoppinsSemiBold",
    fontSize: 14,
    color: Colors.grey,
  },
  previewdData: {
    fontFamily: "PoppinsSemiBold",
    fontSize: 14,
    color: Colors.dark,
  },

  guestItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
  },
  itemBorder: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.grey,
  },
});
