import {
    SafeAreaView,
    View,
    Text,
    TextInput,
    TouchableOpacity,
  } from 'react-native';
  import React, { useState } from 'react'
import { FIREBASE_AUTH, FIREBASE_DB } from '../Firebase/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc, doc, setDoc } from 'firebase/firestore';
import firebase from "firebase/app"

const LoginScreen = ({navigation}) => {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[loading, setLoading] = useState('');
    const auth = FIREBASE_AUTH;

    const signIn = async() => {
        setLoading(true);
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            navigation.navigate("Bottom Navigation");
            // alert(response.toString());
        } catch (error){
            console.log(error);
            alert("Sign in failed!");
        } finally {
            setLoading(false);
        }
        // navigation.navigate("Bottom Navigation");
    }

    const signUp = async() => {
        setLoading(true);
            createUserWithEmailAndPassword(auth, email, password).then(userCredential => {
                var userID = userCredential.user.uid;
                setEmail(email);
                writeUserData(userID);
            })
            .catch(error => {
                console.log(error);
            alert("Registration failed!");
            })
        setLoading(false);
    }

    const writeUserData = async (userID) => {
        //const uid = user.uid;
        const data = {
            email: email,
            pokemonTeam: []
        }
        const collectionRef = doc(FIREBASE_DB, 'users', userID);
        setDoc(collectionRef, data)
          .then((docRef) => {
            console.log('Document written with ID: ', userID);
          })
          .catch((error) => {
            console.error('Error adding document: ', error);
          });
    }

    return (
        <View>
            <View>
            <Text
                style={{
                    // fontFamily: 'Roboto-Medium',
                    fontSize: 28,
                    fontWeight: '500',
                    color: '#333',
                    marginBottom: 30,
                }}>
                Login
            </Text>
            </View>

            <View style = {{
                flexDirection: 'row', 
                borderBottomColor:'#ccc', 
                borderBottomWidth:1,
                paddingBottom: 8,
                marginBottom: 25}}>
                <TextInput
                    placeholder="email"
                    keyboardType="email-address"
                    // autoCapitalize={false}
                    onChangeText= {(text) => setEmail(text)}

                />
            </View>
            <View style = {{
                flexDirection: 'row', 
                borderBottomColor:'#ccc', 
                borderBottomWidth:1,
                paddingBottom: 8,
                marginBottom: 8}}>
                <TextInput
                    placeholder="password"
                    secureTextEntry={true}
                    // autoCapitalize = {false}
                    onChangeText= {(text) => setPassword(text)}
                />
            </View>
            
            <TouchableOpacity
                onPress={signIn}
                style={{
                    backgroundColor: '#AD40AF',
                    padding: 20,
                    borderRadius: 10,
                    marginBottom: 30,
                }}>
                <Text
                    style={{
                    textAlign: 'center',
                    fontWeight: '700',
                    fontSize: 16,
                    color: '#fff',
                    }}>
                    Login
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={signUp}
                style={{
                    backgroundColor: '#AD40AF',
                    padding: 20,
                    borderRadius: 10,
                    marginBottom: 30,
                }}>
                <Text
                    style={{
                    textAlign: 'center',
                    fontWeight: '700',
                    fontSize: 16,
                    color: '#fff',
                    }}>
                    Register
                </Text>
            </TouchableOpacity>


        </View>
    )
}

export default LoginScreen

// const styles = StyleSheet.create({})