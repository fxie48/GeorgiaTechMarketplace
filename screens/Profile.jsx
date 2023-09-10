import { firebase, FirebaseError } from 'firebase/app';
import React, { useEffect, useState } from 'react';
import { Text, View, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FIREBASE_AUTH, FIREBASE_DB } from '../Firebase/firebase';
import { collection, getDoc, doc, getDocs, query, where} from 'firebase/firestore';

const Profile = () => {
  const [data, setData] = useState([]);
  const user = FIREBASE_AUTH.currentUser;

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (user) {
            const collectionRef = collection(FIREBASE_DB, 'users');
            const q = query(collectionRef, where('__name__', '==', user.uid));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                setData(doc.data()['pokemonTeam'])
              });
        }

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={{
        flexDirection: "column",
        alignItems: "center",
        flex: 1,
    }}>
      <Text
        style={{
            padding: 15,
            marginTop: 100,
            marginBottom: 15,
            flexDirection: "column",
            alignItems: "center",
            color: "#197FF6",
            fontWeight: "bold",
            fontFamily: 'Times New Roman',
            fontSize: 40
        }}>
        Pokemon Caught</Text>
      <FlatList
        data={Object.entries(data)}
        keyExtractor={(item) => item[0]}
        renderItem={({ item }) => (
          <View>
            <Text
                style={{
                    textAlign: "center",
                    fontFamily: 'Times New Roman',
                    fontSize: 20,
                    marginBottom: 5,
                    color: "#197FF6",
                }}
            >{item[1]}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Profile;
