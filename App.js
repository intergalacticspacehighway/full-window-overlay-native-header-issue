// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet, Pressable, Alert} from 'react-native';
import {FullWindowOverlay} from 'react-native-screens';

function HomeScreen() {
  // return (
  //   <Modal visible transparent>
  //     <Pressable
  //       style={[
  //         {flex: 1, backgroundColor: 'pink', justifyContent: 'center'},
  //         StyleSheet.absoluteFill,
  //       ]}
  //       onPress={() => Alert.alert('hi from pressable')}
  //     />
  //   </Modal>
  // );

  return (
    <FullWindowOverlay style={StyleSheet.absoluteFill}>
      <Pressable
        style={[{backgroundColor: 'pink'}, StyleSheet.absoluteFill]}
        onPress={() => Alert.alert('hi')}
      />
    </FullWindowOverlay>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
