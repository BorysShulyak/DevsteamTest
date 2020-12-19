import React from 'react'
import {ActivityIndicator, StyleSheet, View} from "react-native";

export const Loader = () => {
    return (
        <View style={styles.loader}>
            <ActivityIndicator size='large' color='#0000ff'/>
        </View>
    )
}

const styles = StyleSheet.create({
    loader: {
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
