import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {FlatList, StyleSheet} from "react-native";
import {requestImages} from "../../../core/gallery/gallery-reducer";
import {getCurrentPage, getImagesInfo, getLoading} from "../../../core/gallery/gallery-selector";
import {Loader} from "../../common/loader/loader";
import {Item} from "./Item/item";

const renderFooter = () => {
    const isLoading = useSelector(getLoading)
    return (
        isLoading && <Loader/>
    )
}

const renderRaw = ({item}) => {
    return (
        <Item
            imageId={item.id}
            authorName={item.user.name}
            description={item.alt_description}
            urls={item.urls}
        />
    )
}

export const Gallery = () => {
    const dispatch = useDispatch()
    const images = useSelector(getImagesInfo)
    console.log(images.length)
    const currentPage = useSelector(getCurrentPage)

    const handleLoadMore = () => {
        dispatch(requestImages(currentPage + 1))
    }

    useEffect(() => {
        dispatch(requestImages(1))
    }, [])

    return (
        <FlatList
            style={styles.container}
            data={images}
            renderItem={renderRaw}
            keyExtractor={(item, index) => index.toString()}
            onEndReached={handleLoadMore}
            ListFooterComponent={renderFooter}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        backgroundColor: '#f5fcff'
    }
})
