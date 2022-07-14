import { StatusBar } from 'expo-status-bar';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import PaidScreen from './components/PaidScreen';
import Rows from './components/Rows';
import Screen from './components/Screen';

export default function App() {
  
  return (
    <ScrollView style={styles.container}>
      <StatusBar style="auto" />
       <Screen/>

      <Rows/>
      {/* <PaidScreen/> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:40,
  },
});
