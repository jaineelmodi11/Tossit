import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useAuthentication } from '../utils/hooks/useAuthentication';
import { Button, Tab } from 'react-native-elements';
import { getAuth, signOut } from 'firebase/auth';
import { useFocusEffect } from '@react-navigation/native';
import {setDoc, doc, getDoc, onSnapshot, Timestamp,} from 'firebase/firestore'; 
import { db } from '../config/firebase';
import { Dimensions } from 'react-native';


import {
  PieChart,LineChart,
} from "react-native-chart-kit";

export default function HomeScreen() {

  const [pieData, setPieData] = useState([0,0,0]);
  const [lineData, setLineData] = useState({});
  const [timeStamp, setTimeStamp] = useState('');
  const [changed, setChanged] = useState(0);
  
  const screenWidth = Dimensions.get("window").width;

  useFocusEffect(
    React.useCallback(() => {

      // alert('Screen was focused');

      return () => {
        // alert('Screen was unfocused');
        // Useful for cleanup functions
      };
    }, [])
  );

  

  useEffect(()=>{
    const userTemp = getAuth().currentUser;
    const unsub = onSnapshot(doc(db, "users", userTemp.uid), (doc) => {
      
      if (doc.data()['Timestamp'] != timeStamp){
        setTimeStamp(doc.data()['Timestamp'])
      }
    });

    getData();
    //console.log("fetching-data")
    // console.log(pieDataObject)
  },[])

  function Last7Days () {
      var result = [];
      for (var i=6; i>=0; i--) {
        var d = new Date();
        d.setDate(d.getDate() - i);
        result.push( d.toLocaleString().split(' ')[0].slice(0,-1) )
    }

    return(result);
  }
  let label = Last7Days();

  let recycleLineData = []
  let garbageLineData = []
  let compostLineData = []


  label.forEach(l => {
    if (l in lineData){
      //console.log(l + "true")
      recycleLineData.push(lineData[l]['Recycling']);
      garbageLineData.push(lineData[l]['Garbage']);
      compostLineData.push(lineData[l]['Organic']);
    }
    else {
      //console.log(l + "false")
      recycleLineData.push(0);
      garbageLineData.push(0);
      compostLineData.push(0);
    }
  })


  label.forEach((element, index) => {label[index] = element.slice(0,-5)});

  const getData = async () => {
    const userTemp = getAuth().currentUser;
    await getDoc(doc(db, "users", userTemp.uid)).then((docSnap) =>{
      let garbage = docSnap.data()['Garbage']
      let recycling = docSnap.data()['Recycling']
      let organic = docSnap.data()['Organic']
      
      setPieData([garbage, recycling, organic])

      if ('linegraph' in docSnap.data()) {
        setLineData(docSnap.data()['linegraph']);
      }
      else {
        setLineData({});
      }

  });
  };


  const dataPie = [
    {
      name: "Garbage",
      population: pieData[0],
      color: "#808080",
      legendFontColor: "black",
      legendFontSize: 15
    },
    {
      name: "Recycling",
      population: pieData[1],
      color: "#ADD8E6",
      legendFontColor: "black",
      legendFontSize: 15
    },
    {
      name: "Compost", 
      population: pieData[2],
      color: "#013220",
      legendFontColor: "black",
      legendFontSize: 15
    }
  ];

  const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientTo: '#08130D',
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2 // optional, default 3
  }


  
  return (
    <View>
      

      {/*<PieChart
        data={dataPie}
        width={screenWidth}
        height={220}
        chartConfig={chartConfig}
        accessor={"population"}
        backgroundColor="transparent"
        paddingLeft={"15"}
        //center={[10, 50]}
        style={{
          marginVertical: 8,
          borderRadius: 16
        }}
      />
      
      <LineChart
        data={{
          labels: label,
          datasets: [
            {
              data: recycleLineData,
              color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
              strokeWidth: 2 // optional
            },
            {
              data: garbageLineData,
              color: (opacity = 1) => `rgba(0, 255, 0, ${opacity})`, // optional
              strokeWidth: 2 // optional
            },
            {
              data: compostLineData,
              color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`, // optional
              strokeWidth: 2 // optional
            },
          ],
          legend: ["Recycling", "Garbage", "Compost"]
        }}
        width={screenWidth - 10} // from react-native
        height={220}
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={chartConfig}
        //bezier   only for curved line
        style={{
          marginVertical: 8,
          justifyContent: "center",
          marginLeft: 10,
          marginRight: 10,
          borderRadius: 16
        }}
      />*/}

        
    

    </View>
  );
}
