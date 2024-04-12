import {
  FlatList,
  Image,
  ListRenderItem,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef } from "react";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  listings: [];
}
export default function Listings({ listings }: Props) {
  const listRef = useRef<FlatList>(null);

  const renderRow: ListRenderItem<any> = ({ item }) => (
    <Link href={`/listing/${item.id}`} style={styles.listing} asChild>
      <Pressable>
        <Image source={{ uri: item.medium_url }} style={styles.image} />
        <TouchableOpacity style={{ position: "absolute", right: 30, top: 30 }}>
          <Ionicons name="heart-outline" size={24} color="#000" />
        </TouchableOpacity>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontSize: 16, fontFamily: "PoppinsSemiBold" }}>
            {item.name}
          </Text>
          <View style={{ flexDirection: "row", gap: 4 }}>
            <Ionicons name="star" size={16} />
            <Text style={{ fontFamily: "PoppinsSemiBold" }}>
              {item.review_scores_rating / 20}
            </Text>
          </View>
        </View>
        <Text style={{ fontFamily: "PoppinsRegular" }}>{item.room_type}</Text>
        <View style={{ flexDirection: "row", gap: 4 }}>
          <Text style={{ fontFamily: "PoppinsSemiBold" }}>€ {item.price}</Text>
          <Text style={{ fontFamily: "PoppinsRegular" }}>night</Text>
        </View>
      </Pressable>
    </Link>
  );

  return (
    <View style={{ paddingBottom: 150 }}>
      <FlatList data={listings} renderItem={renderRow} ref={listRef} />
    </View>
  );
}

const styles = StyleSheet.create({
  listing: {
    padding: 16,
    gap: 10,
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 10,
    alignSelf: "center",
  },
  info: {
    textAlign: "center",
    fontFamily: "mon-sb",
    fontSize: 16,
    marginTop: 4,
  },
});
