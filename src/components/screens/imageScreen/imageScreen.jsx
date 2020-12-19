import React from 'react'
import {View, StyleSheet, Image} from "react-native";
import {useSelector} from "react-redux";
import {getImage} from "../../../core/gallery/gallery-selector";

export const ImageScreen = () => {
    const imageUrls = useSelector(getImage)
    return (
        <View>
            <Image source={{uri: imageUrls.full}} style={styles.image}/>
        </View>

    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'cover'
    }
})
