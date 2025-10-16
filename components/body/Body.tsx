import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import SuggestedCard from "../sugg/SuggestedCard";
import ListItem from "../list/ListItem";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import {
  SuggestedCard as SuggestedCardType,
  SharedItem,
} from "../../types/cardtyps";

const suggestedData: SuggestedCardType = {
  id: "1",
  ownerName: "Francisco de Paula...",
  mainTitle: "Juegos olimpicos",
  subtitle: "Torneo relampago",
};

const sharedItems: SharedItem[] = [
  {
    id: "1",
    title: "Sustituciones 20230...",
    subtitle: "David · 14:05",
    avatarText: "D",
    avatarColor: "#FF9800",
  },
  {
    id: "2",
    title: "Sustituciones 20230...",
    subtitle: "Salesianos La Cuesta · 21",
    iconName: "link",
    avatarColor: "#90A4AE",
  },
  {
    id: "3",
    title: "Relación de material ...",
    subtitle: "ERNESTO",
    avatarText: "W",
    avatarColor: "#3F51B5",
  },
];

export default function Body() {
  return (
    <ScrollView contentContainerStyle={styles.content}>
      <Text style={[styles.sectionTitle, { marginTop: 8 }]}>Suggested</Text>
      <SuggestedCard data={suggestedData} />

      <View style={styles.rowHeader}>
        <Text style={styles.sectionTitle}>Date shared</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <MaterialIcons
            name="keyboard-arrow-down"
            size={22}
            color="#B0BEC5"
            style={{ marginRight: 12 }}
          />
          <View
            style={{
              width: 34,
              height: 34,
              borderRadius: 6,
              backgroundColor: "#2A2A2A",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MaterialCommunityIcons
              name="view-grid-outline"
              size={18}
              color="#CFD8DC"
            />
          </View>
        </View>
      </View>

      {sharedItems.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: { padding: 16 },
  sectionTitle: { color: "#B0BEC5", fontSize: 16, marginBottom: 12 },
  rowHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
});
