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
    backgroundColor: "#1F1F1F",
    padding: 14,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: 92,
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
  thumbInitial: { color: "#ffffff", fontWeight: "500", fontSize: 14 },
  greenIcon: {
    width: 20,
    height: 20,
    borderRadius: 4,
    backgroundColor: "#43A047",
    alignItems: "center",
    justifyContent: "center",
  },
  title: { color: "#FFFFFF", fontSize: 16, fontWeight: "500", marginTop: 2 },
  fileRow: { flexDirection: "row", alignItems: "center", marginTop: 6 },
  fileIconWrap: {
    width: 32,
    height: 32,
    borderRadius: 6,
    backgroundColor: "#43A047",
    alignItems: "center",
    justifyContent: "center",
  },
  fileTitle: { color: "#ECEFF1", fontSize: 14 },
  fileSubtitle: { color: "#90A4AE", fontSize: 12, marginTop: 1 },
  subtitle: { color: "#90A4AE", marginLeft: 8 },
});
