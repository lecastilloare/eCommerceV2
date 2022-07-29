import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import StoreProduct from '../components/StoreProduct'
import styled from 'styled-components'


// grabs api links for us, first party api
// in order to use our api we have to call it so we can use it
import axios from "axios";

const Container = styled.div`
display: flex;
flex-wrap: wrap;
width: 100vw;
background-color: blue;
border: 1px solid red;
text-align: center;
`


export default function Store() {

    // Think of the state as one big variable whose value you can change inside a page
    // setting your api = to the variable in that page
    // argument, function that changes argument, use this state
    const [product, setProduct] = useState([])

    const fetchProducts = async () => {
        const responseBack = await axios.get("https://mysql-plant-vandal.herokuapp.com/api/products")

        console.log(responseBack.data);
        setProduct(responseBack.data)

    }

    // how we call api, reacts way of calling a function
    useEffect(() => {
        fetchProducts();
        // // 
        // axios.get("http://localhost:3001/api/products")
        //     .then((response) => {

        //         // this sets our state equal to our response
        //         console.log(response.data);
        //         setProduct(response.data)
        //     })
        //     .catch((err) => {
        //         throw err;
        //     })
        // dependicies for the use effect method
    }, [])
    // using map through an array you need ids
    // don't use the id because ids can change in production enviornments
    return (
        <>
            <Navbar />
            <Container>


                {product.map((item) => (

                    <StoreProduct
                        key={item.id}
                        image={item.product_img}
                        name={item.product_name}
                        price={item.product_price}
                        desc={item.product_desc}
                        avail={item.in_stock}
                    />

                ))}


            </Container>
            <Footer />
        </>
    )
}
