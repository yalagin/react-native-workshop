import {ActivityIndicator, Button, FlatList, StyleSheet, Text, View} from "react-native";
import * as React from 'react';
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useCallback} from "react";
import * as racingsAction from "../store/actions/racing";
import {useEffect} from "react";
import Colors from "../constans/Colors";
import RaceItem from "../components/racing/RaceItem";

export default function RacingScreen(props) {
    const [isLoading, setIsLoading] = useState(false);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [error, setError] = useState(false);
    const racing = useSelector(state => state.racing.racing);
    const offset = useSelector(state => state.racing.offset);
    const dispatch = useDispatch();
    console.log(offset);

    const loadRacings = useCallback(async () => {
        setError(null);
        setIsRefreshing(true);
        try {
            await dispatch(racingsAction.fetchRacing(offset, props.route.params.driverId));
        } catch (err) {
            console.log(err);
            setError(err.message);
        }
        setIsRefreshing(false);
    }, [dispatch, setIsLoading, setError, offset]);

    useEffect(() => {
        const unsubscribe = props.navigation.addListener(
            'willFocus',
            loadRacings
        );

        return unsubscribe;
    }, [loadRacings]);

    useEffect(() => {
        setIsLoading(true);
        loadRacings().then(() => {
            setIsLoading(false);
        });

    }, [dispatch, loadRacings]);

    if (error) {
        return (
            <View style={styles.centered}>
                <Text>An error occurred! </Text>
                <Button
                    title="Try again"
                    onPress={loadRacings}
                    color={Colors.primary}
                />
            </View>
        );
    }

    if (isLoading) {
        return (
            <View style={styles.centered}>
                <ActivityIndicator size="large" color={Colors.primary}/>
            </View>
        );
    }

    if (!isLoading && racing.length === 0) {
        return (
            <View style={styles.centered}>
                <Text>No Races found!</Text>
            </View>
        );
    }


    return (
        <View style={styles.flex}>
            <View>
                <FlatList
                    onRefresh={loadRacings}
                    refreshing={isRefreshing}
                    data={racing}
                    keyExtractor={item => item.date}
                    renderItem={itemData => (
                        <RaceItem
                            raceName={itemData.item.raceName}
                            season={itemData.item.season}
                            url={itemData.item.url}
                            date={itemData.item.date}
                            Results={itemData.item.Results}
                        >
                        </RaceItem>
                    )}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    centered: {flex: 1, justifyContent: 'center', alignItems: 'center'},
    flex: {flex: 1},
});