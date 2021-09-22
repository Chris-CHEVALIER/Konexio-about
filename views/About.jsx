import React, { useState } from 'react'
import { View, Text, StyleSheet, Button, Pressable } from 'react-native'
import AboutModal from '../components/AboutModal';

export default function About({history}) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    return (
        <Pressable onPress={() => setIsModalVisible(true)}>
            <View style={styles.container}>
                <Text style={styles.author}>{firstName.length > 0 ? firstName : "Chris"} {lastName.length > 0 ? firstName : "Chevalier"}</Text>
                <Text style={styles.description}>Développeur web et mobile indépendant</Text>
                <Button title="Retour" onPress={() => history.goBack()}  />
                {isModalVisible && (
                    <AboutModal
                        isVisible={isModalVisible}
                        onClose={() => setIsModalVisible(false)}
                        firstName={firstName}
                        setFirstName={setFirstName}
                        lastName={lastName}
                        setLastName={setLastName}
                    />
                )}
            </View>
        </Pressable>

    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
    },
    author: {
        fontSize: 24,
        color: "seagreen"
    },
    description: {
        fontSize: 20,
        color: "dodgerblue",
        textAlign: "center"
    }
});