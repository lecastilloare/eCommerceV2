import React from 'react'
import styled from "styled-components"
import "./cssFiles/products.css"


const ProductBox = styled.div`
background-color: cyan;
max-width: 400px;
margin: 1em auto;
justify-self: center;

`


const PlantImage = styled.img`
width: 300px;
`


const StoreProduct = ({ id, name, price, desc, image, avail }) => (


        <ProductBox>
            <PlantImage src={image} />
            <p className='info'>{name}</p>
            <p className='info'>{price}</p>
            <p className='info'>{desc}</p>
            <p className='info'>{avail}</p>

        </ProductBox>





)

export default StoreProduct;
