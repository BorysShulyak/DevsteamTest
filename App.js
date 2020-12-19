import React from 'react';
import {Provider} from "react-redux";
import {NavigationContainer} from "@react-navigation/native";
import {Navigation} from "./src/components/navigation/navigation";
import store from "./src/core/store";

export default function App() {
  return (
      <Provider store={store}>
        <NavigationContainer>
          <Navigation/>
        </NavigationContainer>
      </Provider>
  );
}
