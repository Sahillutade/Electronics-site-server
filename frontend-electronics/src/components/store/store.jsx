import { configureStore } from "@reduxjs/toolkit";
import productSlicer from "../slicers/product-slicer";

export default configureStore({
    reducer: {
        wishlist: productSlicer
    } 
});