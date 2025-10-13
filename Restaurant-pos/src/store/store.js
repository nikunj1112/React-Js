import {configureStore} from '@reduxjs/toolkit'
import reslicereducer from '../slices/resslice'
const store=configureStore({
    reducer:{
        menu:reslicereducer,
    }
})
export default store;