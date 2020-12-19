import React from 'react'
import {Image, StyleSheet, Text, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {Pressable} from "react-native";
import {useDispatch} from "react-redux";
import {setImage} from "../../../../core/gallery/gallery-reducer";

export const Item = ({imageId, urls, description, authorName}) => {
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const handleImagePress = () => {
        dispatch(setImage(urls))
        navigation.navigate('Image', {id: imageId})
    }
    return (
        <View style={styles.itemsRaw}>
            <Pressable onPress={handleImagePress}>
                <Image
                    source={{uri: urls.small}}
                    style={styles.itemImage}
                />
            </Pressable>
            <Text style={styles.itemText}>{description}</Text>
            <Text style={styles.itemText}>{authorName}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    itemsRaw: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginBottom: 10,
    },
    itemText: {
        fontSize: 16,
        padding: 4
    },
    itemImage: {
        width: '100%',
        height: 200,
        resizeMode: 'cover'
    }
})
