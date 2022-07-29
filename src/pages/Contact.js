import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import "../components/cssFiles/contact.css"
import React from 'react'

export default function Contact() {
    return (
        <div>
            <Navbar />

            <div className="contact-image">

                <div className="details-area">
                    <label for="fname">First Name:</label>
                    <input type="text" id="fname" placeholder="Enter First Name..." required />
                    <label for="lname">Last Name:</label>
                    <input type="text" id="lname" placeholder="Enter Last Name..." required />
                    <label for="email">Email:</label>
                    <input type="text" id="email" placeholder="Enter Email..." required />
                    <label for="msg">Message:</label>
                    <textarea id="msg" ></textarea>
                    <button type="submit">Submit</button>
                </div>

            </div>

            <Footer />
        </div>
    )
}
