import './App.css'
import { HashRouter, Link, Route, Routes } from 'react-router-dom'
import { ElectronicsHome } from './components/electronics-home'
import { ElectronicsLogin } from './components/electronics-login'
import { ElectronicsRegister } from './components/electronics-register'
import { ProductDetails } from './components/product-details'
import { ElectronicsShop } from './components/electronics-shop'
import { ElectronicsWishList } from './components/electronics-wishlist'
import { useCookies } from 'react-cookie'


function App() {

  const [cookies, , removeCookie] = useCookies(['uname']);

  function handleLogout()
  {
    removeCookie('uname');
  }
  
  return (
    <div className='container-fluid'>
      <HashRouter>
        <header>
          <div className='header-1 d-flex'>
            <div className='header-1-content'>
              <div className='contact d-flex p-0'>
                <div className='mobile me-4'>
                  <span className='bi bi-phone fs-5 me-2'></span>
                  <span className='fs-6'>+23 1234567890</span>
                </div>
                <div className='email'>
                  <span className='bi bi-envelope fs-5 me-2'></span>
                  <span className='fs-6'>abcdefg@gmail.com</span>
                </div>
              </div>
              <div className='d-flex mt-1 preferences'>
                <div className='d-flex me-5'>
                  <div className='dropdown me-3'>
                    <button className='dropdown-toggle fs-6' data-bs-toggle='dropdown'>English</button>
                    <ul className='dropdown-menu'>
                      <li className='dropdown-item'>Italian</li>
                      <li className='dropdown-item'>Spanish</li>
                      <li className='dropdown-item'>Japanese</li>
                    </ul>
                  </div>
                  <div className='dropdown'>
                    <button className='dropdown-toggle fs-6' data-bs-toggle='dropdown'>$ US Dollar </button>
                    <ul className='dropdown-menu'>
                      <li className='dropdown-item'>EUR Euro</li>
                      <li className='dropdown-item'>GBP British Pound</li>
                      <li className='dropdown-item'>JPY Japanese Yen</li>
                    </ul>
                  </div>
                </div>
                <div className='d-flex'>
                  <div className='register'><span className='bi bi-person me-1'></span><Link to={'/register'} className='register me-2 fs-6'>Register</Link></div> 
                  <Link to={'/login'} className='login fs-6'>Sign In</Link>
                </div>
              </div>
            </div>
          </div>
          <div className='header-2'>
            <div className='header-2-content d-flex'>
              <div className='web-name'>
                <span className='logo'>Electronics</span>
              </div>
              <div className='search d-flex'>
                <div className='search-area'>
                  <input type='text' className='search-box' placeholder='Search your products...'></input>
                  <div className='dropdown category'>
                    <button className='dropdown-toggle category-name' data-bs-toggle='dropdown'>Categories</button>
                    <ul className='dropdown-menu'>
                      <li className='dropdown-item'><a><span className='dropdown-item-text'>All Categories</span></a></li>
                      <li className='dropdown-item'><a><span className='dropdown-item-text'>Computers</span></a></li>
                      <li className='dropdown-item'><a><span className='dropdown-item-text'>Laptops</span></a></li>
                      <li className='dropdown-item'><a><span className='dropdown-item-text'>Cameras</span></a></li>
                      <li className='dropdown-item'><a><span className='dropdown-item-text'>Hardware</span></a></li>
                      <li className='dropdown-item'><a><span className='dropdown-item-text'>Smartphones</span></a></li>
                    </ul>
                  </div>
                  <button type='submit' className='search-button'> <span className='bi bi-search'></span> </button>
                </div>
              </div>
              <div className='user-option'>
                <div className='user-option-list d-flex'>
                  <div className='user row d-flex'>
                    <div className='col'>
                      <div className='dropdown'>
                        <button data-bs-toggle="dropdown" className='bi bi-person user-person'></button>
                        <ul className='dropdown-menu'>
                          <li className='dropdown-item'> <button onClick={handleLogout} className='dropdown-item-text logout-btn'>Logout</button> </li>
                        </ul>
                      </div>
                    </div>
                    <div className='col user-det'>
                      <span className='username'> {cookies['uname']} </span>
                    </div>
                  </div>
                  <div className='wishlist row d-flex'>
                    <div className='col'>
                      <span className='bi bi-heart'></span>
                    </div>
                    <div className='col'>
                      <span className='row wishlist-name-cont'> <Link to={'/wishlist'} className='wishlist-name'>Wishlist</Link></span>
                      <span className='wishlist-count row'>115</span>
                    </div>
                  </div>
                  <div className='cart d-flex row'>
                    <div className='col cart-cont'>
                      <span className='bi bi-handbag'></span>
                      <div className='cart-count'>
                        <span>10</span>
                      </div>
                    </div>
                    <div className='col'>
                      <span className='row cart-name'>Cart</span>
                      <span className='row cart-price'>$85</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='header-3'>
            <div className='header-3-content d-flex'>
              <div className='cat-menu'>
                <div className='cat-menu-content d-block'>
                  <div className='dropdown cat-menu-list'>
                    <button data-bs-toggle='dropdown' className='cat-menu-btn'>
                      <span className='bi bi-list'></span>
                      <span className='cat-name'>CATEGORIES</span>
                    </button>
                    <ul className='cat-list dropdown-menu'>
                      <li className='dropdown-item'>Computers & Laptops</li>
                      <li className='dropdown-item'>Cameras & Photos</li>
                      <li className='dropdown-item'> <span>Hardware</span> <span className='bi bi-chevron-right float-end'></span> </li>
                      <li className='dropdown-item'>Smartphones & Tablets</li>
                      <li className='dropdown-item'>TV & Audios</li>
                      <li className='dropdown-item'>Gadgets</li>
                      <li className='dropdown-item'>Car Electronics</li>
                      <li className='dropdown-item'>Video Games & Consoles</li>
                      <li className='dropdown-item'>Accessories</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='elec-nav'>
                <div className='elec-nav-content'>
                  <ul className='elec-nav-list d-flex list-unstyled'>
                    <li><Link to={'/'} className='home' style={{fontSize:'17px', fontWeight:'500', color:'#a3a3a3', textDecoration:'none'}}>Home</Link></li>
                    <li> <span>Super Deals</span> <span className='bi bi-chevron-down'></span> </li>
                    <li> <span>Featured Brands</span> <span className='bi bi-chevron-down'></span> </li>
                    <li> <Link to={'/shop'} className='home' style={{fontSize:'17px', fontWeight:'500', color:'#a3a3a3', textDecoration:'none'}}>Shop</Link> </li>
                    <li>Blog</li>
                    <li>Contact</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </header>
        <section>
          <Routes>
            <Route path='/' element={<ElectronicsHome />} />
            <Route path='/login' element={<ElectronicsLogin />} />
            <Route path='/register' element={<ElectronicsRegister />} />
            <Route path='/product-detail/:id' element={<ProductDetails />} />
            <Route path='/shop' element={<ElectronicsShop />} />
            <Route path='/wishlist' element={<ElectronicsWishList />} />
           </Routes>
        </section>
        <footer>
          <div className='footer-1'>
            <div  className='footer-1-content row'>
              <div className='col news-title d-flex'>
                <div className='row'>
                  <div className='col send'>
                    <span className='bi bi-send'></span>
                  </div>
                  <div className='col news-msg-content'>
                    <div className='row news-msg-txt'>
                      <span className='news-msg'>Sign up for Newsletter</span>
                    </div>
                    <div className='row news-msg-txt-2'>
                      <span className='news-msg-2'>...and receive %20 coupon for first</span>
                      <span className='news-msg-3'>shopping.</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col subscribe'>
                <div className='row'>
                  <div className='col d-flex'>
                    <div className='news-subscribe d-flex'>
                      <input type='text' placeholder='Enter Your Email Address' className='news-text' />
                      <button type='submit' className='news-subs-btn'>Subscribe</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col unsubscribe'>
                <div className='row'>
                  <span className='unsubscribe-text'>UNSUBSCRIBE</span>
                </div>
              </div>
            </div>
          </div>
          <div className='footer-2'>
            <div className='footer-2-content row'>
              <div className='col footer-con-cont'>
                <div className='row web-name'>
                  <span>Electronics</span>
                </div>
                <div className='row cont-msg'>
                  <span>Got Question? Call Us 24/7</span>
                </div>
                <div className='row contact-num'>
                  <span>+23 123 456 7890</span>
                </div>
                <div className='row address'>
                  <span>17 Princess Road, London Grester London NW18JR, UK</span>
                </div>
                <div className='row d-flex flex-row social-media'>
                  <span className='bi bi-facebook col'></span>
                  <span className='bi bi-twitter col'></span>
                  <span className='bi bi-youtube col'></span>
                  <span className='bi bi-google col'></span>
                  <span className='bi bi-vimeo col'></span>
                </div>
              </div>
              <div className='col shortcuts'>
                <div className='row shortcut-menu'>
                  <div className='col shortcut-menu-list'>
                    <div className='menu-list-heading-1'>Find it Fast</div>
                    <span className='row menu-list-text'>Computers & Laptops</span>
                    <span className='row menu-list-text'>Cameras & Photos</span>
                    <span className='row menu-list-text'>Hardware</span>
                    <span className='row menu-list-text'>Smartphones & Tablets</span>
                    <span className='row menu-list-text'>TV & Audio</span>
                    <span className='row menu-list-text'>Gadgets</span>
                    <span className='row menu-list-text'>Car Electronics</span>
                  </div>
                  <div className='col menu-list'>
                    <span className='row menu-list-text'>Video Games & Consoles</span>
                    <span className='row menu-list-text'>Accessories</span>
                    <span className='row menu-list-text'>Cameras & Photos</span>
                    <span className='row menu-list-text'>Hardware</span>
                    <span className='row menu-list-text'>Computers & Laptops</span>
                  </div>
                  <div className='col'>
                    <div className='menu-list-heading-2'>Customer Care</div>
                    <span className='row menu-list-text'>My Account</span>
                    <span className='row menu-list-text'>Order Tracking</span>
                    <span className='row menu-list-text'>Wish List</span>
                    <span className='row menu-list-text'>Customer Services</span>
                    <span className='row menu-list-text'>Returns / Exchanges</span>
                    <span className='row menu-list-text'>FAQs</span>
                    <span className='row menu-list-text'>Product Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </HashRouter>
    </div>
  )
}

export default App
