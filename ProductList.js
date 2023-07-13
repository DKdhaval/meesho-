import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from 'axios';
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { FaSearch, FaHeart, FaShoppingCart, FaAngleDown, FaCheck, FaShippingFast, FaExchangeAlt, FaPhoneVolume } from "react-icons/fa";
import { Container, Row, Col, Dropdown, Navbar, Nav } from 'react-bootstrap';
// import OwlCarousel from 'react-owl-carousel';
import { BsFillPatchCheckFill,BsTelephonePlusFill } from "react-icons/bs";
import Header from './components/Header';


function ProductList() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [search, setSearch] = useState();

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(response => {
        console.log(response.data.products);
        setProducts(response.data.products);
      })
      .catch(error => {
        console.log(error);
      });

    axios
      .get('https://dummyjson.com/products/categories')
      .then(response => {
        console.log(response.data);
        setCategory(response.data);
      })
      .catch(error => {
        console.log(error);
      });

  }, []);

  const handleClick = (c) => {
    axios
      .get(`https://dummyjson.com/products/category/${c}`)
      .then(response => {
        console.log(response.data);
        setProducts(response.data.products);
      })
      .catch(error => {
        console.log(error);
      });
  }



  return (
    <div>

      {/* Top header start */}
      <Header />


      <Container>
        <Row className='align-items-center py-3'>
          <Col lg={4} className='d-none d-lg-block'>
            <a href='#'>
              <h1 className="m-0 text-dark display-6 fw-bold"><span className="shopper border px-3 mr-1">MeeSho</span> </h1>
            </a>
          </Col>
          <Col lg={6} className='col-6 text-left'>
            <div className='input-group'>
              <input className='form-control'
                placeholder='Search' type='search'
                value={search} 
                onChange={(e) => setSearch(e.target.value)} 
              />
              <div className="input-group-append">
                <span className="input-group-text bg-transparent shopper">
                  <FaSearch />
                </span>
              </div>
            </div>
          </Col>
          <Col lg={2} className='col-6 text-right'>
            <a href="#" className="btn border">
              <i className="shopper1"><FaHeart /></i>
              <span className="badge text-dark">0</span>
            </a>
            <a href="#" className="btn border ms-1">
              <i className="shopper1"><FaShoppingCart /></i>
              <span className="badge text-dark">0</span>
            </a>
          </Col>
        </Row>
      </Container>
      {/* Top header end */}

      {/* nav section start */}
      <div className='border-top'>
        <Container>
          <Row>
            <Col lg={6} className='cate'>
              {/* <Dropdown>
                <Dropdown.Toggle className='cat_dropdown shadow-none d-flex align-items-center justify-content-between w-100' id="dropdown-basic">
                  Categories
                </Dropdown.Toggle>

                <Dropdown.Menu className='cat_list align-items-start p-0 border border-top-0 border-bottom-0 w-100'>
                  {
                    category.map((c, i) => {
                      return (
                        <h6 key={i} onClick={() => handleClick(c)}> {c} </h6>
                      );
                    })
                  }
                </Dropdown.Menu>
              </Dropdown> */}
            </Col>

            <Col lg={14}>
              <div className='navigation_bar'>
                <Navbar expand="lg">
                  <Navbar.Brand href="#home" className='d-block d-lg-none'><h1 className="m-0 display-5 font-weight-semi-bold"><span className="shopper font-weight-bold border px-3 mr-1">E</span>Shopper</h1></Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                      <Nav.Link as={Link} to="/" className="nav-item nav-link active">Home</Nav.Link>
                      <Nav.Link as={Link} to="/shop" className="nav-item nav-link">Shop</Nav.Link>
                      <Nav.Link as={Link} to="/cart" className="nav-item nav-link">Shopping Cart</Nav.Link>
                      <Nav.Link as={Link} to="/checkout" className="nav-item nav-link">Checkout</Nav.Link>
                      <Nav.Link as={Link} to="/contact" className="nav-item nav-link">Contact</Nav.Link>
                    </Nav>
                    <div class="navbar-nav ml-auto py-0">
                      {/* <a href="" class="nav-item nav-link">Login</a> */}
                      <button class="button " ><span>Login </span></button>
                      <button class="button" ><span>Register </span></button>

                      {/* <a href="" class="nav-item nav-link">Register</a> */}
                    </div>
                  </Navbar.Collapse>
                </Navbar>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* nav section end */}

      <Container>
        <Row className='pb-3'>
          <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div class="d-flex align-items-center border mb-4" style={{ padding: 30 }}>
              <h1 class="shopper m-0 mr-3 me-3"><BsFillPatchCheckFill /></h1>
              <h5 class="font-weight-semi-bold m-0">Quality Product</h5>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div class="d-flex align-items-center border mb-4" style={{ padding: 30 }}>
              <h1 class="m-0 shopper mr-2 me-3"><FaShippingFast /></h1>
              <h5 class="font-weight-semi-bold m-0">Free Shipping</h5>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div class="d-flex align-items-center border mb-4" style={{ padding: 30 }}>
              <h1 class="shopper m-0 mr-3 me-3"><FaExchangeAlt /></h1>
              <h5 class="font-weight-semi-bold m-0">14-Day Return</h5>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div class="d-flex align-items-center border mb-4" style={{ padding: 30 }}>
              <h1 class="shopper m-0 mr-3 me-3"><BsTelephonePlusFill /></h1>
              <h5 class="font-weight-semi-bold m-0">24/7 Support</h5>
            </div>
          </div>
          
        </Row>
      </Container>

      <Container>

        <div class="text-center mb-4">
          <h2 class="section-title px-5"><span class="px-2">Top Categories to choose from</span></h2>
        </div>

        <Row className='pb-3'>
          <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0">
            {/* <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100"> */}
              {/* <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span class="fs-5 d-none d-sm-inline">Menu</span>
                </a> */}
              <Dropdown>
                <Dropdown.Toggle className='cat_dropdown shadow-none d-flex align-items-center justify-content-between w-100' id="dropdown-basic">
                  Categories
                </Dropdown.Toggle>

                <Dropdown.Menu className='cat_list align-items-start p-0 border border-top-0 border-bottom-0 w-100'>
                  {
                    category.map((c, i) => {
                      return (
                        <h6 key={i} onClick={() => handleClick(c)}> {c} </h6>
                      );
                    })
                  }
                </Dropdown.Menu>
              </Dropdown>
            <div class="wrapper">
        {/* <!--Top menu --> */}
        <div class="sidebar">
           {/* <!--profile image & text--> */}
            {/* <!--menu item--> */}
        </div>

    </div>
            
              {/* <div class="dropdown pb-4">

                    <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                      <li><a class="dropdown-item" href="#">New project...</a></li>
                      <li><a class="dropdown-item" href="#">Settings</a></li>
                      <li><a class="dropdown-item" href="#">Profile</a></li>
                      <li>
                        <hr class="dropdown-divider" />
                      </li>
                      <li><a class="dropdown-item" href="#">Sign out</a></li>
                    </ul>
                  </div> */}
            {/* </div> */}
          </div>
          <Col lg={4} md={6} sm={12} className='pb-1'>
            {
              products.filter((e) => {
                if (search) {
                  return e.title.toLowerCase().includes(search);
                } else {
                  return e;
                }
              }).map((product) => {
                return (
                  <>
                    <div key={product.id} className='border'>
                      <Link to={`/products/${product.id}`} className='text-decoration-none text-dark'>
                        <div id="container">

                          <div class="product-details">

                            <h1>{product.title}</h1>
                            <span class="hint-star star">
                              <i><BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /><BsStarHalf /> <span className='text-dark'>{product.rating}</span></i>

                            </span>

                            <p class="information">"This is my Product  , here is Christmas , the most awaited day of the year.Christmas Tree is what one need the most. Here is the correct tree which will enhance your Christmas.</p>



                            <div class="control">

                              <button class="btn">
                                <span class="price">$ {product.price} </span>
                                {/* <span class="shopping-cart"><i class="fa fa-shopping-cart" aria-hidden="true"></i></span> */}
                                <span class="buy">Get now</span>
                              </button>

                            </div>

                          </div>

                          <div class="product-image">

                            <img width="150px" height='170px'className="geeks" src={product.thumbnail} alt={product.title} />



                            <div class="info">
                              <h2> Description</h2>
                              <ul>

                                <h3>{product.title}</h3>
                                <h6> $ {product.price} ( {product.discountPercentage} % off)</h6>
                                <p>FREE Delivery by Amazon</p>
                                <h5>{product.category}</h5>
                                <p>{product.description}</p>
                                <p><b>Offer : </b> {product.discountPercentage} % off</p>
                                <p><b>Price : </b> $ {product.price}</p>
                                <p className='text-warning'><b className='text-dark'>Rating : </b> <BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /><BsStarHalf /> <span className='text-dark'>{product.rating}</span></p>
                                <p><b>Stock : </b> {product.stock}</p>
                                <h6><b>Brand : </b> {product.brand}</h6>
                              </ul>
                            </div>
                          </div>

                        </div>

                        {/* <Row className='g-5'>
                          <Col className='col-6'>
                            <img width="100%" src={product.thumbnail} alt={product.title} />
                          </Col>
                          <Col className='col-6'>
                            <h5>{product.title}</h5>
                            <p className='text-warning'> <BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /><BsStarHalf /> <span className='text-dark'>{product.rating}</span></p>
                            <h6> $ {product.price} ( {product.discountPercentage} % off)</h6>
                            <p>FREE Delivery by Amazon</p>
                          </Col>
                        </Row> */}
                      </Link>
                    </div>
                  </>
                );
              })
            }
          </Col>
        </Row>
      </Container>
      <>
      
      </>
    </div>
  );
}

export default ProductList;

