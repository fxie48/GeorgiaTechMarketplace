import {View, Text} from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Home, Search, Profile} from '../screens';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const homeName = 'Home';
const profileName = 'Profile';
const searchName = 'Search'

const BottomTabNavigation = () => {
    console.log("rerendering")
    return (
        <Tab.Navigator
            initialRouteName={homeName}
            screenOptions = {({route}) => ({
                tabBarHideOnKeyboard: true,
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let routeName = route.name;

                    if (routeName === homeName) {
                        iconName = focused ? "home" : "home-outline"
                    } else if (routeName === profileName) {
                        iconName = focused ? "person" : "person-outline"
                    } else {
                        iconName = "search-sharp"
                    }

                return <Ionicons name={iconName} size={size} color={color}/>
            },
                tabBarStyle: {
                    backgroundColor: 'black',
                    headerShown: false      
                }
        })}>
            
            <Tab.Screen name={homeName} component={Home} options={{headerShown: false}}/>
            <Tab.Screen name={searchName} component={Search} options={{headerShown: false}}/>
            <Tab.Screen name={profileName} component={Profile} options={{headerShown: false}}/>
        </Tab.Navigator>

    );
}


export default BottomTabNavigation