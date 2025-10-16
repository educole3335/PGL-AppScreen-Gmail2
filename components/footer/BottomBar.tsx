import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function BottomBar(){
  return (
    <>
      <View style={styles.fabWrap}>
        <View style={styles.fab}><MaterialIcons name="add" size={30} color="#fff" /></View>
      </View>
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.bottomButton}>
          <MaterialIcons name="check-box" size={26} color="#fff" />
          <Text style={styles.bottomLabel}>Priority</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomButton}>
          <MaterialCommunityIcons name="view-grid" size={26} color="#fff" />
          <Text style={styles.bottomLabel}>Workspaces</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.bottomButton, styles.centerActive]}>
          <MaterialIcons name="people" size={28} color="#004D40" />
          <Text style={[styles.bottomLabel, {color:'#004D40'}]}>Shared</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomButton}>
          <MaterialIcons name="folder" size={26} color="#fff" />
          <Text style={styles.bottomLabel}>Files</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  fabWrap: { position: 'absolute', right: 18, bottom: 96 },
  fab: { width: 56, height: 56, borderRadius: 28, backgroundColor: '#0182C6', alignItems: 'center', justifyContent: 'center', elevation:6, shadowColor: '#000', shadowOffset:{width:0,height:3}, shadowOpacity:0.3, shadowRadius:4 },
  bottomBar: { height:72, flexDirection:'row', justifyContent:'space-around', alignItems:'center', backgroundColor:'#2f3033' },
  bottomButton: { alignItems:'center' },
  bottomLabel: { color:'#fff', fontSize:12, marginTop:4 },
  centerActive: { backgroundColor:'#fff', padding:8, borderRadius:12 }
})
