import {getImages} from "../../api/api";

const SET_CURRENT_PAGE = 'GALLERY/SET_CURRENT_PAGE'
const SET_IMAGES_INFO ='GALLERY/SET_IMAGES_INFO'
const SET_IMAGE = 'GALLERY/SET_IMAGE'
const SET_LOADING ='GALLERY/SET_LOADING'
const SET_ERROR ='GALLERY/SET_ERROR'

export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, payload: currentPage})
export const setImagesInfo = (images) => ({type: SET_IMAGES_INFO, payload: images})
export const setImage = (imageUrls) => ({type: SET_IMAGE, payload: imageUrls})
export const setLoading = (isLoading) => ({type: SET_LOADING, payload: isLoading})
export const setError = (error) => ({type: SET_ERROR, payload: error})

const initialState = {
    currentPage: 0,
    images: [],
    imageUrls: {},
    isLoading: false,
    error: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload
            }
        case SET_IMAGE:
            return {
                ...state,
                imageUrls: action.payload
            }
        case SET_IMAGES_INFO:
            return {
                ...state,
                images: state.images.concat(action.payload)
            }
        case SET_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        case SET_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}

export const requestImages = (page = 1) => async (dispatch) => {
    dispatch(setLoading(true))
    dispatch(setCurrentPage(page))
    try {
        const data = await getImages(page)
        dispatch(setImagesInfo(data))
        dispatch(setLoading(false))
        dispatch(setError(null))
    }
    catch (error) {
        dispatch(setError(error))
    }
}
