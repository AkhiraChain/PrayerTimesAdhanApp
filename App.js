import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  Image, 
  SafeAreaView, 
  TouchableOpacity, 
  Alert, 
  Button,
  View,
 } from 'react-native';

 import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
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
        color="black"
        title="Fajr Time" 
        onPress={() => Alert.alert("Adhan API", "Akhira Labs team is working hard to bring the audit & test the PrayerTimes App, free from Ads!, Spyware! and Data harvesting!!", [
          { text: "Sign up for Beta", onPress: () => console.log("Beta Pressed")},
          { text: "Cancel", onPress: () => console.log("Cancel Pressed")},
        ])
        }
        />
          <Button  
        color="black"
        title="Dhurh Time" 
        onPress={() => Alert.alert("Adhan API", "Akhira Labs team is working hard to bring the audit & test the PrayerTimes App, free from Ads!, Spyware! and Data harvesting!!", [
          { text: "Sign up for Beta", onPress: () => console.log("Beta Pressed")},
          { text: "Cancel", onPress: () => console.log("Cancel Pressed")},
        ])
        }
        />
          <Button  
        color="black"
        title="Asr Time" 
        onPress={() => Alert.alert("Adhan API", "Akhira Labs team is working hard to bring the audit & test the PrayerTimes App, free from Ads!, Spyware! and Data harvesting!!", [
          { text: "Sign up for Beta", onPress: () => console.log("Beta Pressed")},
          { text: "Cancel", onPress: () => console.log("Cancel Pressed")},
        ])
        }
        />
          <Button  
        color="black"
        title="Maghrib Time" 
        onPress={() => Alert.alert("Adhan API", "Akhira Labs team is working hard to bring the audit & test the PrayerTimes App, free from Ads!, Spyware! and Data harvesting!!", [
          { text: "Sign up for Beta", onPress: () => console.log("Beta Pressed")},
          { text: "Cancel", onPress: () => console.log("Cancel Pressed")},
        ])
        }
        />
          <Button  
        color="black"
        title="Isha Time" 
        onPress={() => Alert.alert("Adhan API", "Akhira Labs team is working hard to bring the audit & test the PrayerTimes App, free from Ads!, Spyware! and Data harvesting!!", [
          { text: "Sign up for Beta", onPress: () => console.log("Beta Pressed")},
          { text: "Cancel", onPress: () => console.log("Cancel Pressed")},
        ])
        }
        />
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
    paddingTop: Platform.OS === "android" ? 20 : 0,
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
