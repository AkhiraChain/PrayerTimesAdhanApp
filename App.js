import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, SafeAreaView, TouchableOpacity, Button } from 'react-native';

// View --> UIView
export default function App() {

  const handlePress = () => console.log('Text pressed');
  return (
    <SafeAreaView style={styles.container}>

      <Text 
        numberOfLines={2} 
        style={styles.txt}
        onPress={handlePress}
        >
          🌙 Islamic Prayer Time 🌙
      </Text>
      <TouchableOpacity onPress={() => console.log("Image Pressedzz")}>

      
      <Image styles={styles.img} 

source={require('./assets/ll.png')}/>
</TouchableOpacity>
      <Button  
        color="#f194ff"
        title="Fajr" 
        onPress={() => console.log("Button Pressed")}/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'magenta',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    color: 'cyan',
    top: 0,
    fontSize: 36,
    fontWeight: 900,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50,
    textAlign: 'center',
  },
});
