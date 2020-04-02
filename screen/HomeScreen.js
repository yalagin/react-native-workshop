import React, {useState, useEffect, useCallback} from 'react';
import {FlatList, ActivityIndicator, Button, View, Text, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import * as driversActions from '../store/actions/drivers';
import * as racingActions from '../store/actions/racing';
import Colors from "../constans/Colors";
import DriverItem from "../components/drivers/DriverItem";

export default function HomeScreen(props) {

    const [isLoading, setIsLoading] = useState(false);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [error, setError] = useState(false);
    const drivers = useSelector(state => state.drivers.drivers);
    const offset = useSelector(state => state.drivers.offset);
    const dispatch = useDispatch();

    const loadDrivers = useCallback(async () => {
        setError(null);
        setIsRefreshing(true);
        try {
            await dispatch(driversActions.fetchDrivers(offset));
        } catch (err) {
            console.log(err);
            setError(err.message);
        }
        setIsRefreshing(false);
    }, [dispatch, setIsLoading, setError, offset]);

    useEffect(() => {
        const unsubscribe = props.navigation.addListener(
            'willFocus',
            loadDrivers
        );

        return unsubscribe;
    }, [loadDrivers]);

    useEffect(() => {
        setIsLoading(true);
        loadDrivers().then(() => {
            setIsLoading(false);
        });
    }, [dispatch, loadDrivers]);

    if (error) {
        return (
            <View style={styles.centered}>
                <Text>An error occurred! </Text>
                <Button
                    title="Try again"
                    onPress={loadDrivers}
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

    if (!isLoading && drivers.length === 0) {
        return (
            <View style={styles.centered}>
                <Text>No Drivers found!</Text>
            </View>
        );
    }


    return (
        <View style={styles.flex}>
            <View>
                <FlatList
                    onRefresh={loadDrivers}
                    refreshing={isRefreshing}
                    data={drivers}
                    keyExtractor={item => item.driverId}
                    renderItem={itemData => (
                        <DriverItem
                            driverId={itemData.item.driverId}
                            permanentNumber={itemData.item.permanentNumber}
                            url={itemData.item.url}
                            givenName={itemData.item.givenName}
                            familyName={itemData.item.familyName}
                            dateOfBirth={itemData.item.dateOfBirth}
                            nationality={itemData.item.nationality}
                            onSelect={() => {
                                dispatch(racingActions.reset());
                                props.navigation.navigate("Racing", {
                                    driverId: itemData.item.driverId,
                                });
                            }}
                        >
                        </DriverItem>
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
