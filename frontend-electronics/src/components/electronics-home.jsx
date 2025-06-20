import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './electroics-home-css.css';

export function ElectronicsHome()
{

    const [sec, setSec] = useState(59);
    const [min, setMin] = useState(59);
    const [hrs, setHrs] = useState(47);

    let thread = useRef(null);

    var seconds = 59;
    var minutes = 59;
    var hours = 47;

    function Counter(){
        --seconds;
        if(seconds===0){
            seconds = 59;
            minutes--;
            if(minutes===0){
                minutes = 59;
                hours--;
                if(hours===0){
                    hours = 47;
                }
                setHrs(hours);
            }
            setMin(minutes);
        }
        setSec(seconds);
    }

    function TimeCounter(){
        thread.current = setInterval(Counter,1000);
    }

    const [featured, setFeatured] = useState([{id:0, name:'', src:'', price:0}]);
    const [newPro, setNewPro] = useState([{id:0, name:'', src:'', price:0}]);

    function FeaturedProducts(){
        axios.get(`https://electronics-site-1.onrender.com/featured-products`)
        .then(response => {
            setFeatured(response.data);
        });
    }

    function NewArrival(){
        axios.get(`https://electronics-site-1.onrender.com/new-products`)
        .then(response => {
            setNewPro(response.data);
        });
    }

    useEffect(() => {
        FeaturedProducts();
        NewArrival();
    },[])

    return(
        <div onLoad={TimeCounter}>
            <div className="banner">
                <div className="background-banner d-flex">
                    <div className='banner-description'>
                        <div className='banner-heading'>
                            <h1>NEW ERA OF SMARTPHONES</h1>
                        </div>
                        <div className='d-flex banner-product-price'>
                            <span className='product-op'>$530</span>
                            <span className='product-np'>$460</span>
                        </div>
                        <div className='banner-product-name'>
                            <span>Apple Iphone 6s</span>
                        </div>
                        <div className='banner-shop-now'>
                            <button className='shop-now-text'>Shop Now</button>
                        </div>
                    </div>
                    <div className='banner-product'>
                        <img src='../../public/images/banner_product.png.webp'></img>
                    </div>
                </div>
            </div>
            <div className='product'>
                <div className='product-content d-flex'>
                    <div className='card carousel slide deals' id='carouselExample'>
                        <div className='card-header d-flex'>
                            <div className='slide-heading'>
                                <span>Deals Of the Week</span>
                            </div>
                            <div className='arrow-btns d-flex'>
                                <button className='carousel-control-prev' type='button' data-bs-slide='prev' data-bs-target='#carouselExample'> <span className='carousel-control-prev-icon'></span> </button>
                                <button className='carousel-control-next' type='button' data-bs-slide='next' data-bs-target='#carouselExample'> <span className='carousel-control-next-icon'></span> </button>
                            </div>
                        </div>
                        <div className='carousel-inner'>
                            <div className='carousel-item active'>
                                <div className='card-image'>
                                    <img src='/images/deals.webp'></img>
                                </div>
                                <div className='card-body'>
                                    <div className='body-content d-block'>
                                        <div className='product-title d-block'>
                                            <div className='pro-cat'>
                                                <span className='pro-cat-txt'>Headphones</span>
                                                <span className='float-end pro-cat-price'>$300</span>
                                            </div>
                                            <div className='pro-name'>
                                                <span className='pro-txt'>Beoplay H7</span>
                                                <span className='float-end pro-price'>$225</span>
                                            </div>
                                        </div>
                                        <div className='product-avail'>
                                            <div className='product-avail-content'>
                                                <span className='pro-avail'>Available: <span>6</span> </span>
                                                <span className='float-end pro-sold'>Already Sold: <span>28</span> </span>
                                                <input type='range' min='0' max='34' value='6' className='form-range'></input>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='card-footer'>
                                    <div className='d-flex timer'>
                                        <div className='timer-content'>
                                            <span className='d-block timer-txt'>Hurry Up</span>
                                            <span className='timer-sub-txt'>Offer ends in:</span>
                                        </div>
                                        <div className='count-down'>
                                            <span className='hrs'> {hrs} </span>
                                            <span className='min'> {min} </span>
                                            <span className='sec'> {sec} </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='carousel-item'>
                                <div className='card-image'>
                                    <img src='/images/deals.webp'></img>
                                </div>
                                <div className='card-body'>
                                    <div className='body-content d-block'>
                                        <div className='product-title d-block'>
                                            <div className='pro-cat'>
                                                <span className='pro-cat-txt'>Headphones</span>
                                                <span className='float-end pro-cat-price'>$300</span>
                                            </div>
                                            <div className='pro-name'>
                                                <span className='pro-txt'>Beoplay H7</span>
                                                <span className='float-end pro-price'>$225</span>
                                            </div>
                                        </div>
                                        <div className='product-avail'>
                                            <div className='product-avail-content'>
                                                <span className='pro-avail'>Available: <span>6</span> </span>
                                                <span className='float-end pro-sold'>Already Sold: <span>28</span> </span>
                                                <input type='range' min='0' max='34' value='6' className='form-range'></input>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='card-footer'>
                                    <div className='d-flex timer'>
                                        <div className='timer-content'>
                                            <span className='d-block timer-txt'>Hurry Up</span>
                                            <span className='timer-sub-txt'>Offer ends in:</span>
                                        </div>
                                        <div className='count-down'>
                                            <span className='hrs'> {hrs} </span>
                                            <span className='min'> {min} </span>
                                            <span className='sec'> {sec} </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='product-details'>
                        <div className='product-details-content'>
                            <div className='product-details-nav d-block'>
                                <ul className='nav nav-underline'>
                                    <li className='nav-item'> <a href='#featured' data-bs-toggle='tab' className='nav-link active'> <span className='nav-text'>Featured</span> </a> </li>
                                    <li className='nav-item'> <a href='#onSale' data-bs-toggle='tab' className='nav-link'> <span className='nav-text'>On Sale</span> </a> </li>
                                    <li className='nav-item'> <a className='nav-link'> <span className='nav-text'>Best Rated</span> </a> </li>
                                </ul>
                            </div>
                            <div className='tab-content'>
                                <div className='tab-pane active d-flex' id='featured'>
                                    {
                                        featured.map(product => 
                                            <div className='featured-pro'>
                                                <div className='featured-pro-cont'>
                                                    <div className='featured-img'>
                                                         <iframe src={product.src}></iframe>
                                                    </div>
                                                    <div className='featured-img-title'>
                                                        <div className='fea-img-price'>
                                                            <span> ${product.price} </span>
                                                        </div>
                                                        <div className='featured-img-name'>
                                                            <Link to={`/product-detail/${product.id}`} className='link' > {product.name} </Link>
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
                </div>
            </div>
            <div className='laptop-carousel'>
                <div className='laptop-car-cont'>
                    <div id='LaptopCar' className='carousel slide d-block'>
                        <div className='carousel-inner'>
                            <div className='carousel-item active' data-bs-interval='10000'>
                                <div className='d-flex laptop-car-slider'>
                                    <div className='laptop-car-desc'>
                                        <span className='d-block laptop-car-cat'>Laptops</span>
                                        <span className='d-block laptop-car-title'>MacBook Air 13</span>
                                        <span className='d-block laptop-car-det'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam dolorum nihil, labore impedit distinctio</span>
                                        <button className='d-block laptop-exp'>Explore</button>
                                    </div>
                                    <div className='laptop-car-img'>
                                        <img src='/images/banner_2_product.png.webp' height='300'></img>
                                    </div>
                                </div>
                            </div>
                            <div className='carousel-item' data-bs-interval='10000'>
                                <div className='d-flex laptop-car-slider'>
                                    <div className='laptop-car-desc'>
                                        <span className='d-block laptop-car-cat'>Laptops</span>
                                        <span className='d-block laptop-car-title'>MacBook Air 13</span>
                                        <span className='d-block laptop-car-det'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam dolorum nihil, labore impedit distinctio</span>
                                        <button className='d-block laptop-exp'>Explore</button>
                                    </div>
                                    <div className='laptop-car-img'>
                                        <img src='/images/banner_2_product.png.webp' height='300'></img>
                                    </div>
                                </div>
                            </div>
                            <div className='carousel-item' data-bs-interval='10000'>
                                <div className='d-flex laptop-car-slider'>
                                    <div className='laptop-car-desc'>
                                        <span className='d-block laptop-car-cat'>Laptops</span>
                                        <span className='d-block laptop-car-title'>MacBook Air 13</span>
                                        <span className='d-block laptop-car-det'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam dolorum nihil, labore impedit distinctio</span>
                                        <button className='d-block laptop-exp'>Explore</button>
                                    </div>
                                    <div className='laptop-car-img'>
                                        <img src='/images/banner_2_product.png.webp' height='300'></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='carousel-indicators'>
                            <button type='button' data-bs-target='#LaptopCar' data-bs-slide-to='0' className='active' aria-label='Slide 1'></button>
                            <button type='button' data-bs-target='#LaptopCar' data-bs-slide-to='1' aria-label='Slide 2'></button>
                            <button type='button' data-bs-target='#LaptopCar' data-bs-slide-to='2' aria-label='Slide 3'></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='new-arrivals'>
                <div className='new-arrival-cont'>
                    <div className='new-arrival-txt'>
                        <span>Hot New Arrivals</span>
                    </div>
                    <div className='new-arrival-pro d-flex'>
                        <div className='new-arrival-pro-list d-flex flex-wrap'>
                            {
                                newPro.map(arrival => 
                                    <div className='new-pro'>
                                        <div className='new-pro-cont'>
                                            <div className='new-pro-img'>
                                                <iframe src={arrival.src}></iframe>
                                            </div>
                                            <div className='new-pro-detail'>
                                                <div className='new-pro-price'>
                                                    <span> ${arrival.price} </span>
                                                </div>
                                                <div className='new-pro-title'>
                                                    <Link to={`/product-detail/${arrival.id}`} className='link' > {arrival.name} </Link>
                                                </div>
                                            </div>
                                        </div>   
                                    </div>
                                )
                            }
                        </div>
                        <div className='mobile-pro'>
                            <div className='mobile-cont'>
                                <div className='mob-img'>
                                    <img src='/images/new_single.png.webp'></img>
                                </div>
                                <div className='mob-detail'>
                                    <div className='mob-cat'>
                                        <span>Smartphones</span>
                                    </div>
                                    <div className='mob-title'>
                                        <span className='mob-name'>LUNA Smartphone</span>
                                        <span className='mob-price float-end'>$379</span>
                                    </div>
                                    <button className='mob-btn'>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}