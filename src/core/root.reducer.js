import {combineReducers} from "redux";
import galleryReducer from './gallery/gallery-reducer'
export default combineReducers({
    gallery: galleryReducer
})
