import {configureStore} from '@reduxjs/toolkit'
import cartSlice from '../features/slide/cart/Cart'
import categorySlice from '../features/slide/category'
import categoryPhoneSlice from '../features/slide/categoryPhone/catePhone'
import order from '../features/slide/order'
import productSlice from '../features/slide/product/product'
import searchSlide from '../features/slide/searchslice'
import userSlide from '../features/slide/user/userSlide'
export const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        user: userSlide.reducer,
        categoryPhone: categoryPhoneSlice.reducer,
        category: categorySlice.reducer,
        product: productSlice.reducer,
        searchProduct: searchSlide.reducer,
        order: order.reducer

    }
})