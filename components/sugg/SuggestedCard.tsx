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
          <Text style={styles.title}>{data.ownerName}</Text>
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
                  <Text style={styles.fileTitle}>{f.title}</Text>
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
    backgroundColor: "#2A2A2A",
    padding: 16,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: 92,
  },
  left: { flexDirection: "row", alignItems: "flex-start" },
  thumb: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#CFD8DC",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 6,
  },
  thumbInitial: { color: "#ffffff", fontWeight: "700", fontSize: 16 },
  greenIcon: {
    width: 20,
    height: 20,
    borderRadius: 4,
    backgroundColor: "#43A047",
    alignItems: "center",
    justifyContent: "center",
  },
  title: { color: "#FFFFFF", fontSize: 20, fontWeight: "700", marginTop: 4 },
  fileRow: { flexDirection: "row", alignItems: "center", marginTop: 8 },
  fileIconWrap: {
    width: 34,
    height: 34,
    borderRadius: 6,
    backgroundColor: "#2E2E2E",
    alignItems: "center",
    justifyContent: "center",
  },
  fileTitle: { color: "#ECEFF1", fontSize: 18 },
  fileSubtitle: { color: "#B0BEC5", fontSize: 12, marginTop: 2 },
  subtitle: { color: "#CFD8DC", marginLeft: 8 },
});
