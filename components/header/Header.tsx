import React, { useRef } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Animated,
  Pressable,
  StatusBar as RNStatusBar,
  Platform,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Header() {
  const translateY = useRef(new Animated.Value(0)).current;

  const onPressIn = () => {
    Animated.timing(translateY, {
      toValue: -4,
      duration: 120,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    Animated.timing(translateY, {
      toValue: 0,
      duration: 160,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.safeHeader}>
      <Animated.View
        style={[styles.headerContent, { transform: [{ translateY }] }]}
      >
        <View style={styles.searchBox}>
          <Pressable
            onPressIn={onPressIn}
            onPressOut={onPressOut}
            style={styles.menuIcon}
            android_ripple={{ color: "#00000011", radius: 20 }}
          >
            <MaterialIcons name="menu" size={24} color="#CFD8DC" />
          </Pressable>

          <TextInput
            placeholder="Search in Drive"
            placeholderTextColor="#90A4AE"
            style={styles.searchInput}
            underlineColorAndroid="transparent"
          />
        </View>

        <View style={styles.headerRight}>
          <Pressable
            onPressIn={onPressIn}
            onPressOut={onPressOut}
            hitSlop={6}
            android_ripple={{ color: "#00000011", radius: 20 }}
          >
            <View style={styles.profileAvatar}>
              <Text style={{ color: "#fff", fontWeight: "700" }}>A</Text>
            </View>
          </Pressable>
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({

  safeHeader: {
    backgroundColor: "#1F1F1F",
    paddingTop: Platform.OS === "android" ? RNStatusBar.currentHeight || 8 : 0,
  },
  headerContent: {
    height: 64,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  searchBox: {
    flex: 1,
    backgroundColor: "#2A2A2A",
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 28,
    marginRight: 14,
    flexDirection: "row",
    alignItems: "center",
  },
  menuIcon: {
    width: 36,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },
  searchInput: { color: "#fff", fontSize: 20, flex: 1, paddingVertical: 0 },
  headerRight: { width: 48, alignItems: "flex-end" },
  profileAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#90A4AE",
    borderWidth: 2,
    borderColor: "#263238",
    alignItems: "center",
    justifyContent: "center",
  },
});
