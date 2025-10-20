import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SuggestedCard as SuggestedCardType } from "../../types/cardtyps";

export default function SuggestedCard({ data }: { data: SuggestedCardType }) {
  return (
    <View style={styles.card}>
      <View style={styles.left}>
        <View style={styles.thumb}>
          <Text style={styles.thumbInitial}>
            {data.ownerName ? data.ownerName.charAt(0) : "F"}
          </Text>
        </View>
        <View style={{ marginLeft: 14 }}>
          <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
            {data.ownerName}
          </Text>
          <View style={{ marginTop: 10 }}>
            {(data.files && data.files.length > 0
              ? data.files.slice(0, 2)
              : [
                  {
                    title: data.mainTitle,
                    subtitle: "Recently edited",
                    iconName: "file-excel",
                  },
                  {
                    title: data.subtitle || "",
                    subtitle: "Recently edited",
                    iconName: "file-excel",
                  },
                ]
            ).map((f, i) => (
              <View key={i} style={styles.fileRow}>
                <View
                  style={[
                    styles.fileIconWrap,
                    f.iconName === "file-excel"
                      ? { backgroundColor: "#43A047" }
                      : {},
                  ]}
                >
                  <MaterialCommunityIcons
                    name={f.iconName || "file"}
                    size={18}
                    color="#fff"
                  />
                </View>
                <View style={{ marginLeft: 10 }}>
                  <Text style={styles.fileTitle} numberOfLines={1} ellipsizeMode="tail">
                    {f.title}
                  </Text>
                  <Text style={styles.fileSubtitle}>{f.subtitle}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </View>
      <View />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#2E2E2E",
    padding: 14,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: 110,
    width: 320,
    marginRight: 12,
    // subtle elevation to match material card in the design
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.18,
    shadowRadius: 2,
  },
  left: { flexDirection: "row", alignItems: "flex-start" },
  thumb: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#78909C",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 4,
  },
  thumbInitial: { color: "#ffffff", fontWeight: "700", fontSize: 14 },
  greenIcon: {
    width: 20,
    height: 20,
    borderRadius: 4,
    backgroundColor: "#43A047",
    alignItems: "center",
    justifyContent: "center",
  },
  title: { color: "#FFFFFF", fontSize: 16, fontWeight: "700", marginTop: 2 },
  fileRow: { flexDirection: "row", alignItems: "center", marginTop: 6 },
  fileIconWrap: {
    width: 32,
    height: 32,
    borderRadius: 6,
    backgroundColor: "#43A047",
    alignItems: "center",
    justifyContent: "center",
  },
  fileTitle: { color: "#ECEFF1", fontSize: 16 },
  fileSubtitle: { color: "#B0BEC5", fontSize: 12, marginTop: 1 },
  subtitle: { color: "#90A4AE", marginLeft: 8 },
});
