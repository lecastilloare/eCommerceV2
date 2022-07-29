import React from 'react'
import styled from "styled-components"
import "./cssFiles/products.css"


const ProductBox = styled.div`
background-color: #3E4516;
max-width: 440px;
padding-top: 40px;
padding-bottom: 10px;
margin: 1.2em auto;
justify-self: center;
border-radius: 2%;

`


const PlantImage = styled.img`
width: 240px;
border-radius: 1%;
`


const StoreProduct = ({ id, name, price, desc, image, avail }) => (


        <ProductBox>
            <PlantImage src={image} />
            <h1 className='info'>{name}</h1>
            <h2 className='price'>{price}</h2>
            <p className='script'>{desc}</p>
            <p className='info'>{avail}</p>

        </ProductBox>





)

export default StoreProduct;
