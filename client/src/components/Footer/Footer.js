import './Footer.css'
import React from 'react';
import CodeQR from '../../assests/codeQR.jpg'
import GooglePlay from '../../assests/googlePlay.png'
import AppStore from '../../assests/appStore.png'

function Footer() {
  return (
    <div className='footer'>
        <div className='FooterContainer'>
            <div className='section1'>
                <p>Exclusive</p>
                <p>Subscribe</p>
                <p>Get 10% off your first order</p>
                <div className='Email_Footer'>
                    <input type="email" />
                    <p>ic</p>
                </div>
            </div>
            <div className='section2'>
                <li>Support</li>
                <li>111 Bijoy sarani, Dhaka,<br/> DH 1515, Bangladesh.</li>
                <li>exclusive@gmail.com</li>
                <li>+88015-88888-9999</li>
            </div>
            <div className='section3'>
                <li>Account</li>
                <li>My Account</li>
                <li>Login / Register</li>
                <li>Cart</li>
                <li>Wishlist</li>
                <li>Shop</li>
            </div>
            <div className='section4'>
                <li>Quick Link</li>
                <li>Privacy Policy</li>
                <li>Terms Of Use</li>
                <li>FAQ</li>
                <li>Contact</li>
            </div>
            <div className='section5'>
                <p>Download App</p>
                <p>Save $3 with App New User Only</p>
                <div>
                    <img src={CodeQR} />
                    <div>
                    <img src={GooglePlay} />
                    <img src={AppStore} />
                    </div>
                </div>
                <div>
                    <i class="bi bi-facebook"></i>
                    <i class="bi bi-twitter-x"></i>
                    <i class="bi bi-instagram"></i>
                    <i class="bi bi-linkedin"></i>
                </div>
            </div>
        </div>
        <div>
            <p>&copy</p>
            <p>Copyright Rimel 2022. All right reserved</p>
        </div>
    </div>
  )
}

export default Footer