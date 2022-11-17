// Integration of Google map in React Native using react-native-maps
// https://aboutreact.com/react-native-map-example/
// Import React
import React, { useState, useEffect } from 'react';
// Import required components
import { SafeAreaView, Text, StyleSheet, View, PermissionsAndroid, Button } from 'react-native';
// Import Map and Marker
import MapView, { Callout, Marker, circle, Circle } from 'react-native-maps';
import Geolocation from "react-native-geolocation-service";
const App = () => {
  // const [pin,setpin] = useState({latitude: 37.78825,
  //   longitude: -122.4324})
  const [number, setnumber] = useState(0);

  let arr = [
    [1, 2],
    [3, 4],
    [5, 6], [7, 8, 9],
    [10, 11, 12, 13, 14, 15]
  ];
  useEffect(() => {


    // let flatArray = [].concat(...arr);
    // console.log("call useeffect",flatArray)


  }, []);
  // create a Map and insert items and get items from map 
  const map1 = new Map(); // an empty map
  //set items in map
  map1.set('student', { name: 'revathi', age: 30 });
  console.log(map1); // Map {}
  // get items in map
  console.log(map1.get('student'))
  //check items is in map
  console.log(map1.has('student'))
  //Get the no element in map
  console.log(map1.size)

  //Removing element
  map1.delete('student')
  console.log(map1.has('student'))


  //LOOPING IN MAP
  let map2 = new Map();
  map2.set('name', 'Jack');
  map2.set('age', '27');

  let map3 = new Map();
  map3.set('name', 'jude');
  map3.set('age', '27');
  // looping through Map
  for (let [key, value] of map2) {
    console.log(key + '- ' + value);
  }
// looping through Map
map3.forEach(function(value, key) {
  console.log(key + '- ' + value)
})
//Get the key/values of map 
for (let elem of map2.entries()) {
  console.log(`${elem[0]}: ${elem[1]}`);
}









  return (
    <View style={{ flex: 1 }}>
      <Text >{number}</Text>
      <Button title='update' onPress={() => setnumber(number + 1)}></Button>

    </View>
  );

}


export default App;
