import {StyleSheet, Text, View, Button} from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './home.style'
import { addDoc, collection } from 'firebase/firestore'
import { FIREBASE_DB } from '../Firebase/firebase';

const Home = () => {

    useEffect(() => {
        addDoc(collection(FIREBASE_DB, 'todos'), {title: 'I am a test', done: false})

    }, []);

    return (
        <SafeAreaView>
            <View style = {styles.appBarWrapper}>
                <View style={styles.appBar}>
                    
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Home