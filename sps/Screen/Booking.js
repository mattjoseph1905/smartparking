// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import Reactotron from 'reactotron-react-native'
import database from '@react-native-firebase/database';
import { firebase } from '@react-native-firebase/database';




const Booking = (props) => {
  const [todos, setTodos] = useState([]);
  const [isoccupied, setisoccupied] = useState(false);
  const rec = props.route.params;
  const slot = rec.s;




  useEffect(() => {
    getTodos()
  }, []);

  const reference = firebase
    .app()
    .database('https://minisms-bbf59-default-rtdb.europe-west1.firebasedatabase.app')
    .ref('/test/slot');
  const getTodos = () => {

    reference.on('value', snapshot => {
      const data = snapshot.val();
      setTodos(data);
      Reactotron.log("hf", data)
    })


  }


  const check1 = () => {
    Reactotron.log("worked!!")
    slot1 == 1 ?
      reference.update({
        ir1: 0,
      })
        .then(() => console.log('Data updated.'))
      :
      reference.update({
          ir1: 1,
        })
        .then(() => console.log('Data updated.'))
  }
  const check2 = () => {
    Reactotron.log("worked!!")
    slot2 == 1 ?
      reference.update({
        ir2: 0,
      })
        .then(() => console.log('Data updated.'))
      :
      reference.update({
          ir2: 1,
        })
        .then(() => console.log('Data updated.'))
  }
  const check3 = () => {
    Reactotron.log("worked!!")
    slot3 == 1 ?
      reference.update({
        ir3: 0,
      })
        .then(() => console.log('Data updated.'))
      :
      reference.update({
          ir3: 1,
        })
        .then(() => console.log('Data updated.'))
  }
  const userdata = todos;
  const slot1 = userdata.ir1;
  const slot2 = userdata.ir2;
  const slot3 = userdata.ir3;

  Reactotron.log(userdata, "new")

  return (
    <SafeAreaView style={{ flex: 1 }}>

      <View style={{ flex: 1, padding: 16, width: "100%", height: "100%", }}>

        {slot1 == 1 ?
          <TouchableOpacity style={{ height: 70, width: "100%", borderRadius: 10, alignItems: "center", justifyContent: "center", marginTop: "10%", backgroundColor: "green", elevation: 5 }}
            onPress={() => check1()}>
            <Text style={{ color: "white", fontSize: 18 }}> slot1</Text>
          </TouchableOpacity>
          :
          <TouchableOpacity style={{ height: 70, width: "100%", borderRadius: 10, alignItems: "center", justifyContent: "center", marginTop: "10%", backgroundColor: "red", elevation: 5 }}
            >
            <Text style={{ color: "white", fontSize: 18 }}> slot1</Text>
          </TouchableOpacity>
        }
        {slot2 == 1 ?
          <TouchableOpacity style={{ height: 70, width: "100%", borderRadius: 10, alignItems: "center", justifyContent: "center", marginTop: "10%", backgroundColor: "green", elevation: 5 }}
            onPress={() => check2()}>
            <Text style={{ color: "white", fontSize: 18 }}> slot2</Text>
          </TouchableOpacity>
          :
          <TouchableOpacity style={{ height: 70, width: "100%", borderRadius: 10, alignItems: "center", justifyContent: "center", marginTop: "10%", backgroundColor: "red", elevation: 5 }}
            >
            <Text style={{ color: "white", fontSize: 18 }}> slot2 </Text>
          </TouchableOpacity>
        }
        {slot3 == 1 ?
          <TouchableOpacity style={{ height: 70, width: "100%", borderRadius: 10, alignItems: "center", justifyContent: "center", marginTop: "10%", backgroundColor: "green", elevation: 5 }}
            onPress={() => check3()}>
            <Text style={{ color: "white", fontSize: 18 }}> slot3</Text>
          </TouchableOpacity>
          :
          <TouchableOpacity style={{ height: 70, width: "100%", borderRadius: 10, alignItems: "center", justifyContent: "center", marginTop: "10%", backgroundColor: "red", elevation: 5 }}
            >
            <Text style={{ color: "white", fontSize: 18 }}> slot3 </Text>
          </TouchableOpacity>
        }

        <TouchableOpacity style={{ height: 50, width: "100%", borderRadius: 10, alignItems: "center", justifyContent: "center", marginTop: "10%", backgroundColor: "#307ecc" }}
        onPress={() =>     alert('Your Slot is BOOKED!')      }>
          <Text style={{ color: "white" }}> BOOK</Text>
        </TouchableOpacity>
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

export default Booking