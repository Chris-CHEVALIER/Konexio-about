import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function Home({history}) {
    return (
        <View>
            <Text style={styles.welcomeMessage}>Bienvenue sur mon application mobile !</Text>
            <Button title="À propos" onPress={() => history.push("/about")} />
        </View>
    )
}

const styles = StyleSheet.create({
    welcomeMessage: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 16,
        color: "dodgerblue"
    } 
});