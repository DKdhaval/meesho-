import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { CiDeliveryTruck } from "react-icons/ci";
import { TbReplace } from "react-icons/tb";
import { MdOutlinePolicy } from "react-icons/md";
import axios from 'axios';

function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${id}`)
            .then(response => {
                setProduct(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    const handleImageClick = (image) => {
        setProduct({ ...product, thumbnail: image });
    };

    return (
        <div>
            <h1 className='text-center text-primary pt-4'>Product Details</h1>
            <Container>
                <Row className='g-5 m-2'>
                    <Col className='col-lg-2 col-12 order-2'>
                        <div>
                            {product.images.map((image, index) => {
                                return (
                                    <img
                                        className='mt-2'
                                        key={index}
                                        src={image}
                                        alt={`Product Image ${index}`}
                                        onClick={() => handleImageClick(image)}
                                        width={90}
                                    />
                                );
                            })}
                        </div>
                    </Col>
                    <Col className='col-lg-4 col-12 order-1 ps-0'>
                        <img width="100%" src={product.thumbnail} alt={product.title} />
                    </Col>
                    <Col className='col-lg-6 col-xs-12 order-3'>
                        <h3>{product.title}</h3>
                        <h5>{product.category}</h5>
                        <p>{product.description}</p>
                        <p><b>Offer : </b> {product.discountPercentage} % off</p>
                        <p><b>Price : </b> $ {product.price}</p>
                        <p className='text-warning'><b className='text-dark'>Rating : </b> <BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /><BsStarHalf /> <span className='text-dark'>{product.rating}</span></p>
                        <p><b>Stock : </b> {product.stock}</p>
                        <h6><b>Brand : </b> {product.brand}</h6>
                        <Row className='g-3'>
                            <div className='services mt-5 d-flex'>
                                <Col className='col-md-4'>
                                    <div className='border rounded-5 sm-w-25 text-center m-2'>
                                        <h1><CiDeliveryTruck /></h1>
                                        <p>Free Delivery</p>
                                    </div>
                                </Col>
                                <Col className='col-md-4'>
                                    <div className='border rounded-5 sm-w-25 text-center m-2'>
                                        <h1><TbReplace /></h1>
                                        <p>7 Days Replacement</p>
                                    </div>
                                </Col>
                                <Col className='col-md-4'>
                                    <div className='border rounded-5 sm-w-25 text-center m-2'>
                                        <h1><MdOutlinePolicy /></h1>
                                        <p>Warranty Policy</p>
                                    </div>
                                </Col>
                            </div>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ProductDetails;

