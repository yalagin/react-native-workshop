import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from "../screen/HomeScreen";
import ProfileScreen from "../screen/ProfileScreen";
import RacingScreen from "../screen/RacingScreen";

const Stack = createStackNavigator();

export default function MainNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="Profile" component={ProfileScreen}/>
                <Stack.Screen name="Racing" component={RacingScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}