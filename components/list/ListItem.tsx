import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SharedItem } from "../../types/cardtyps";

export default function ListItem({ item }: { item: SharedItem }) {
  return (
    <View style={styles.listItem}>
      <View style={styles.left}>
        <View
          style={[
            styles.circle,
            { backgroundColor: item.avatarColor || "#78909C" },
          ]}
        >
          {item.iconName ? (
            <MaterialCommunityIcons
              name={item.iconName as any}
              size={18}
              color="#fff"
            />
          ) : (
            <Text style={styles.initial}>{item.avatarText}</Text>
          )}
        </View>
        <View style={{ marginLeft: 12 }}>
          <Text style={styles.title}>{item.title}</Text>
          {item.subtitle ? (
            <Text style={styles.subtitle}>{item.subtitle}</Text>
          ) : null}
        </View>
      </View>
      <MaterialCommunityIcons
        name="dots-vertical"
        size={20}
        color="#fff"
        style={{ opacity: 0.6 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    marginTop: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 6,
  },
  left: { flexDirection: "row", alignItems: "center" },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  initial: { color: "#fff", fontWeight: "700", fontSize: 14 },
  title: { color: "#fff", fontSize: 16, fontWeight: "600" },
  subtitle: { color: "#B0BEC5", marginTop: 2, fontSize: 12 },
});
