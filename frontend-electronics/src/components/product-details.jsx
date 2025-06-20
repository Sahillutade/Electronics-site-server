import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToWishlist } from "./slicers/product-slicer";
import './product-details-css.css';
import { useCookies } from "react-cookie";

export function ProductDetails()
{

    const [cookies] = useCookies(['uname']);

    let params = useParams();
    let navigate = useNavigate();

    const dispatch = useDispatch();

    const [product, setProduct] = useState({id:0, name:'', src:'', price:0,description:'',category:''});

    function LoadProduct(){
        axios.get(`https://electronics-site-1.onrender.com/product-details/${params.id}`)
        .then(doc => {
            setProduct(doc.data);
        })
    }

    useEffect(() => {
        LoadProduct();
    },[])

    function AddtoWishListClick(product){
        if(cookies['uname']){
            dispatch(addToWishlist(product));
            navigate('/wishlist');
        }
        else{
            navigate('/login');
        }
    }

    return(
        <div className="product-specs">
            <div className="product-specs-cont d-flex">
                <div className="products-img">
                    <img src={product.src} className="products-image"></img>
                </div>
                <div className="product-de d-block">
                    <div className="product-de-cat">
                        <span> {product.category} </span>
                    </div>
                    <div className="product-de-name">
                        <span> {product.name} </span>
                    </div>
                    <div className="product-de-desc">
                        <span> {product.description} </span>
                    </div>
                    <div className="product-de-price">
                        <span> ${product.price} </span>
                    </div>
                    <div className="product-de-btn">
                        <button className="product-de-cart">Add to Cart</button>
                        <button className="product-de-wish" onClick={() => {AddtoWishListClick(product)}}> <span className="bi bi-heart-fill product-de-heart"></span> </button>
                    </div>
                </div>
            </div>
        </div>
    )
}