import { StatusBar } from 'expo-status-bar';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import Rows from './components/Rows';
import Screen from './components/Screen';

export default function App() {
  
  return (
    <ScrollView style={styles.container}>
      <StatusBar style="auto" />
      <Screen/>

      <Rows/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
