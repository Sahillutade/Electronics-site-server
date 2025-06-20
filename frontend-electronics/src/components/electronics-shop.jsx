import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './electronics-shop-css.css';

export function ElectronicsShop()
{

    const [product, setProduct] = useState([{id:0, name:'',src:'', price:0}]);

    function LoadallProducts(){
        axios.get(`https://electronics-site-1.onrender.com/products`)
        .then(response => {
            setProduct(response.data);
        });
    }

    useEffect(() => {
        LoadallProducts();
    },[])

    return(
        <div className="all-pro">
            <div className="all-pro-cont d-block">
                <div className="all-pro-heading">
                    <h2>ALL PRODUCTS</h2>
                </div>
                <div className="all-pro-list">
                    <div className='all-pro-txt'>
                        <span>Products</span>
                    </div>
                    <div className='all-pro-listing d-flex flex-wrap'>
                        {
                            product.map(all => 
                                <div className='sin-pro'>
                                    <div className='sin-pro-cont'>
                                        <div className='sin-pro-img'>
                                            <iframe src={all.src}></iframe>
                                        </div>
                                        <div className='sin-pro-detail'>
                                            <div className='sin-pro-price'>
                                                <span> ${all.price} </span>
                                            </div>
                                            <div className='sin-pro-title'>
                                                <Link to={`/product-detail/${all.id}`} className='link' > {all.name} </Link>
                                            </div>
                                        </div>
                                    </div>   
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}