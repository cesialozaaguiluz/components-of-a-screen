import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
  <View  style={styles.container10}>

    <View style={styles.container1}>
      <Text style={styles.innerText1}> navbar </Text>
    </View>

    <View style={styles.container2}>
      <Text style={styles.innerText2}> Image/Video </Text>
    </View>

    <View style={styles.container3}>
      <Text style={styles.innerText3}> Section 2 </Text>
    </View>

    <View style={styles.container4}>
      <Text style={styles.innerText4}> Footer </Text>
    </View>

  </View>
  );
}



const styles = StyleSheet.create({
  container1: {
    flex: .25,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },

  container2: {
    flex: 1.23,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },

  container3: {
    flex: 1.1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },

  container4: {
    flex: .43,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },

  innerText1: {
    fontWeight: 'semibold',
    fontFamily: 'serif',
    fontSize: 25
  },

  innerText2: {
    fontWeight: 'semibold',
    fontFamily: 'serif',
    fontSize: 45,
    color: 'orange'
  },

  innerText3: {
    fontWeight: 'semibold',
    fontFamily: 'serif',
    fontSize: 27,
    color: 'white'
  },

  innerText4: {
    fontWeight: 'semibold',
    fontFamily: 'serif',
    fontSize: 27
  },

  container10: {
    flex: 1,
  },
});
