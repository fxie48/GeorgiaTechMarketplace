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
            
            const doc = querySnapshot.docs[0];
            setData(doc.data()['pokemonTeam'])
            console.log('displaying pokemon')
        }

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <SafeAreaView>
        <View>
            <Text>My Pokemon:</Text>
            <FlatList
            data={Object.entries(data)}
            keyExtractor={(item) => item[0]}
            renderItem={({ item }) => (
                <View>
                <Text>{item[0]}: {item[1]}</Text>
                </View>
            )}
            />
        </View>
    </SafeAreaView>
  );
};

export default Profile;
