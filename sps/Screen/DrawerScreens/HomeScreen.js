
import React, {useState,useEffect} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
//import firestore from '@react-native-firebase/firestore';
import Reactotron from 'reactotron-react-native'

const HomeScreen = (props) => {
  const [todos, setTodos] = useState([]);
  // useEffect(() => {
  //   getTodos();
  // }, []);

  // const getTodos = () => {
  //   const getFromFirebase = firestore().collection("slots");
  //   getFromFirebase.onSnapshot((querySnapShot) => {
  //     const saveFirebaseTodos = [];
  //     querySnapShot.forEach((doc) => {
  //       saveFirebaseTodos.push(doc.data());
  //     });
  //     setTodos(saveFirebaseTodos);
  //   });
  // };
  const s = todos;
  Reactotron.log(s,"all")
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <View
          style={{
            flex: 1,
          }}>
          <TouchableOpacity style={{height:"30%", width : "100%", borderWidth:1, borderRadius:10, alignItems:"center", justifyContent:"center"}}
          onPress={()=> {
            props.navigation.navigate('Booking',{s})}
            }>
            <Text style={{color:"black"}}>Mall 1</Text>
          </TouchableOpacity>
          
        </View>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            color: 'grey',
          }}>
          Miniproject{'\n'}Smart parking reservation 
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;