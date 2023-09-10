import styles from './home.style'
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Text, View, FlatList, Image, TouchableOpacity } from "react-native";
import { FIREBASE_AUTH, FIREBASE_DB } from '../Firebase/firebase';
import { doc, getDoc, updateDoc, collection, query, where } from 'firebase/firestore';

const pokePath = "https://pokeapi.co/api/v2/";
const pokeQuery = "pokemon?limit=151&offset=0";

const Home = ({navigation}) => {
  const [firstGenPokemonDetails, setfirstGenPokemonDetails] = useState([]);
  const [randomNumber, setrandomNumber] = useState(Math.floor(Math.random() * 150) + 1);
  const [currentPokemon, setCurrentPokemon] = useState([]);
  const [userPokemonArray, setPokemonArray] = useState([]);

  useEffect(() => {
    setfirstGenPokemonDetails(firstGenPokemonDetails);
    setCurrentPokemon(firstGenPokemonDetails.slice(randomNumber, randomNumber + 1));
  }, [randomNumber]);

  useEffect(() => {
    const fetchFirstGenPokemons = async () => {
      const firstGenPokemonIdsResponse = await fetch(`${pokePath}${pokeQuery}`);
      const firstGenPokemonIdsBody = await firstGenPokemonIdsResponse.json();

      const firstGenPokemonDetails = await Promise.all(
        firstGenPokemonIdsBody.results.map(async (p) => {
          const pDetails = await fetch(p.url);

          return await pDetails.json();
        })
      );

      setfirstGenPokemonDetails(firstGenPokemonDetails);
      setCurrentPokemon(firstGenPokemonDetails.slice(randomNumber, randomNumber + 1));
    };

    fetchFirstGenPokemons();
  }, []);

    useEffect(() => {
      const updatePokemon = async () => {
        const user = FIREBASE_AUTH.currentUser;
        const userID = user.uid;
        
        const docRef = doc(FIREBASE_DB, 'users', userID);
        
        getDoc(docRef)
            .then((docSnapshot) => {
                if (docSnapshot.exists()) {
                    setPokemonArray(docSnapshot.data()["pokemonTeam"])
                }
            })
            await updateDoc(docRef, {
              pokemonTeam: [...new Set([...userPokemonArray, currentPokemon[0]["name"]])]
            });
      }
      updatePokemon();
  }, [currentPokemon])

  const renderPokemon = ({ item }) => {
    return (
      <View style={styles.pokemonContainer}>
        <Text style={styles.pokemonTitle}>
          {item.name.toUpperCase()}
        </Text>
        <Image
          style={styles.pokemonSprite}
          source={{
            uri: item.sprites.front_default,
          }}
        />
      </View>
    );
  };

  function refreshPage() {
    setrandomNumber(Math.floor(Math.random() * 150) + 1);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>You encountered a...</Text>
      <FlatList data={firstGenPokemonDetails.slice(randomNumber, randomNumber + 1)} renderItem={renderPokemon} />
      <StatusBar style="auto" />
      <TouchableOpacity
        onPress={refreshPage}
        style={{
            backgroundColor: '#AD40AF',
            padding: 15,
            borderRadius: 10,
            marginBottom: 150,
            marginHorizontal: 80,
            backgroundColor: "#197FF6",
        }}>
        <Text
            style={{
            textAlign: 'center',
            fontWeight: '700',
            fontSize: 16,
            color: '#fff',
            }}>
            Find New Pokemon
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default Home
