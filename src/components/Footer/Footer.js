
import React from 'react';
import './Footer.css';
import nuralam from '../Img/nuralam.jpg';

const Footer = () => {
    return (
        <div>

            <footer>
                <div class="main-content">
                    <div class="left box">
                        <h2>আমাদের সম্পর্কে</h2>
                        <div class="content">
                            <div className="row">
                                <div className="col-4">
                                    <img className="nuralam" src={nuralam} alt="..."/>
                                </div>
                                <div className="col-8">
                                    <p>  
                                         <h4 className="tex">নূর আলম শেখ </h4>
                                         দেশসেরা উ‍দ্যোক্তা, 
                                         খান্দারপাড়া ইউনিয়ন ডিজিটাল সেন্টার, 
                                         মুকসুদপুর, গোপালগঞ্জ,
                                    </p>
                                </div>
                            </div>
                            <div class="social">
                                <a target="blank" href="https://www.facebook.com/nuralamshaikh1995"><span class="fab fa-facebook-f"></span></a>
                                <a target="blank" href="https://www.facebook.com/nuralamshaikh1995"><span class="fab fa-twitter"></span></a>
                                <a target="blank" href="https://www.facebook.com/nuralamshaikh1995"><span class="fab fa-instagram"></span></a>
                                <a target="blank" href="https://www.facebook.com/nuralamshaikh1995"><span class="fab fa-youtube"></span></a>
                            </div>
                         </div>
                    </div>
                    <div class="center box">
                        <h2>ঠিকানা</h2>
                        <div class="content">
                            <div class="place">
                            <span class="fas fa-map-marker-alt"></span>
                            <span class="text">খান্দারপাড়া, মুকসুদপুর, গোপালগঞ্জ</span>
                            </div>
                            <div class="phone">
                            <span class="fas fa-phone-alt"></span>
                            <span class="text">+880-1712325360</span>
                            </div>
                            <div class="email">
                            <span class="fas fa-envelope"></span>
                            <span class="text">khandarparaudc@gmail.com</span>
                            </div>
                        </div>
                    </div>
                        <div class="right box">
                            <h2>যোগাযোগ করুন</h2>
                            <div class="content">
                                <form action="#">
                                    <div class="email">
                                        <div class="text">Email *</div>
                                        <input type="email" required/>
                                    </div>
                                    <div class="msg">
                                        <div class="text">Message *</div>
                                        <textarea rows="2" cols="25" required></textarea>
                                    </div>
                                    <div class="btn">
                                        <button type="submit">Send</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="bottom">
                        <center>
                        <span class="credit">Created By <a target="blank" href="https://www.facebook.com/nuralamshaikh1995">Nur Alam Sheikh</a> | </span>
                        <span class="far fa-copyright"></span><span> <strong>KUAL</strong> 2021 All rights reserved.</span>
                        </center>
                    </div>
            </footer>

        </div>
    );
};

export default Footer;