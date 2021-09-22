import React from 'react'
import { Modal, Button, TextInput, StyleSheet } from 'react-native'

export default function AboutModal({isVisible, onClose, firstName, lastName, setFirstName, setLastName}) {
    return (
        <Modal
            visible={isVisible}
            animationType="slide"
            onRequestClose={onClose}
        >
            <TextInput
                value={firstName}
                onChangeText={setFirstName}
                placeholder="Votre prénom"
                style={styles.input}
            />
            <TextInput
                value={lastName}
                onChangeText={setLastName}
                placeholder="Votre nom"
                style={styles.input}
            />
            <Button title="Fermer" onPress={onClose} />
        </Modal>
    )
}


const styles = StyleSheet.create({
    input: {
        height: 40,
        width: "80%",
        alignSelf: "center",
        backgroundColor: "dodgerblue",
        color: "white",
        padding: 10,
        margin: 10
    }
});