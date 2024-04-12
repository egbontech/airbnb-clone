import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function InboxScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style='dark'/>
      <Text style={styles.title}>Inbox</Text>    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,   
    fontFamily:'PoppinsSemiBold'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
