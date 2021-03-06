import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from "../screen/HomeScreen";
import RacingScreen from "../screen/RacingScreen";
import * as driversActions from "../store/actions/drivers";
import * as racingActions from "../store/actions/racing";
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/UI/HeaderButton';
import {useDispatch, useSelector} from "react-redux";


export default function MainNavigation() {
    const Stack = createStackNavigator();
    const dispatch = useDispatch();
    const offset = useSelector(state => state.drivers.offset);
    const racingOffset = useSelector(state => state.racing.offset);
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} options={{
                    title: 'Home',
                    headerRight: () => (
                        <HeaderButtons HeaderButtonComponent={HeaderButton} title='Racers'>
                            <Item
                                title="left"
                                iconName="ios-arrow-dropleft-circle"
                                onPress={() => {
                                    dispatch(driversActions.reduceOffset(offset));
                                }}
                            />
                            <Item
                                title="right"
                                iconName="ios-arrow-dropright-circle"
                                onPress={() => {
                                    dispatch(driversActions.addOffset(offset));
                                }}
                            />
                        </HeaderButtons>
                    )
                }}/>
                <Stack.Screen name="Racers" component={RacingScreen}options={{
                    title: 'Racers',
                    headerRight: () => (
                        <HeaderButtons HeaderButtonComponent={HeaderButton} title='Racers'>
                            <Item
                                title="left"
                                iconName="ios-arrow-dropleft-circle"
                                onPress={() => {
                                    dispatch(racingActions.reduceOffset(racingOffset));
                                }}
                            />
                            <Item
                                title="right"
                                iconName="ios-arrow-dropright-circle"
                                onPress={() => {
                                    dispatch(racingActions.addOffset(racingOffset));
                                }}
                            />
                        </HeaderButtons>
                    )
                }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

