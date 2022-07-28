import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import StoreProduct from '../components/StoreProduct'


// grabs api links for us, first party api
// in order to use our api we have to call it so we can use it
import axios from "axios";


export default function Store() {

    // Think of the state as one big variable whose value you can change inside a page
    // setting your api = to the variable in that page
    // argument, function that changes argument, use this state
    const [product, setProduct] = useState([])

    // how we call api, reacts way of calling a function
    useEffect(() => {

        // 
        axios.get("http://localhost:3001/api/products")
            .then((response) => {

                // this sets our state equal to our response
                setProduct(response.data)
            })
            .catch((err) => {
                throw err;
            })
    })
    // using map through an array you need ids
    // don't use the id because ids can change in production enviornments
    return (
        <div>
            <Navbar />


            {product.map((item) => (

                <StoreProduct
                    key={item.id}
                    name={item.name}
                    price={item.price}
                    coffeeO={item.coffee_origin}
                />

            ))}


            <Footer />

        </div>
    )
}
