import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import RacersScreen from "../screen/HomeScreen";

const Stack = createStackNavigator();

function MyStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Racers"
                    component={RacersScreen}
                    options={{title: 'Racers'}}
                />
                {/*<Stack.Screen name="Profile" component={Profile} />*/}
            </Stack.Navigator>
        </NavigationContainer>
    );
}