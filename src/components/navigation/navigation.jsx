import React from 'react'
import {createStackNavigator} from "@react-navigation/stack";
import {Gallery} from "../screens/gallery/gallery";
import {ImageScreen} from "../screens/imageScreen/imageScreen";

const Stack = createStackNavigator();

export const Navigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Gallery" component={Gallery} />
            <Stack.Screen name="Image" component={ImageScreen}/>
        </Stack.Navigator>
    );
}
