import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, Linking} from 'react-native';

import Card from '../UI/Card';
import Colors from "../../constans/Colors";

const RaceItem = props => {
    return (
        <Card style={styles.raceItem}>
            <View style={styles.summary}>
                <Text style={styles.item}>Name: {props.raceName}</Text>
                <Text style={styles.item}>season: {props.season}</Text>
                <Text style={styles.link} numberOfLines={3} onPress={()=>{Linking.openURL(props.url)}}>{props.url}</Text>
                <Text style={styles.item}> date:  {props.date}</Text>
                <Text style={styles.item}>number : {props.Results.number}</Text>
            </View>
        </Card>
    );
};

const styles = StyleSheet.create({
    raceItem: {
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

export default RaceItem;
