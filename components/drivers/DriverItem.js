import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, Linking} from 'react-native';

import Card from '../UI/Card';
import Colors from "../../constans/Colors";

const DriverItem = props => {
    const [showDetails, setShowDetails] = useState(false);

    const hidden = <><Text style={styles.item}>Family name: {props.familyName}</Text>
        <Text style={styles.link} numberOfLines={3} onPress={() => {
            Linking.openURL(props.url)
        }}>{props.url}</Text>
        <Text style={styles.item}>{props.dateOfBirth}</Text>
        <Text style={styles.item}>{props.nationality}</Text>
        <Text style={styles.item}>{props.permanentNumber}</Text><Button
            color={Colors.primary}
            title={'Show Details'}
            onPress={() => {
                props.onSelect();
            }}
        /></>;

    return (
        <Card style={styles.driverItem}>
            <View style={styles.summary}>
                <Text style={styles.item} onPress={() => {
                    setShowDetails(prevState => !prevState);
                }}>Name: {props.givenName}</Text>
                {showDetails && (hidden)}
            </View>

        </Card>
    );
};

const styles = StyleSheet.create({
    driverItem: {
        margin: 20,
        padding: 10,
        alignItems: 'center'
    },
    summary: {
        // flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        width: '100%',
        marginBottom: 15
    },
    item: {
        fontSize: 16,
        color: Colors.gray
    },
    link: {
        fontSize: 16,
        color: Colors.blue
    },

});

export default DriverItem;
